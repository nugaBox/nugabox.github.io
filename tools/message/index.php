<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description" content="NUGA's Toolbox">
    <meta name="author" content="Nuga Jang">
    <meta property="og:image" content="https://nugabox.com/tools/images/meta_devtools.png">
    <meta property="og:title" content="NUGABOX Tools">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nugabox.com/tools/message">
    <meta property="og:description" content="Development Tools">
    <title>NUGABOX Tools</title>
    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon_dev/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_dev/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_dev/favicon-16x16.png">
    <link rel="manifest" href="../images/favicon_dev/site.webmanifest">
    <link rel="mask-icon" href="../images/favicon_dev/safari-pinned-tab.svg" color="#272b35">
    <meta name="msapplication-TileColor" content="#272b35">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/fontAwesome.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/jquery.min.js"></script>
    <script defer src="../js/bootstrap.min.js"></script>
    <script defer src="../js/jquery.slimscroll.min.js"></script>
    <script src="../js/clipboard.min.js"></script>
    <script defer src="../js/dev/htmlencode.js"></script>
    <script defer src="../js/dev/base32.js"></script>
    <script defer src="../js/dev/base64.js"></script>
    <script defer src="../js/dev/punycode.js"></script>
    <script defer src="../js/dev/crypto.bundle.js"></script>
    <script defer src="../js/dev/script.js"></script>
</head>
<body>
<header class="p-3 text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/tools" class="d-flex align-items-center col-lg-6 mb-2 mb-lg-0 text-white text-decoration-none">
                <img src="../images/banner_tools_light.png" alt="logo" class="logo" />
            </a>
            <div class="col-lg-2"></div>
            <ul class="nav col-12 col-lg-4 me-lg-auto mb-2 justify-content-center mb-md-0 ">
                <li><a href="/tools" class="nav-link px-2 text-secondary">일반 도구</a></li>
                <li><a href="/tools/dev" class="nav-link px-2 text-secondary">개발 도구</a></li>
                <li><a href="/tools/message" class="nav-link px-2 text-white">메시지</a></li>
                <li class="dropdown ms-3">
                    <a href="javascript:;" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../images/nuga_circle.png" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="https://nugabox.com">NUGABOX</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="https://dev.nugabox.com" target="_blank">DevLabs</a></li>
                        <li><a class="dropdown-item" href="https://nugabox.github.io" target="_blank">개발 로그</a></li>
                        <li><a class="dropdown-item" href="https://wiki.nugabox.io" target="_blank">개발 위키</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</header>
