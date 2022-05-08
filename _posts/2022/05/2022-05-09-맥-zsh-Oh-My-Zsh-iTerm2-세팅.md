---
title: "맥 zsh + Oh My Zsh + iTerm2 세팅"
date: 2022-05-09 01:12:00 +0900
categories: [OS, MacOS]
tags: [macos,zsh,oh-my-zsh,iterm]
---

# 설치

## 1. zsh 설치
zsh를 HomeBrew로 설치합니다.
```bash
brew install zsh
```

## 2. 설치경로 확인
```bash
which zsh
#=> /usr/bin/zsh
```

## 3. 기본 sh 변경
```bash
chsh -s $(which zsh)
```

## 4. curl 설치
```bash
brew install curl
```

## 5. oh-my-zsh 설치
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 6. iterm2 설치
```bash
brew install --cask iterm2
```

# 설정

## zsh 설정

```bash
```

## D2코딩 폰트 설치

아래 파일을 다운로드 받은 후 macOS에 폰트를 설치합니다.

- [D2Coding-Ver1.3.2-20180524-all.ttc](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82c10f3d-4b47-4d5c-a3d3-7240b4fabf7b/D2Coding-Ver1.3.2-20180524-all.ttc)


## iterm2 테마 설치
1. iterm에서 `Cmd + ,`를 누르면 설정 화면 → Profile
2. Text에서 D2코딩 폰트를 적용합니다.
3. 테마 파일 다운로드 후 압축 해제합니다.
   - [schemes.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/697c4d68-3d01-4060-993f-64d370c0b008/schemes.zip)
4. Colors → Color Presets → Import → 압축 해제한 테마 폴더를 추가합니다.
5. 테마를 선택하여 적용합니다.



