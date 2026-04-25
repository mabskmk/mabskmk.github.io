const numChars=56; 
var randomValue=0;
var checkChar = new Array((numChars)+1);

// Create the basic html
function menuchar() {
document.getElementById('principal').innerHTML="<center><table border=0><td align=right width=500><h1 id=nomeprinc><b>Characters</b></h1><a target='_blank' href='https://ln.sync.com/dl/8130397b0/ciy6yjaq-ibypwy7w-fbra5drz-q6dp5tub'><img src=https://i.imgur.com/QPa6H3A.png class='rbutton'></a><br><br><div id=54>SausageMonks</div><div id=5>pesoguin</div><div id=36>ckebab</div><div id=44>mermaid</div><div id=4>flyingtara</div><div id=45>boobs</div><div id=56></div><div id=53>Sandwitch</div><div id=52>OOMK</div><div id=51>Golem</div><div id=50>thicc</div><div id=49>shimeji</div><div id=48>ukyo</div><div id=47>RM</div><div id=46>Reznors</div><div id=55></div><div id=8>devilpeso</div><div id=7>slugwanzer</div><div id=33>yashahime</div><div id=43>dress</div><div id=23>flappyb</div><div id=42>eyeofbalor</div><div id=41>fullspiders</div><div id=39>Wall Face</div><div id=38>capitalism</div><div id=40>tictactoe</div><div id=37>bikergal</div><div id=35>brainoc</div><div id=34>hannyaned</div><div id=2>bullchan</div><div id=9>morgul</div><div id=19>destroyer</div><div id=18>e-o-w</div><div id=20>w-o-f</div><div id=14>vanpookin</div><div id=13>truckjoe</div><div id=24>helimaster</div><div id=16>dcar</div><div id=25>drwily</div><div id=22>murderwall</div><div id=15>car3</div><div id=26>ddd</div><div id=21>sarlacc</div><div id=11>garekky</div><div id=12>mash</div><div id=17>e-o-c</div><div id=10>kido</div><div id=6>slugwanzerold</div><div id=1>deathforce</div><div id=3>metagang</div>...<br><h1><b>Mini-games</b></h1><div id=27>gng-grave</div><div id=29>gng-burn</div><div id=28>gng-tower</div><div id=32>castlewar</div><div id=30>jokenpon</div><div id=31>msw-subway</div>...<br><br><a target='_blank' href='https://www.mediafire.com/folder/ftea2duwm6m09/WarehouseCHAR'><b>Warehouse</b></a> / <a target='_blank' href='https://drive.google.com/drive/folders/1zOzmbowxzpeFmbV_mVAeOaKhRGPFzFuQ?usp=drive_link'><b>W.I.P?</b></a><br><br><input type=button onClick='ppmain(1)' value='.Clean.'><br><tr></table></center>"
btnnew.disabled=false;
btnchar.disabled=true;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
for (let x=numChars;x>0;x--) {charData((x),1)}
//temp charData(54,2);
}

// Function to play a random video
function showcaseCharacter() {
clearTimeout(tempo);

	// Disable the function when leaving the showcase
	if (btnnew.disabled==false) {return;}

// Check if the array is full
for (let x=numChars;x>0;x--) {
if ( checkChar[x]!=='ok' ) {break;}
if (x==1 && checkChar[x]=='ok' ) {checkChar = [];} 
}
  
// Set a randomValue
randomValue=(Math.floor(Math.random()*numChars)+1);

	// Compare with checklist
	while (randomValue>0 && checkChar[randomValue]=='ok') {randomValue=(Math.floor(Math.random()*numChars)+1);}

	if (randomValue>0 && checkChar[randomValue]!='ok') {checkChar[randomValue]='ok';}


// Get the values ​​of the respective video from the 'character database'
charData(randomValue,3);
var tempo=setTimeout('showcaseStage()',50000); //showcaseCharacter -> showcaseStage -> showcaseMisc
}


