var playerOne = new Array(16);	//Player table, cards and hand
var intervalTime;
const hoje = new Date();
const isHalloween = ((hoje.getDate()>=13 && hoje.getDate()<=31 && hoje.getMonth()==9) || (hoje.getDate()<3 && hoje.getMonth()==10) || (hoje.getDay()==5 && hoje.getDate()==13) ? 1: 0);

//MENU
function ppmain(numero) {
if (playerOne[0] === undefined) {playerOne[0] = 0;}
document.getElementById('cabec').innerHTML="<b><a href='https://en.wikipedia.org/wiki/M.U.G.E.N' target='_blank' id='top'><u>M.U.G.E.N</u></a></b><br>A 2D fighting game engine that enables you to create fighting games.<br>Almost everything can be customized, from individual characters to stages, as well as the look and feel of the game.</b><br>I hope you enjoy my 'work'<br><br><input type=button onClick='menuchar()' value='Characters' id='btnchar'><input type=button onClick='menustage3()' value='Stages' id='btnstg'><input type=button onClick='menufullgame()' value='Fullgames' id='btnfullg'><input type=button onClick='menugame()' value='Battle!' id='btnyotu'><input type=button onClick='ppmain(2)' value='Showcase' id='btnnew'><br>"
switch (numero) {
case 1:
document.getElementById('principal').innerHTML=""
location.href='#cabec'
break;
case 2:
if (document.getElementById('linkiss').innerHTML=='') {showLinks();}
document.getElementById('principal').innerHTML="<center><table border=0><td align=center><br><div id=videoshowcase><iframe src='https://www.youtube.com/embed/videoseries?list=PLwmmiI53xsNQ_RocWwXBzX05hbsZE3gh5' width='430' height='240' frameborder='0'></iframe></div><td align=center><div id=newsu></div><tr></table></center>"
btnnew.disabled=true;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=false;
clearTimeout(intervalTime); //clear the setTimeout
showcaseCharacter(); //showcaseCharacter -> showcaseStage -> showcaseMisc
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
document.getElementById('principal').innerHTML="<h1 id=nomeprinc><b></b></h1><b>Last.fm</b><br><a target='_blank' href='https://www.last.fm/user/MabsKMK'><img src='https://lastfm-recently-played.vercel.app/api?user=MabsKMK' height='auto' width='350px'/></a><br><a target='_blank' href='https://blog.spacehey.com/entry?id=221954'>credits</a><br><br><b><a target='_blank' data-flickr-embed='true' data-header='true' href='https://www.flickr.com/photos/mabskmk/albums/72157607225651229' title='Relâmpago, a caçada'><b>Flickr</b><br><img src='https://live.staticflickr.com/3280/2846867795_345b192712_k.jpg' width='400' height='300' alt='Relâmpago, a caçada'/></a><script async src='https://embedr.flickr.com/assets/client-code.js' charset='utf-8'></script><br><br><b><a target='_blank' href='https://www.bitchute.com/channel/LIy5FtdNRSH2/'>Bitchute</a></b><br><iframe src='https://www.bitchute.com/embed/xv0lFe8bN5uf/' frameborder='0' width='430' height='240'></iframe><br><br><b><a target='_blank' href='https://www.nicovideo.jp/user/51046619/video'>NicoNico</a></b><br><iframe src='https://embed.nicovideo.jp/watch/sm27592028' frameborder='0' width='430' height='240'></iframe><br><br><b>Youtube</b><br><iframe src='https://www.youtube.com/embed/videoseries?list=PLwmmiI53xsNTAnaBZXJfYuYRTtKgH58oV' width='430' height='240' frameborder='0'></iframe><br><input type=button onClick='menugame()' value='wip' id='btnw'>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=false;
btnfullg.disabled=false;
btnyotu.disabled=true;
break;
}
}

//https://s05.flagcounter.com/count/az53/bg_0C160D/txt_F2F2F2/border_008001/columns_2/maxflags_10/viewers_0/labels_0/pageviews_1/flags_1/
//https://s05.flagcounter.com/more/az53







