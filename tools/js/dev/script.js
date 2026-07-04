if(window.console!=undefined){
    setTimeout(console.log.bind(console,"%c nugaBox DevLabs Tools","font:2em Arial;color:#7c7c7c;"),0);
    setTimeout(console.log.bind(console,"%c '◡' by NUGA","font:3em Arial;color:#1e73be;font-weight:bold"),0);
}
$(document).ready(function() {
    var crypto = require("crypto");
    $('.copy-btn').click(function(){
        var category = $(this).data('category') + 'Ds';
        var str = $('.'+category).children('.text-success').text();
        copyToClipboard(str);
    })

    /**
     * 포트 오픈 확인
     * @id port_open
     */
    $('.section#port_open .btn').click(function() {
        // 코드 생성
        if ($(this).data('action') == 'O') {
            var open_ip = $('#open_ip').val();
            var open_port = $('#open_port').val();
            $.ajax({
                url: "/tools/action.php",
                type: "post",
                data: {ip: open_ip, port:open_port, action:'O'}
            }).done(function (data) {
                let currentTime = getCurrentTime();
                if (data == 'Open') {
                    $('.port_openDs').html('<span class="text-success">[' + currentTime + '] Result : ' + data + '</span>');
                } else {
                    $('.port_openDs').html('<span class="text-danger">[' + currentTime + '] Result : ' + data + '</span>');
                }
            });
        }
    });

    /**
     * 인코더/디코더
     * @id encoder
     */
    $('#encoder .btn').click(function() {
        var str = '';
        // URL 변환
        if ($(this).data('category') == 'URL') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#enc_url').val()) != '') {
                    str = encodeURI($.trim($('#enc_url').val()));
                }
            } else {
                if ($.trim($('#dec_url').val()) != '') {
                    str = decodeURI($.trim($('#dec_url').val()));
                }
            }
        }
        // HTML 변환
        else if ($(this).data('category') == 'HTML') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#enc_html').val()) != '') {
                    str = htmlEncode($.trim($('#enc_html').val()));
                }
            } else {
                if ($.trim($('#dec_html').val()) != '') {
                    str = htmlDecode($.trim($('#dec_html').val()));
                }
            }
        }
        // Base32 변환
        else if ($(this).data('category') == 'B32') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#enc_base32').val()) != '') {
                    str = base32.encode($.trim($('#enc_base32').val()));
                }
            } else {
                if ($.trim($('#dec_base32').val()) != '') {
                    str = base32.decode($.trim($('#dec_base32').val()));
                }
            }
        }
        // Base64 변환
        else if ($(this).data('category') == 'B64') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#enc_base64').val()) != '') {
                    str = base64.encode($.trim($('#enc_base64').val()));
                }
            } else {
                if ($.trim($('#dec_base64').val()) != '') {
                    str = base64.decode($.trim($('#dec_base64').val()));
                }
            }
        }
        $('.encoderDs').children('span').text(str);
    });

    /**
     * 컨버터
     * @id converter
     */
    $('#converter .btn').click(function() {
        var str = '';
        // 유니코드
        if ($(this).data('category') == 'UNI') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#uni_kor').val()) != '') {
                    str = escape($.trim($('#uni_kor').val()));
                    str = str.split("%").join("\\");
                    str = str.split("\\20").join(" ");
                }
            } else {
                if ($.trim($('#uni_code').val()) != '') {
                    str = $.trim($('#uni_code').val());
                    str = unescape(str.split("\\").join("%"));
                }
            }
        }
        // 퓨니코드
        else if ($(this).data('category') == 'PUNY') {
            if ($(this).data('action') == 'K') {
                if ($.trim($('#puny_kor').val()) != '') {
                    str = $.trim($('#puny_kor').val());
                    str = punycode.toASCII(str);
                }
            } else {
                if ($.trim($('#puny_code').val()) != '') {
                    str = $.trim($('#puny_code').val());
                    str = punycode.toUnicode(str);
                }
            }
        }
        $('.converterDs').html('<span class="text-success">'+$.trim(str)+'</span>');
    });

    /**
     * 암호화
     * @id crypto
     */
    $('#crypto .btn').click(function() {
        var str = '';
        // HASH
        if ($(this).data('category') == 'HASH') {
            if ($.trim($('#hashOrgText').val()) != '') {
                var orgText = $('#hashOrgText').val();
                var algorithm = $('#hashAlgorithm').val();
                var hashText = crypto.createHash(algorithm).update(orgText, 'utf8').digest('hex');
                str = hashText;
                $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
            } else {
                alert('암호화 할 텍스트를 입력하세요');
            }
        }
        // HMAC
        else if ($(this).data('category') == 'HMAC') {
            if ($.trim($('#hmacOrgText').val()) != '') {
                var orgText = $('#hmacOrgText').val();
                var password = $('#hmacPassword').val();
                var algorithm = $('#hmacAlgorithm').val();
                var resultText = crypto.createHash(algorithm, password).update(orgText, 'utf8').digest('hex');
                str = resultText;
                $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
            } else {
                alert('암호화 할 텍스트를 입력하세요');
            }
        }
        // PBKDF2
        else if ($(this).data('category') == 'PBKDF2') {
            if ($.trim($('#pbkdf2Password').val()) != '') {
                var password = $('#pbkdf2Password').val();
                var salt = $('#pbkdf2Salt').val();
                var iterations = parseInt($('#pbkdf2Iterations').val());
                var keylen = parseInt($('#pbkdf2Keylen').val());
                var digest = $('#pbkdf2Algorithm').val();
                crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
                    if (err) console.log(err);
                    str = derivedKey.toString('hex');
                    $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
                });
            } else {
                alert('암호화 할 패스워드를 입력하세요');
            }
        }
        // AES
        else if ($(this).data('category') == 'AES') {
            if ($(this).data('action') == 'E') {
                if ($.trim($('#aesPlainText').val()) != '') {
                    var mode = $("#aesMode").val();
                    var keySize = $("#aesKeySize").val();
                    var password = $("#aesSecretKey").val();
                    var plainText = $("#aesPlainText").val();
                    var cipher = crypto.createCipher('aes-'+keySize+'-'+mode, password);
                    var encoding = $("#aesEncoding").val();
                    var result = cipher.update(plainText, 'utf8', encoding);
                    result += cipher.final(encoding);
                    str = result;
                    $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
                } else {
                    alert('암호화 할 Plain Text를 입력하세요');
                }
            } else {
                if ($.trim($('#aesCipherText').val()) != '') {
                    var mode = $("#aesMode").val();
                    var keySize = $("#aesKeySize").val();
                    var password = $("#aesSecretKey").val();
                    var cipherText = $("#aesCipherText").val();
                    var encoding = $("#aesEncoding").val();
                    try{
                        var decipher = crypto.createDecipher('aes-'+keySize+'-'+mode, password);
                        var result = decipher.update(cipherText, encoding, 'utf8');
                        result += decipher.final('utf8');
                        str = result;
                        $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
                    }catch(e){
                        alert(e.message);
                    }
                } else {
                    alert('복호화 할 Cipher Key를 입력하세요');
                }
            }
        }
        // Random
        else if ($(this).data('category') == 'RANDOM') {
            var size = parseInt($("#randomSize").val());
            var encoding = $("#randomEncoding").val();
            crypto.randomBytes(size, function(err, buf){
                str = buf.toString(encoding);
                $('.cryptoDs').html('<span class="text-success">'+$.trim(str)+'</span>');
            });
        }
    });
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