// Character database
function charData(numero,code) {
let bannerHtml	='';
let bannerImg	='';
let ytLink		=0;
let youtube		='';
let sufix		='?autoplay=1&mute=1';
let gdrv		='';
let imgur		='';
let imgur9		='';
let zpoints		=0;

switch (numero) {
case 1:
mydiv='Death-Force',imgur='ocvdalJ',imgur9='xr3A7SH.gif',game='MetalSlug',ctype='Boss',lastupdate='13/12/08',gdrv='1nCEVFvv6_MWnOewCQEwqo3wBIEi0xOzk';
ytLink=(Math.floor(Math.random()*13));
	if (ytLink==0) {youtube='Znxxr129qH0';} //@MSjap
	if (ytLink==1) {youtube='MYOM64WfuZE';} //@ejanho
	if (ytLink==2) {youtube='Dr2t-ybJ3tc';} //@Savantaneus
	if (ytLink==3) {youtube='hdIbj9OGj14';} //@RamkunMUGEN
	if (ytLink==4) {youtube='OV7sUWpTk5c';} //@RamkunMUGEN
	if (ytLink==5) {youtube='j9qAZhX6pZI';} //@RamkunMUGEN
	if (ytLink==6) {youtube='Ur4ExsuDbRs';} //@GetReal_EmerSensei
	if (ytLink==7) {youtube='Y4DPg72y34s';} //@CrowSar
	if (ytLink==8) {youtube='dWp1CJYXOs4';} //@GetReal_EmerSensei
	if (ytLink==9) {youtube='GGrkcewCa_Q';} //@AlexNico
	if (ytLink==10) {youtube='79fLYfG3GT4';} //@fkrmaster
	if (ytLink==11) {youtube='rkF_37BTbNU?si=GiZ0lwif5XjcyM0k&start=24&end=74';} //@spidermastermind100
	if (ytLink==12) {youtube='-2fBDbDktus?si=i7w2fh8RqWBaiE9w&start=20&end=70';} //@biomajinboodh
break;
case 2:
mydiv='Bull_chan',imgur='ot8ebRi',imgur9='iVIdizv.png',game='Metalslug',ctype='Bonus',lastupdate='02/06/15',gdrv='15HH5HuYvK22p1AJw4_vWai6usFNw9IXt'
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='XcmnTRMASJI';} //@classymarowak7001
	if (ytLink==1) {youtube='HKGtIIRkQQ0?si=soMUZDlbESVOPGEB&start=10&end=60';} //@francis_arachea
break;
case 3:
mydiv='MetaGang',imgur='VhoTRPp',imgur9='oWcbdIT.png',game='Kirby',ctype='Multi-char',lastupdate='15/05/08',gdrv='19CzU8t9VOizNBDikp_Q210mQ0tRRruU-'
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='4IyF2Vb3vo8';} //@CrowSar
	if (ytLink==1) {youtube='ts4fCpiju0E';} //@multiversal-battlefield8885
break;
case 4:
mydiv='FlyingTara',imgur='iEjzspe',imgur9='T1V4CAg.png',game='Metalslug',ctype='Bonus',lastupdate='24/01/24',gdrv='1EUY4inMqHFK3bNp0MIyC5umigB4BstgZ';
ytLink=(Math.floor(Math.random()*4));
	if (ytLink==0) {youtube='oF7aAZO6LYA';} //@trackiesthead1563
	if (ytLink==1) {youtube='v27gLrZrR70';} //@HoundBlizzard
	if (ytLink==2) {youtube='33PKSVhkaHQ?si=SegyW7znAvDGprsM&start=8&end=58';} //@mdnp-grid487
	if (ytLink==3) {youtube='rUyfRBcs2x0?si=3flCKcCscoi5186u&start=10&end=60';} //@jewelmen10mugen87
break;
case 5:
mydiv='Pesoguin',imgur='5NqzscO',imgur9='Gr3X8jR.png',game='<a target=_blank href=https://twitter.com/Zanmyo><img src=https://i.imgur.com/qV3Q36A.gif></a>',ctype='Char',lastupdate='12/05/24',gdrv='1IPR_5llhRH9PGtWyYhJ3_-AmRI77D-xa',bannerHtml='twitter.com/pesoguin',bannerImg='i.imgur.com/qV3Q36A.gif';
ytLink=(Math.floor(Math.random()*5));
	if (ytLink==0) {youtube='K2KNeuaCPyU?si=lDIAcYelb1086X49&start=11&end=61';} //@DavidBurgessMechanicalMusic
	if (ytLink==1) {youtube='KJA1-8Mbd2E';} //@AlexNico
	if (ytLink==2) {youtube='ZO9U2syXPEI';} //@OverbrakeballRises
	if (ytLink==3) {youtube='9bgWPUKb2-0?si=GVTZiCbX-IxxyyGZ&start=12&end=62';} //@jewelmen10mugen87
	if (ytLink==4) {youtube='drcNz_FI9lY?si=8VNj8SCJzpwecw4m&start=22&end=72';} //@Albo96_Kirbycageyt
break;
case 6:
mydiv='Slug_Wanzer_Old',imgur='FlLscmO',imgur9='gRpE0k4.png',game='Metalslug',ctype='Char',lastupdate='20/04/08',gdrv='1DMfPTtg1jbegRXRq82pb7N11pteDhNnw'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==0) {youtube='';} //@
break;
case 7:
mydiv='Slug_Wanzer',imgur='3tFzcit',imgur9='gRpE0k4.pngg',game='Metalslug',ctype='Char',lastupdate='02/11/18',gdrv='1q9ZVUtQIz0pjdjtXAPG0MAi7fVdnglu-'
ytLink=(Math.floor(Math.random()*4));
	if (ytLink==0) {youtube='dSKlSe3mKaQ';} //@multiversal-battlefield8885
	if (ytLink==1) {youtube='nw3hNS1tRiw';} //@no_namechannel5704
	if (ytLink==2) {youtube='38z5GFDJtUA?si=vxxHnO56K3G30w-E&start=10&end=60';} //@francis_arachea
	if (ytLink==3) {youtube='uF6sxHzmsv4?si=GEBoedPQLC3F9L9i&start=10&end=60';} //@mugentv7030
