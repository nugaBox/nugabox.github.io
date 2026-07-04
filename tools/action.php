<?php

try {
    $action = $_POST['action'];

    // 이메일 서명 생성기
    if($action == 'G' || $action == 'P' ) {
        $sign_userNm = explode(' ',$_POST['sign-userNm']);
        $sign_comNm = $_POST['sign-comNm'];
        $sign_comTeam = $_POST['sign-comTeam'];
        $sign_comAddr = $_POST['sign-comAddr'];
        $sign_tel_com = $_POST['sign-tel-com'];
        $sign_tel_phone = $_POST['sign-tel-phone'];
        $sign_email = $_POST['sign-email'];

        $sign_tel_direct = $_POST['sign-tel-direct'];
        $sign_tel_directYn = $_POST['sign-tel-directYn'];
        $sign_tel_fax = $_POST['sign-tel-fax'];
        $sign_tel_faxYn = $_POST['sign-tel-faxYn'];
        $sign_warningYn = $_POST['sign-warningYn'];
        $sign_logo_url = $_POST['sign-logo-url'];
        $sign_logo_link = $_POST['sign-logo-link'];
        $sign_colorCd = $_POST['sign-colorCd'];

        $sign_code = '<br><br>';
        $sign_code.= '<div class="wrapper" style="width:490px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 20px 0px;margin-top:10px;color: #000;border-radius: 1.5em; border:solid 2px #eee;">';
        $sign_code.= '    <span class="main">';
        $sign_code.= '        <span class="image" style="display: inline-block;padding:15px 10px 15px 20px;margin:auto;vertical-align: top;">';
        $sign_code.= '            <a href="'.$sign_logo_link.'" target="_blank"><img src="'.$sign_logo_url.'" width="100px" nosend="1"></a>';
        $sign_code.= '        </span>';
        $sign_code.= '        <span class="text" style="display: inline-block;max-width: 290px;border-left: 1px solid '.$sign_colorCd.';padding-left: 30px;margin-right: 30px;font-family: Calibri, Lucida Grande, Arial, sans-serif;font-size: 13px;line-height: 1.5;">';
        $sign_code.= '        <h2 style="font-size: 18px;margin: 0;line-height: 1; font-weight: 400;"><strong>'.$sign_userNm[0].'</strong> '.$sign_userNm[1].'</h2>';
        $sign_code.= '        <span class="subheading" style="display:block; color: #777; font-size: 14px; margin-top:3px;"><strong>'.$sign_comNm.'</strong> <small>'.$sign_comTeam.'</small></span><br>';
        $sign_code.= '        <p style="margin:0;"><img src="https://i.imgur.com/whqBg8l.png" width="13px" alt="Address"> <span style="margin-top:2px;">'.$sign_comAddr.'</span></p>';
        if($sign_tel_directYn == 'Y' && isset($sign_tel_direct) ) {
            $sign_code.= '        <p style="margin:0;"><img src="https://i.imgur.com/cqNTLC8.png" width="13px" alt="Tel"> '.$sign_tel_com;
            $sign_code.= ' |<strong><small> 직통</small></strong> '.$sign_tel_direct.'</p>';
        } else {
            $sign_code.= '        <p style="margin:0;"><img src="https://i.imgur.com/cqNTLC8.png" width="13px" alt="Tel"><strong><small> Tel</small></strong> '.$sign_tel_com;
        }
        if($sign_tel_faxYn == 'Y' && isset($sign_tel_fax) ) {
            $sign_code.= '        <p style="margin:0;"><a href="tel:'.$sign_tel_phone.'" style="color: #000; text-decoration: none;"><img src="https://i.imgur.com/0dKu67q.png" width="13px" style="margin-right:3px;" alt="Mobile">'.$sign_tel_phone.'</a>';
            $sign_code.= ' |<strong><small> FAX</small></strong> '.$sign_tel_fax.'</p>';
        } else {
            $sign_code.= '        <p style="margin:0;"><a href="tel:'.$sign_tel_phone.'" style="color: #000; text-decoration: none;"><img src="https://i.imgur.com/0dKu67q.png" width="13px" style="margin-right:3px;" alt="Mobile"><strong><small>Mobile</small></strong> '.$sign_tel_phone.'</a>';
        }
        $sign_code.= '        <p style="margin:0;"><a href="mailto:'.$sign_email.'" style="color: #000; text-decoration: none;"><img src="https://i.imgur.com/7sB3tar.png" width="13px" alt="Email"> '.$sign_email.'</a></p>';
        $sign_code.= '    </span>';
        $sign_code.= '</div>';
        if($sign_warningYn == 'Y' ) {
            $sign_code .= '<div class="wrapper" style="width:480px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 0px 10px;margin-top:15px;text-align:justify; color: #777; font-size: 12px; letter-spacing:-0.2px;">이 메일은 지정된 수취인만을 위해 작성되었으며, 중요한 정보나 저작권을 포함하고 있을 수 있습니다. 어떠한 권한 없이, 본 문서에 포함된 정보의 전부 또는 일부를 무단으로 제3자에게 공개, 배포, 복사 또는 사용하는 것을 엄격히 금지합니다. 만약 본 메일이 잘못 전송된 경우 발신인 또는 당사에 알려주시고 본 메일을 즉시 삭제하여 주시기 바랍니다.<br>This E-mail may contain confidential information and/or copyright material. This E-mail is intended for the use of the Addressee only. If you receive this E-mail by mistake, please delete it without reproducing, distributing or retaining.</p>';
        }
        $result = $sign_code;
    }
    // 포트 오픈 확인
    else if($action == 'O' ) {
        $ip = $_POST['ip'];
        $port = $_POST['port'];
        $timeout = 5;
        $fp = @fsockopen($ip,$port,$errno,$errstr,$timeout);
        if ( is_resource($fp) ) {
            $result = 'Open';
            fclose($fp);
        } else {
            $result = 'Close';
            //echo $errno.' : '.$errstr.'<br />'; // 오류 정보 출력
        }
    }
}
catch(exception $e) {
    $result['msg']		= $e->getMessage();
    $result['code']		= $e->getCode();
}
finally {
    echo($result);
}
?>