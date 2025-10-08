//====================================================
// [Variables]
//----------------------------------------------------

var cardArray = new Array(9);	//deck
var playerOne = new Array(16);	//Player table, cards and hand
var playerTwo = new Array(16);	//CPU table, cards and hand
var actualPlayer=0;		//Player(1) or CPU(2) just in case you are faster than the cpu...
var cardSelect=0;		//Player's hand

var botX=0; 		//worker
var botY=0;			//worker
var botZ=0;			//worker

var hashTag=0;		//Geometric progression (1+2+4+8+16+32+64+128+256=511)


//====================================================
// Functions
//----------------------------------------------------
// menugame() - Create the basic html
// gameManual() - Basic html showing how to play
//   function showEvil() change card number 9
//   function showGood() change card number 9
// startGame() - Start the Game
// computerTime() - Computer plays
// drawCard() - Draw a card
// highCard() - Place the highest card on the big screen
// resetStyle() - Reset image style
// seLect(botY) - Select one card (with css styles)
// playSelect(botY) - Place the selected card on the table
// calculatePoints(player,botX,botY,combo) - Honor points
// reArrange(player) - Re-arrange the cards leaving the first spot open (used before a draw)
// walkOver(player) - Player cannot use any of his cards (W.O)
// victoryCheck(0) - Check victory for both players
// getImage(card,player) - Get the actual image url


//====================================================
// [Create the basic html]
//----------------------------------------------------

function menugame() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>B.A.T.T.L.E!</b></h1><table border=1><tr><td align=center><img id=1 onClick='playSelect(1)' src='' height='135px'><td align=center><img id=2 onClick='playSelect(2)' src='' height='135px'><td align=center><img id=3 onClick='playSelect(3)' src='' height='135px'><td align=center rowspan=3 bgcolor=darkolivegreen><img id=10 src='https://i.imgur.com/y3p2oz2.png'><td align=center rowspan=3><img id=11 onClick='seLect(11)' src='' height='80px'><br><img id=12 onClick='seLect(12)' src='' height='80px'><br><img id=13 onClick='seLect(13)' src='' height='80px'><br><img id=14 onClick='seLect(14)' src='' height='80px'><br><img id=15 onClick='seLect(15)' src='' height='80px'><tr><td align=center><img id=4 onClick='playSelect(4)' src='' height='135px'><td align=center><img id=5 onClick='playSelect(5)' src='' height='135px'><td align=center><img id=6 onClick='playSelect(6)' src='' height='135px'><tr><td align=center><img id=7 onClick='playSelect(7)' src='' height='135px'><td align=center><img id=8 onClick='playSelect(8)' src='' height='135px'><td align=center><img id=9 onClick='playSelect(9)' src='' height='135px'><tr></table><table border=0><tr><td align=left valign=top  height=50><b>Player:</b><br><span id=point1>oooooooooooo</span><br><font color=red><span id=w1></span></font> <font color=cyan><span id=c1></span></font><td align=center valign=top width=100><b>VS</b><td align=right valign=top height=50><b>Computer:</b><br><span id=point2>oooooooooooo</span><br><font color=red><span id=w2></span></font> <font color=cyan><span id=c2></span></font></table><br><b id=v1></b>-<b id=v2></b>-<b id=v3></b>-<b id=v4></b>-<b id=v5></b>-<b id=v6></b>-<b id=v7></b>-<b id=v8></b>-<b id=v9></b><br><input type=button onClick='gameManual()' value='How to' id=help1><input type=button onClick='menugame()' value='Play!' id=help2><br></center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
help1.disabled=false;
help2.disabled=true;
playerOne[0] = 0;
playerTwo[0] = 0;
startGame();
}

function gameManual() {
document.getElementById('principal').innerHTML="<center><h1 id=nomeprinc><b>B.A.T.T.L.E!</b></h1><table border=0 width=550><tr><td align=center><font color=cyan  onmouseover='showGood()'>*The gameplay include the basic of tic-tac-toe with some improvements.<br><br>*Use the cards on the right side to play.<br><br>*After select the card, click on the field(left) to make your move.<br><br>*The first player to place three cards in a row wins.<br><br>*Winning with three cards of the same power gives you an extra bonus!</font><td align=center><img id=10 src='https://i.imgur.com/vOFiWYf.png'><td align=center><font color=red onmouseover='showEvil()'>*Each card you play on the field gives you honor points equivalent to the strength of the card x100.<br><br>*Strong cards may be pulled over small ones... that's called battle!<br><br>*Beware, if you try to defeat a weak opponent using a very strong card... You will lose the difference of points.<br><br>*Defeating cards in sequence gives you an extra bonus!</font></table><br><input type=button onClick='gameHelp()' value='How to' id=help1><input type=button onClick='menugame()' value='Play!' id=help2><br></center>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
help1.disabled=true;
help2.disabled=false;
//startGame();
}