break;
case 8:
mydiv='Devil_Pesoguin',imgur='75lBnh5',imgur9='Ap7IOUZ.gif',game='Castlevania?',ctype='Bonus',lastupdate='02/11/18',gdrv='1n_A2vUVEDwaODoGRxMZ8t8iB1wR3-CRR'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==0) {youtube='';} //@
break;
case 9:
mydiv='MORGUL',imgur='fPt2Off',imgur9='vk6MdFi.gif',game='Turrican',ctype='Boss',lastupdate='02/06/15',gdrv='1hHIoFEuw588ks3npH1apjGUmAUTyoRP_';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='6i36v6v6hL4?si=Qun_jPHfpnnaNZ6D&start=12&end=62';} //@trackiesthead1563
	if (ytLink==1) {youtube='Z8NUjxFv9e8?si=tJ7m8DrOhTn-EReP&start=230&end=280';} //@Crowley9
break;
case 10:
mydiv='Captain_Kido',imgur='0IaKgex',imgur9='XQkb69u.png',game='Parotte Fighters',ctype='Char',lastupdate='18/10/11',gdrv='1hjHAwkdngFnmEBSsMlllFSPHKbQJr_u8'
	youtube='LP_WPwfDsoA?si=GM25xYJw3Nhgklw4&start=185&end=235'; //@Vysethedetermined2
break;
case 11:
mydiv='Garekky',imgur='k7iIk5C',imgur9='uY6BnSd.png',game='Makeruna Makendo 2',ctype='Bonus',lastupdate='15/07/12',gdrv='1a-d4pNJ4F3VO3LA6CzVVgD-DMJbG04AP'
ytLink=(Math.floor(Math.random()*3));
	if (ytLink==0) {youtube='x3cxVQS4As0?si=vB0qzrE1IOnHU2Xe&start=20&end=70';sufix='&autoplay=1&mute=1';} //@sonicadam2
	if (ytLink==1) {youtube='lqz77X65QrQ?si=a15bJfmPyTGWAz06&start=25&end=75';sufix='&autoplay=1&mute=1';} //@spidermastermind100
	if (ytLink==2) {youtube='jfgolZIE6kM?si=I5ZZpTQlyggpIziP&start=30&end=80';sufix='&autoplay=1&mute=1';} //@spidermastermind100
break;
case 12:
mydiv='Mash',imgur='AZMe0Bc',imgur9='3DjGkZN.png',game='Megaman7',ctype='Bonus',lastupdate='20/05/12',gdrv='1Z69qGOh4MgnHqPm9grjKeJTP61GngjbE';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='ugFAYSHP8vI?si=aK7eUl08AQyFTozz&start=10&end=60';} //@OliverTEENAGER13
	if (ytLink==1) {youtube='qAR1V62SSz4?si=ZJC8DCjbDbiLWsYx&start=11&end=61';} //@jewelmen10mugen87
break;
case 13:
mydiv='Truck_Joe',imgur='c9iJZbD',imgur9='MB9i5IM.png',game='Megaman7',ctype='Bonus',lastupdate='16/07/14',gdrv='1ODwXTdfc3YJeI-KeY35tI1-IcMioT65C'
	youtube='aI5AZGga-e0?si=q2JY2y4hbu-lJAjS&start=24&end=74'; //@foursword4
break;
case 14:
mydiv='Van_Pookin',imgur='yWqb56L',imgur9='htTMeJ7.png',game='Megaman7',ctype='Bonus',lastupdate='31/10/14',gdrv='13dHiSewKjtn0zmYZRqU05LysSLPcqTNk';
ytLink=(Math.floor(Math.random()*5));
	if (ytLink==0) {youtube='Vg3R9ORa-1s';} //@ssbk65
	if (ytLink==1) {youtube='mpC3b-p_fLk';} //@DARKSOLODONALDAS8768
	if (ytLink==2) {youtube='YKg5wH6T6TU';} //@trackiesthead1563
	if (ytLink==3) {youtube='kqBPKwUkaMg?si=nvAyvEC6YnYtDYZf&start=36&end=86';} //@andersonkenya1
	if (ytLink==4) {youtube='F7_dXn8FvS0?si=gvttUUMOfgWETg-T&start=12&end=62';} //@jewelmen10mugen87
break;
case 15:
mydiv='CAR3',imgur='MbcbFyn',imgur9='le78wFG.png',game='Street Fighter 2',ctype='Bonus',lastupdate='23/11/12',gdrv='1ha4jP2IAT8TgAKEAqMqGbPtPtzo73HTQ'
	youtube='R5tvpRbHSKw'; //@mio_ch
