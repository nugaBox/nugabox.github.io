if(window.console!=undefined){
    setTimeout(console.log.bind(console,"%c nugaBox DevLabs Tools","font:2em Arial;color:#7c7c7c;"),0);
    setTimeout(console.log.bind(console,"%c '◡' by NUGA","font:3em Arial;color:#1e73be;font-weight:bold"),0);
}
$(document).ready(function() {
    // 출력폼
    $('.workDs,.pathDs').slimScroll({height:'50px',start:'bottom'});
    $('.copy-btn').click(function(){
        var category = $(this).data('category') + 'Ds';
        var str = $('.'+category).children('.text-success').text();
        copyToClipboard(str);
    });

    /**
     *  이메일 서명 생성기
     *  @id signGen
     */
    $('.section#signGen :checkbox').change(function(){
        if ($(this).is(':checked')) {
            $(this).val('Y');
        } else {
            $(this).val('N');
        }
    });
    $('#sign-color').change(function(){
        $('#sign-colorCd').val($(this).val());
    });
    $('#sign-colorCd').change(function(){
        $('#sign-color').val($(this).val());
    });
    // 서명 생성
    $('.section#signGen .btn').click(function() {
        // 코드 생성
        if ($(this).data('action') == 'G') {
            var formData = $('#signForm').serialize()+'&action=G';
            $.ajax({
                url: "action.php",
                type: "post",
                data: formData
            }).done(function (data) {
                // 생성된 코드를 클립보드에 복사
                copyToClipboard(unescape(data));
                $('.signGenDs').html('<span class="text-success">생성된 코드가 클립보드에 복사되었습니다. <br>이메일 서명에 \'HTML\'로 붙여넣기 해주세요.</span>');
            });
        }
        // 미리보기 (새창)
        else if ($(this).data('action') == 'P') {
            win = open('','preview','width=550,height=400');
            $('#signForm').submit();
        }
    });

    /**
     * 경로 변환
     * @id slash
     */
    $('.section#slash .btn').click(function() {
        var str = '';
        var slashTp = $(":input:radio[name=slashTp]:checked").val().right(1);
        var cominPathYn = $('#cominPath').val();
        var cominboxArr = ["dat", "datback", "hndvr", "lecture", "pgm", "photo"];
        var cominfileArr = ["siiru", "devtools", "scan", "공공교육사업본부", "더블스타", "정보기술연구소", "제조금융사업본부"];

        // BackSlash to Slash (Win -> Mac)
        if (slashTp == '1' && $.trim($('#path').val()) != '') {
            str = $.trim($('#path').val());
            var strArr = str.split("\\");
            // var strArr2 = strArr[2].toLowerCase();
            // cominData
            if (cominPathYn == 'Y') {
                if (strArr[2] == "cominData" || strArr[2] == "comindata" || strArr[2] == "192.168.1.18") {
                    strArr[2] = 'Volumes';
                    strArr.splice(0, 1);
                }
            }
            str = strArr.join("/");
            // 한글 자소분리 인코딩
            str = str.normalize('NFC');
            $('.pathDs').html('<span class="text-success">' + $.trim(str) + '</span>');
        }
        // Slash to BackSlash (Mac -> Win)
        else if (slashTp == '2' && $.trim($('#path').val()) != '') {
            str = $.trim($('#path').val());
            var strArr = str.split("/");
            // cominData
            if (cominPathYn == 'Y') {
                if (strArr[1] == 'Volumes') {
                    /*
                    if($.inArray(strArr[2], cominboxArr) != -1) {
                        strArr[1] = '\\cominBox';
                    } else if($.inArray(strArr[2], cominfileArr) != -1) {
                        strArr[1] = '\\cominFile';
                    }
                    */
                    strArr[1] = '\\cominData';
                }
            }
            str = strArr.join("\\");
            // 한글 자소분리 인코딩
            str = str.normalize('NFC');
            $('.pathDs').html('<span class="text-success">' + $.trim(str) + '</span>');
        }
    });
    $("input:radio[name=slashTp]").click(function() {
        var slashTp = $(this).val().right(1);
        if(slashTp == '1') $('#path').attr('placeholder',"BackSlash(\\) → Slash(/)");
        else $('#path').attr('placeholder',"Slash(/) → BackSlash(\\)");
    })
    $('#cominPath').click(function(){
        if($(this).val() == 'Y') $(this).val('N');
        else $(this).val('Y');
    })

    /**
     * 한글 자소분리 변환
     * @id hangul
     */
    $('.section#hangul .btn').click(function() {
        var str = '';
        str = $.trim($('#hangultxt').val());
            
        // 한글 자소분리 인코딩
        str = str.normalize('NFC');
        $('.hangulDs').html('<span class="text-success">' + $.trim(str) + '</span>');
    });

    /**
     * 특수 기호
     * @id specialChar
     */
    var specialCharOutput = "";
    var char_idx = 1;
    specialCharOutput += "<div class='accordion'>";
    for(var key in specialChar){
        specialCharOutput += "<div class='accordion-item' id='char"+char_idx+"'>";
        specialCharOutput += "<h2 class='accordion-header' id='char"+char_idx+"-headingOne'>";
        if(key == "도형 문자" || key == "문장 부호") {
            specialCharOutput += "<button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#char" + char_idx + "-collapseOne' aria-expanded='true' aria-controls='" + char_idx + "-collapseOne'>";
            specialCharOutput += key;
            specialCharOutput += "</button></h2>";
            specialCharOutput += "<div id='char"+char_idx+"-collapseOne' class='accordion-collapse collapse show' aria-labelledby='char"+char_idx+"-headingOne'>";
        }
        else {
            specialCharOutput += "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#char" + char_idx + "-collapseOne' aria-expanded='false' aria-controls='" + char_idx + "-collapseOne'>";
            specialCharOutput += key;
            specialCharOutput += "</button></h2>";
            specialCharOutput += "<div id='char"+char_idx+"-collapseOne' class='accordion-collapse collapse' aria-labelledby='char"+char_idx+"-headingOne'>";
        }
        specialCharOutput += "<div class='accordion-body'>";

        var charList = specialChar[key];
        for(var idx in charList){
            var char = charList[idx];
            if(key == "공백"){
                specialCharOutput += "<button type='button' class='btn btn-default btn-character-sm' value='"+char+"'><span style='background-color:#cbd5e0'>"+char+"</span></button>"
            }else{
                specialCharOutput += "<input type='button' class='btn btn-default btn-character-sm' value='"+char+"'/>"
            }
        }
        specialCharOutput += "</div></div></div>";
        char_idx++;
    }
    specialCharOutput += "</div>";
    $("#specialCharOutput").html(specialCharOutput);
});
// 숫자 3자리 단위마다 콤마(comma)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// right substr 사용하기
String.prototype.right = function(length){
    if(this.length <= length) return this;
    else return this.substring(this.length - length, this.length);
}
// HTML 코드 XSS 방지
function escapeHtml(str) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}
// 클립보드 복사 함수
function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
// 특수문자 클릭 시 복사
new ClipboardJS('#specialCharOutput .btn', {
    text: function(trigger) {
        $("#multiCopy input").val($("#multiCopy input").val()+trigger.getAttribute('value'));
        $(trigger).tooltip({title: '복사 ✅', trigger: 'manual'});
        $(trigger).tooltip('show');
        setTimeout(function(){$(trigger).tooltip('hide');}, 1000);
        return trigger.getAttribute('value');
    }
});
// 현재 시간
function getCurrentTime() {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();
    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();
    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
}
// ajax 전송
// function ajaxForm(outData) {
//     $.ajax({
//         type : 'post',
//         url : '',
//         data : $('#data').serialize(),
//         dataType : 'json',
//         success : function(data) {
//             outData(data);
//         }
//     });
// }
// 화면 이동
// function scrollMove(obj) {
// 	var scmove = obj.offset().top;
// 	$('html, body').animate({scrollTop : scmove}, 'slow');
// }