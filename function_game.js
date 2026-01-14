//====================================================
// [Global variables]
//----------------------------------------------------

var cardArray = new Array(9);	//deck
var playerOne = new Array(16);	//Player/Cpu's variables
var playerTwo = new Array(16);	//0_points, 1-9 field, 10 combo, 11-15 hand 

var actualPlayer=0;		//Player(1) or CPU(2) just in case you are faster than the cpu...
var cardSelect=0;		//Player's hand selection

var botX=0; 		//worker
var botY=0;			//worker
var botZ=0;			//worker

var hashTag=0;		//Geometric progression (1+2+4+8+16+32+64+128+256=511)

const matrixObjective = [	// All winning combinations
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

//====================================================
// Functions
//----------------------------------------------------
// menugame() - Creates the basic html
// gameManual() - Basic html showing how to play
//   function showEvil() change card number 9
//   function showGood() change card number 9
// startGame() - Start the Game ._.
// computerTime() - Computer plays
//   computerVerifyField() - read the field and decides for an offensive or defensive approach
//   computerVerifyHand() - read the hand and choose the best combination of cards
//   canOvercome(card) - check the player's cards
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
// [Creates the basic html]
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
if (playerOne[0] === undefined) {playerOne[0] = 0;}
if (playerTwo[0] === undefined) {playerTwo[0] = 0;}
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
console.log("====/startGame/====");

botX=0;
botY=0;
botZ=0;

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
	playerOne[x] = 0;
	playerTwo[x] = 0;
}

// Player receives 5 cards
//playerOne[11]=drawCard(); console.log.coolness
playerOne[12]=drawCard();
playerOne[13]=drawCard();
playerOne[14]=drawCard();
playerOne[15]=drawCard();

// Player's cards
//document.getElementById(11).src = getImage(playerOne[11],1); console.log.coolness
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

// Returning player
if (playerOne[0] > 0) {document.getElementById('point1').innerHTML=( playerOne[0].toString().padStart(12, 'o') );}
	
//Start the battle
	computerTime();
}


//====================================================
// [Computer plays] AI ver 9.01.2026
//----------------------------------------------------

async function computerTime() {

if (actualPlayer==2) {
	console.log("computerTime");

	// W.O test (full table)
	if (hashTag==511) { await walkOver(2);}


	let {indexNine, indexTwins, indexBigger} = await computerVerifyHand();

	let improvedRandom = await computerVerifyField();

	botX=0;
	botY=0;
	botZ=0;

	//-------------------------------------------------
	//	Card 9 in the middle
	//-------------------------------------------------
	if (botX==0 && indexNine>0 && playerTwo[5]==0 && (playerOne[5]==0||playerOne[5]==8) && (playerOne[0]>playerTwo[0]) ) {
	
		console.log("	played card 9");
		botX = indexNine;
		botY = 5;
	
	}

	//-------------------------------------------------
	//	Trying combos
	//-------------------------------------------------
	if (botX==0 && indexBigger.length > 0) {
		for (let i=0; i<improvedRandom.length; i++) {
		for (let b=0; b<indexBigger.length; b++) {

			if (improvedRandom[i] == indexBigger[b][1]) {
				console.log("	played combo");
				botX = indexBigger[b][0];
				botY = indexBigger[b][1];
			}

		}
		}
	}

	//-------------------------------------------------
	//	High card
	//-------------------------------------------------
	if (botX==0 && improvedRandom.length==1) {
		
		console.log("	played bigger");

		for (let x=11; x<16; x++) {
			if (playerTwo[x] > botZ) {
				botX = x;
				botZ = playerTwo[x];
				}
		}

	botY = improvedRandom[0];
	}

	//-------------------------------------------------
	// 	Random
	//-------------------------------------------------
	if (botX==0) {

		console.log("	played random");

		// Choosing a card
		botX=(Math.floor(Math.random()*5)+11);

		// Choosing a spot
		botZ=(Math.floor(Math.random()*improvedRandom.length)); //(AI) possibilities
		botY=improvedRandom[botZ];

		//If the chosen spot isn't empty ***
		if (playerOne[botY]!=0) {
			while (playerTwo[botX]<=playerOne[botY]) {botX=(Math.floor(Math.random()*5)+11);}
		}
	}
	//-------------------------------------------------
	console.log("		hand:"+playerTwo[botX]+" field:"+botY+" P1:"+(playerOne[botY]));
	//-------------------------------------------------


	await calculatePoints(2,(playerTwo[botX]),(playerOne[botY]),((playerOne[botY]!=0? 1 : 0)));
	playerOne[botY] = 0;
	botZ = playerTwo[botX];
	

	//Take the card from your hand
	playerTwo[botX] = 0;

	//And put it on the table
	playerTwo[botY] = botZ;
	document.getElementById(botY).src = getImage(botZ,2);

	// GP increases
	if (hashTag % (2*(2**(botY-1))) < (2**(botY-1)) ) {
	hashTag = hashTag + (2**(botY-1));
	}

	highCard();
	await victoryCheck(0); //reArrange(2);

}
return;
}

