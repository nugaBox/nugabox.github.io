---
title: "Linux Rsync 설정"
date: 2022-05-05 06:44:40 +0900
categories: [OS, Linux]
tags: [linux,rsync]
---

# rsync 사용법
rsync 명령어는 원본데이터가 있는 서버에서 백업서버로 하는 것이 아닌, **백업서버에서 원본데이터가 있는 서버로 접근**하는 방식입니다.
### 기본 명령어 파라미터
`rsync [옵션] [백업할원본의주소:경로] [백업받을경로]`
- -a : 심볼릭링크, 속성, 퍼미션, 소유권 등 보존
- -v : 진행상황을 상세하게 보여줌
- -z : 전송시 압축을 함
- -u : 새로운 파일을 덮어쓰지 않음
- --delete : 서버 쪽에 없고 클라이언트 쪽에만 있는 파일을 백업시 지움
- --progress : 진행을 %로 보여줌
- --stats : 상태 출력
- --log-file=/home/util/file.log : 로그 남기기
```bash
rsync -avPz -l -t -e ssh 계정명@원본호스트주소:원본경로/ 목적지경로

#**백업할 원본의 주소는 반드시 마지막에 슬래시(/) 붙이기**
#**SSH 기본 포트(22)가 아닐 때 : "ssh -p 포트번호" 반드시 큰따옴표 붙이기**

rsync -avPz --stats -l -t -e "ssh -p 포트번호" 계정명@원본호스트주소:원본경로/ 목적지경로
 ```

# rsync 자동 스크립트
rsync 명령어는 ssh 접속처럼 사용자의 비밀번호를 입력받은 후 작동하므로 자동화 스크립트는 콘솔 입력을 받을 수 있는 expect를 사용해야 합니다

### expect 설치
```bash
yum install expect
 ```

### 스크립트 작성
```shell
#!/usr/bin/expect
set timeout -1
log_user 0
spawn rsync -avPz -l -t -e ssh 계정명@원본호스트주소:원본경로/ 목적지경로
expect "password: "
send "계정패스워드"
log_user 1
interact
```

### 스케쥴러(crontab) 등록용 스크립트 작성
- 맨 마지막 명령어인 interact가 사용자에게 권한을 반환하는 명령어이므로 Crontab에서는 오류가 발생합니다
- 맨 마지막 interact 대신에 expect eof를 추가하여 스크립트를 작성합니다.
```bash
    #!/usr/bin/expect
    set timeout -1
    log_user 0
    spawn rsync -avPz -l -t -e ssh 계정명@원본호스트주소:원본경로/ 목적지경로
    expect "password: "
    send "계정패스워드"
    log_user 1
    expect eof
```
