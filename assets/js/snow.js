// widget by Embed.im (Licenses & Credits: https://app.embed.im/licenses.txt)
var embedimSnow = document.getElementById("embedim--snow");
if (!embedimSnow) {
  function embRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function embRandColor() {
    var items = ["radial-gradient(circle at top left,#dcf2fd,#60b4f2)", "#dbf2fd", "#d8f8ff", "#b8ddfa"];
    return items[Math.floor(Math.random() * items.length)];
  }

  var embCSS = ".embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}";
  var embHTML = "";

  for (i = 1; i < 200; i++) {
    embHTML += '<i class="embedim-snow"></i>';
    var rndX = (embRand(0, 1000000) * 0.0001).toFixed(4);
    var rndO = (embRand(-100000, 100000) * 0.0001).toFixed(4);
    var rndT = (embRand(3, 8) * 10).toFixed(2);
    var rndS = (embRand(0, 10000) * 0.0001).toFixed(4);

    // 시작 위치를 화면 위로 설정 (-100vh ~ 0vh)
    var startY = -embRand(0, 100);
    
    embCSS += `.embedim-snow:nth-child(${i}){
      background: ${embRandColor()};
      opacity: ${(embRand(1, 10000) * 0.0001).toFixed(4)};
      transform: translate(${rndX}vw, ${startY}vh) scale(${rndS});
      animation: fall-${i} ${embRand(10, 30)}s -${embRand(0, 30)}s linear infinite
    }
    @keyframes fall-${i} {
      ${rndT}% {
        transform: translate(${(parseFloat(rndX) + parseFloat(rndO)).toFixed(4)}vw, ${rndT}vh) scale(${rndS})
      }
      to {
        transform: translate(${(parseFloat(rndX) + parseFloat(rndO) / 2).toFixed(4)}vw, 105vh) scale(${rndS})
      }
    }`;
  }

  embedimSnow = document.createElement("div");
  embedimSnow.id = "embedim--snow";
  embedimSnow.innerHTML = `<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}${embCSS}</style>${embHTML}`;
  document.body.appendChild(embedimSnow);
}