function showEvil() {document.getElementById('10').src=getImage(8,2);}
function showGood() {document.getElementById('10').src=getImage(8,1);}

//====================================================
// [Start the game]
//----------------------------------------------------

function startGame() {

botX=-1;
botY=-1;
botZ=-1;

hashTag=0;
cardSelect='';
actualPlayer=2;

document.getElementById('w1').innerHTML="";
document.getElementById('w2').innerHTML="";
document.getElementById('c1').innerHTML="";
document.getElementById('c2').innerHTML="";

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
for (let x=1;x<16;x++) {
	playerOne[x] = -1;
	playerTwo[x] = -1;
}
playerOne[10] = 0;
playerTwo[10] = 0;

// Player receives 5 cards
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
	resetStyle();

// Computer receives 5 cards
playerTwo[11]=drawCard();
playerTwo[12]=drawCard();
playerTwo[13]=drawCard();
playerTwo[14]=drawCard();
playerTwo[15]=drawCard();

//Start the battle
	computerTime();
}


//====================================================
// [Computer plays] AI ver 3.10.2025
//----------------------------------------------------

async function computerTime() {

let playingOffensive = new Array(9);
let improvedRandom   = [];

const matrixObjective = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];	

if (actualPlayer==2) {

	//-------------------------------------------------
	//Reseting values jic
	//-------------------------------------------------
	improvedRandom   = [];
	improvedRandom.length=0;

	for (let a=0; a<9; a++) {
		playingOffensive[a] = 0;
	}
	
	botX=-1; //Random card in hand
	botY=-1; //Random spot on the table
	botZ=-1; //Perfect selection
	//-------------------------------------------------


	// W.O test (full table)
	if (hashTag==511) {walkOver(2);}


	//-------------------------------------------------
	// (AI) Looking for objectives
	//-------------------------------------------------
	for (let lin=0;lin<8;lin++) {
	for (let col=0;col<3;col++) {
		if ( playerTwo[ (matrixObjective[lin][col]) ] !=-1 ) {
			playingOffensive[lin]=playingOffensive[lin]+1;
		}
	}
	}	
	//-------------------------------------------------


	//-------------------------------------------------
	// (AI) Choosing the best objective
	//-------------------------------------------------
	for (let x=0; x<8; x++) {
		if (playingOffensive[x] > botZ) {botZ = playingOffensive[x]};
	}
	//-------------------------------------------------


	//-------------------------------------------------
	// (AI) Creating a list of possibilities
	//-------------------------------------------------
	while (improvedRandom.length < 1) {
	for (let celula=1;celula<10;celula++) {
		
			matrix:
			for (let lin=0; lin<8; lin++) {
			for (let col=0; col<3; col++) {
				if ( (matrixObjective[lin][col]==celula) && (playingOffensive[lin]==botZ) ) {

					if (playerTwo[celula] == -1) {
						if (playerOne[celula] == -1) {
							improvedRandom.push(celula);
							break matrix;
						}
						else if ( canOvercome(playerOne[celula]) ) { //***
							improvedRandom.push(celula);
							break matrix;
						}
					}
				}
			}
			}
		
	}
	if (improvedRandom.length < 1) {botZ--;}
	}
	//-------------------------------------------------



	//-------------------------------------------------
	// Choosing a card and spot
	botX=(Math.floor(Math.random()*5)+11);

	// Choosing a spot
	botZ=(Math.floor(Math.random()*improvedRandom.length)); //(AI) possibilities
	botY=improvedRandom[botZ];

	//If the chosen spot isn't empty ***
	if (playerOne[botY]!=-1) {
		while (playerTwo[botX]<=playerOne[botY]) {botX=(Math.floor(Math.random()*5)+11);}
	}
	//-------------------------------------------------


	await calculatePoints(2,(playerTwo[botX]),(playerOne[botY]),((playerOne[botY]!=-1? 1 : 0)));
	playerOne[botY] = -1;
	botZ = playerTwo[botX];
	

	//Take the card from your hand
	playerTwo[botX] = -1;

	//And put it on the table
	playerTwo[botY] = botZ;
	document.getElementById(botY).src = getImage(botZ,2);

	// GP increases
	if (hashTag % (2*(2**(botY-1))) < (2**(botY-1)) ) {
	hashTag = hashTag + (2**(botY-1));
	}

	highCard();
	await reArrange(2);

}
return;
}

