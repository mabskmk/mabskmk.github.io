//====================================================
// [Variables]
//----------------------------------------------------

var rand=0; 			//randoms
var cardArray = new Array(9);	//deck
var playerOne = new Array(16);	//Player table cards and hand
var playerTwo = new Array(16);	//CPU table cards and hand
var actualPlayer=0;		//Player(1) or CPU(2) just in case you are faster than the cpu...
var cardSelect=0;		//Player's hand

var idSelect=0;			//Spot id
var cardIMG=0;			//Multi values
var hashTag=0;			//Geometric progression (1+2+4+8+16+32+64+128+256=511)


//====================================================
// Functions
//----------------------------------------------------
// menugame() - Creates the basic html
// startGame() - Start the Game
// computerTime() - Computer plays
// drawCard() - Draw a card
// highCard() - Put the highest cart at the big screen
// seLect(0) - Reset the style of the images
// seLect(idSelect) - Select one card (with css styles)
// playSelect(idSelect) - Put a selected card on the table
// reArrange(player) - Re-arrange the cards leaving the first spot open (used before a draw)
// walkOver(player) - Player cannot use any of his cards (W.O)
// victoryCheck() - Check victory for both players
// getImage(card,player) - Get the actual image url


//====================================================
// [Creates the basic html]
//----------------------------------------------------

function menugame() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>B.A.T.T.L.E!</b></h1><table border=0><tr><td align=center><img id=1 onClick='playSelect(1)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=2 onClick='playSelect(2)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=3 onClick='playSelect(3)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center rowspan=3 bgcolor=darkolivegreen><img id=10 src='https://i.imgur.com/y3p2oz2.png'><td align=center rowspan=3><img id=11 onClick='seLect(11)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=12 onClick='seLect(12)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=13 onClick='seLect(13)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=14 onClick='seLect(14)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><br><img id=15 onClick='seLect(15)' src='https://i.imgur.com/EEQqMRF.png' height='80px'><tr><td align=center><img id=4 onClick='playSelect(4)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=5 onClick='playSelect(5)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=6 onClick='playSelect(6)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr><td align=center><img id=7 onClick='playSelect(7)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=8 onClick='playSelect(8)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><td align=center><img id=9 onClick='playSelect(9)' src='https://i.imgur.com/ezqUkPo.png' height='135px'><tr></table><table border=0><tr><td align=left valign=top  height=50><b>Player:</b><br><span id=point1>oooooooooooo</span><br><font color=red><span id=w1></span></font><td align=center valign=top width=100><b>VS</b><td align=right valign=top height=50><b>Computer:</b><br><span id=point2>oooooooooooo</span><br><font color=red><span id=w2></span></font></table><br><b id=v1></b>-<b id=v2></b>-<b id=v3></b>-<b id=v4></b>-<b id=v5></b>-<b id=v6></b>-<b id=v7></b>-<b id=v8></b>-<b id=v9></b><br><br></center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
playerOne[0] = 0;
playerTwo[0] = 0;
startGame();
}


//====================================================
// [Start the game]
//----------------------------------------------------

function startGame() {

rand=-1;
actualPlayer=2;
cardSelect=-1;
idSelect=-1;
cardIMG=-1;
hashTag=0;

document.getElementById('w1').innerHTML="";
document.getElementById('w2').innerHTML="";

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
for (x=1;x<16;x++) {
	playerOne[x] = -1
	playerTwo[x] = -1
}

// Player get 5 cards
playerOne[11]=drawCard();
playerOne[12]=drawCard();
playerOne[13]=drawCard();
playerOne[14]=drawCard();
playerOne[15]=drawCard();

// Player's cards
document.getElementById(11).src = getImage(playerOne[11],1);
document.getElementById(12).src = getImage(playerOne[12],1);
document.getElementById(13).src = getImage(playerOne[13],1);
document.getElementById(14).src = getImage(playerOne[14],1);
document.getElementById(15).src = getImage(playerOne[15],1);

// Reset image style
	seLect(0);

// Computer get 5 cards
playerTwo[11]=drawCard();
playerTwo[12]=drawCard();
playerTwo[13]=drawCard();
playerTwo[14]=drawCard();
playerTwo[15]=drawCard();

//Start the battle
	computerTime();
}


//====================================================
// [Computer plays]
//----------------------------------------------------

