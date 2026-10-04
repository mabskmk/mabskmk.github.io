const numExtras=4;
const numLinks=66;
var checkMisc = new Array((numExtras)+1);
var checkLinks = new Array((numLinks)+1);
var randomValue=0;

// Function to play a random video
function showcaseMisc() {
let bannerHtml	='';
let bannerImg	='';
let myLabel		='';
let prefix		='';
let sufix		='';
let youtube		='';
let bitchute	='';
let link		='';
let rng			=0;
	
if (btnnew.disabled==false) {return;} // Disable the function when leaving the showcase

// Check if the array is full
for (let x=numExtras;x>0;x--) {
	if ( checkMisc[x]!=='ok' ) {break;}
	if (x==1 && checkMisc[x]=='ok' ) {checkMisc = [];} 
}

// Set a randomValue
do {
	randomValue=(Math.floor(Math.random()*numExtras)+1);
}	while (randomValue>0 && checkMisc[randomValue]=='ok');

if (randomValue>0 && checkMisc[randomValue]!='ok') {checkMisc[randomValue]='ok';}


// Get the info of the video [id]
switch (randomValue) {
case 1:
myLabel='Check out my Bitchute channel',link='www.bitchute.com/channel/LIy5FtdNRSH2';
rng=(Math.floor(Math.random()*6));
	if (rng==0) {bitchute='AWXqY34Vs5Wh';}
	if (rng==1) {bitchute='VYGYEGEtVDaA';}
	if (rng==2) {bitchute='KKMFek1pNHP5';}
	if (rng==3) {bitchute='64sZqbTvvVpE';}
	if (rng==4) {bitchute='TWUBbXbPIx5b';}
	if (rng==5) {bitchute='joKEB1SowFP9';}		
break;
case 2:
myLabel='Check out the 66th place in MAGMML2',youtube='zSFWH5X9K_Y?si=oPb63hYxItrSzeOP&start=737&end=787',link='magmmlcontest.com/wiki/index.php/Chomp_Man_(stage)',bannerHtml='www.sprites-inc.co.uk',bannerImg='i.imgur.com/RqfqBg1.png'
break;
case 3:
myLabel='MUGEN_means_INFINITY',youtube='yfgdqUY4CSc?si=dyLvAwEU11ouWsBL'
rng=(Math.floor(Math.random()*288));
	youtube=(youtube+"&start="+rng+"&end="+(rng+50));
break;
case 4:
myLabel='some Jayce and the wheeled warriors',youtube='JFBGdRH2ajk?si=phppoIuckRSw__Dj'
rng=(Math.floor(Math.random()*280));
	youtube=(youtube+"&start="+rng+"&end="+(rng+50));
break;
}

if (bannerHtml==''){
rng=(Math.floor(Math.random()*15));
	if (rng==0) {bannerHtml='wani-shima.sakura.ne.jp/MUGEN.html';bannerImg='wani-shima.sakura.ne.jp/kyouryuubana.jpg';}
	if (rng==1) {bannerHtml='kaendd.free.fr';bannerImg='i.imgur.com/8OmGYOX.png';}
	if (rng==2) {bannerHtml='ankokunaitou.blog.fc2.com';bannerImg='i.imgur.com/EIXSnzc.png';}
	if (rng==3) {bannerHtml='sunnyworld.free.fr';bannerImg='i.imgur.com/gAsrMM0.png';}
	if (rng==4) {bannerHtml='valgallah77.web.fc2.com/';bannerImg='i.imgur.com/q7RAxeG.png';}
	if (rng==5) {bannerHtml='mugedoso.web.fc2.com/nhk/index.html';bannerImg='i.imgur.com/mXtDvrn.png';}
	if (rng==6) {bannerHtml='www.ne.jp/asahi/across/chronicle/';bannerImg='i.imgur.com/8J4NDcA.png';}
	if (rng==7) {bannerHtml='ngmc.retrogames.com/index.html';bannerImg='i.imgur.com/X4AzHu1.gif';}
	if (rng==8) {bannerHtml='mugen-restaurant.jp/';bannerImg='i.imgur.com/GXjxQXs.png';}
	if (rng==9) {bannerHtml='network.mugenguild.com/basara/';bannerImg='i.imgur.com/ZF0Qs7E.png';}
	if (rng==10) {bannerHtml='mugenfreeforall.com/topic/51530-3ha-collection/';bannerImg='web.archive.org/web/20111018152538im_/http://page.freett.com/3ha/img/ba.gif';}
	if (rng==11) {bannerHtml='www.andersonkenya1.net/';bannerImg='media.invisioncic.com/z328913/set_resources_1/6d538d11ecfced46f459ee300b5e80ec_ak1-button_17f8a0.gif';}
	if (rng==12) {bannerHtml='sites.google.com/view/ohmsby-mugen/';bannerImg='i.imgur.com/hYMIIuZ.png';}
	if (rng==13) {bannerHtml='sites.google.com/view/gemeos-dos-jogos/mugen';bannerImg='i.imgur.com/SoebPHW.png';}
	if (rng==14) {bannerHtml='twitter.com/Zanmyo';bannerImg='i.imgur.com/qV3Q36A.gif';}
}

if ( youtube!=='' ) { prefix='youtube',sufix=youtube+"&autoplay=1&mute=1";}
if ( bitchute!=='') { prefix='bitchute',sufix=bitchute;}

document.getElementById('videoshowcase').innerHTML="<iframe src=https://www."+prefix+".com/embed/"+sufix+" width='500'   height='300' frameborder='0' title="+myLabel+"></iframe><br><a target='_blank' href=https://"+link+"><b>"+myLabel+"</b></a>"
document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
intervalTime=setTimeout('showcaseCharacter()',50000); //showcaseCharacter -> showcaseStage -> showcaseMisc

const elementos = document.querySelectorAll('b, a');
elementos.forEach(elemento => {
  if (isHalloween) {elemento.style.color = 'red';}
});

}