break;
case 16:
mydiv='DCar',imgur='97WL9th',imgur9='r8nLXhT.png',game='Dong Dong Never Die',ctype='Bonus',lastupdate='24/05/13',gdrv='11XgXnbON0dn3EJoORv6svOfuG-JsByds';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='iCr6ehKIAzQ?si=6aRovBO7WiGrfeiW&start=12&end=62';} //@ristar87
	if (ytLink==1) {youtube='VCpAig9sO-U';} //@GuiSantosMUGEN
break;
case 17:
mydiv='Eye-of-Cthulhu',imgur='W9JHpa9',imgur9='s8vWJiI.gif',game='Terraria',ctype='Bonus',lastupdate='22/12/11',gdrv='1WQg7N9HyzrgQenmgVxuLvChK0B9O7KUx',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='PkoYbNMsyKk';} //@DemonDragonify
	if (ytLink==1) {youtube='EMCTifHcYYQ';} //@Aerinyxprods
break;
case 18:
mydiv='Eater-of-Worlds',imgur='rFItKdC',imgur9='entyndN.png',game='Terraria',ctype='Bonus',lastupdate='02/06/15',gdrv='1Kc2WpuZ8EoErZd8ztfJ8q1MkKMnDLKbp',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg';
	youtube='aU2J_5lPD94'; //@DemonDragonify
break;
case 19:
mydiv='the-Destroyer',imgur='7dpm5WZ',imgur9='NFG64YW.gif',game='Terraria',ctype='Bonus',lastupdate='02/06/15',gdrv='1yBtTASmCRApkCNeKmYbmdLX1JW_a8JlX',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='9KJGQkJ9SGE?si=tADnQnJ8bK7KWG4o&start=75&end=125';sufix='&autoplay=1&mute=1';} //@99Two3Eight12
	if (ytLink==1) {youtube='aCyn7Aa_Qus';} //@francis_arachea
break;
case 20:
mydiv='Wall-of-Flesh',imgur='517R994',imgur9='HGEK7LB.gif',game='Terraria',ctype='Bonus',lastupdate='31/10/14',gdrv='1MgS3faH8veG9Xv2AyUuCEKp3EMwTn4_F',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg';
	youtube='pm8RTgrgW8k?si=Hv68xSbWM6W2oyaO&start=20&end=70'; //@jewelmen10mugen87
break;
case 21:
mydiv='Sarlacc',imgur='7o6fJVg',imgur9='Dl7Q5Ix.gif',game='Star Wars',ctype='Boss',lastupdate='03/08/12',gdrv='1zOk5tBPfYPP5a7siNJxitX4fmPmek5pg';
ytLink=(Math.floor(Math.random()*6));
	if (ytLink==0) {youtube='PUZi6vZB_RE?si=FjfOwwo0CFaFrdVV&start=25&end=75';sufix='&autoplay=1&mute=1';} //@tenshihinanawi1643
	if (ytLink==1) {youtube='DhZE1l2KTPE';} //@JackSweg	
	if (ytLink==2) {youtube='qTylfMYuhsA';} //@DCKnuxSADXMUGENAndMore
	if (ytLink==3) {youtube='IyrLlm4j-50?si=GeWmbaUb_BuoCFIH&start=12&end=62';} //@jewelmen10mugen87
	if (ytLink==4) {youtube='TZOKQOF4YqY?si=J1xeUbETlpRpW1ag&start=30&end=80';} //@spidermastermind100
	if (ytLink==5) {youtube='jo8IPlcR7NA?si=aVBrKXtVzXZIpRRX&start=8&end=58';} //@SmokeChoked
break;
case 22:
mydiv='Murder_Wall',imgur='Bs2AFdr',imgur9='Yu4dYhl.gif',game='Kid Chameleon',ctype='Bonus',lastupdate='20/05/13',gdrv='17eXND0ylyX7igS8kho6jxz7avIIUvNE3'
	youtube='NjT2gyb4SXE'; //@RickDangerousdanger
break;
case 23:
mydiv='Flappy_Bird',imgur='cyO80Il',imgur9='qIOHfqb.png',game='Flappy Bird',ctype='Bonus',lastupdate='04/05/17',gdrv='1L3_0Rmf-QEPJ3AAWLPsquh3MJh4yTRI9';
ytLink=(Math.floor(Math.random()*5));
	if (ytLink==0) {youtube='kw6hTKReIgs';} //@I_hope_you_choke_on_em
	if (ytLink==1) {youtube='IoxCkBt_F8g?si=jSg53mLlqCnzMIvp&start=14&end=64';} //@jewelmen10mugen87
	if (ytLink==2) {youtube='9mi7zuM6OYQ';} //@YamiLegends
	if (ytLink==3) {youtube='_iHnIvB3ydU';} //@DavidBurgessMechanicalMusic
	if (ytLink==4) {youtube='HGT3hNf1bUU';} //@I_hope_you_ch0ke_on_em