//====================================================
// [Can Overcome?] (AI)
//----------------------------------------------------

function canOvercome(card) {
botX = -1;

for (let x=11; x<16; x++) {
if (playerTwo[x]>botX) {botX=playerTwo[x];}
}

if (botX > card) {return true;} else {return false;}

}

//====================================================
// [Draw a card] 45 cards
// Going from 1_card_9 to 9_cards_1
//----------------------------------------------------

function drawCard() {

	// First random among the 9 numbers in the array
	do {
		botX = (Math.floor(Math.random()*9));
	// Repeat if the card number is missing
	}	while (cardArray[botX]==0);

	// Decreases the value of the card number
	if (cardArray[botX]>0) {--(cardArray[botX]);}

    //It's one deck for both players

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

return(botX);

}  


//====================================================
// [Show the highest card on the table]
// Compares both arrays
// botY receives the player's side
//----------------------------------------------------

function highCard() {

botX=-1;

	for (let x=1;x<10;x++) {
		if (playerOne[x]>botX) {botX = playerOne[x]; botY=1;}
	}
	for (let x=1;x<10;x++) {
		if (playerTwo[x]>botX) {botX = playerTwo[x]; botY=2;}
	}
	document.getElementById(10).src = getImage(botX,botY);

return;
}


//====================================================
// [Card select] onClick on player's hand
//----------------------------------------------------

function seLect(botX) {

	// W.O test (full table)
	if (botX!=0 && actualPlayer!=0 && hashTag==511) {setTimeout('walkOver(1)',500);}


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

	if (botX!=0 && actualPlayer==1) {
	document.getElementById(botX).style = ''; //magic
	cardSelect=botX;
	
		//Sepia effect for lower cards
		for (let x=1;x<10;x++) {
		if (playerTwo[x]>-1 && (playerTwo[x]<playerOne[botX])) {
		document.getElementById(x).style = 'filter: sepia(100%)';
		}
		}	
	
	}

return;
}

//====================================================
// [Reset Style] A proper way to change the styles
//----------------------------------------------------

