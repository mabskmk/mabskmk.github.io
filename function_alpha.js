//MENU
function ppmain(numero) {
document.getElementById('cabec').innerHTML="<b><a href='https://en.wikipedia.org/wiki/M.U.G.E.N' target='_blank' id='top'><u>M.U.G.E.N</u></a></b><br>A 2D fighting game engine that enables you to create fighting games.<br>Almost everything can be customized, from individual characters to stages, as well as the look and feel of the game.</b><br>I hope you enjoy my 'work'</font><br><br><input type=button onClick='menuchar()' value='Characters' id='btnchar'><input type=button onClick='menustage3()' value='Stages' id='btnstg'><input type=button onClick='menufullgame()' value='Fullgames' id='btnfullg'><input type=button onClick='menugame()' value='Battle!' id='btnyotu'><input type=button onClick='ppmain(2)' value='Showcase' id='btnnew'><br>"
switch (numero) {
case 1:
document.getElementById('principal').innerHTML=""
location.href='#cabec'
break;
case 2:
document.getElementById('linkiss').innerHTML="<a title='github' target='_blank' href='//github.com/mabskmk/mabskmk.github.io'><img src='//www.google.com/s2/favicons?domain=github.com'/></a><a title='csdb' target='_blank' href='//csdb.dk/scener/?id=4616'><img src='//www.google.com/s2/favicons?domain=www.csdb.dk/'/></a><a title='pcloud' target='_blank' href='//my.pcloud.com/#page=register&invite=QyVhZug5dQk'><img src='//www.google.com/s2/favicons?domain=www.pcloud.com'/></a><a title='alison' target='_blank' href='//www.alison.com/'><img src='//www.google.com/s2/favicons?domain=www.alison.com/'/></a><a title='modules.pl' target='_blank' href='//www.modules.pl'><img src='//www.google.com/s2/favicons?domain=www.modules.pl/'/></a><a title='mirsoft' target='_blank' href='//www.mirsoft.info/index.php'><img src='//www.google.com/s2/favicons?domain=www.mirsoft.info'/></a><a title='amp' target='_blank' href='//amp.dascene.net'><img src='//www.google.com/s2/favicons?domain=amp.dascene.net'/></a><a title='incompetech' target='_blank' href='//incompetech.com'><img src='//www.google.com/s2/favicons?domain=incompetech.com'/></a><a title='remakes online' target='_blank' href='//www.remakesonline.com/'><img src='//www.google.com/s2/favicons?domain=www.remakesonline.com'/></a><a title='filen.io' target='_blank' href='//filen.io/r/956f3f985e56e07f010548018a56c44c'><img src='//www.google.com/s2/favicons?domain=filen.io'/></a><a title='wheelies' target='_blank' href='//www.wheelies.net'><img src='//i.imgur.com/jup2WPq.png' width=16 height=16/'/></a><a title='washu.org' target='_blank' href='//www.washu.org'><img src='//www.google.com/s2/favicons?domain=www.washu.org'/></a><a title='animemusicvideos' target='_blank' href='//www.animemusicvideos.org'><img src='//www.google.com/s2/favicons?domain=www.animemusicvideos.org'/></a><a title='scp foundation' target='_blank' href='//scp-wiki.wikidot.com/'><img src='//www.google.com/s2/favicons?domain=www.scp-wiki.wikidot.com'/></a><a title='hong kong movie database' target='_blank' href='//hkmdb.com'><img src='//i.imgur.com/rFQXScR.jpg' width=16 height=16/'/></a><a title='jun1517.tistory' target='_blank' href='//jun1517.tistory.com'><img src='//www.google.com/s2/favicons?domain=jun1517.tistory.com'/></a><a title='w3schools' target='_blank' href='//www.w3schools.com'><img src='//www.google.com/s2/favicons?domain=www.w3schools.com'/></a><a title='mega.nz' target='_blank' href='//mega.nz/aff=hW1Fp-SLZoY'><img src='//www.google.com/s2/favicons?domain=mega.co.nz'/></a><a title='mediafire' target='_blank' href='//www.mediafire.com'><img src='//www.google.com/s2/favicons?domain=www.mediafire.com'/></a><a title='dropbox' target='_blank' href='//db.tt/u9VvAFSd'><img src='//www.google.com/s2/favicons?domain=db.tt'/></a><a title='tvtropes' target='_blank' href='//tvtropes.org'><img src='//www.google.com/s2/favicons?domain=tvtropes.org'/></a><a title='senbei' target='_blank' href='//www.santaluzia.com.br/biscoito-de-arroz-want-want-senbei-96g-1024159/p'><img src='//www.google.com/s2/favicons?domain=istripper.com'/></a><a title='imgur' target='_blank' href='//imgur.com/user/mabskmk/posts'><img src='//www.google.com/s2/favicons?domain=www.imgur.com'/></a><a title='neuronball' target='_blank' href='//www.neuronball.com/en/team/53482/'><img src='//www.google.com/s2/favicons?domain=www.neuronball.com'/></a><a title='pci concursos' target='_blank' href='//www.pciconcursos.com.br/concursos'><img src='//www.google.com/s2/favicons?domain=www.pciconcursos.com.br'/></a><a title='tumblr' target='_blank' href='//mabskmk.tumblr.com'><img src='//www.google.com/s2/favicons?domain=www.tumblr.com'/></a><a title='myanimelist' target='_blank' href='//myanimelist.net/profile/MabsKMK'><img src='//www.google.com/s2/favicons?domain=myanimelist.net'/></a><a title='lastfm' target='_blank' href='//www.last.fm/pt/user/MabsKMK'><img src='//www.google.com/s2/favicons?domain=www.last.fm'/></a><a title='flickr' target='_blank' href='//www.flickr.com/photos/mabskmk/albums'><img src='//www.google.com/s2/favicons?domain=www.flickr.com'/></a><a title='box' target='_blank' href='//app.box.com'><img src='//www.google.com/s2/favicons?domain=app.box.com'/></a><a title='deezer' target='_blank' href='//www.deezer.com/br/profile/5294149384/'><img src='//www.google.com/s2/favicons?domain=www.deezer.com'/></a><a title='yandex' target='_blank' href='//www.yandex.com/'><img src='//www.google.com/s2/favicons?domain=www.yandex.com'/></a><a title='tribalwars' target='_blank' href='//br.twstats.com/brp1/index.php?page=player&amp;id=918631277'><img src='//www.google.com/s2/favicons?domain=www.tribalwars.us/'/></a><a title='metal-archives' target='_blank' href='//www.metal-archives.com/'><img src='//www.google.com/s2/favicons?domain=www.metal-archives.com/'/></a><a title='GradiusHW' target='_blank' href='//www.gamestone.co.uk/gradiushomeworld/'><img src='//www.google.com/s2/favicons?domain=gamestone.co.uk/gradiushomeworld/'/></a><a title='spotify' target='_blank' href='//open.spotify.com/user/12160780201'><img src='//www.google.com/s2/favicons?domain=play.spotify.com/'/></a><a title='olhardigital' target='_blank' href='//olhardigital.com.br'><img src='//www.google.com/s2/favicons?domain=olhardigital.com.br'/></a><a title='game of bombs' target='_blank' href='//gameofbombs.com'><img src='//www.google.com/s2/favicons?domain=gameofbombs.com'/></a><a title='reddit' target='_blank' href='//www.reddit.com/user/mabskmk/'><img src='//www.google.com/s2/favicons?domain=www.reddit.com'/></a><a title='Электа' target='_blank' href='//www.bitchute.com/channel/LIy5FtdNRSH2/'><img src='//www.google.com/s2/favicons?domain=www.bitchute.com'/></a><a title='Chomp-Man' target='_blank' href='//www.deviantart.com/karakatodzo/art/Chomp-Man-MaGMML2-788466027'><img src='//www.google.com/s2/favicons?domain=www.deviantart.com'/></a><a title='laribug' target='_blank' href='//www.twitch.tv/laribug'><img src='//www.google.com/s2/favicons?domain=www.twitch.tv'/></a><a title='betterttv' target='_blank' href='//betterttv.com/users/58915d7ef267f1704334835c'><img src='//www.google.com/s2/favicons?domain=betterttv.com'/></a><a title='cloudconvert' target='_blank' href='//cloudconvert.com'><img src='//www.google.com/s2/favicons?domain=cloudconvert.com'/></a><a title='signavatar' target='_blank' href='//signavatar.com/'><img src='//i.imgur.com/2hOzGrX.png' width=16 height=16/></a><a title='Proton' target='_blank' href='//proton.me'><img src='//www.google.com/s2/favicons?domain=proton.me'/></a><a title='vgm' target='_blank' href='//downloads.khinsider.com/?u=1048884'><img src='//www.google.com/s2/favicons?domain=downloads.khinsider.com'/></a><a title='2062' target='_blank' href='//2062.jp/'><img src='//www.google.com/s2/favicons?domain=2062.jp/'/></a><a title='SBT' target='_blank' href='//www.sbt.com.br/aovivo/'><img src='//www.google.com/s2/favicons?domain=www.sbt.com.br'/></a><a title='Jumpshare' target='_blank' href='//jumpshare.com'><img src='//www.google.com/s2/favicons?domain=jumpshare.com'/></a><a title='Sync' target='_blank' href='//www.sync.com'><img src='//www.google.com/s2/favicons?domain=www.sync.com'/></a><a title='Instafavs' target='_blank' href='//www.instagram.com/?variant=favorites'><img src='//www.google.com/s2/favicons?domain=instagram.com'/></a><a title='playlistFinder' target='_blank' href='//www.chosic.com/spotify-playlist-search-tool-by-song-or-artist'><img src='//www.google.com/s2/favicons?domain=chosic.com'/></a><a title='modarchive' target='_blank' href='//modarchive.org/index.php?request=view_by_moduleid&query=38887'><img src='//www.google.com/s2/favicons?domain=modarchive.org'/></a><a title='ocremix' target='_blank' href='//ocremix.org/'><img src='//www.google.com/s2/favicons?domain=ocremix.org'/></a><a title='4shared' target='_blank' href='//www.4shared.com'><img src='//www.google.com/s2/favicons?domain=4shared.com'/></a><a title='chomikuj' target='_blank' href='//chomikuj.pl'><img src='//www.google.com/s2/favicons?domain=chomikuj.pl'/></a><a title='pixiv' target='_blank' href='//www.pixiv.net/en/users/39439539/bookmarks/artworks/misc'><img src='//www.google.com/s2/favicons?domain=www.pixiv.net'/></a><a title='music-recognition' target='_blank' href='//www.acrcloud.com/identify-songs-music-recognition-online'><img src='//www.google.com/s2/favicons?domain=www.acrcloud.com'/></a><a title='cling' target='_blank' href='//cling.com/c/Bookmarks-b2DI9fiwpjI75GAEvRmvezb'><img src='//www.google.com/s2/favicons?domain=cling.com'/></a><a title='ezgif' target='_blank' href='//ezgif.com/maker'><img src='//www.google.com/s2/favicons?domain=ezgif.com'/></a><a title='uptodown' target='_blank' href='//www.uptodown.com/'><img src='//www.google.com/s2/favicons?domain=www.uptodown.com/'/></a><a title='raindrop' target='_blank' href='//app.raindrop.io'><img src='//www.google.com/s2/favicons?domain=app.raindrop.io'/></a>"
document.getElementById('linkiss').innerHTML="<a title='github' target='_blank' href='//github.com/mabskmk/mabskmk.github.io'><img src='//www.google.com/s2/favicons?domain=github.com'/></a><a title='csdb' target='_blank' href='//csdb.dk/scener/?id=4616'><img src='//www.google.com/s2/favicons?domain=www.csdb.dk/'/></a><a title='pcloud' target='_blank' href='//my.pcloud.com/#page=register&invite=QyVhZug5dQk'><img src='//www.google.com/s2/favicons?domain=www.pcloud.com'/></a><a title='alison' target='_blank' href='//www.alison.com/'><img src='//www.google.com/s2/favicons?domain=www.alison.com/'/></a><a title='modules.pl' target='_blank' href='//www.modules.pl'><img src='//www.google.com/s2/favicons?domain=www.modules.pl/'/></a><a title='mirsoft' target='_blank' href='//www.mirsoft.info/index.php'><img src='//www.google.com/s2/favicons?domain=www.mirsoft.info'/></a><a title='amp' target='_blank' href='//amp.dascene.net'><img src='//www.google.com/s2/favicons?domain=amp.dascene.net'/></a><a title='incompetech' target='_blank' href='//incompetech.com'><img src='//www.google.com/s2/favicons?domain=incompetech.com'/></a><a title='remakes online' target='_blank' href='//www.remakesonline.com/'><img src='//www.google.com/s2/favicons?domain=www.remakesonline.com'/></a><a title='filen.io' target='_blank' href='//filen.io/r/956f3f985e56e07f010548018a56c44c'><img src='//www.google.com/s2/favicons?domain=filen.io'/></a><a title='wheelies' target='_blank' href='//www.wheelies.net'><img src='//i.imgur.com/jup2WPq.png' width=16 height=16/'/></a><a title='washu.org' target='_blank' href='//www.washu.org'><img src='//www.google.com/s2/favicons?domain=www.washu.org'/></a><a title='animemusicvideos' target='_blank' href='//www.animemusicvideos.org'><img src='//www.google.com/s2/favicons?domain=www.animemusicvideos.org'/></a><a title='scp foundation' target='_blank' href='//scp-wiki.wikidot.com/'><img src='//www.google.com/s2/favicons?domain=www.scp-wiki.wikidot.com'/></a><a title='hong kong movie database' target='_blank' href='//hkmdb.com'><img src='//i.imgur.com/rFQXScR.jpg' width=16 height=16/'/></a><a title='jun1517.tistory' target='_blank' href='//jun1517.tistory.com'><img src='//www.google.com/s2/favicons?domain=jun1517.tistory.com'/></a><a title='w3schools' target='_blank' href='//www.w3schools.com'><img src='//www.google.com/s2/favicons?domain=www.w3schools.com'/></a><a title='mega.nz' target='_blank' href='//mega.nz/aff=hW1Fp-SLZoY'><img src='//www.google.com/s2/favicons?domain=mega.co.nz'/></a><a title='mediafire' target='_blank' href='//www.mediafire.com'><img src='//www.google.com/s2/favicons?domain=www.mediafire.com'/></a><a title='dropbox' target='_blank' href='//db.tt/u9VvAFSd'><img src='//www.google.com/s2/favicons?domain=db.tt'/></a><a title='tvtropes' target='_blank' href='//tvtropes.org'><img src='//www.google.com/s2/favicons?domain=tvtropes.org'/></a><a title='senbei' target='_blank' href='//www.santaluzia.com.br/biscoito-de-arroz-want-want-senbei-96g-1024159/p'><img src='//www.google.com/s2/favicons?domain=istripper.com'/></a><a title='imgur' target='_blank' href='//imgur.com/user/mabskmk/posts'><img src='//www.google.com/s2/favicons?domain=www.imgur.com'/></a><a title='neuronball' target='_blank' href='//www.neuronball.com/en/team/53482/'><img src='//www.google.com/s2/favicons?domain=www.neuronball.com'/></a><a title='pci concursos' target='_blank' href='//www.pciconcursos.com.br/concursos'><img src='//www.google.com/s2/favicons?domain=www.pciconcursos.com.br'/></a><a title='tumblr' target='_blank' href='//mabskmk.tumblr.com'><img src='//www.google.com/s2/favicons?domain=www.tumblr.com'/></a><a title='myanimelist' target='_blank' href='//myanimelist.net/profile/MabsKMK'><img src='//www.google.com/s2/favicons?domain=myanimelist.net'/></a><a title='lastfm' target='_blank' href='//www.last.fm/pt/user/MabsKMK'><img src='//www.google.com/s2/favicons?domain=www.last.fm'/></a><a title='flickr' target='_blank' href='//www.flickr.com/photos/mabskmk/albums'><img src='//www.google.com/s2/favicons?domain=www.flickr.com'/></a><a title='box' target='_blank' href='//app.box.com'><img src='//www.google.com/s2/favicons?domain=app.box.com'/></a><a title='deezer' target='_blank' href='//www.deezer.com/br/profile/5294149384/'><img src='//www.google.com/s2/favicons?domain=www.deezer.com'/></a><a title='yandex' target='_blank' href='//www.yandex.com/'><img src='//www.google.com/s2/favicons?domain=www.yandex.com'/></a><a title='tribalwars' target='_blank' href='//br.twstats.com/brp1/index.php?page=player&amp;id=918631277'><img src='//www.google.com/s2/favicons?domain=www.tribalwars.us/'/></a><a title='metal-archives' target='_blank' href='//www.metal-archives.com/'><img src='//www.google.com/s2/favicons?domain=www.metal-archives.com/'/></a><a title='GradiusHW' target='_blank' href='//www.gamestone.co.uk/gradiushomeworld/'><img src='//www.google.com/s2/favicons?domain=gamestone.co.uk/gradiushomeworld/'/></a><a title='spotify' target='_blank' href='//open.spotify.com/user/12160780201'><img src='//www.google.com/s2/favicons?domain=play.spotify.com/'/></a><a title='olhardigital' target='_blank' href='//olhardigital.com.br'><img src='//www.google.com/s2/favicons?domain=olhardigital.com.br'/></a><a title='game of bombs' target='_blank' href='//gameofbombs.com'><img src='//www.google.com/s2/favicons?domain=gameofbombs.com'/></a><a title='reddit' target='_blank' href='//www.reddit.com/user/mabskmk/'><img src='//www.google.com/s2/favicons?domain=www.reddit.com'/></a><a title='Электа' target='_blank' href='//www.bitchute.com/channel/LIy5FtdNRSH2/'><img src='//www.google.com/s2/favicons?domain=www.bitchute.com'/></a><a title='Chomp-Man' target='_blank' href='//www.deviantart.com/karakatodzo/art/Chomp-Man-MaGMML2-788466027'><img src='//www.google.com/s2/favicons?domain=www.deviantart.com'/></a><a title='laribug' target='_blank' href='//www.twitch.tv/laribug'><img src='//www.google.com/s2/favicons?domain=www.twitch.tv'/></a><a title='betterttv' target='_blank' href='//betterttv.com/users/58915d7ef267f1704334835c'><img src='//www.google.com/s2/favicons?domain=betterttv.com'/></a><a title='cloudconvert' target='_blank' href='//cloudconvert.com'><img src='//www.google.com/s2/favicons?domain=cloudconvert.com'/></a><a title='signavatar' target='_blank' href='//signavatar.com/'><img src='//i.imgur.com/2hOzGrX.png' width=16 height=16/></a><a title='Proton' target='_blank' href='//proton.me'><img src='//www.google.com/s2/favicons?domain=proton.me'/></a><a title='vgm' target='_blank' href='//downloads.khinsider.com/?u=1048884'><img src='//www.google.com/s2/favicons?domain=downloads.khinsider.com'/></a><a title='2062' target='_blank' href='//2062.jp/'><img src='//www.google.com/s2/favicons?domain=2062.jp/'/></a><a title='SBT' target='_blank' href='//www.sbt.com.br/aovivo/'><img src='//www.google.com/s2/favicons?domain=www.sbt.com.br'/></a><a title='Jumpshare' target='_blank' href='//jumpshare.com'><img src='//www.google.com/s2/favicons?domain=jumpshare.com'/></a><a title='Sync' target='_blank' href='//www.sync.com'><img src='//www.google.com/s2/favicons?domain=www.sync.com'/></a><a title='Instafavs' target='_blank' href='//www.instagram.com/?variant=favorites'><img src='//www.google.com/s2/favicons?domain=instagram.com'/></a><a title='playlistFinder' target='_blank' href='//www.chosic.com/spotify-playlist-search-tool-by-song-or-artist'><img src='//www.google.com/s2/favicons?domain=chosic.com'/></a><a title='modarchive' target='_blank' href='//modarchive.org/index.php?request=view_by_moduleid&query=38887'><img src='//www.google.com/s2/favicons?domain=modarchive.org'/></a><a title='ocremix' target='_blank' href='//ocremix.org/'><img src='//www.google.com/s2/favicons?domain=ocremix.org'/></a><a title='4shared' target='_blank' href='//www.4shared.com'><img src='//www.google.com/s2/favicons?domain=4shared.com'/></a><a title='chomikuj' target='_blank' href='//chomikuj.pl'><img src='//www.google.com/s2/favicons?domain=chomikuj.pl'/></a><a title='pixiv' target='_blank' href='//www.pixiv.net/en/users/39439539/bookmarks/artworks/misc'><img src='//www.google.com/s2/favicons?domain=www.pixiv.net'/></a><a title='music-recognition' target='_blank' href='//www.acrcloud.com/identify-songs-music-recognition-online'><img src='//www.google.com/s2/favicons?domain=www.acrcloud.com'/></a><a title='cling' target='_blank' href='//cling.com/c/Bookmarks-b2DI9fiwpjI75GAEvRmvezb'><img src='//www.google.com/s2/favicons?domain=cling.com'/></a><a title='ezgif' target='_blank' href='//ezgif.com/maker'><img src='//www.google.com/s2/favicons?domain=ezgif.com'/></a><a title='uptodown' target='_blank' href='//www.uptodown.com/'><img src='//www.google.com/s2/favicons?domain=www.uptodown.com/'/></a><a title='raindrop' target='_blank' href='//app.raindrop.io'><img src='//www.google.com/s2/favicons?domain=app.raindrop.io'/></a>"
document.getElementById('principal').innerHTML="<center><table border=0><td align=center><br><div id=videoshowcase><iframe src='https://www.youtube.com/embed/videoseries?list=PLwmmiI53xsNQ_RocWwXBzX05hbsZE3gh5' width='430' height='240' frameborder='0'></iframe></div><td align=center><div id=newsu></div><tr></table></center>"
btnnew.disabled=true;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
vichar(); //vichar -> vistg -> viytmisc
break;
}
}