break;
case 24:
mydiv='Heli-Master',imgur='lk7NGsI',imgur9='tmJNGkD.png',game='Alex Kidd',ctype='Boss',lastupdate='03/06/13',gdrv='1Z6E3Jqg_QEQ06Sby8mfBmrflgSgWrb6B'
ytLink=(Math.floor(Math.random()*9));
	if (ytLink==0) {youtube='6VvxqbZFlcc';} //@mrbrunaco6825
	if (ytLink==1) {youtube='LpWo9bFANwk';} //@mrbrunaco6825
	if (ytLink==2) {youtube='40XN1-YL6Rc';} //@mrbrunaco6825
	if (ytLink==3) {youtube='SP8Tfuptjk0';} //@mrbrunaco6825
	if (ytLink==4) {youtube='2hbTyq3Twmc';} //@mrbrunaco6825
	if (ytLink==5) {youtube='AlunSPki4QI';} //@mrbrunaco6825
	if (ytLink==6) {youtube='qEYWkgtS4vQ';} //@mrbrunaco6825
	if (ytLink==7) {youtube='hMx0SWNDM-s?si=JKL9Zqp35IEck9-n&start=12&end=62';} //@jewelmen10mugen87
	if (ytLink==8) {youtube='GijqYq8pihw?si=QrrkidG3DGDoGgM2&start=10&end=60';} //@jewelmen10mugen87
break;
case 25:
mydiv='Dr_Wily',imgur='jiB107a',imgur9='DaMQ2Lj.png',game='Megaman',ctype='Bonus',lastupdate='21/05/13',gdrv='1i8t7TJQEw4RT7jphvoeMyTdaaT6RnKqa'
	youtube='K0LRouSn-QE?si=1zeR4xDr1IB19cLM&start=582&end=632'; //@trackiesthead1563
break;
case 26:
mydiv='Devil-Dumb-Drum',imgur='rMWebNH',imgur9='JPk0Yh9.png',game='Donkey Kong',ctype='Bonus',lastupdate='21/11/12',gdrv='1Vy_fIEHURTrAz8VaFkzfVwe7QaNIUJ-Y';
ytLink=(Math.floor(Math.random()*5));
	if (ytLink==0) {youtube='23D2HygrJj4';} //@MaycolGamer026
	if (ytLink==1) {youtube='2aN1P5BFbWI';} //@DMSderProgamer
	if (ytLink==2) {youtube='YU9aIBMQdpg';} //@davidm69
	if (ytLink==3) {youtube='YIT80M2b8is';} //@davidm69
	if (ytLink==4) {youtube='1oVW32ZkB2Y';} //@DartzPie
break;
case 27:
mydiv='GnG-Graveyard',imgur='p19yaAN',imgur9='5pvWAIm.png',game='Makaimura',ctype='Plataform',lastupdate='31/10/23',gdrv='1GbhV0S9ncu4Giov0mcIPTixLDmEwl6s7'
	youtube='gKBhhIfrdRE'; //@BlackFired
break;
case 28:
mydiv='GnG-Tower',imgur='CkHRPvY',imgur9='fH7y5Ge.png',game='Makaimura',ctype='Arcade',lastupdate='31/10/23',gdrv='1UxTvsauekqFbxAh7SIFjDYTUdJuvlCtP';
	youtube='YHdwfkEHo98?si=XWmx_3VddWQ0lMbK&start=333&end=383'; //@MannyLingle
break;
case 29:
mydiv='GnG-Burning',imgur='ScexylS',imgur9='ohZWqMw.png',game='Makaimura',ctype='SHMUP',lastupdate='31/10/23',gdrv='1GeSVB_GbPiB8PHPk5sw7HAUuJKVRAH3W';
	youtube='omEjWq8DBZ0'; //@Warblefly41
break;
case 30:
mydiv='ALEX_Jankenpon',imgur='kHBUEcQ',imgur9='i2NjJtm.png',game='Alex Kidd',ctype='JokenPo',lastupdate='01/03/12',gdrv='1o4UAIynon1lyGVFLCowRKstD-7RIxp5P'
	youtube='3tmnr2wORuA?si=FIviXnpbOHHvdHnU&start=1178&end=1228'; //@GemeosdosJogos
break;
case 31:
mydiv='MSW-Subway',imgur='omSLMkl',imgur9='aJct4Y8.gif',game='Metalslug',ctype='SHMUP',lastupdate='19/01/12',gdrv='1nxtazK_0agbKe6wrJtUtYyDL21IiBIGw'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==0) {youtube='';} //@
break;
case 32:
mydiv='Castle_War',imgur='Xehem37',imgur9='aVsXFAq.png',game='Various',ctype='Tower defense',lastupdate='07/11/12',gdrv='1usRBM7HowIsEPqHnE6guEGMk3EbZO87l'
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='wrdzA8YIM9Q';} //@EmulationGuru
	if (ytLink==1) {youtube='STLukVJ51VM';} //@huntergamemodification56