function computerTime() {

if (actualPlayer==2) {

	cardIMG=-1;
	idSelect=-1;

	// Is the table is full?
	if (hashTag==511) {walkOver(2);}

	// Choosing a card
	while (cardIMG==-1) {

		// First random to take one card in the hand
		rand=(Math.floor(Math.random()*5)+11);

		// Second random to choose one spot on the table
		idSelect=(Math.floor(Math.random()*9)+1);

		//The chosen spot is empty
		if (playerTwo[idSelect]==-1 && playerOne[idSelect]==-1) {

		//alert("Place P2: "+(playerTwo[rand]+1)+" Spot: "+idSelect);
		
		//*********************************************************************************************
		//document.getElementById('w1').innerHTML="" ;

		playerTwo[0]=playerTwo[0] + (100*(playerTwo[rand]+1)) ;
		document.getElementById('point2').innerHTML=( playerTwo[0].toString().padStart(12, 'o') );
		document.getElementById('w2').innerHTML="+ "+(100*(playerTwo[rand]+1)) ;
		//*********************************************************************************************

		cardIMG=playerTwo[rand];
		}

		//The chosen spot contains the player's card and it's smaller than your card 
		if (playerOne[idSelect]!=-1 && playerTwo[idSelect]==-1 && (playerTwo[rand]>playerOne[idSelect])) {

		//alert("Battle P2: "+(playerTwo[rand]+1)+" P1: "+(playerOne[idSelect]+1)+" Spot: "+idSelect);

		//*********************************************************************************************
		//document.getElementById('w1').innerHTML="" ;
		document.getElementById('w2').innerHTML="+ "+(100*(playerTwo[rand]+1)) ;

		playerTwo[0]=playerTwo[0] + (100*(playerTwo[rand]+1)) ;

		if ( (playerTwo[rand] - playerOne[idSelect]) > 1 ) {
		document.getElementById('w2').innerHTML="- "+(100*(playerTwo[rand]-playerOne[idSelect])) ;
		cardArray[(playerOne[idSelect])]=cardArray[(playerOne[idSelect])]+1;
		playerTwo[0]=playerTwo[0] - (100*(playerTwo[rand]-playerOne[idSelect]));
		}

		document.getElementById('point2').innerHTML=( playerTwo[0].toString().padStart(12, 'o') );
		//*********************************************************************************************

		playerOne[idSelect]=-1;

		cardIMG=playerTwo[rand];
		}
	
	}

	//Take the card from your hand ***
	playerTwo[rand] = -1;

	//And put it on the table ***
	playerTwo[idSelect]=cardIMG;
	document.getElementById(idSelect).src = getImage(cardIMG,2);

	// GP increases
	if (hashTag% (2*(2**(idSelect-1))) < (2**(idSelect-1)) ) {
	hashTag = hashTag + (2**(idSelect-1));
	}

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

	highCard();
	reArrange(2); //could use '(actualPlayer)'

}
return;
}


//====================================================
// [Draw a card] 45 cards
// Going of 1_card_9 to 9_cards_1
//----------------------------------------------------

function drawCard() {

	// First random between the 9 numbers of the array
	rand=(Math.floor(Math.random()*9));

	// Repeats if the card number is gone
	while (cardArray[rand]==0) {rand=(Math.floor(Math.random()*9));}

	// Decreses one value of that card number
	if (cardArray[rand]>0) {cardArray[rand]=cardArray[rand]-1;}

//It's one deck for both players
return(rand);

}  


//====================================================
//Show the highest card on the table
//Compares both arrays
//idSelect gets the player side
//----------------------------------------------------

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


//====================================================
// [Card select] onClick at the players hand
//----------------------------------------------------

function seLect(idSelect) {

	// Is the table is full?
	if (idSelect!=0 && actualPlayer!=0 && hashTag==511) {setTimeout('walkOver(1)',500);}


	if (actualPlayer!=0) {
	document.getElementById(1).style = '';
	document.getElementById(2).style = '';
	document.getElementById(3).style = '';
	document.getElementById(4).style = '';
	document.getElementById(5).style = '';
	document.getElementById(6).style = '';
	document.getElementById(7).style = '';
	document.getElementById(8).style = '';
	document.getElementById(9).style = '';

	document.getElementById(11).style = 'opacity: 0.5;';
	document.getElementById(12).style = 'opacity: 0.5;';
	document.getElementById(13).style = 'opacity: 0.5;';
	document.getElementById(14).style = 'opacity: 0.5;';
	document.getElementById(15).style = 'opacity: 0.5;';
	}

	//this function may be used only to reset the style ^
	if (idSelect!=0 && actualPlayer==1) {
	document.getElementById(idSelect).style = ''; //magic
	cardSelect=idSelect;
	
		for (x=1;x<10;x++) {
		if (playerTwo[x]>-1 && (playerTwo[x]<playerOne[idSelect])) {
		document.getElementById(x).style = 'filter: sepia(100%)';
		}
		}	
	
	}

return;
}