//====================================================
// [Computer verify Field]
//----------------------------------------------------
function computerVerifyField() {

if (actualPlayer==2) {
console.log("computerVerifyField");

let playingOffensive = new Array(8);
let playingDefensive = new Array(8);
let improvedOffensive = [];
let improvedDefensive = [];
	
	//-------------------------------------------------
	//Reseting values jic
	//-------------------------------------------------
	improvedOffensive   = [];
	improvedDefensive   = [];
	improvedOffensive.length=0;
	improvedDefensive.length=0;

	for (let a=0; a<8; a++) {
		playingOffensive[a] = 0;
		playingDefensive[a] = 0;
	}
	
	botZ=0; //High Offensive
	botX=0; //High Defensive
	//-------------------------------------------------


	//-------------------------------------------------
	// (AI) Looking for objectives
	//-------------------------------------------------
	for (let lin=0;lin<8;lin++) {
	for (let col=0;col<3;col++) {

		if ( playerOne[ (matrixObjective[lin][col]) ] !=0 ) {
			playingDefensive[lin]=playingDefensive[lin]+1;
		}

		if ( playerTwo[ (matrixObjective[lin][col]) ] !=0 ) {
			playingOffensive[lin]=playingOffensive[lin]+1;
		}
	}
	}	
	//-------------------------------------------------


	//-------------------------------------------------
	// (AI) Choosing the best objective
	//-------------------------------------------------
	for (let x=0; x<8; x++) {

		if (playingDefensive[x] > botX) {botX = playingDefensive[x]};
		if (playingOffensive[x] > botZ) {botZ = playingOffensive[x]};

	}
	//-------------------------------------------------


	//-------------------------------------------------
	// (AI) Defensive mode
	//-------------------------------------------------
	if (botX == 2) {
	for (let celula=1;celula<10;celula++) {
		
			matrix:
			for (let lin=0; lin<8; lin++) {
			for (let col=0; col<3; col++) {
				if ( (matrixObjective[lin][col]==celula) && (playingDefensive[lin]==2) ) {

					if (playerTwo[celula] == 0) {
						if (playerOne[celula] == 0) {
							improvedDefensive.push(celula);
							break matrix;
						}
						else if ( canOvercome(playerOne[celula]) ) { //***
							improvedDefensive.push(celula);
							break matrix;
						}
					}
				}
			}
			}
		
	}
	}
	//-------------------------------------------------

	//-------------------------------------------------
	// (AI) Offensive mode
	//-------------------------------------------------
	while (improvedOffensive.length < 1) {
	for (let celula=1;celula<10;celula++) {
		
			matrix:
			for (let lin=0; lin<8; lin++) {
			for (let col=0; col<3; col++) {
				if ( (matrixObjective[lin][col]==celula) && (playingOffensive[lin]==botZ) ) {

					if (playerTwo[celula] == 0) {
						if (playerOne[celula] == 0) {
							improvedOffensive.push(celula);
							break matrix;
						}
						else if ( canOvercome(playerOne[celula]) ) { //***
							improvedOffensive.push(celula);
							break matrix;
						}
					}
				}
			}
			}
		
	}
	if (improvedOffensive.length < 1) {botZ--;}
	}
	//-------------------------------------------------

console.log("	Play_off "+playingOffensive);
if (improvedDefensive.length>0) {console.log("	Play_def "+playingDefensive);}
console.log("	IR_off "+improvedOffensive);
if (improvedDefensive.length>0) {console.log("	IR_def "+improvedDefensive);}


if (improvedDefensive.length>0 && (improvedDefensive.length<improvedOffensive.length)) {

	console.log("	Defensive mode");
	return(improvedDefensive);

} else {

	console.log("	Offensive mode");
	return(improvedOffensive);
}

}
}