break;
case 33:
mydiv='Yasha-Hime',imgur='p4i3ONN',imgur9='Yg7zSMS.png',game='Ganryu',ctype='Boss',lastupdate='02/11/18',gdrv='1Dr6zJ0-Ah0ExxmRk2DfJ--burI9DMGMR';
	youtube='gDOjf_yyshE?si=cdU--TfI_e9ufbmI&start=21&end=71'; //@trackiesthead1563
break;
case 34:
mydiv='HannyaNED',imgur='wObxscr',imgur9='LkzukyT.png',game='Megaman7',ctype='Boss',lastupdate='25/10/15',gdrv='1GZqpnaGxAyAyamsYPOEXwTrgdS5PpoNX';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='rgNT2Cq9cCU';} //@jewelmen10mugen87
	if (ytLink==1) {youtube='uOaz4uctX0k?si=7ZONmZ0BuQndJC9F&start=16&end=66';} //@jewelmen10mugen87
break;
case 35:
mydiv='Brain-of-Cthulhu',imgur='8xMmvYn',imgur9='sWf0Idm.png',game='Terraria',ctype='Boss',lastupdate='31/10/15',gdrv='1piPhPxq4fi_Eph0dKRqjbkgRkHKGlcnl',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg';
ytLink=(Math.floor(Math.random()*3));
	if (ytLink==0) {youtube='DlOerQbikn0';} //@DemonDragonify
	if (ytLink==1) {youtube='EN3f7x0cL7k';} //@XanderCoffin
	if (ytLink==2) {youtube='0UrlUrO1YbE';} //@Scelua
break;
case 36:
mydiv='Captain_Kebab',imgur='TsaW1dX',imgur9='0cImMKw.png',game='Parodius',ctype='Boss',lastupdate='24/01/24',gdrv='1gGgE240lPfFJJ050h0Vk9wJlFe2c2E20';
	youtube='z_9bj3Bv0OY?si=1v1lRBeRhYBG0s7n&start=9&end=59'; //@trackiesthead1563
break;
case 37:
mydiv='Biker_GAL',imgur='7dP9qeT',imgur9='XZyANSz.png',game='Battle_Circuit',ctype='Bonus',lastupdate='29/06/16',gdrv='1kH-OrCFQMcm_gV8_sbxoSzLhySEqFrPT'
	youtube='NpmVTWn14Tc?si=_5_SXgRXvMJEMdtT&start=993&end=1043'; //@iconoclast575
break;
case 38:
mydiv='Capitalism',imgur='HIynVUA',imgur9='LCZ5ymb.png',game='Real World',ctype='Boss',lastupdate='29/06/16',gdrv='1t27oAqR6ef55hUgMLvwCKMHiqOn1GtKS'
	youtube='bMrw8Ocl8uo'; //@WitchVelvet
break;
case 39:
mydiv='Wall_Face1-1',imgur='9uoKcu9',imgur9='T79ww2Z.png',game='Skyblazer',ctype='Boss',lastupdate='15/08/16',gdrv='1VEBZzrcjKuZ6RXTy_E0PoMgzSEO0fv24'
	youtube='L3iArUMq1oQ?si=KGSnT7V-Ij39bz4_&start=140&end=190'; //@samuraikarasu
break;
case 40:
mydiv='Tic-Tac-Toe',imgur='PgyIqB1',imgur9='8lWt8j9.png',game='Oldschool',ctype='Bonus',lastupdate='24/07/16',gdrv='1JiWBKuN9LdOB_zZYlsK_SfHUx5gZUDvZ';
ytLink=(Math.floor(Math.random()*3));
	if (ytLink==0) {youtube='wW_VbP0gkqI';} //@ranchsoil9387
	if (ytLink==1) {youtube='p6D_vgRD5B8';} //@TouhouSucksYouIdiots
	if (ytLink==2) {youtube='_45dSA02V-g?si=IXfd8DUa93i9KQxP&start=20&end=70';} //@ranchsoil9387
break;
case 41:
mydiv='Full-of-Spiders',imgur='hXxFrKx',imgur9='3SH8IzW.png',game='Splatterhouse',ctype='Bonus',lastupdate='28/10/16',gdrv='19f8oZl-KzlWeYGTo27vvteu9GPK_dVFi'
	youtube='bCUQZNA_jdA?si=Al2Syaw7MlSGG0Lv&start=286&end=336'; //@DeceasedCrab
break;
case 42:
mydiv='Evil-Eye-of-Balor',imgur='1LDxq7H',imgur9='BI3xaoj.png',game='Terraria',ctype='Boss',lastupdate='25/03/17',gdrv='1tsQ4AS7cl8emdMOHAtVbsGJtNp1ykaw6',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==1) {youtube='';} //@
break;
case 43:
mydiv='Dress',imgur='yYVBanS',imgur9='eZnMTuE.png',game='Queen Axe',ctype='Bonus',lastupdate='13/01/18',gdrv='1gYpG62kgEQYyLI0rLRhiNX_fJe-Egvrm'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==1) {youtube='';} //@
break;
case 44:
mydiv='Mermaid',imgur='YAMiPUI',imgur9='g4cEy24.png',game='Gaiares',ctype='Bonus',lastupdate='24/01/24',gdrv='1O5lFMuFeLyPYXAwB5SaumvtlXZzXLrRK'
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='eGHHIqf90ac';} //@XanderCoffin
	if (ytLink==1) {youtube='6DuHP9Xz91Y?si=gA8MFHzossg5PbSU&start=1080&end1130';} //@worldoflongplays
