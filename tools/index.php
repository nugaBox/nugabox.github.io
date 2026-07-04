<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description" content="NUGA's Toolbox">
    <meta name="author" content="Nuga Jang">
    <meta property="og:image" content="https://nugabox.com/tools/images/meta_tools.png">
    <meta property="og:title" content="NUGABOX Tools">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nugabox.com/tools">
    <meta property="og:description" content="made by NUGA">
    <title>NUGABOX Tools</title>
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/site.webmanifest">
    <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#272b35">
    <meta name="msapplication-TileColor" content="#272b35">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-colorpicker.min.css">
	<link rel="stylesheet" href="css/fontAwesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.min.js"></script>
    <script defer src="js/bootstrap.min.js"></script>
    <script defer src="js/bootstrap-colorpicker.min.js"></script>
    <script defer src="js/jquery.slimscroll.min.js"></script>
    <script src="js/clipboard.min.js"></script>
    <script defer src="js/specialChar.js"></script>
    <script defer src="js/script.js"></script>
</head>
<body>
<style>

</style>
<header class="p-3 text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/tools" class="d-flex align-items-center col-lg-6 mb-2 mb-lg-0 text-white text-decoration-none">
                <img src="images/banner_tools_light.png" alt="logo" class="logo" />
            </a>
            <div class="col-lg-2"></div>
            <ul class="nav col-12 col-lg-4 me-lg-auto mb-2 justify-content-center mb-md-0 ">
                <li><a href="/tools" class="nav-link px-2 text-white">일반 도구</a></li>
                <li><a href="/tools/dev" class="nav-link px-2 text-secondary">개발 도구</a></li>
                <li class="dropdown ms-3">
                    <a href="javascript:;" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="images/nuga_circle.png" alt="mdo" width="32" height="32" class="rounded-circle">
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
    <div class="bd-callout bd-callout-info">
        <h3>Stay Hungry, Stay Foolish.</h3>
        <h6><span class="badge bg-light text-dark mt-2">Last Updated / 2023-11-20</span></h6>
    </div>