//====================================================
// [Computer verify Hand]
//----------------------------------------------------
function computerVerifyHand() {
	
if (actualPlayer==2) {
console.log("computerVerifyHand");

let indexTwins = new Array(5);
let indexNine = 0;
let indexBigger = [
	[0, 0],
]; 

	indexTwins = [0,0,0,0,0];
	indexBigger   = [];
	indexBigger.length=0;


	for (let x=11; x<16; x++) {

		//Number_9
		if (playerTwo[x] == 9) {indexNine = x;}

		for (let y=11; y<16; y++) {
			//Twins
			if ( (playerTwo[x] == playerTwo[y]) && (y!=x) ) {indexTwins[x-11] = indexTwins[x-11] + 1 ;}
		}

		for (let z=1; z<10; z++) {
			//Bigger than
			if ((playerTwo[x]==(playerOne[z]+1)) && playerOne[z]>0) {indexBigger.push([x, z]);}
		}

	}

console.log("	indexNine "+indexNine);
console.log("	indexTwins "+indexTwins[0],indexTwins[1],indexTwins[2],indexTwins[3],indexTwins[4]);
console.log("	indexBigger "+indexBigger);

return {indexNine, indexTwins, indexBigger};
}
}



function canOvercome(card) {
console.log("	canOvercome("+card+")");

botX = 0;

for (let x=11; x<16; x++) {
if (playerTwo[x]>botX) {botX=playerTwo[x];}
}

if (botX > card) {
	console.log("		Yes");
	return true;
	} 
	else {
	console.log("		No");
	return false;
	}
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

console.log("P"+actualPlayer+" drawCard("+(botX+1)+")");
return(botX+1);

}  


//====================================================
// [Show the highest card on the table]
// Compares both arrays
// botY receives the player's side
//----------------------------------------------------