break;
case 45:
mydiv='Boobs',imgur='yD1AWaE',imgur9='I6DUeVu.png',game='Amazon Brawl',ctype='Boss',lastupdate='24/01/24',gdrv='15iwEE0g8Jun3eQQlYxw7uC7Jt1Vpv9ME'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==1) {youtube='';} //@
break;
case 46:
mydiv='Reznor',imgur='qVYNGvN',imgur9='7JqhABW.png',game='Mario',ctype='Boss',lastupdate='24/05/20',gdrv='15VTihsGmygebpBvSwTPvg2BkKdUNQ8u1';
ytLink=(Math.floor(Math.random()*10));
	if (ytLink==0) {youtube='l_Hh1JuhbrM';} //@davidm69
	if (ytLink==1) {youtube='j9Lt3i-Vf8Q';} //@CV-Mugen
	if (ytLink==2) {youtube='cJvvlsVA4TE?si=2tMtptPr7R-4-I5M&start=272&end=322';} //@Silentgirl22
	if (ytLink==3) {youtube='6Ksq0gJnibE';} //@davidm69
	if (ytLink==4) {youtube='_cUM_9WVEMo';} //@CV-Mugen
	if (ytLink==5) {youtube='MK2EJID9w6g';} //@DARKSOLODONALDAS8768
	if (ytLink==6) {youtube='c6XKOAb5gHI?si=oqsduMNEVRlkZYHs&start=12&end=62';} //@jewelmen10mugen87
	if (ytLink==7) {youtube='qgLOndlDzR0?si=0IqyCV94QfsjuZAW&start=23&end=73';} //@tenshihinanawi1643
	if (ytLink==8) {youtube='aUq0eaEb4Ak?si=DHeexi5KxAGRPFmy&start=5&end=55';} //@trackiesthead1563
	if (ytLink==9) {youtube='1h6h7rn9krM?si=n4_F9Fx9s4DGJYHJ&start=12&end=62';} //@jewelmen10mugen87
break;
case 47:
mydiv='R-Memory',imgur='RNwRj1K',imgur9='vj39rR3.png',game='R-Type',ctype='Bonus',lastupdate='31/10/20',gdrv='1PNzI6IssGK8BSsYcLCr2xSVrdiDblXVX';
	youtube='lxuzFYhnJbI?si=9TgFK-geJ60x3wd_&start=14&end=64'; //@jewelmen10mugen87
break;
case 48:
mydiv='Head-of-Ukyo',imgur='RZ9lnLU',imgur9='Y7rsQZd.png',game='original',ctype='Boss',lastupdate='31/10/20',gdrv='1jPx1agCPmLw2Sc9ew4o8zS9j4xnajn9E'
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==1) {youtube='';} //@
break;
case 49:
mydiv='Shimeji',imgur='IDrbSZ8',imgur9='sJuKFFz.png',game='<a target=_blank href=https://kilkakon.com/shimeji><img src=https://i.imgur.com/RG52doK.png></a>',ctype='Bonus',lastupdate='24/12/20',gdrv='1nKdd3q6eaRqfTQz1I_vfykm8-u0Uq2IT'
	youtube='4H0KAYfci_M'; //@TearSnow
break;
case 50:
mydiv='Thicc-Tac-Toe',imgur='ld7q5PX',imgur9='yxzkrR1.png',game='Metal Slut',ctype='Bonus',lastupdate='13/01/21',gdrv='1ezCyx2EDm4b2Ko1hypdfUFB4Baw5zXVa'
	youtube='24nJSys5TOg'; //@EmulationGuru
break;
case 51:
mydiv='Golem',imgur='pbrqOGU',imgur9='EpX4fu3.png',game='Nosferatu',ctype='Bonus',lastupdate='31/10/21',gdrv='18p-BFz34xr2fklFNuJkcr-kaqTYVNODy';
ytLink=(Math.floor(Math.random()*2));
	if (ytLink==0) {youtube='V0haA20g4_A?si=urI-6GBu2kFI8z-u&start=1576&end=1626';} //@trackiesthead1563
	if (ytLink==1) {youtube='jFqRkTy_2hs?si=LBiWOEaVu6iqocqp&start=530&end=580';} //@LegendaryDreamerchannel
break;
case 52:
mydiv='OOM-Killer',imgur='meIJuGr',imgur9='1iC2W4S.png',game='Turrican',ctype='Bonus',lastupdate='31/10/21',gdrv='1mZm2fg8-GE29Uk61ZOPNlc7NMNy0LfJe'
	youtube='kT01XXoHUps?si=1JKv5DQQhIgy3EXh&start=180&end=230'; //@crazyghost5357