<div class="container-fluid">
    <div class="bd-callout bd-callout-warning">
        <h3>Stay Hungry, Stay Foolish.</h3>
        <h6><span class="badge bg-light text-dark mt-2">Last Updated / 2022-05-06</span></h6>
    </div>
    <!-- 카카오 -->
    <div class="section row mt-3" id="kakao">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header"><img src="/tools/images/kakaotalk.png" width="30px" /> 카카오톡</h5>
                <div class="card-body">
                    <nav>
                        <div class="nav nav-tabs" id="nav-converter" role="tablist">
                            <button class="nav-link active" id="nav-kakao-me-tab" data-bs-toggle="tab" data-bs-target="#nav-kakao-me" type="button" role="tab" aria-controls="nav-kakao-me" aria-selected="true">나에게 전송</button>
                            <button class="nav-link" id="nav-kakao-friends-tab" data-bs-toggle="tab" data-bs-target="#nav-kakao-friends" type="button" role="tab" aria-controls="nav-kakao-friends" aria-selected="false">친구에게 전송</button>
                            <button class="nav-link" id="nav-kakao-nuplex-tab" data-bs-toggle="tab" data-bs-target="#nav-kakao-nuplex" type="button" role="tab" aria-controls="nav-kakao-nuplex" aria-selected="false">NUPLEX 공유</button>
                        </div>
                    </nav>
                    <div class="tab-content mt-2 p-2" id="nav-converterContent">
                        <div class="tab-pane fade show active" id="nav-kakao-me" role="tabpanel" aria-labelledby="nav-kakao-me-tab">
                            <div class="row mt-2">
                                <label for="uni_kor" class="col-3 col-md-2 col-form-label text-right">유형</label>
                                <div class="col-10 col-md-4">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" id="slashTp1" name="slashTp" class="form-check-input" value="slashTp1" checked>
                                        <label class="form-check-label" for="slashTp1"> 텍스트</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" id="slashTp2" name="slashTp" class="form-check-input" value="slashTp2">
                                        <label class="form-check-label" for="slashTp2"> 피드(이미지)</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_kor" class="col-3 col-md-2 col-form-label text-right">제목</label>
                                <div class="col-9 col-md-10">
                                    <input type="text" class="form-control" id="uni_kor" name="uni_kor" placeholder="{title}">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_kor" class="col-3 col-md-2 col-form-label text-right">내용</label>
                                <div class="col-9 col-md-10">
                                    <input type="text" class="form-control" id="uni_kor" name="uni_kor" placeholder="{description}">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_code" class="col-3 col-md-2 col-form-label text-right">이미지 경로</label>
                                <div class="col-9 col-md-10">
                                    <input type="text" class="form-control" id="uni_code" name="uni_code" placeholder="{img}">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_code" class="col-3 col-md-2 col-form-label text-right">링크</label>
                                <div class="col-9 col-md-10">
                                    <input type="text" class="form-control" id="uni_code" name="uni_code" placeholder="{url}" value="kakao developer > 플랫폼 > Web 사이트 도메인에 추가해야 가능" readonly>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12 text-end">
                                    <button type="button" class="btn btn-primary" data-action="G"><i class="far fa-magic"></i> 코드 생성</button>
                                    <button type="button" class="btn btn-secondary" data-action="P"><i class="far fa-browser"></i> 미리보기</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-kakao-friends" role="tabpanel" aria-labelledby="nav-kakao-friends-tab">
                            <div class="row mt-2">
                                <label for="puny_kor" class="col-3 col-md-2 col-form-label text-right">한글</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_kor" name="puny_kor" value="누가박스.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="K"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="puny_code" class="col-3 col-md-2 col-form-label text-right">PunyCode</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_code" name="puny_code" value="xn--o39a27i6wj5xg.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-secondary mb-0" role="alert"><pre class="converterDs"></pre><a class="copy-btn" href="javascript:;" data-category="converter"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 카카오워크 -->
    <div class="section row mt-3" id="kakaowork">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header"><img src="https://t1.kakaocdn.net/service_kep_docpublish/page/logo_kakaowork.png" width="25px" /> 카카오워크</h5>
                <div class="card-body">
                    <nav>
                        <div class="nav nav-tabs" id="nav-converter" role="tablist">
                            <button class="nav-link active" id="nav-kakaowork-text-tab" data-bs-toggle="tab" data-bs-target="#nav-kakaowork-text" type="button" role="tab" aria-controls="nav-kakaowork-text" aria-selected="true">텍스트</button>
                            <button class="nav-link" id="nav-kakaowork-feed-tab" data-bs-toggle="tab" data-bs-target="#nav-kakaowork-feed" type="button" role="tab" aria-controls="nav-kakaowork-feed" aria-selected="false">피드(이미지)</button>
                        </div>
                    </nav>
                    <div class="tab-content mt-2 p-2" id="nav-converterContent">
                        <div class="tab-pane fade show active" id="nav-kakaowork-text" role="tabpanel" aria-labelledby="nav-kakaowork-text-tab">
                            <div class="row mt-2">
                                <label for="uni_kor" class="col-3 col-md-2 col-form-label text-right">한글</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="uni_kor" name="uni_kor" value="누가">
                                        <button type="button" class="btn btn-secondary" data-category="UNI" data-action="K"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_code" class="col-3 col-md-2 col-form-label text-right">UniCode</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="uni_code" name="uni_code" value="\uB204\uAC00">
                                        <button type="button" class="btn btn-secondary" data-category="UNI" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-kakaowork-feed" role="tabpanel" aria-labelledby="nav-kakaowork-feed-tab">
                            <div class="row mt-2">
                                <label for="puny_kor" class="col-3 col-md-2 col-form-label text-right">한글</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_kor" name="puny_kor" value="누가박스.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="K"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="puny_code" class="col-3 col-md-2 col-form-label text-right">PunyCode</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_code" name="puny_code" value="xn--o39a27i6wj5xg.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-secondary mb-0" role="alert"><pre class="converterDs"></pre><a class="copy-btn" href="javascript:;" data-category="converter"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 슬랙 -->
    <div class="section row mt-3" id="slack">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header"><img src="/tools/images/slack.png" width="30px" /> Slack</h5>
                <div class="card-body">
                    <nav>
                        <div class="nav nav-tabs" id="nav-converter" role="tablist">
                            <button class="nav-link active" id="nav-slack-text-tab" data-bs-toggle="tab" data-bs-target="#nav-slack-text" type="button" role="tab" aria-controls="nav-slack-text" aria-selected="true">텍스트</button>
                            <button class="nav-link" id="nav-slack-image-tab" data-bs-toggle="tab" data-bs-target="#nav-slack-image" type="button" role="tab" aria-controls="nav-slack-image" aria-selected="false">이미지</button>
                        </div>
                    </nav>
                    <div class="tab-content mt-2 p-2" id="nav-converterContent">
                        <div class="tab-pane fade show active" id="nav-slack-text" role="tabpanel" aria-labelledby="nav-slack-text-tab">
                            <div class="row mt-2">
                                <label for="uni_kor" class="col-3 col-md-2 col-form-label text-right">한글</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="uni_kor" name="uni_kor" value="누가">
                                        <button type="button" class="btn btn-secondary" data-category="UNI" data-action="K"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="uni_code" class="col-3 col-md-2 col-form-label text-right">UniCode</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="uni_code" name="uni_code" value="\uB204\uAC00">
                                        <button type="button" class="btn btn-secondary" data-category="UNI" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-slack-image" role="tabpanel" aria-labelledby="nav-slack-image-tab">
                            <div class="row mt-2">
                                <label for="puny_kor" class="col-3 col-md-2 col-form-label text-right">한글</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_kor" name="puny_kor" value="누가박스.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="K"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <label for="puny_code" class="col-3 col-md-2 col-form-label text-right">PunyCode</label>
                                <div class="col-9 col-md-10">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="puny_code" name="puny_code" value="xn--o39a27i6wj5xg.com">
                                        <button type="button" class="btn btn-secondary" data-category="PUNY" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-secondary mb-0" role="alert"><pre class="converterDs"></pre><a class="copy-btn" href="javascript:;" data-category="converter"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5 p-3">
        <div class="row">
            <div class="col-6">
                <h5><i class="fad fa-comments-alt"></i>  댓글</h5>
            </div>
            <div class="col-6 text-end">
                <a href="https://github.com/nugaBox" target="_blank"><h6><span class="badge bg-dark text-light mt-2"><i class="fab fa-github-alt"></i> nugaBox</span></h6></a>
            </div>
        </div>
        <small>필요한 도구 요청 및 문의 등을 남겨주세요</small>
        <script src="https://utteranc.es/client.js" repo="nugaBox/tools" issue-term="pathname" theme="github-light" crossorigin="anonymous" async></script>
    </div>
    <footer>
        <p class="text-center mt-4">Copyright <script>document.write(new Date().getFullYear());</script> <a href="https://nugabox.com" target="_blank">NUGABOX</a>. All rights reserved.</p>
    </footer>
</div>
</body>
</html>