---
title: "CentOS Python 환경 구축"
date: 2022-05-05 06:13:03 +0900
categories: [OS, Linux]
tags: [linux, centos, python]
---

# 설치
> CentOS 6.x에서는 repo 지원이 끊겼으므로 곧바로 컴파일 설치를 해야 합니다
{: .prompt-tip }

### 필수 패키지 설치
```bash
yum install -y openssl openssl-dev gcc gcc-c++
```
<br>
<br>

## 1. 컴파일 설치
yum과 같은 패키지 매니저를 통한 설치가 불가능한 경우 직접 파일을 다운로드 받아 컴파일 설치합니다

---

### 다운로드 및 압축 해제
⬇️ Python 다운로드 URL : [https://www.python.org/ftp/python/](https://www.python.org/ftp/python/)
```bash
wget [https://www.python.org/ftp/python/](https://www.python.org/ftp/python/)3.6.9/Python-3.6.9.tgz
tar zxvf Python-3.6.9.tgz
```

### (선택) OpenSSL이 컴파일로 설치된 경우
Configure 하기 전에 `Modules/Setup.dist` 파일을 수정해줍니다.
```bash
cd Python-3.6.9/Modules
vim Setup.dist

  # 아래와 같이 주석을 풀어준다.
  _socket socketmodule.c

  # Socket module helper for SSL support; you must comment out the other
  # socket line above, and possibly edit the SSL variable:
  SSL=/usr/local/openssl
  _ssl _ssl.c \
  -DUSE_SSL -I$(SSL)/include -I$(SSL)/include/openssl \
  -L$(SSL)/lib -lssl -lcrypto
```

### 환경 구성
```bash
cd Python-3.6.9
./configure --enable-optimizations --prefix=/usr/local/python3.6

# 위의 SSL 설정했을 시 아래 내용 추가
--with-ensurepip=yes CFLAGS="-I/usr/local/ssl/include" LDFLAGS="-L/usr/local/ssl/lib"
```

### 설치
```bash
### CPU 코어 수 확인
grep -c processor /proc/cpuinfo

make -j [코어 수]
make altinstall
```

### 버전 확인
```bash
/usr/local/python3.6/bin/python3.6 -V
```

### Alias 수정
```bash
### 설치된 위치 확인
which python3.6

### 기존 Python 링크 확인 및 수정
cd /usr/bin
ls -al | grep python
ln -s /usr/local/bin/python3.6 python
```
<br>
<br>

## 2. 패키지 설치 (yum)
yum 사용이 가능한 환경에서는 간편하게 패키지 설치합니다

---

### Repository 추가
```bash
yum install -y https://repo.ius.io/ius-release-el7.rpm
```

### 패키지 설치
```bash
yum install -y python36u python36u-libs python36u-devel python36u-pip
```

### 버전 확인
```bash
python3 -V
```
<br>
<br>

## 3. 가상환경 구성
pip(Python Index Package)는 root 디렉토리가 디폴트로 설정되어 있으므로, root 또는 sudo로 계속하여 사용하는 것은 위험합니다. 가상환경 라이브러리인 Virutalenv를 사용하여 가상 사용자의 Home 디렉토리에서 패키지를 관리하는 것이 바람직한 방법입니다.

---

### 가상환경 라이브러리 설치
```bash
pip install virtualenv
```

### 가상환경 활성화
```bash
virtualenv [사용자명]
source [사용자명]/bin/activate
```

### 가상환경에서 원하는 패키지 설치
```bash
(사용자명)# pip install 서비스
# 패키지 설치 디렉토리 : [사용자홈]/lib/python3.6/
# 패키지 실행 디렉토리 : [사용자홈]/bin/python3.6/
```

### 가상환경 비활성화
```bash
deactivate
```

## Trouble Shooting

### 세그멘테이션 오류 : Segmentaion Fault
```bash
python3 -m pip install sentencepiece
```