//====================================================
// [Play selected card] onClick on the table
//----------------------------------------------------

function playSelect(idSelect) {

if (actualPlayer==1) {

	//The chosen spot is empty
	if (cardSelect!='' && hashTag<511 && playerTwo[idSelect]==-1 && playerOne[idSelect]==-1) {

	//*********************************************************************************************
	//document.getElementById('w2').innerHTML="" ;

	playerOne[0]=playerOne[0] + (100*(playerOne[cardSelect]+1)) ;

	document.getElementById('point1').innerHTML=( playerOne[0].toString().padStart(12, 'o') );
	document.getElementById('w1').innerHTML="+ "+(100*(playerOne[cardSelect]+1)) ;
	//*********************************************************************************************

	//And put it on the table ***
	playerOne[idSelect] = playerOne[cardSelect];
	document.getElementById(idSelect).src = getImage(playerOne[idSelect],1);

	//Take the card from your hand ***
	playerOne[cardSelect] = -1;
	document.getElementById(cardSelect).src = getImage();

	// Geometric progression
	if (hashTag% (2*(2**(idSelect-1))) < (2**(idSelect-1)) ) {
	hashTag = hashTag + (2**(idSelect-1));
	}

	highCard();
	cardSelect='';
	reArrange(1);
	}

	//The chosen spot contains the computer's card and it's smaller than your card 
	if (cardSelect!='' && playerTwo[idSelect]!=-1 && (playerOne[cardSelect]>playerTwo[idSelect])) {

	//*********************************************************************************************
	//document.getElementById('w2').innerHTML="" ;
	document.getElementById('w1').innerHTML="+ "+(100*(playerOne[cardSelect]+1)) ;

	playerOne[0]=playerOne[0] + (100*(playerOne[cardSelect]+1)) ;

	if ( (playerOne[cardSelect]-playerTwo[idSelect]) > 1 ) {
	document.getElementById('w1').innerHTML="- "+(100*((playerOne[cardSelect]+1)-(playerTwo[idSelect]+1))) ;
	playerOne[0]=playerOne[0] - (100*((playerOne[cardSelect]+1)-(playerTwo[idSelect]+1))) ;
	cardArray[(playerTwo[idSelect])]=cardArray[(playerTwo[idSelect])]+1;
	}

	document.getElementById('point1').innerHTML=( playerOne[0].toString().padStart(12, 'o') );
	//*********************************************************************************************

	playerTwo[idSelect] = -1;

	//And put it on the table ***
	playerOne[idSelect] = playerOne[cardSelect];
	document.getElementById(idSelect).src = getImage(playerOne[idSelect],1);

	//Take the card from your hand ***
	playerOne[cardSelect] = -1;
	document.getElementById(cardSelect).src = getImage();

	// Geometric progression
	if (hashTag% (2*(2**(idSelect-1))) < (2**(idSelect-1)) ) {
	hashTag = hashTag + (2**(idSelect-1));
	}

	highCard();
	cardSelect='';
	reArrange(1);
	}

}
return;
}


//====================================================
// [Re-Arrange both hands to free the value '11']
// using a Tetris concept
//----------------------------------------------------
//[11]|
//[12]v
//[13]
//[14]|
//[15]v


function reArrange(player) {

	setTimeout('victoryCheck()',500);

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
	if (playerTwo[11]==-1) {playerTwo[11]=drawCard();} //draws on value 11

	if(actualPlayer!=0) {actualPlayer=2;}

	setTimeout('computerTime()',500);

	}

	if (player==2) {
	for (x=15;x>10;x--) {
		if (playerTwo[x]==-1 && playerTwo[x-1]!=-1) {
		playerTwo[x] = playerTwo[x-1];
		playerTwo[x-1] = -1;
		}
	}

	if (playerOne[11]==-1) {playerOne[11]=drawCard();} //draws on value 11
	document.getElementById(11).src = getImage(playerOne[11],1);

	if(actualPlayer!=0) {actualPlayer=1;}

	}
return;
}


//====================================================
// [W.O!?]
// https://thespool.net/wp-content/uploads/2019/09/cropped-lawnmower-man.jpeg
//----------------------------------------------------