break;
case 53:
mydiv='Sandwitch',imgur='2APcz3X',imgur9='zyTExeh.png',game='Puyo_Puyo',ctype='Bonus',lastupdate='31/10/21',gdrv='1CrFqUEl2u9or1SRXbJ5GqwpZVJ1FKtMu'
	youtube='-XtG63ruDMM?si=j9EaI9cpo5XoyUcc&start=15&end=65'; //@jewelmen10mugen87
break;
case 54:
mydiv='Sausage_Monks',imgur='uVVlLl7',imgur9='en1KRSZ.png',game='Makaimura',ctype='Bonus',lastupdate='31/10/24',gdrv='1c43XQfrPThdtR2g1rM8kPMyrPffJeqOH'
	youtube='0Ylj3QyWDPo?si=NW7HsFX4g9PskmnH&start=370&end=420'; //@AL82RetrogamingLongplays
break;
case 55:
mydiv='Rede_Globo',imgur='cQtHlPU',imgur9='T9e4Il1.png',game='???',ctype='Joke',lastupdate='30/10/19',gdrv='1jjLIScUv8tqO6-w6QAfe7XpccP6ENzFX',zpoints=10000
ytLink=(Math.floor(Math.random()*3));
	if (ytLink==0) {youtube='W9bSU1d2wME';} //@TheRatCooler
	if (ytLink==1) {youtube='Y7FZjAm7wWw';} //@TheRatCooler
	if (ytLink==2) {youtube='vvZEbusxgCc';} //@TheRatCooler
break;
case 56:
mydiv='Yonita',imgur='3dn8Twj',imgur9='OBmGo20.png',game='Alien_X_Predator',ctype='Joke',lastupdate='20/11/21',gdrv='1wThRuRji2OB5C3zyB5MW03YOqhcleBZi',zpoints=10000
	//ytLink=(Math.floor(Math.random()*2));	if (ytLink==1) {youtube='';} //@
break;
case 0:
mydiv=''
}

if (bannerHtml==''){
bannerHtml='twitter.com/Zanmyo';
bannerImg='i.imgur.com/qV3Q36A.gif';
}
if (youtube.length > 15) {sufix='&autoplay=1&mute=1';}

switch (code) {
	// Build the button
	case 1:
		if ( (zpoints==0) || (playerOne[0] >= zpoints) ) {
		document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+".png onClick='charData("+numero+",2)' class='rbutton' width=25 height=25><b>"+mydiv+"</b> "+game+" / "+ctype+" / Last update: "+lastupdate+"<br>"
		}
	break;
	// Button action
	case 2:
		document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+".png width=25 height=25><b>"+mydiv+"</b> "+game+" / "+ctype+" / Last update: "+lastupdate+"<br><a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png></a>"
	break;
	// Video showcase
	case 3:
		if ( (zpoints==0) || (playerOne[0] >= zpoints) || isHalloween || (numero!=45) ) {
			if (youtube!=''){
			document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+""+sufix+" width='500' height='300' frameborder='0'></iframe><br>CHAR ("+numero+"): <b>"+mydiv+"</b> <a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png title=CHAR_"+mydiv+"></a>"
			}
			else{
			document.getElementById('videoshowcase').innerHTML="<img src=https://i.imgur.com/"+imgur9+" height='300'><br>CHAR ("+numero+"): <b>"+mydiv+"</b> <a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png title=CHAR_"+mydiv+"></a>"
			}
		}
		else{
			document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/3glPmy2zyBk?si=pXZI2xQ4Ltr8MLE_&start=244&end=294&autoplay=1&mute=1 width='500' height='300' frameborder='0'></iframe><br>Full-Game: <b>Steel Warriors</b> <a target='_blank' href=https://www.dropbox.com/s/hp2b158fiqff6he/MSW-Steel%20Warriors1.1.rar?dl=1><img src=https://i.imgur.com/pJFCm25.png title='Steel Warriors'></a>"
		}
		document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
	break;
}

const elementos = document.querySelectorAll('b, a');
elementos.forEach(elemento => {
  if (isHalloween) {elemento.style.color = 'red';}
});

}

// LINK GDRV DROPBOX YOUTUBE
// {window.open('https://www.dropbox.com/sh/gqnzgea8ec80pvx/AACYMGQkTpC7rg6FcazaK-rPa?dl=0','_blank')}
// document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+".png width=25 height=25><b>"+mydiv+"</b> "+game+" / "+ctype+" / Last update: "+lastupdate+"<br><iframe src=https://www.youtube.com/embed/"+youtube+" width='430' height='240' frameborder='0'></iframe><br><a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png></a>"
// videoshowcase <iframe src=https://www.youtube.com/embed/"+youtube+""+sufix+" width='500' height='300' frameborder='0'></iframe>