function showLinks() {

document.getElementById('linkiss').innerHTML="<a title='github' target='_blank' href='https://github.com/mabskmk/mabskmk.github.io'><img src='https://www.google.com/s2/favicons?domain=github.com'/></a>"
	
for (let l=1;l< (!isVertical?63:37) ;l++) {

// Set a randomValue
do {
	randomValue = (Math.floor(Math.random()*numLinks)+1);
}	while (randomValue>0 && checkLinks[randomValue]=='ok');

if (randomValue>0 && checkLinks[randomValue]!='ok') {checkLinks[randomValue]='ok';}

addLink(randomValue);
}
}

function addLink(numero) {
let linkTitle = '';
let linkHref  = '';
let linkImage = '';
let linkImgur = '';
let linkImagee = '';
let randomValue =0;

switch (numero) {
case 1:
linkTitle='csdb',linkHref='csdb.dk/scener/?id=4616',linkImage='www.csdb.dk';
break;
case 2:
linkTitle='pcloud',linkHref='my.pcloud.com/#page=register&invite=QyVhZug5dQk',linkImage='www.pcloud.com';
break;
case 3:
linkTitle='alison',linkHref='www.alison.com',linkImage='www.alison.com';
break;
case 4:
linkTitle='modules.pl',linkHref='www.modules.pl',linkImagee='www.modules.pl/gfx/favicon.ico';
break;
case 5:
linkTitle='mirsoft',linkHref='www.mirsoft.info/index.php',linkImage='www.mirsoft.info';
break;
case 6:
linkTitle='amp',linkHref='amp.dascene.net',linkImage='amp.dascene.net';
break;
case 7:
linkTitle='remakes online',linkHref='www.remakesonline.com',linkImage='www.remakesonline.com';
break;
case 8:
linkTitle='ddrcreations',linkHref='ddrcreations.com/index.html',linkImgur='VBLHxeZ.jpg';
break;
case 9:
linkTitle='wheelies',linkHref='www.wheelies.net',linkImgur='jup2WPq.png';
break;
case 10:
linkTitle='washu.org',linkHref='www.washu.org',linkImage='www.washu.org';
break;
case 11:
linkTitle='animemusicvideos',linkHref='www.animemusicvideos.org',linkImage='www.animemusicvideos.org';
break;
case 12:
linkTitle='scp_foundation',linkHref='scp-wiki.wikidot.com',linkImagee='scp-wiki.wikidot.com/local--favicon/favicon.gif';
break;
case 13:
linkTitle='hong_kong_movie_database',linkHref='hkmdb.com',linkImgur='rFQXScR.jpg';
break;
case 14:
linkTitle='w3schools',linkHref='www.w3schools.com',linkImage='www.w3schools.com';
break;
case 15:
linkTitle='mega.nz',linkHref='mega.nz/aff=hW1Fp-SLZoY',linkImage='mega.co.nz';
break;
case 16:
linkTitle='mediafire',linkHref='www.mediafire.com',linkImage='www.mediafire.com';
break;
case 17:
linkTitle='dropbox',linkHref='db.tt/u9VvAFSd',linkImage='db.tt';
break;
case 18:
linkTitle='tvtropes',linkHref='tvtropes.org',linkImage='tvtropes.org';
break;
case 19:
linkTitle='senbei',linkHref='www.santaluzia.com.br/biscoito-de-arroz-want-want-senbei-96g-1024159/p',linkImage='istripper.com';
break;
case 20:
linkTitle='neuronball',linkHref='www.neuronball.com/en/team/53482',linkImagee='neuronball.data.neuronality.com/img/favicon/favicon.ico';
break;
case 21:
linkTitle='pci_concursos',linkHref='www.pciconcursos.com.br/concursos',linkImage='www.pciconcursos.com.br';
break;
case 22:
linkTitle='tumblr',linkHref='mabskmk.tumblr.com',linkImage='www.tumblr.com';
break;
case 23:
linkTitle='myanimelist',linkHref='myanimelist.net/profile/MabsKMK',linkImage='myanimelist.net';
break;
case 24:
linkTitle='lastfm',linkHref='www.last.fm/pt/user/MabsKMK',linkImage='www.last.fm';
break;
case 25:
linkTitle='flickr',linkHref='www.flickr.com/photos/mabskmk/albums',linkImage='www.flickr.com';
break;
case 26:
linkTitle='box',linkHref='app.box.com',linkImage='app.box.com';
break;
case 27:
linkTitle='tribalwars',linkHref='br.twstats.com/brp1/index.php?page=player&amp;id=918631277',linkImage='www.tribalwars.us';
break;
case 28:
linkTitle='metal-archives',linkHref='www.metal-archives.com',linkImage='www.metal-archives.com';
break;
case 29:
linkTitle='GradiusHW',linkHref='www.gamestone.co.uk/gradiushomeworld',linkImage='gamestone.co.uk/gradiushomeworld';
break;
case 30:
linkTitle='spotify',linkHref='open.spotify.com/user/12160780201',linkImage='play.spotify.com';
break;
case 31:
linkTitle='olhardigital',linkHref='olhardigital.com.br',linkImage='olhardigital.com.br';
break;
case 32:
linkTitle='game_of_bombs',linkHref='gameofbombs.com',linkImage='gameofbombs.com';
break;
case 33:
linkTitle='reddit',linkHref='www.reddit.com/user/mabskmk',linkImage='www.reddit.com';
break;
case 34:
linkTitle='Электа',linkHref='www.bitchute.com/channel/LIy5FtdNRSH2',linkImage='www.bitchute.com';
break;
case 35:
linkTitle='Chomp-Man',linkHref='www.deviantart.com/karakatodzo/art/Chomp-Man-MaGMML2-788466027',linkImage='www.deviantart.com';
break;
case 36:
linkTitle='laribug',linkHref='www.twitch.tv/laribug',linkImage='www.twitch.tv';
break;
case 37:
linkTitle='betterttv',linkHref='betterttv.com/users/58915d7ef267f1704334835c',linkImage='betterttv.com';
break;
case 38:
linkTitle='cloudconvert',linkHref='cloudconvert.com',linkImage='cloudconvert.com';
break;
case 39:
linkTitle='signavatar',linkHref='signavatar.com',linkImgur='2hOzGrX.png';
break;
case 40:
linkTitle='Proton',linkHref='proton.me',linkImage='proton.me';
break;
case 41:
linkTitle='vgm',linkHref='downloads.khinsider.com/?u=1048884',linkImage='downloads.khinsider.com';
break;
case 42:
linkTitle='2062',linkHref='2062.jp',linkImage='2062.jp';
break;
case 43:
linkTitle='SBT',linkHref='www.sbt.com.br/ao-vivo',linkImage='www.sbt.com.br';
break;
case 44:
linkTitle='Jumpshare',linkHref='jumpshare.com',linkImage='jumpshare.com';
break;
case 45:
linkTitle='Sync',linkHref='www.sync.com',linkImage='www.sync.com';
break;
case 46:
linkTitle='playlistFinder',linkHref='www.chosic.com/spotify-playlist-search-tool-by-song-or-artist',linkImage='chosic.com';
break;
case 47:
linkTitle='modarchive',linkHref='modarchive.org/index.php?request=view_by_moduleid&query=38887',linkImage='modarchive.org';
break;
case 48:
linkTitle='ocremix',linkHref='ocremix.org',linkImage='ocremix.org';
break;
case 49:
linkTitle='4shared',linkHref='www.4shared.com',linkImage='4shared.com';
break;
case 50:
linkTitle='chomikuj',linkHref='chomikuj.pl',linkImage='chomikuj.pl';
break;
case 51:
linkTitle='cling',linkHref='cling.com/c/Bookmarks-b2DI9fiwpjI75GAEvRmvezb',linkImage='cling.com';
break;
case 52:
linkTitle='uptodown',linkHref='www.uptodown.com',linkImage='www.uptodown.com';
break;
case 53:
linkTitle='raindrop',linkHref='app.raindrop.io',linkImage='app.raindrop.io';
break;
case 54:
linkTitle='suno',linkHref='suno.com/song/3ebaae88-d18d-4155-ab10-8d32c5ecafd7',linkImage='suno.com';
break;
case 55:
linkTitle='models',linkHref='models.com/models/Gisele-Bundchen',linkImage='models.com';
break;
case 56:
linkTitle='winampskins',linkHref='skins.webamp.org',linkImage='skins.webamp.org';
break;
case 57:
linkTitle='comparetext',linkHref='www.comparetextonline.com',linkImage='www.comparetextonline.com';
break;
case 58:
linkTitle='streamdatabase',linkHref='www.streamdatabase.com/twitch/global-badges',linkImage='www.streamdatabase.com';
break;
case 59:
linkTitle='catfight',linkHref='www.myabandonware.com/game/catfight-the-ultimate-female-fighting-game-dqa',linkImage='www.myabandonware.com';
break;
case 60:
linkTitle='heavyharmonies',linkHref='heavyharmonies.com/cgi-bin/band.cgi?BandNum=3652',linkImage='heavyharmonies.com';
break;
case 61:
linkTitle='shazam',linkHref='www.shazam.com',linkImage='www.shazam.com';
break;
case 62:
linkTitle='twitter',linkImage='x.com';
randomValue=(Math.floor(Math.random()*8));
	if (randomValue==0) {linkHref='x.com/TaichiZhe/status/1855437567505649691';}
	if (randomValue==1) {linkHref='x.com/crazyclipsonly/status/1872613558665814133';}
	if (randomValue==2) {linkHref='x.com/hantersan/status/1692928929894658243';}
	if (randomValue==3) {linkHref='x.com/InternetH0F/status/1767415276927172929';}
	if (randomValue==4) {linkHref='x.com/Lilium725/status/1858087759946317936';}
	if (randomValue==5) {linkHref='x.com/AMAZlNGNATURE/status/1866846227389616225';}
	if (randomValue==6) {linkHref='x.com/hoangphuc180115/status/1878678823262437409';}
	if (randomValue==7) {linkHref='x.com/Alrock024/status/1746386616825082050';}
break;
case 63:
linkTitle='playnite',linkHref='playnite.link',linkImage='playnite.link';
break;
case 64:
linkTitle='templolohan',linkHref='templolohan.com',linkImage='templolohan.com';
break;
case 65:
linkTitle='lurid-land',linkHref='classicreload.com/lurid-land.html',linkImage='classicreload.com';
break;
case 66:
linkTitle='ohmsby-mugen',linkHref='sites.google.com/view/ohmsby-mugen',linkImgur='nMgFh1V.png';
break;
}

if (linkImage != '') {document.getElementById('linkiss').innerHTML+="<a title="+linkTitle+" target='_blank' href=https://"+linkHref+"><img src=https://www.google.com/s2/favicons?domain="+linkImage+"/></a>"};
if (linkImgur != '') {document.getElementById('linkiss').innerHTML+="<a title="+linkTitle+" target='_blank' href=https://"+linkHref+"><img src=https://i.imgur.com/"+linkImgur+" width=16 height=16></a>"};
if (linkImagee != '') {document.getElementById('linkiss').innerHTML+="<a title="+linkTitle+" target='_blank' href=https://"+linkHref+"><img src=https://"+linkImagee+" width=16 height=16></a>"};

}
