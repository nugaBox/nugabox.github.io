---
title: "jekyll/Chripy로 GitHub Pages 만들기"
date: 2022-05-01 01:11:11 +0900
categories: [GitHub, GitHub-Pages]
tags: [jekyll, chirpy, github-pages]
---

# Chirpy 가져오기
1. Chirpy 저장소의 [Release](https://github.com/cotes2020/jekyll-theme-chirpy/releases)에서 소스를 다운로드하거나
2. Chirpy 저장소를 [Fork](https://github.com/cotes2020/jekyll-theme-chirpy/fork) 합니다.

이 중 하나의 방법을 선택하여 진행하시기 바랍니다.

## 1. 소스 다운로드한 경우
![create_repository](/assets/img/post/2022-05-01/create_repository.png){:style="border:1px solid #606060; border-radius: 7px; padding: 0px;" }
1. GitHub에서 내 계정의 새 저장소를 생성합니다.
  - Repository Name은 `<자신의 GitHub 계정명>.github.io`로 설정하여 생성합니다.
  - Repository 유형은 `Public`으로 합니다.
  - Initialize this repository with:에서 `Add a README file`은 체크 해제하여 branch를 생성하지 않도록 합니다.
2. Latest Release 버전의 소스 파일 `Source code (zip)`을 로컬 환경에 다운로드 후 압축을 해제합니다.
3. 터미널로 해당 폴더에 접속합니다.
4. `.gitignore` 파일에 제외할 파일을 추가해줍니다.
    ````bash
    echo "Gemfile.lock" >> .gitignore
    ````
5. 해당 폴더를 git 저장소로 생성합니다.
    ````bash
    git init
    ````
6. 생성한 GitHub 저장소로 원격 연결합니다.
    ````bash
    git remote add origin https://github.com/<GitHub 계정명>/<GitHub 계정명>.github.io.git
    ````
7. `main` branch를 생성하고 압축 해제된 파일들을 commit합니다.
    ````bash
    git branch -M main
    git add .
    git commit -m "Initial commit"
    ````

## 2. Fork한 경우
![create_fork](/assets/img/post/2022-05-01/create_fork.png){:style="border:1px solid #606060; border-radius: 7px; padding: 0px;" }
1. Chirpy 저장소의 소스를 내 계정에서 생성한 저장소로 Fork 합니다.
  - 이 때, Repository Name은 `<자신의 GitHub 계정명>.github.io`로 설정하여 생성합니다.
  - 다른 이름으로 설정한 경우에도 해당 저장소의 Settings 페이지로 이동하여 Repository Name을 변경하여 Rename 할 수 있습니다.
2. 방금 Fork하여 생성한 저장소를 로컬에 Clone 합니다.
    ````bash
    git clone https://github.com/<GitHub 계정명>/<GitHub 계정명>.github.io.git
    ````

# Chirpy 초기화
해당 폴더에서 아래 명령어를 실행합니다. 성공하여 아래 메시지가 나오면 자동으로 commit 됩니다.
````bash
sh tools/init.sh
    [INFO] Initialization successful!
````

---
# (선택) 로컬 설치 및 실행
로컬에서 미리보기 등 직접 작동이 가능한 환경을 설정하기 위해서는 ruby와 jekyll을 설치해야 합니다.
블로그 포스트를 위한 `.md` 파일 작성 이외에도 로컬에서 작동하여 사용하려면 아래와 같이 직접 로컬 서버를 가동하여 사용하시기 바랍니다.

## ruby, bundler, jekyll 설치
### Windows
1. Ruby Installer 설치 : [홈페이지](https://www.ruby-lang.org/en/downloads/)에서 다운로드 후 설치
2. 설치된 프로그램 중 `Start Command Prompt with Ruby`를 실행합니다.
3. gem 명령어를 통해 jekyll과 패키지들을 설치합니다.
   ````bash
   gem install jekyll
   gem install minima
   gem install bundler
   gem install jekyll-feed
   gem install tzinfo-data
   ````

### MacOS
1. HomeBrew로 ruby 설치
   ````bash
   brew install ruby
   ````
2. Bundler, jekyll 설치
   ````bash
   gem install --user-install bundler jekyll
   ````
3. 환경변수 설정
   ````bash
   # ruby 버전 확인
   ruby -v

   # 확인한 ruby 버전의 처음 두 숫자를 아래 X.X에 넣음
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc
   ````

## 의존성 모듈 설치
해당 폴더로 돌아와서 jekyll을 로컬에서 실행하기 위해 ruby의 의존성 모듈을 설치합니다.
````bash
bundle
````
## jekyll 실행
아래 명령어로 jekyll을 실행합니다.
````bash
jekyll serve
````
jekyll을 설치하지 않았거나 실행되지 않는 경우 아래 명령어로 실행합니다.
````bash
bundle exec jekyll s
````
또는 Docker로 실행합니다.
````bash
docker run -it --rm \
    --volume="$PWD:/srv/jekyll" \
    -p 4000:4000 jekyll/jekyll \
    jekyll serve
````
## 로컬 사이트 접속
정상적으로 사이트 배포 시 [http://localhost:4000](http://localhost:4000)로 접속하여 확인합니다.

---

# Workflow 권한 수정
![workflow_permission](/assets/img/post/2022-05-01/workflow_permission.png){:style="border:1px solid #606060; border-radius: 7px; padding: 0px;" }

Github Pages에서 jekyll 설치 및 작동할 때는 Github Action의 workflow가 사용되므로 권한을 수정해줍니다.
- 해당 Github 저장소의 `Settings` 탭 > Actions > General 페이지에 접속합니다.
- Workflow permissions를 `Read and write permissions`로 바꾸고 Save 합니다.

# _config.yml 수정
`_config.yml` 파일을 수정하여 사이트에 대한 환경설정을 진행합니다.
필수로 수정을 권하는 항목은 아래와 같습니다.
- lang : `ko-KR`
- timezone : `Asia/Seoul`
- url : `https://<GitHub 계정명>.github.io`

# 배포
아래 명령어를 실행하여 commit 및 push를 진행합니다.
````bash
git add -A
git commit -m "Update configure"
git push
````
# GitHub Actions
- 해당 GitHub 저장소의 `Actions` 탭에서 진행과정을 확인합니다.
  Push를 하게 되면 GitHub Action은 Workflow를 통해 자동으로 Build 및 Deployment를 진행합니다. (3~5분 정도 소요)
- 정상적으로 완료된 경우 초록색의 완료 뱃지 아이콘을 확인할 수 있으며, `gh-pages`라는 branch를 자동으로 생성합니다.

# Branch 변경
`main` branch로 push되는 소스를 build하여 `gh-pages`에 deployment 하므로 사이트 배포를 위한 branch를 `gh-pages`로 변경해야 합니다.

![Change Branch](/assets/img/post/2022-05-01/change_branch.png){:style="border:1px solid #606060; border-radius: 7px; padding: 0px;" }

해당 GitHub 저장소의 `Settings` 탭 > Pages 페이지에서 Source를 `main(또는 master)`에서 `gh-pages`로 변경 후 Save 합니다.

다시 한 번 build 및 deployment가 진행되고 사이트가 배포됩니다.

# 사이트 접속
`https://<GitHub 계정명>.github.io`에 접속하여 사이트가 정상적으로 배포된 것을 확인합니다.

# 참조
- [Chirpy Jekyll Theme](https://github.com/cotes2020/jekyll-theme-chirpy)
- [하얀눈길 블로그](https://www.irgroup.org/posts/jekyll-chirpy/)
- [Zinu's Blog](https://blog.kimzinu.com/posts/jekyll-4/)
