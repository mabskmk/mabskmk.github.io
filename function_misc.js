const numExtras=14;
const numLinks=67;
var bannerHtml='';
var bannerImg='';
var randomValue=0;
var checkMisc = new Array((numExtras)+1);
var checkLinks = new Array((numLinks)+1);

// Function to play a random video
function showcaseMisc() {
mydiv='';youtube='';link='';
	
if (btnnew.disabled==false) {return;} // Disable the function when leaving the showcase

// Check if the array is full
for (let x=numExtras;x>0;x--) {
	if ( checkMisc[x]!=='ok' ) {break;}
	if (x==1 && checkMisc[x]=='ok' ) {checkMisc = [];} 
}

// Set a randomValue
randomValue=(Math.floor(Math.random()*numExtras)+1);	
while (randomValue>0 && checkMisc[randomValue]=='ok') {randomValue=(Math.floor(Math.random()*numExtras)+1);}
if (randomValue>0 && checkMisc[randomValue]!='ok') {checkMisc[randomValue]='ok';}


// Get the info of the video [id]
switch (randomValue) {
case 0:
mydiv=''
break;
case 1:
mydiv='Check out my Bitchute channel',youtube='uzctO7j_1Sg?si=E-_6g4JTy7pjYPV5&start=180&end=230',link='www.bitchute.com/channel/LIy5FtdNRSH2';
break;
case 2:
mydiv='Check out the 66th place in MAGMML2',youtube='0IACU-xea7o?si=Zw5JWWPj-H8A86Nc&start=737&end=787',link='magmmlcontest.com/wiki/index.php/Chomp_Man_(stage)',bannerHtml='www.sprites-inc.co.uk',bannerImg='i.imgur.com/RqfqBg1.png'
break;
case 3:
mydiv='Check out this stage for Nemesis Online',youtube='vsisup-v2mk?si=3kCcOpLS6E_djvsE&start=101&end=151',link='www.remakesonline.com/nemesis/fase.php?fase=crystalforest'
break;
case 4:
mydiv='Dr.Wily 8bits still growing',youtube='uNyQi6YTfg8?si=XjaN7IxIJBDCC3Nk&start=18&end=168'
break;
case 5:
mydiv='Just_a_normal_day_in_Mabinogi',youtube='b7vz7krharY?si=Bi_DRud39PtvqqkR'
break;
case 6:
mydiv='This minigame got an update after 13 years',youtube='5MRExSi44ow?si=eIOBY0OjK4nGbl1b&start=430&end=580'
break;
case 7:
mydiv='Today is the day to test your limits',youtube='pxmD8ycQgzM?si=ewnp4Eb3-y3mEy5G&start=50&end=200'
break;
case 8:
mydiv='Spoilers!!!',youtube='GYEI39sPxJY?si=83vpPNU1fzcc2SMo&start=160&end=210'
break;
case 9:
mydiv='Check out this crazy compilation',youtube='h5k5G6Dt6ho?si=26jFNX_e327bRdwd&start=703&end=853',link='drive.google.com/drive/folders/1a5la0Q-hWKLvAitgPxGrr6br_0lJ7kZb?usp=drive_link'
break;
case 10:
mydiv='Fantastico_Jaspion',youtube='1_7gepKMuts?si=RPYmXGIbHLL4--Kn',bannerHtml='sato.tv.br',bannerImg='i.imgur.com/rMxn204.png'
break;
case 11:
mydiv='MUGEN_means_INFINITY',youtube='1ZUwgwQQoTU?si=PjHwcYXOizpxsn4T&start=224&end=274'
break;
case 12:
mydiv='Good_times',youtube='99FOYzN9U7A?si=5e2ZYNHH0WMbdX4P'
break;
case 13:
mydiv='Arknights_ridiculous',youtube='c3IT6VnI5rw?si=o_a-I_IkEwjw5g4P&start=360&end=410'
break;
case 14:
mydiv='Roulette Mugen Compilation',youtube='TAOKhz_1Y_M?feature=shared'
break;
}

if (bannerHtml==''){
	bannerHtml='twitter.com/Zanmyo';
	bannerImg='i.imgur.com/qV3Q36A.gif';
}

document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"&autoplay=1&mute=1 width='500'   height='300' frameborder='0' title="+mydiv+"></iframe><br><a target='_blank' href=https://"+link+"><b>"+mydiv+"</b></a>"
document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
intervalTime=setTimeout('showcaseCharacter()',50000); //showcaseCharacter -> showcaseStage -> showcaseMisc

const elementos = document.querySelectorAll('b, a');
elementos.forEach(elemento => {
  if (isHalloween) {elemento.style.color = 'red';}
});

}

function showLinks() {

document.getElementById('linkiss').innerHTML="<a title='github' target='_blank' href='https://github.com/mabskmk/mabskmk.github.io'><img src='https://www.google.com/s2/favicons?domain=github.com'/></a>"

// Check if the array is full
for (let x=numLinks;x>0;x--) {
	if ( checkLinks[x]!=='ok' ) {break;}
	if (x==1 && checkLinks[x]=='ok' ) {checkLinks = [];} 
}

for (let l=1;l<63;l++) {

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
linkTitle='modules.pl',linkHref='www.modules.pl',linkImage='www.modules.pl';
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
linkTitle='filen.io',linkHref='filen.io/r/956f3f985e56e07f010548018a56c44c',linkImage='filen.io';
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
linkTitle='scp_foundation',linkHref='scp-wiki.wikidot.com',linkImage='www.scp-wiki.wikidot.com';
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
linkTitle='neuronball',linkHref='www.neuronball.com/en/team/53482',linkImage='www.neuronball.com';
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
linkTitle='SBT',linkHref='www.sbt.com.br/aovivo',linkImage='www.sbt.com.br';
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
linkTitle='kungfutea',linkHref='x.com/TaichiZhe/status/1855437567505649691',linkImage='x.com';
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
case 67:
linkTitle='ddrcreations',linkHref='ddrcreations.com/index.html',linkImage='ddrcreations.com';
break;
}

if (linkImage != '') {
	document.getElementById('linkiss').innerHTML+="<a title="+linkTitle+" target='_blank' href=https://"+linkHref+"><img src=https://www.google.com/s2/favicons?domain="+linkImage+"/></a>"
}
else {
	document.getElementById('linkiss').innerHTML+="<a title="+linkTitle+" target='_blank' href=https://"+linkHref+"><img src=https://i.imgur.com/"+linkImgur+" width=16 height=16></a>"
}

}
