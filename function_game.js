
function menugame() {
document.getElementById('principal').innerHTML="<table border=0><td align=right width=500><h1><b>G.A.M.E.</b> by mabskmk</h1><br><b id=1></b><b id=2></b><b id=3></b><br><b id=4></b><b id=5></b><b id=6></b><br><b id=7></b><b id=8></b><b id=9></b><br><br><br><b id=10></b><b id=11></b><b id=12></b><b id=13></b><b id=14></b><b id=15></b><br><br><br><input type=button onClick='ppmain(1)' value='.Clean.'><br></font><tr></table>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btntuto.disabled=false;
btnyotu.disabled=false;
startGame()
}
//rand=Math.floor((Math.random() * 10) + 132);

//test
function startGame() {
switch (numero) {
case 1:
mydiv='1',imgur='VTTE2gJ.gif'
break;
case 2:
mydiv='2',imgur='AmpFGDr.gif'
break;
case 3:
mydiv='3',imgur='QVjmOo1.png'
break;
case 4:
mydiv='5',imgur='L0okcXj.gif'
break;
case 5:
mydiv='5',imgur='byemFHj.gif'
break;
case 6:
mydiv='6',imgur='Yfl1Ngj.png'
break;
case 7:
mydiv='7',imgur='Ov5zTi6.png'
break;
case 8:
mydiv='8',imgur='goFjeiV.png'
break;
case 9:
mydiv='9',imgur='ZMRsPYv.png'
break;
case 10:
mydiv='1',imgur='b3DTdKy.png'
break;
case 11:
mydiv='2',imgur='6esytlH.png'
break;
case 12:
mydiv='3',imgur='3zvtOl9.png'
break;
case 13:
mydiv='4',imgur='RnyPbox.gif'
break;
case 14:
mydiv='5',imgur='wUfekDC.png'
break;
case 15:
mydiv='6',imgur='9QvIahU.gif'
break;
case 16:
mydiv='7',imgur='pSV0xV2.png'
break;
case 17:
mydiv='8',imgur='tieF0Cw.png'
break;
case 18:
mydiv='9',imgur='AaxPzr9.gif'
break;
}
switch (cod) {
case 1:
break;
case 2:
document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+" onClick='stage("+numero+")' title="+mydiv+" class='button' width='125'>"
break;
default:
document.getElementById(numero).innerHTML="<br><iframe src=https://www.youtube.com/embed/"+youtube+" width='430' height='240' frameborder='0'></iframe><br><b>"+mydiv+"</b><br><a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png></a><br>"
break;
}
}
