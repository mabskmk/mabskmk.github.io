
var rand=0;
var cardArray = new Array(9);
var playerOne = new Array(9);
var playerTwo = new Array(9);
var idSelect=0;
var cardIMG=0;

//Creates the basic html
function menugame() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>W.I.P.</h1><table border=0><tr><td align=center><img id=1 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=2 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=3 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center rowspan=3 bgcolor=darkolivegreen><img id=10 src='https://i.imgur.com/y3p2oz2.png'><td align=center rowspan=3><img id=11 src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=12 src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=13 src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=14 src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=15 src='https://i.imgur.com/EEQqMRF.png' height='80px'><tr><td align=center><img id=4 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=5 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=6 src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr><td align=center><img id=7 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=8 src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=9 src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr></table>(<b id=v1></b>)(<b id=v2></b>)(<b id=v3></b>)(<b id=v4></b>)(<b id=v5></b>)(<b id=v6></b>)(<b id=v7></b>)(<b id=v8></b>)(<b id=v9></b>)</center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
clearTable();
cpuAI();
startGame();
// style = 'border:4px dashed green;' 
}

//Clear everything
function clearTable() {
document.getElementById('1').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('2').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('3').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('4').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('5').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('6').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('7').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('8').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('9').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('10').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('11').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('12').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('13').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('14').src="https://i.imgur.com/ezqUkPo.png";
document.getElementById('15').src="https://i.imgur.com/ezqUkPo.png";
cardArray = [];
cardArray[0]=9;
cardArray[1]=8;
cardArray[2]=7;
cardArray[3]=6;
cardArray[4]=5;
cardArray[5]=4;
cardArray[6]=3;
cardArray[7]=2;
cardArray[8]=1;
playerOne = [];
playerTwo = [];
}

//Bugged
function startGame() {
for (x=0;x<6;x++) {
rand=(Math.floor(Math.random()*9));
while (cardArray[rand]==0) {rand=(Math.floor(Math.random()*9));}
if (cardArray[rand]>0) {cardArray[rand]=cardArray[rand]-1;}
cardIMG=getImage(rand,1);
idSelect=11+x;
document.getElementById(idSelect).src=cardIMG;
}
}


//Cpu
function cpuAI() {

  //Set a randomValue
  rand=(Math.floor(Math.random()*9));

  //Compares with the card box
  while (cardArray[rand]==0) {rand=(Math.floor(Math.random()*9));}

  if (cardArray[rand]>0) {cardArray[rand]=cardArray[rand]-1;}

//  alert(rand+1);
  cardIMG=getImage(rand+1,2);
  rand=(Math.floor(Math.random()*9));
  document.getElementById(rand).src=cardIMG;
  document.getElementById(10).src=cardIMG;

//debug
document.getElementById('v1').innerHTML=cardArray[0];
document.getElementById('v2').innerHTML=cardArray[1];
document.getElementById('v3').innerHTML=cardArray[2];
document.getElementById('v4').innerHTML=cardArray[3];
document.getElementById('v5').innerHTML=cardArray[4];
document.getElementById('v6').innerHTML=cardArray[5];
document.getElementById('v7').innerHTML=cardArray[6];
document.getElementById('v8').innerHTML=cardArray[7];
document.getElementById('v9').innerHTML=cardArray[8];
}

//Card database
function getImage(card,player) {
if (player==2) {card=card+8}

switch (card) {
case 0:
mydiv='1',imgur='https://i.imgur.com/E1IwRRY.png',imgur2='https://i.imgur.com/EEQqMRF.png'
break;
case 1:
mydiv='2',imgur='https://i.imgur.com/tzydlOg.png',imgur2='https://i.imgur.com/eBuux5S.png'
break;
case 2:
mydiv='3',imgur='https://i.imgur.com/inyTLQA.png',imgur2='https://i.imgur.com/FIJbtOr.png'
break;
case 3:
mydiv='4',imgur='https://i.imgur.com/lQWd4rZ.png',imgur2='https://i.imgur.com/L5VHOGX.png'
break;
case 4:
mydiv='5',imgur='https://i.imgur.com/CdVsL8O.png',imgur2='https://i.imgur.com/bDAhMow.png'
break;
case 5:
mydiv='6',imgur='https://i.imgur.com/y0mU6oD.png',imgur2='https://i.imgur.com/OEP7ZdZ.png'
break;
case 6:
mydiv='7',imgur='https://i.imgur.com/JDQgKjy.png',imgur2='https://i.imgur.com/j2WCRYE.png'
break;
case 7:
mydiv='8',imgur='https://i.imgur.com/FXWLiK9.png',imgur2='https://i.imgur.com/vH0Sn4j.png'
break;
case 8:
mydiv='9',imgur='https://i.imgur.com/fr31WcB.png',imgur2='https://i.imgur.com/hpqcDPb.png'
break;
case 9:
mydiv='1',imgur='https://i.imgur.com/y3p2oz2.png',imgur2='https://i.imgur.com/CQBU1Pr.png'
break;
case 10:
mydiv='2',imgur='https://i.imgur.com/XbFttTH.png',imgur2='https://i.imgur.com/uV2wCH2.png'
break;
case 11:
mydiv='3',imgur='https://i.imgur.com/5KO2zvo.png',imgur2='https://i.imgur.com/CcEko4p.png'
break;
case 12:
mydiv='4',imgur='https://i.imgur.com/ZUNguGw.png',imgur2='https://i.imgur.com/7D3HA2Z.png'
break;
case 13:
mydiv='5',imgur='https://i.imgur.com/h1D5BKD.png',imgur2='https://i.imgur.com/kJwfyMs.png'
break;
case 14:
mydiv='6',imgur='https://i.imgur.com/8LZatvc.png',imgur2='https://i.imgur.com/a8JLp22.png'
break;
case 15:
mydiv='7',imgur='https://i.imgur.com/uDTO94M.png',imgur2='https://i.imgur.com/Op1poJQ.png'
break;
case 16:
mydiv='8',imgur='https://i.imgur.com/BgUv7S1.png',imgur2='https://i.imgur.com/X71zhkp.png'
break;
case 17:
mydiv='9',imgur='https://i.imgur.com/XvzexVW.png',imgur2='https://i.imgur.com/DcIgTOb.png'
break;
}
return(imgur);
}