function walkOver(player) {

rand=-1;

	if (player==1) {

	// Find the highest card in your hand
	for (x=11;x<16;x++) {
	if (playerOne[x]>rand) {rand=playerOne[x];}
	}

	// Check if you can overcome one of the player cards
	for (x=1;x<10;x++) {
	if (playerTwo[x]<rand && playerOne[x]==-1) {return;}
	}

	for (x=11;x<16;x++) {
	document.getElementById(x).style = 'opacity: 0.2;';
	}

	victoryCheck(2); //Computer wins
	}


	if (player==2) {

	// Find the highest card in your hand
	for (x=11;x<16;x++) {
	if (playerTwo[x]>rand) {rand=playerTwo[x];}
	}

	// Check if you can overcome one of the player cards
	for (x=1;x<10;x++) {
	if (playerOne[x]<rand && playerTwo[x]==-1) {return;}
	}

	victoryCheck(1); //Player wins
	}

}


//====================================================
// [Victory check]
//----------------------------------------------------
// [__1] [__2] [__4]
// [__8] [_16] [_32]
// [_64] [128] [256]

// 'winner' used only in case of W.O ^
function victoryCheck(winner) {

cardIMG=0;
rand=0;

	if (playerOne[1]!=-1 && playerOne[2]!=-1 && playerOne[3]!=-1 &&rand==0) {cardIMG=7; rand=1;}
	if (playerOne[4]!=-1 && playerOne[5]!=-1 && playerOne[6]!=-1 &&rand==0) {cardIMG=56; rand=1;}
	if (playerOne[7]!=-1 && playerOne[8]!=-1 && playerOne[9]!=-1 &&rand==0) {cardIMG=448; rand=1;}

	if (playerOne[1]!=-1 && playerOne[4]!=-1 && playerOne[7]!=-1 &&rand==0) {cardIMG=73; rand=1;}
	if (playerOne[2]!=-1 && playerOne[5]!=-1 && playerOne[8]!=-1 &&rand==0) {cardIMG=146; rand=1;}
	if (playerOne[3]!=-1 && playerOne[6]!=-1 && playerOne[9]!=-1 &&rand==0) {cardIMG=292; rand=1;}

	if (playerOne[1]!=-1 && playerOne[5]!=-1 && playerOne[9]!=-1 &&rand==0) {cardIMG=273; rand=1;}
	if (playerOne[3]!=-1 && playerOne[5]!=-1 && playerOne[7]!=-1 &&rand==0) {cardIMG=84; rand=1;}

	if (playerTwo[1]!=-1 && playerTwo[2]!=-1 && playerTwo[3]!=-1 &&rand==0) {cardIMG=7; rand=2;}
	if (playerTwo[4]!=-1 && playerTwo[5]!=-1 && playerTwo[6]!=-1 &&rand==0) {cardIMG=56; rand=2;}
	if (playerTwo[7]!=-1 && playerTwo[8]!=-1 && playerTwo[9]!=-1 &&rand==0) {cardIMG=448; rand=2;}

	if (playerTwo[1]!=-1 && playerTwo[4]!=-1 && playerTwo[7]!=-1 &&rand==0) {cardIMG=73; rand=2;}
	if (playerTwo[2]!=-1 && playerTwo[5]!=-1 && playerTwo[8]!=-1 &&rand==0) {cardIMG=146; rand=2;}
	if (playerTwo[3]!=-1 && playerTwo[6]!=-1 && playerTwo[9]!=-1 &&rand==0) {cardIMG=292; rand=2;}

	if (playerTwo[1]!=-1 && playerTwo[5]!=-1 && playerTwo[9]!=-1 &&rand==0) {cardIMG=273; rand=2;}
	if (playerTwo[3]!=-1 && playerTwo[5]!=-1 && playerTwo[7]!=-1 &&rand==0) {cardIMG=84; rand=2;}

if (rand>0) {

for (x=1;x<10;x++) {

	document.getElementById(x).style = 'opacity: 0.2;';

	if (cardIMG>=(2**(x-1)) && (cardIMG% (2*(2**(x-1))) >= (2**(x-1))) ) {
	//alert("Pos: "+x+" card: "+cardIMG+" GP: "+(2**(x-1)));
	document.getElementById(x).style = '';
	}

}

if (rand==1 || winner==1) {
document.getElementById('w1').innerHTML="winner! ";
document.getElementById('w2').innerHTML="........"; // ._.
} 
else if (rand==2 || winner==2) {
document.getElementById('w2').innerHTML=" winner!";
document.getElementById('w1').innerHTML=".........."; // ._.
}

actualPlayer=0;
setTimeout('startGame()',5000);
}

}


//====================================================
// [Get an url for the actual card]
//----------------------------------------------------

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
