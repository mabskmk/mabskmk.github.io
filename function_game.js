
function menugame() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>W.I.P.</h1><table border=0><tr><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><td align=center rowspan=3 bgcolor=darkolivegreen><img src='https://i.imgur.com/y3p2oz2.png'><td align=center rowspan=3><img src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img src='https://i.imgur.com/EEQqMRF.png' height='80px'><tr><td align=center><img src='https://i.imgur.com/E1IwRRY.png' height='135px'><td align=center><img src='https://i.imgur.com/E1IwRRY.png' height='135px'><td align=center><img src='https://i.imgur.com/E1IwRRY.png' height='135px'><tr><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><td align=center><img src='https://i.imgur.com/EEQqMRF.png' height='135px'><tr></table><br><br></center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
// style = 'border:4px dashed green;' 
}

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