function highCard() {
console.log("highCard");

botX=0;

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
console.log("seLect("+playerOne[botX]+")");

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
		if (playerTwo[x]>0 && (playerTwo[x]<playerOne[botX])) {
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
console.log("resetStyle()");

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
console.log("playSelect(hand:"+playerOne[cardSelect]+" field:"+botX+" cpu:"+playerTwo[botX]+")");

if (actualPlayer==1) {

	//The chosen spot is empty or contains the computer's card with a smaller value
	if (cardSelect!='' && playerOne[botX]==0 && ( playerOne[cardSelect] > playerTwo[botX] ) ) {

	await calculatePoints(1,(playerOne[cardSelect]),(playerTwo[botX]),(playerTwo[botX]!=0? 1 : 0));
	
	//Clear the cpu's spot anyways
	playerTwo[botX] = 0;

	//And put it on the table ***
	playerOne[botX] = playerOne[cardSelect];
	document.getElementById(botX).src = getImage(playerOne[botX],1);

	//Take the card from your hand ***
	playerOne[cardSelect] = 0;
	document.getElementById(cardSelect).src = getImage();

	// Geometric progression
	if (hashTag% (2*(2**(botX-1))) < (2**(botX-1)) ) {
	hashTag = hashTag + (2**(botX-1));
	}

	highCard();
	cardSelect='';
	await victoryCheck(0); //reArrange(1);
	}

}
return;
}


//====================================================
// [Calculate points]
//----------------------------------------------------

function calculatePoints(player,botX,botY,combo) {
console.log("calculatePoints("+player+","+botX+","+botY+","+combo+")");

if (player==1) { botZ = playerOne[0] ;}
if (player==2) { botZ = playerTwo[0] ;}
document.getElementById("w"+player).innerHTML="+"+(100*(botX) + (hashTag==511? 100 : 0) ); //xD
console.log("	+"+(100*(botX) + (hashTag==511? 100 : 0) ));
botZ = botZ + (100*(botX)) + (hashTag==511? 100 : 0) ;


// Battle system: Combos
if (player==1 && combo==0) {playerOne[10]=0 ;}
if (player==2 && combo==0) {playerTwo[10]=0 ;}
if (player==1 && combo==1) {playerOne[10]=playerOne[10]+1 ;}
if (player==2 && combo==1) {playerTwo[10]=playerTwo[10]+1 ;}

if (combo==0) {document.getElementById("c"+player).innerHTML="" ;}

if (botY > 0 && ( (player==1&&playerOne[10]>1) || (player==2&&playerTwo[10]>1) )) {
	botZ = botZ + (100*(botX)) ;
	document.getElementById("c"+player).innerHTML="+"+(100*(botX))+"C" ; //xD
	console.log("	+"+(100*(botX))+"C");
}


// Battle system: Losing points
if (botY > 0 && ( (botX-botY) > 1 ) ) {		
	document.getElementById("c"+player).innerHTML="-"+( 100* ((botX)-(botY)) ) ;
	console.log("	-"+( 100* ((botX)-(botY)) ));
	cardArray[botY]=cardArray[botY]+1;
	botZ = botZ - ( 100* ((botX)-(botY)) ) ;
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
console.log("reArrange("+player+")");

	//victoryCheck(0);
	//setTimeout('victoryCheck(0)',500);

	if (player==1) {
	for (let x=15;x>11;x--) {
		if (playerOne[x]==0 && playerOne[x-1]!=0) {
		playerOne[x] = playerOne[x-1];
		document.getElementById(x).src = getImage(playerOne[x],1);
		playerOne[x-1] = 0;
		document.getElementById(x-1).src = getImage();
		}
	}
	resetStyle(); //reset the style	

	console.log("");
	if (actualPlayer!=0) {actualPlayer=2;}
	if (playerTwo[11]==0) {playerTwo[11]=drawCard();} //draws at value 11
		
	setTimeout('computerTime()',500);
	}

	if (player==2) {
	for (let x=15;x>11;x--) {
		if (playerTwo[x]==0 && playerTwo[x-1]!=0) {
		playerTwo[x] = playerTwo[x-1];
		playerTwo[x-1] = 0;
		}
	}

	console.log("");
	if (actualPlayer!=0) {actualPlayer=1;}
	if (playerOne[11]==0) {playerOne[11]=drawCard();} //draws at value 11
	document.getElementById(11).src = getImage(playerOne[11],1);
	
	}
	
console.log("	P1 "+playerOne[11],playerOne[12],playerOne[13],playerOne[14],playerOne[15]);
console.log("	P2 "+playerTwo[11],playerTwo[12],playerTwo[13],playerTwo[14],playerTwo[15]);

return;
}


//====================================================
// [W.O!?]
// https://thespool.net/wp-content/uploads/2019/09/cropped-lawnmower-man.jpeg
//----------------------------------------------------

function walkOver(player) {
console.log("walkOver("+player+")");

botX=0;

if (player==1) {

	// Find the highest card in your hand
	for (let x=11;x<16;x++) {
	if (playerOne[x]>botX) {botX=playerOne[x];}
	}

	// Check if you can overcome one of the computer's cards
	for (let x=1;x<10;x++) {
	if (playerTwo[x]<botX && playerOne[x]==0) {return;}
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
	if (playerOne[x]<botX && playerTwo[x]==0) {return;}
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
console.log("victoryCheck("+botX+")");

let counterV = 0;
botY=0;
botZ=0;

if (botX==0) {

	loop:
	for (let player=1;player<3;player++) {

		for (let lin=0;lin<8;lin++) {
	
		counterV=0;
	
		for (let col=0;col<3;col++) {

			if (playerOne[(matrixObjective[lin][col])] != 0 && player==1 ) {counterV++;}
			if (playerTwo[(matrixObjective[lin][col])] != 0 && player==2 ) {counterV++;}

			if (counterV==3) {

				botX = player;
				botY = (2**(matrixObjective[lin][0]-1)) + (2**(matrixObjective[lin][1]-1)) + (2**(matrixObjective[lin][2]-1));

				// Triple combo ._.
				if (player==1&&(playerOne[(matrixObjective[lin][0])]==playerOne[(matrixObjective[lin][1])])&&(playerOne[(matrixObjective[lin][1])]==playerOne[(matrixObjective[lin][2])])) {
				botZ = playerOne[(matrixObjective[lin][0])];
				}
				if (player==2&&(playerTwo[(matrixObjective[lin][0])]==playerTwo[(matrixObjective[lin][1])])&&(playerTwo[(matrixObjective[lin][1])]==playerTwo[(matrixObjective[lin][2])])) {
				botZ = playerTwo[(matrixObjective[lin][0])];
				}
				break loop;
			}
		}
		}
	}
}
//----------------------------------------------------

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
		console.log("PLAYER WINS");
		console.log("");
	}
	else if (botX==2) {
		playerTwo[0] = (playerTwo[0] + 100 * botZ ) ;
		document.getElementById('point2').innerHTML=( playerTwo[0].toString().padStart(12, 'o') );
		document.getElementById('w2').innerHTML=" winner!";
		document.getElementById('w1').innerHTML="";
		document.getElementById('c1').innerHTML="";
		console.log("CPU WINS");
		console.log("");
	}

	document.getElementById("c"+botX).innerHTML="+"+(100 * botZ) ;

	actualPlayer=0;
	setTimeout('startGame()',5000);


} else {

	reArrange(actualPlayer);

}
}


//====================================================
// [Get an url for the actual card]
//----------------------------------------------------

function getImage(card,player) {

if (player==2) {card=card+10}

switch (card) {
case 1:
mydiv='1',imgur='https://i.imgur.com/hO4cZY8.png',imgur2='nwn/p1n1c.png'
break;
case 2:
mydiv='2',imgur='https://i.imgur.com/SAqhJcr.png',imgur2='nwn/p1n2c.png'
break;
case 3:
mydiv='3',imgur='https://i.imgur.com/K9r6tvD.png',imgur2='nwn/p1n3c.png'
break;
case 4:
mydiv='4',imgur='https://i.imgur.com/eus0MBv.png',imgur2='nwn/p1n4c.png'
break;
case 5:
mydiv='5',imgur='https://i.imgur.com/kHGMB6B.png',imgur2='nwn/p1n5c.png'
break;
case 6:
mydiv='6',imgur='https://i.imgur.com/ln2PCUD.png',imgur2='nwn/p1n6c.png'
break;
case 7:
mydiv='7',imgur='https://i.imgur.com/g8BzsEe.png',imgur2='nwn/p1n7c.png'
break;
case 8:
mydiv='8',imgur='https://i.imgur.com/OLLD36a.png',imgur2='nwn/p1n8c.png'
break;
case 9:
mydiv='9',imgur='https://i.imgur.com/vOFiWYf.png',imgur2='nwn/p1n9c.png'
break;
case 11:
mydiv='1',imgur='https://i.imgur.com/XZlfvM3.png',imgur2='nwn/p2n1c.png'
break;
case 12:
mydiv='2',imgur='https://i.imgur.com/BAMsIFZ.png',imgur2='nwn/p2n2c.png'
break;
case 13:
mydiv='3',imgur='https://i.imgur.com/Zeuf93W.png',imgur2='nwn/p2n3c.png'
break;
case 14:
mydiv='4',imgur='https://i.imgur.com/aIJSdoQ.png',imgur2='nwn/p2n4c.png'
break;
case 15:
mydiv='5',imgur='https://i.imgur.com/3pMk55C.png',imgur2='nwn/p2n5c.png'
break;
case 16:
mydiv='6',imgur='https://i.imgur.com/Q6UgqNT.png',imgur2='nwn/p2n6c.png'
break;
case 17:
mydiv='7',imgur='https://i.imgur.com/tgZbTKi.png',imgur2='nwn/p2n7c.png'
break;
case 18:
mydiv='8',imgur='https://i.imgur.com/uAGUNlk.png',imgur2='nwn/p2n8c.png'
break;
case 19:
mydiv='9',imgur='https://i.imgur.com/2jZ3Wx7.png',imgur2='nwn/p2n9c.png'
break;
default:
mydiv='null',imgur='https://i.imgur.com/9CmFbnO.png', imgur2='nwn/p0n0.png' //empty image
break;
}
const elementos = document.querySelectorAll('b, a');
elementos.forEach(elemento => {
  if (isHalloween) {elemento.style.color = 'red';}
});
return(imgur);
}















