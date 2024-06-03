
var rand=0; 			//randoms
var cardArray = new Array(9);	//deck
var playerOne = new Array(16);	//Player table cards and hand
var playerTwo = new Array(16);	//CPU table cards and hand
var idSelect=0;			//Spot id
var cardIMG=0;			//Multi values
var hashTag=0;			//GP (1+2+4+8+16+32+64+128+256=511)

//Creates the basic html
function menugame() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>W.I.P.</h1><table border=0><tr><td align=center><img id=1 onClick='playSelect(1)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=2 onClick='playSelect(2)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=3 onClick='playSelect(3)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center rowspan=3 bgcolor=darkolivegreen><img id=10 src='https://i.imgur.com/y3p2oz2.png'><td align=center rowspan=3><img id=11 onClick='seLect(11)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=12 onClick='seLect(12)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=13 onClick='seLect(13)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=14 onClick='seLect(14)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=15 onClick='seLect(15)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><tr><td align=center><img id=4 onClick='playSelect(4)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=5 onClick='playSelect(5)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=6 onClick='playSelect(6)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr><td align=center><img id=7 onClick='playSelect(7)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=8 onClick='playSelect(8)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=9 onClick='playSelect(9)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr></table>(<b id=v1></b>)(<b id=v2></b>)(<b id=v3></b>)(<b id=v4></b>)(<b id=v5></b>)(<b id=v6></b>)(<b id=v7></b>)(<b id=v8></b>)(<b id=v9></b>)<br><br></center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
startGame();
}


function startGame() {

	//alert("Start Game");

	clearTable();

	//Players hand
	playerOne[11]=drawCard();
	playerOne[12]=drawCard();
	playerOne[13]=drawCard();
	playerOne[14]=drawCard();
	playerOne[15]=drawCard();

	//Players frontend
	document.getElementById(11).src = getImage(playerOne[11],1);
	document.getElementById(12).src = getImage(playerOne[12],1);
	document.getElementById(13).src = getImage(playerOne[13],1);
	document.getElementById(14).src = getImage(playerOne[14],1);
	document.getElementById(15).src = getImage(playerOne[15],1);

	document.getElementById(11).style = 'opacity: 0.5;';
	document.getElementById(12).style = 'opacity: 0.5;';
	document.getElementById(13).style = 'opacity: 0.5;';
	document.getElementById(14).style = 'opacity: 0.5;';
	document.getElementById(15).style = 'opacity: 0.5;';

	//Computers hand
	playerTwo[11]=drawCard();
	playerTwo[12]=drawCard();
	playerTwo[13]=drawCard();
	playerTwo[14]=drawCard();
	playerTwo[15]=drawCard();

	computerTime();


//Deck debug
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


//Deck with 45 cards (1x'9', 2x'8', 3x'7', 4x'6', 5x'5', 6x'4', 7x'3', 8x'2' and 9x'1')
function drawCard() {
  rand=(Math.floor(Math.random()*9));
  while (cardArray[rand]==0) {rand=(Math.floor(Math.random()*9));}
  if (cardArray[rand]>0) {cardArray[rand]=cardArray[rand]-1;}
  return(rand);
}  


	//Show the highest card on the table
	//Compares both arrays
	//idSelect gets the player side
function highCard() {
cardIMG=-1;
idSelect=0;
	for (x=1;x<10;x++) {
		if (playerOne[x]>cardIMG) {cardIMG = playerOne[x]; idSelect=1;}
	}
	for (x=1;x<10;x++) {
		if (playerTwo[x]>cardIMG) {cardIMG = playerTwo[x]; idSelect=2;}
	}
	document.getElementById(10).src = getImage(cardIMG,idSelect);	
return;
}



	//Simple version only to show the cards on the table
function computerTime() {

	//first random to take one card in the hand
	rand=(Math.floor(Math.random()*5)+11);

  	idSelect=playerTwo[rand];
	playerTwo[rand] = -1;

	//second random to choose one spot on the table
	rand=(Math.floor(Math.random()*9)+1);
	while (playerTwo[rand]!=-1 || playerOne[rand]!=-1) {rand=(Math.floor(Math.random()*9)+1);}

	//GP
	hashTag = hashTag + (2**(rand-1));

	playerTwo[rand]=idSelect;
	document.getElementById(rand).src = getImage(idSelect,2);

	highCard();
	reArrange(2);

return;
}


	//Card select
function seLect(idSelect) {

	document.getElementById(11).style = 'opacity: 0.5;';
	document.getElementById(12).style = 'opacity: 0.5;';
	document.getElementById(13).style = 'opacity: 0.5;';
	document.getElementById(14).style = 'opacity: 0.5;';
	document.getElementById(15).style = 'opacity: 0.5;';

	//this function may be used only to reset the style ^
	if (idSelect!=0) {
	document.getElementById(idSelect).style = ''; //magic
	cardIMG=idSelect;
	}

return;
}


	//Play selected Card
function playSelect(idSelect) {

	//document.getElementById(idSelect).src = document.getElementById(cardIMG).src

	if (cardIMG!='' && hashTag<511) {
	playerOne[idSelect] = playerOne[cardIMG];
	document.getElementById(idSelect).src = getImage(playerOne[idSelect],1)
	playerOne[cardIMG] = -1
	document.getElementById(cardIMG).src = getImage();

	//GP
	hashTag = hashTag + (2**(idSelect-1));

	highCard();
	reArrange(1);
	cardIMG='';
	}

return;
}


	//Re-Arrange both hands to free to first spot array[11]
function reArrange(player) {

	if (player==1) {
	for (x=15;x>10;x--) {
		if (playerOne[x]==-1 && playerOne[x-1]!=-1) {
		playerOne[x] = playerOne[x-1];
		document.getElementById(x).src = getImage(playerOne[x],1);
		playerOne[x-1] = -1;
		document.getElementById(x-1).src = getImage();
		}
	}
	seLect(0); //reset the style
	playerTwo[11]=drawCard(); //draws on spot 11
	computerTime();
	}

	if (player==2) {
	for (x=15;x>10;x--) {
		if (playerTwo[x]==-1 && playerTwo[x-1]!=-1) {
		playerTwo[x] = playerTwo[x-1];
		playerTwo[x-1] = -1;
		}
	}

	//GP
	//alert("GP: "+hashTag);

	playerOne[11]=drawCard(); //draws on spot 11
	document.getElementById(11).src = getImage(playerOne[11],1);
	}

return;
}


	//Resets everything!!
function clearTable() {
cardSelected=-1;
hashTag=0;
document.getElementById('1').src=getImage(); //empty image
document.getElementById('2').src=getImage();
document.getElementById('3').src=getImage();
document.getElementById('4').src=getImage();
document.getElementById('5').src=getImage();
document.getElementById('6').src=getImage();
document.getElementById('7').src=getImage();
document.getElementById('8').src=getImage();
document.getElementById('9').src=getImage();
document.getElementById('10').src=getImage();
document.getElementById('11').src=getImage();
document.getElementById('12').src=getImage();
document.getElementById('13').src=getImage();
document.getElementById('14').src=getImage();
document.getElementById('15').src=getImage();
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
for (x=0;x<16;x++) {
	playerOne[x] = -1; //0 or -1?
	playerTwo[x] = -1; //0 or -1?
}
return;
}



	//Get an url for the actual card
function getImage(card,player) {
if (player==2) {card=card+9}

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
default:
mydiv='null',imgur='https://i.imgur.com/ezqUkPo.png' //empty image
break;
}
return(imgur);
}