function resetStyle() {

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

//====================================================
// [Play selected card] onClick on the table
//----------------------------------------------------

async function playSelect(botX) {

if (actualPlayer==1) {

	//The chosen spot is empty
	if (cardSelect!='' && hashTag<511 && playerTwo[botX]==-1 && playerOne[botX]==-1) {

	await calculatePoints(1,(playerOne[cardSelect]),-1,0);

	//And put it on the table ***
	playerOne[botX] = playerOne[cardSelect];
	document.getElementById(botX).src = getImage(playerOne[botX],1);

	//Take the card from your hand ***
	playerOne[cardSelect] = -1;
	document.getElementById(cardSelect).src = getImage();

	// Geometric progression
	if (hashTag% (2*(2**(botX-1))) < (2**(botX-1)) ) {
	hashTag = hashTag + (2**(botX-1));
	}

	highCard();
	cardSelect='';
	await reArrange(1);
	}

	//The chosen spot contains the computer's card and is smaller than your card 
	if (cardSelect!='' && playerTwo[botX]!=-1 && (playerOne[cardSelect]>playerTwo[botX])) {

	await calculatePoints(1,(playerOne[cardSelect]),(playerTwo[botX]),1);

	playerTwo[botX] = -1;

	//And put it on the table ***
	playerOne[botX] = playerOne[cardSelect];
	document.getElementById(botX).src = getImage(playerOne[botX],1);

	//Take the card from your hand ***
	playerOne[cardSelect] = -1;
	document.getElementById(cardSelect).src = getImage();

	// Geometric progression
	if (hashTag% (2*(2**(botX-1))) < (2**(botX-1)) ) {
	hashTag = hashTag + (2**(botX-1));
	}

	highCard();
	cardSelect='';
	await reArrange(1);
	}

}
return;
}


//====================================================
// [Calculate points]
//----------------------------------------------------

function calculatePoints(player,botX,botY,combo) {

if (player==1) { botZ = playerOne[0] ;}
if (player==2) { botZ = playerTwo[0] ;}
document.getElementById("w"+player).innerHTML="+"+(100*(botX+1) + (hashTag==511? 100 : 0) ); //xD
botZ = botZ + (100*(botX+1)) + (hashTag==511? 100 : 0) ;


// Battle system: Combos
if (player==1 && combo==0) {playerOne[10]=0 ;}
if (player==2 && combo==0) {playerTwo[10]=0 ;}
if (player==1 && combo==1) {playerOne[10]=playerOne[10]+1 ;}
if (player==2 && combo==1) {playerTwo[10]=playerTwo[10]+1 ;}

if (combo==0) {document.getElementById("c"+player).innerHTML="" ;}

if (botY > -1 && ( (player==1&&playerOne[10]>1) || (player==2&&playerTwo[10]>1) )) {
	botZ = botZ + (100*(botX+1)) ;
	document.getElementById("c"+player).innerHTML="+"+(100*(botX+1))+"C" ; //xD
}


// Battle system: Losing points
if (botY > -1 && ( (botX-botY) > 1 ) ) {		
	document.getElementById("c"+player).innerHTML="-"+( 100* ((botX+1)-(botY+1)) ) ;
	cardArray[botY]=cardArray[botY]+1;
	botZ = botZ - ( 100* ((botX+1)-(botY+1)) ) ;
}


document.getElementById("point"+player).innerHTML=( botZ.toString().padStart(12, 'o') ); //xD
if (player==1) { playerOne[0] = botZ ;}
if (player==2) { playerTwo[0] = botZ ;}
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

	setTimeout('victoryCheck(0)',500);

	if (player==1) {
	for (let x=15;x>11;x--) {
		if (playerOne[x]==-1 && playerOne[x-1]!=-1) {
		playerOne[x] = playerOne[x-1];
		document.getElementById(x).src = getImage(playerOne[x],1);
		playerOne[x-1] = -1;
		document.getElementById(x-1).src = getImage();
		}
	}
	resetStyle(); //reset the style	
	
	if (playerTwo[11]==-1) {playerTwo[11]=drawCard();} //draws at value 11
	
	if(actualPlayer!=0) {actualPlayer=2;}
	
	setTimeout('computerTime()',500);
	}

	if (player==2) {
	for (let x=15;x>11;x--) {
		if (playerTwo[x]==-1 && playerTwo[x-1]!=-1) {
		playerTwo[x] = playerTwo[x-1];
		playerTwo[x-1] = -1;
		}
	}
	if (playerOne[11]==-1) {playerOne[11]=drawCard();} //draws at value 11
	
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

botX=-1;

	if (player==1) {

	// Find the highest card in your hand
	for (let x=11;x<16;x++) {
	if (playerOne[x]>botX) {botX=playerOne[x];}
	}

	// Check if you can overcome one of the computer's cards
	for (let x=1;x<10;x++) {
	if (playerTwo[x]<botX && playerOne[x]==-1) {return;}
	}

	for (let x=11;x<16;x++) {
	document.getElementById(x).style = 'opacity: 0.2;';
	}

	victoryCheck(2); //Computer wins
	}


	if (player==2) {

	// Find the highest card in your hand
	for (let x=11;x<16;x++) {
	if (playerTwo[x]>botX) {botX=playerTwo[x];}
	}

	// Check if you can overcome one of the player's cards
	for (let x=1;x<10;x++) {
	if (playerOne[x]<botX && playerTwo[x]==-1) {return;}
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

// 'botX' used only in case of W.O ^
function victoryCheck(botX) {

botY=0;
botZ=0;

	if (playerOne[1]!=-1 && playerOne[2]!=-1 && playerOne[3]!=-1 &&botX==0) {botX=1; botY=7;}
	if (playerOne[4]!=-1 && playerOne[5]!=-1 && playerOne[6]!=-1 &&botX==0) {botX=1; botY=56;}
	if (playerOne[7]!=-1 && playerOne[8]!=-1 && playerOne[9]!=-1 &&botX==0) {botX=1; botY=448;}

	if (playerOne[1]!=-1 && playerOne[4]!=-1 && playerOne[7]!=-1 &&botX==0) {botX=1; botY=73;}
	if (playerOne[2]!=-1 && playerOne[5]!=-1 && playerOne[8]!=-1 &&botX==0) {botX=1; botY=146;}
	if (playerOne[3]!=-1 && playerOne[6]!=-1 && playerOne[9]!=-1 &&botX==0) {botX=1; botY=292;}

	if (playerOne[1]!=-1 && playerOne[5]!=-1 && playerOne[9]!=-1 &&botX==0) {botX=1; botY=273;}
	if (playerOne[3]!=-1 && playerOne[5]!=-1 && playerOne[7]!=-1 &&botX==0) {botX=1; botY=84;}

	if (playerTwo[1]!=-1 && playerTwo[2]!=-1 && playerTwo[3]!=-1 &&botX==0) {botX=2; botY=7;}
	if (playerTwo[4]!=-1 && playerTwo[5]!=-1 && playerTwo[6]!=-1 &&botX==0) {botX=2; botY=56;}
	if (playerTwo[7]!=-1 && playerTwo[8]!=-1 && playerTwo[9]!=-1 &&botX==0) {botX=2; botY=448;}

	if (playerTwo[1]!=-1 && playerTwo[4]!=-1 && playerTwo[7]!=-1 &&botX==0) {botX=2; botY=73;}
	if (playerTwo[2]!=-1 && playerTwo[5]!=-1 && playerTwo[8]!=-1 &&botX==0) {botX=2; botY=146;}
	if (playerTwo[3]!=-1 && playerTwo[6]!=-1 && playerTwo[9]!=-1 &&botX==0) {botX=2; botY=292;}

	if (playerTwo[1]!=-1 && playerTwo[5]!=-1 && playerTwo[9]!=-1 &&botX==0) {botX=2; botY=273;}
	if (playerTwo[3]!=-1 && playerTwo[5]!=-1 && playerTwo[7]!=-1 &&botX==0) {botX=2; botY=84;}

	//-------------------------------------------------------------------------------------------
	// Triple combo ._.
	
	if (playerOne[1]==playerOne[2] && playerOne[2]==playerOne[3] &&botX==1 &&botY==7) {botZ=playerOne[1]+1;}
	if (playerOne[4]==playerOne[5] && playerOne[5]==playerOne[6] &&botX==1 &&botY==56) {botZ=playerOne[4]+1;}
	if (playerOne[7]==playerOne[8] && playerOne[8]==playerOne[9] &&botX==1 &&botY==448) {botZ=playerOne[7]+1;}

	if (playerOne[1]==playerOne[4] && playerOne[4]==playerOne[7] &&botX==1 &&botY==73) {botZ=playerOne[1]+1;}
	if (playerOne[2]==playerOne[5] && playerOne[5]==playerOne[8] &&botX==1 &&botY==146) {botZ=playerOne[2]+1;}
	if (playerOne[3]==playerOne[6] && playerOne[6]==playerOne[9] &&botX==1 &&botY==292) {botZ=playerOne[3]+1;}

	if (playerOne[1]==playerOne[5] && playerOne[5]==playerOne[9] &&botX==1 &&botY==273) {botZ=playerOne[1]+1;}
	if (playerOne[3]==playerOne[5] && playerOne[5]==playerOne[7] &&botX==1 &&botY==84) {botZ=playerOne[3]+1;}

	if (playerTwo[1]==playerTwo[2] && playerTwo[2]==playerTwo[3] &&botX==2 &&botY==7) {botZ=playerTwo[1]+1;}
	if (playerTwo[4]==playerTwo[5] && playerTwo[5]==playerTwo[6] &&botX==2 &&botY==56) {botZ=playerTwo[4]+1;}
	if (playerTwo[7]==playerTwo[8] && playerTwo[8]==playerTwo[9] &&botX==2 &&botY==448) {botZ=playerTwo[7]+1;}

	if (playerTwo[1]==playerTwo[4] && playerTwo[4]==playerTwo[7] &&botX==2 &&botY==73) {botZ=playerTwo[1]+1;}
	if (playerTwo[2]==playerTwo[5] && playerTwo[5]==playerTwo[8] &&botX==2 &&botY==146) {botZ=playerTwo[2]+1;}
	if (playerTwo[3]==playerTwo[6] && playerTwo[6]==playerTwo[9] &&botX==2 &&botY==292) {botZ=playerTwo[3]+1;}

	if (playerTwo[1]==playerTwo[5] && playerTwo[5]==playerTwo[9] &&botX==2 &&botY==273) {botZ=playerTwo[1]+1;}
	if (playerTwo[3]==playerTwo[5] && playerTwo[5]==playerTwo[7] &&botX==2 &&botY==84) {botZ=playerTwo[3]+1;}


if (botX>0) {

for (let x=1;x<10;x++) {

	document.getElementById(x).style = 'opacity: 0.2;';

	if (botY >= (2**(x-1)) && (botY % (2*(2**(x-1))) >= (2**(x-1))) ) {
	document.getElementById(x).style = '';

	//Triple combo
	if (botZ>0) {document.getElementById(x).style = 'filter: contrast(180%);';}

	}

}

if (botZ==0) { botZ = 1; }

if (botX==1) {
playerOne[0] = (playerOne[0] + 100 * botZ ) ;
document.getElementById('point1').innerHTML=( playerOne[0].toString().padStart(12, 'o') );
document.getElementById('w1').innerHTML="winner! ";
document.getElementById('w2').innerHTML="";
document.getElementById('c2').innerHTML="";
} 
else if (botX==2) {
playerTwo[0] = (playerTwo[0] + 100 * botZ ) ;
document.getElementById('point2').innerHTML=( playerTwo[0].toString().padStart(12, 'o') );
document.getElementById('w2').innerHTML=" winner!";
document.getElementById('w1').innerHTML="";
document.getElementById('c1').innerHTML="";
}

document.getElementById("c"+botX).innerHTML="+"+(100 * botZ) ;

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
mydiv='1',imgur='https://i.imgur.com/hO4cZY8.png',imgur2='https://i.imgur.com/E1IwRRY.png'
break;
case 1:
mydiv='2',imgur='https://i.imgur.com/SAqhJcr.png',imgur2='https://i.imgur.com/tzydlOg.png'
break;
case 2:
mydiv='3',imgur='https://i.imgur.com/K9r6tvD.png',imgur2='https://i.imgur.com/inyTLQA.png'
break;
case 3:
mydiv='4',imgur='https://i.imgur.com/eus0MBv.png',imgur2='https://i.imgur.com/lQWd4rZ.png'
break;
case 4:
mydiv='5',imgur='https://i.imgur.com/kHGMB6B.png',imgur2='https://i.imgur.com/CdVsL8O.png'
break;
case 5:
mydiv='6',imgur='https://i.imgur.com/ln2PCUD.png',imgur2='https://i.imgur.com/y0mU6oD.png'
break;
case 6:
mydiv='7',imgur='https://i.imgur.com/g8BzsEe.png',imgur2='https://i.imgur.com/JDQgKjy.png'
break;
case 7:
mydiv='8',imgur='https://i.imgur.com/OLLD36a.png',imgur2='https://i.imgur.com/FXWLiK9.png'
break;
case 8:
mydiv='9',imgur='https://i.imgur.com/vOFiWYf.png',imgur2='https://i.imgur.com/fr31WcB.png'
break;
case 9:
mydiv='1',imgur='https://i.imgur.com/XZlfvM3.png',imgur2='https://i.imgur.com/y3p2oz2.png'
break;
case 10:
mydiv='2',imgur='https://i.imgur.com/BAMsIFZ.png',imgur2='https://i.imgur.com/XbFttTH.png'
break;
case 11:
mydiv='3',imgur='https://i.imgur.com/Zeuf93W.png',imgur2='https://i.imgur.com/5KO2zvo.png'
break;
case 12:
mydiv='4',imgur='https://i.imgur.com/aIJSdoQ.png',imgur2='https://i.imgur.com/ZUNguGw.png'
break;
case 13:
mydiv='5',imgur='https://i.imgur.com/3pMk55C.png',imgur2='https://i.imgur.com/h1D5BKD.png'
break;
case 14:
mydiv='6',imgur='https://i.imgur.com/Q6UgqNT.png',imgur2='https://i.imgur.com/8LZatvc.png'
break;
case 15:
mydiv='7',imgur='https://i.imgur.com/tgZbTKi.png',imgur2='https://i.imgur.com/uDTO94M.png'
break;
case 16:
mydiv='8',imgur='https://i.imgur.com/uAGUNlk.png',imgur2='https://i.imgur.com/BgUv7S1.png'
break;
case 17:
mydiv='9',imgur='https://i.imgur.com/2jZ3Wx7.png',imgur2='https://i.imgur.com/XvzexVW.png'
break;
default:
mydiv='null',imgur='https://i.imgur.com/9CmFbnO.png' //empty image
break;
}
return(imgur);
}