//MENU-BUTTON
function menu(numero) {
switch (numero) {
case 4:
document.getElementById('principal').innerHTML="<h1 id=nomeprinc><b>TutoriaiS [PT]</b></h1><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/7394958-intro-e-ending','_blank') value='Intro e Ending' width=300><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/5760510-var-com-multiplos-valores','_blank') value='Var somatorio'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4843729-helper-booleano-','_blank') value='Helper Booleano'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4843823-criando-uma-fun-o-no-ps','_blank') value='Photoshop function'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4843857-tuto-de-paletas','_blank') value='Tutorial de Paletas'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4843927-inteligencia-artificial-moderada','_blank') value='I.A. Moderada'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4844026-gravando-videos','_blank') value='Gravando Videos'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4844099-aprendendo-a-usar-helpers','_blank') value='Como usar Helpers'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/4844170-usando-multi-chars','_blank') value='Multi-chars'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/7394873-problema-com-roms-no-winkawaks','_blank') value='Winkawaks'><input type=button onClick=window.open('https://mabskmk.webs.com/apps/forums/topics/show/7394822-vasculhando-sites-com-o-google','_blank') value='Google'><br>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
break;
case 5:
document.getElementById('principal').innerHTML="<h1 id=nomeprinc><b></b></h1><b>Last.fm</b><br><a target='_blank' href='https://www.last.fm/user/MabsKMK'><img src='https://lastfm-recently-played.vercel.app/api?user=MabsKMK' height='auto' width='350px'/></a><br><a target='_blank' href='//blog.spacehey.com/entry?id=221954'>credits</a><br><br><b><a target='_blank' data-flickr-embed='true' data-header='true' href='https://www.flickr.com/photos/mabskmk/albums/72157607225651229' title='Relâmpago, a caçada'><b>Flickr</b><br><img src='https://live.staticflickr.com/3280/2846867795_345b192712_k.jpg' width='400' height='300' alt='Relâmpago, a caçada'/></a><script async src='//embedr.flickr.com/assets/client-code.js' charset='utf-8'></script><br><br><b><a target='_blank' href='https://www.bitchute.com/channel/LIy5FtdNRSH2/'>Bitchute</a></b><br><iframe src='https://www.bitchute.com/embed/xv0lFe8bN5uf/' frameborder='0' width='430' height='240'></iframe><br><br><b><a target='_blank' href='https://www.nicovideo.jp/user/51046619/video'>NicoNico</a></b><br><iframe src='https://embed.nicovideo.jp/watch/sm27592028' frameborder='0' width='430' height='240'></iframe><br><br><b>Youtube</b><br><iframe src='https://www.youtube.com/embed/videoseries?list=PLwmmiI53xsNTAnaBZXJfYuYRTtKgH58oV' width='430' height='240' frameborder='0'></iframe><br><input type=button onClick='menugame()' value='wip' id='btnw'>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=true;
break;
}
}