<!--	<div class="row title">-->
<!--		<div class="col-12">-->
<!--            <a href="https://nugabox.com"><img src="/images/nuga_circle.png" alt="Persona" class="login-img" /><h1>nugaBox</h1></a><h1><span>Util</span></h1>-->
<!--		</div>-->
<!--	</div>-->
    <!-- 경로 변환 -->
	<div class="section row mt-3" id="slash">
		<div class="col-12">
			<div class="card">
				<h5 class="card-header"><i class="fad fa-keyboard" aria-hidden="true"></i> 디렉토리 경로 변환</h5>
				<div class="card-body">
                    <div class="row mt-2">
                        <label for="keyword" class="col-2 col-md-1 col-form-label text-right"></label>
                        <div class="col-10 col-md-4">
                            <div class="form-check form-check-inline">
                                <input type="radio" id="slashTp1" name="slashTp" class="form-check-input" value="slashTp1" checked>
                                <label class="form-check-label" for="slashTp1"> <i class="fab fa-windows" aria-hidden="true"></i> <i class="far fa-arrow-right" aria-hidden="true"></i> <i class="fab fa-apple" aria-hidden="true"></i> </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" id="slashTp2" name="slashTp" class="form-check-input" value="slashTp2">
                                <label class="form-check-label" for="slashTp2"> <i class="fab fa-apple" aria-hidden="true"></i> <i class="far fa-arrow-right" aria-hidden="true"></i> <i class="fab fa-windows" aria-hidden="true"></i>  </label>
                            </div>
                        </div>
                        <label for="keyword" class="col-2 col-md-1 col-form-label text-right"></label>
                        <div class="col-6 col-md-4">
                            <div class="form-check form-switch">
                                <input type="checkbox" class="form-check-input" id="cominPath" name="cominPath" value="Y" checked>
                                <label class="form-check-label" for="cominPath"> cominData</label>
                            </div>
                        </div>
                    </div>
					<div class="row mt-2">
						<label for="keyword" class="col-2 col-md-1 col-form-label text-right">경로</label>
						<div class="col-10 col-md-11">
							<div class="input-group">
								<input type="text" class="form-control" id="path" name="path" value="" placeholder="BackSlash(\) → Slash(/)">
                                <button type="button" class="btn btn-secondary" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-12">
							<div class="alert alert-secondary mb-0" role="alert"><pre class="pathDs"></pre><a class="copy-btn" href="javascript:;" data-category="path"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
                            <div class="mt-4 mb-2 pathHotkey"><i class="fas fa-keyboard" aria-hidden="true"></i> <span>경로 이동 단축키</span><br><kbd>Command + Shift + g</kbd> / <kbd><i class="fab fa-windows" aria-hidden="true"></i>(Win) + R</kbd></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- 한글 자소분리 변환 -->
	<div class="section row mt-3" id="hangul">
		<div class="col-12">
			<div class="card">
				<h5 class="card-header"><i class="fad fa-yin-yang" aria-hidden="true"></i> 한글 자소분리 변환</h5>
				<div class="card-body">
					<div class="row mt-2">
						<div class="col-12">
							<div class="input-group">
								<input type="text" class="form-control" id="hangultxt" name="hangultxt" value="">
                                <button type="button" class="btn btn-secondary" data-action="U"><i class="far fa-exchange-alt"></i> 변환</button>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-12">
							<div class="alert alert-secondary mb-0" role="alert"><pre class="hangulDs"></pre><a class="copy-btn" href="javascript:;" data-category="hangul"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- 필수 패키지 설치 -->
    <div class="section row mt-3" id="hangul">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header"><i class="fab fa-apple" aria-hidden="true"></i> macOS 필수 패키지 설치</h5>
                <div class="card-body">
                    <div class="row mt-2">
                        <div class="col-12">
                            아래 명령어를 복사해서 터미널에서 실행하세요
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-secondary mb-0" role="alert"><pre class="essentialDs"><span class="text-success">bash <(curl -s https://raw.githubusercontent.com/nugaBox/essential/main/mac/essential.sh)</span></pre><a class="copy-btn" href="javascript:;" data-category="essential"><i class="fad fa-clipboard" aria-hidden="true"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 특수문자 -->
    <div class="section row mt-3" id="specialChar">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header">
                    <div class="row">
                        <div class="col-12">
                            <i class="fad fa-alicorn" aria-hidden="true"></i> 특수 문자
                        </div>
                    </div>
                </h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div id="specialCharOutput"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- HTML 서명 생성기 -->
    <div class="section row mt-3" id="signGen">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header"><i class="fad fa-id-card" aria-hidden="true"></i> HTML 서명 생성기</h5>
                <div class="card-body">
                    <form id="signForm" action="action.php" target="preview" method="post">
                        <input type="hidden" name="action" value="P">
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right">필수정보</label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-userNm" name="sign-userNm" value="장누가 선임">
                                    <label for="sign-userNm">이름/직급</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-comNm" name="sign-comNm" value="(주)가민정보시스템">
                                    <label for="sign-comNm">직장명</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-comTeam" name="sign-comTeam" value="정보기술연구소 프레임웍연구">
                                    <label for="sign-comTeam">소속 부서</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-comAddr" name="sign-comAddr" value="광주광역시 동구 동계천로 76 가민정보 빌딩">
                                    <label for="sign-comAddr">직장 주소</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-tel-com" name="sign-tel-com" value="062-653-2879">
                                    <label for="sign-tel-com">직장 전화번호</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-tel-phone" name="sign-tel-phone" value="010-0000-0000">
                                    <label for="sign-tel-phone">휴대 전화번호</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-essential" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="sign-email" name="sign-email" value="admin@nugabox.com">
                                    <label for="sign-email">이메일</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-select" class="col-3 col-md-2 col-form-label text-right">선택사항</label>
                            <div class="col-9 col-md-10">
                                <div class="input-group">
                                    <div class="input-group-text col-5 col-md-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="sign-tel-directYn" name="sign-tel-directYn" value="N">
                                            <label class="form-check-label" for="sign-tel-directYn">직통</label>
                                        </div>
                                    </div>
                                    <input type="tel" class="form-control col-7 col-md-10" id="sign-tel-direct" name="sign-tel-direct" placeholder="직통 전화번호" value="070-0000-0000">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-select" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="input-group">
                                    <div class="input-group-text col-5 col-md-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="sign-tel-faxYn" name="sign-tel-faxYn" value="N">
                                            <label class="form-check-label" for="sign-tel-faxYn">FAX</label>
                                        </div>
                                    </div>
                                    <input type="tel" class="form-control col-7 col-md-10" id="sign-tel-fax" name="sign-tel-fax" placeholder="직장 FAX번호" value="062-676-4869">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-select" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="input-group">
                                    <div class="input-group-text col-5 col-md-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="sign-warningYn" name="sign-warningYn" value="N">
                                            <label class="form-check-label" for="sign-warningYn">경고문구</label>
                                        </div>
                                    </div>
                                    <input type="tel" class="form-control col-7 col-md-10" id="sign-warning" name="sign-warning" placeholder="경고문구" value="이 메일은 지정된 수취인만을 위해 작성되었으며, 중요한 정보나 저작권을 포함하고 있을 수 있습니다. 어떠한 권한 없이, 본 문서에 포함된 정보의 전부 또는 일부를 무단으로 제3자에게 공개, 배포, 복사 또는 사용하는 것을 엄격히 금지합니다. 만약 본 메일이 잘못 전송된 경우 발신인 또는 당사에 알려주시고 본 메일을 즉시 삭제하여 주시기 바랍니다. This E-mail may contain confidential information and/or copyright material. This E-mail is intended for the use of the Addressee only. If you receive this E-mail by mistake, please delete it without reproducing, distributing or retaining." disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-logo" class="col-3 col-md-2 col-form-label text-right">로고</label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="url" class="form-control" id="sign-logo-url" name="sign-logo-url" value="https://i.imgur.com/hTu1xEo.png">
                                    <label for="sign-logo-url">로고 이미지 URL</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-logo" class="col-3 col-md-2 col-form-label text-right"></label>
                            <div class="col-9 col-md-10">
                                <div class="form-floating">
                                    <input type="url" class="form-control" id="sign-logo-link" name="sign-logo-link" value="https://www.comin.com">
                                    <label for="sign-logo-link">로고 링크 URL</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="sign-color" class="col-3 col-md-2 col-form-label text-right">컬러</label>
                            <div class="col-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" class="form-control input-lg" id="sign-colorCd" name="sign-colorCd" value="#A3282D"/>
                                    <input type="color" class="form-control form-control-color" id="sign-color" value="#A3282D" title="Choose your color">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 text-end">
                                <button type="button" class="btn btn-primary" data-action="G"><i class="far fa-magic"></i> 코드 생성</button>
                                <button type="button" class="btn btn-secondary" data-action="P"><i class="far fa-browser"></i> 미리보기</button>
                            </div>
                        </div>
                        <div class="col-12 mt-2 text-end"><small>※ 본 사이트의 입력값은 서버에 남지 않습니다.</small></div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-secondary mb-0" role="alert"><pre class="signGenDs"></pre></div>
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