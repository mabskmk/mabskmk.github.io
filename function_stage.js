var bannerHtml='';
var bannerImg='';
var rand=0;
var checkStage = new Array(150);

//creates the basic html
function menustage2() {
document.getElementById('principal').innerHTML="<table border=0><td align=right width=500><h1><b>StageS</b></h1><a target='_blank' href='https://ln.sync.com/dl/b4dde8c10/7mr9qfnj-gnz7925k-4pkufi7w-wz99zhw9'><img src=https://i.imgur.com/QPa6H3A.png class='rbutton'></a><br><br><input type=button onClick='menustage3()' value='by_type'><br><br>2024<br><b id=149></b><b id=148></b><b id=147></b><b id=146></b><b id=104></b><b id=145></b><b id=123></b><br><br>2023<br><b id=144></b><b id=143></b><b id=142></b><br><br>2021<br><b id=141></b><b id=140></b><b id=139></b><b id=138></b><b id=137></b><b id=136></b><b id=135></b><b id=134></b><br><br>2020<br><b id=133></b><b id=132></b><b id=131></b><b id=130></b><b id=129></b><b id=128></b><b id=127></b><b id=126></b><br><br>2019<br><b id=125></b><b id=124></b><b id=122></b><b id=121></b><b id=120></b><br><br>2018<br><b id=119></b><b id=118></b><b id=117></b><b id=116></b><b id=115></b><b id=114></b><b id=113></b><b id=112></b><b id=111></b><b id=110></b><br><br>2017<br><b id=109></b><b id=108></b><b id=107></b><b id=106></b><b id=105></b><b id=103></b><b id=102></b><b id=101></b><b id=100></b><b id=99></b><b id=98></b><b id=97></b><br><br>2016<br><b id=96></b><b id=95></b><b id=94></b><br><br>2015<br><b id=93></b><b id=92></b><b id=91></b><b id=90></b><br><br>2014<br><b id=89></b><b id=88></b><b id=87></b><b id=86></b><b id=85></b><b id=84></b><b id=83></b><b id=82></b><b id=81></b><b id=80></b><b id=79></b><b id=78></b><b id=77></b><b id=76></b><b id=75></b><br><br>2013<br><b id=74></b><b id=73></b><b id=72></b><b id=71></b><br><br>2012<br><b id=70></b><b id=69></b><b id=68></b><b id=67></b><b id=66></b><b id=65></b><b id=64></b><b id=63></b><b id=62></b><b id=61></b><b id=60></b><b id=59></b><b id=58></b><b id=57></b><b id=56></b><b id=55></b><b id=54></b><b id=53></b><b id=52></b><b id=51></b><b id=50></b><b id=49></b><b id=48></b><b id=47></b><br><br>2011<br><b id=46></b><b id=45></b><b id=44></b><b id=43></b><b id=42></b><b id=41></b><b id=40></b><b id=39></b><br><br>2010<br><b id=38></b><b id=37></b><b id=36></b><b id=35></b><b id=34></b><b id=33></b><b id=32></b><b id=31></b><b id=30></b><b id=29></b><b id=28></b><b id=27></b><b id=26></b><b id=25></b><b id=24></b><b id=23></b><b id=22></b><b id=21></b><b id=20></b><b id=19></b><b id=18></b><b id=17></b><b id=16></b><b id=15></b><b id=14></b><b id=13></b><b id=12></b><b id=11></b><b id=10></b><b id=9></b><b id=8></b><b id=7></b><b id=6></b><b id=5></b><b id=4></b><b id=3></b><b id=2></b><br><br>2008<br><b id=1></b><br><br><a target='_blank' href='https://www.mediafire.com/folder/s7zo0845d1flx/WarehouseSTG'><b>Warehouse</b><br><img src=https://i.imgur.com/W67CaVW.png width='200'></a><br><br><a target='_blank' href='https://drive.google.com/drive/folders/1HjhMircWVCHD564TD-HnbVD-atSUij9A?usp=drive_link'><b>W.I.P?</b><br><img src=https://i.imgur.com/sZGCE81.png width='200'></a><br><br><input type=button onClick='ppmain(1)' value='.Clean.'><br></font><tr></table>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=true;
btnfullg.disabled=false;
btnyotu.disabled=false;
for (x=149;x>0;x--) {
stage((x),1)
}
//stage(145,2);
}
function menustage3() {
document.getElementById('principal').innerHTML="<table border=0><td align=right width=500><h1><b>StageS</b></h1><a target='_blank' href='https://ln.sync.com/dl/b4dde8c10/7mr9qfnj-gnz7925k-4pkufi7w-wz99zhw9'><img src=https://i.imgur.com/QPa6H3A.png class='rbutton'></a><br><br><input type=button onClick='menustage2()' value='by_date'><br><br>Arcades<br><b id=123></b><b id=116></b><b id=114></b><b id=112></b><b id=91></b><b id=90></b><b id=77></b><b id=63></b><b id=62></b><b id=59></b><b id=44></b><b id=38></b><b id=37></b><b id=36></b><b id=15></b><b id=9></b><br><br>Sega Genesis<br><b id=149></b><b id=96></b><b id=64></b><b id=27></b><b id=24></b><b id=22></b><b id=8></b><b id=127></b><br><br>Sonic<br><b id=136></b><b id=133></b><b id=119></b><b id=110></b><b id=95></b><b id=70></b><b id=67></b><b id=66></b><b id=65></b><b id=60></b><b id=25></b><b id=23></b><br><br>Gunstar_Heroes<br><b id=141></b><b id='3'>3</b><b id=2>2</b><br><br>MakaiMura<br><b id=30></b><b id=16></b><b id=11></b><b id=10></b><br><br>Sega Master System<br><b id=135></b><b id=58></b><b id=57></b><b id=55></b><br><br>NES<br><b id=134></b><b id=111></b><b id=73></b><b id=72></b><b id=61></b><b id=46></b><b id=7></b><b id=4></b><br><br>Super NES<br><b id=144></b><b id=143></b><b id=142></b><b id=140></b><b id=139></b><b id=138></b><b id=137></b><b id=132></b><b id=130></b><b id=128></b><b id=126></b><b id=115></b><b id=113></b><b id=108></b><b id=107></b><b id=106></b><b id=103></b><b id=102></b><b id=101></b><b id=93></b><b id=89></b><b id=86></b><b id=84></b><b id=75></b><b id=54></b><b id=53></b><b id=52></b><b id=28></b><b id=5></b><br><br>Other systems<br><b id=148></b><b id=147></b><b id=146></b><b id=145></b><b id=131></b><b id=125></b><b id=124></b><b id=122></b><b id=121></b><b id=118></b><b id=117></b><b id=105></b><b id=104></b><b id=99></b><b id=98></b><b id=97></b><b id=85></b><b id=83></b><b id=82></b><b id=81></b><b id=80></b><b id=79></b><b id=78></b><b id=76></b><b id=74></b><b id=71></b><b id=50></b><b id=49></b><b id=48></b><b id=47></b><b id=43></b><b id=42></b><b id=41></b><b id=40></b><b id=32></b><b id=29></b><b id=26></b><b id=13></b><b id=6></b><br><br>Crafted<br><b id=129></b><b id=120></b><b id=109></b><b id=100></b><b id=94></b><b id=92></b><b id=68></b><b id=56></b><b id=51></b><b id=45></b><b id=39></b><b id=31></b><b id=21></b><b id=20></b><b id=18></b><b id=17></b><b id=12></b><b id=1></b><br><br>Hentai?<br><b id=88></b><b id=87></b><b id=69></b><b id=35></b><b id=34></b><b id=33></b><b id=19></b><b id=14></b><br><br><a target='_blank' href='https://www.mediafire.com/folder/s7zo0845d1flx/WarehouseSTG'><b>Warehouse</b><br><img src=https://i.imgur.com/W67CaVW.png width='200'></a><br><br><a target='_blank' href='https://drive.google.com/drive/folders/1HjhMircWVCHD564TD-HnbVD-atSUij9A?usp=drive_link'><b>W.I.P?</b><br><img src=https://i.imgur.com/sZGCE81.png width='200'></a><br><br><input type=button onClick='ppmain(1)' value='.Clean.'><br></font><tr></table>"
btnnew.disabled=false;
btnchar.disabled=false;
btnstg.disabled=true;
btnfullg.disabled=false;
btnyotu.disabled=false;
for (x=149;x>0;x--) {
stage((x),1)
}
}

//Function to play a random video
function vistg() {
  //Disable the function exiting showcase
  if (btnnew.disabled==false) {return;}

	//Check if the array is full
	for (x=148;x>0;x--) {
	if ( checkStage[x]!=='ok' ) {break;}
	if (x==1 && checkStage[x]=='ok' ) {checkStage = [];} 
	}

  //Set a randomValue
  rand=(Math.floor(Math.random()*150));
	
  //Compares with the check list
  while (rand>0 && checkStage[rand]=='ok') {rand=(Math.floor(Math.random()*149));}

  if (rand>0 && checkStage[rand]!='ok') {checkStage[rand]='ok';}

//Get the values of the respective video in the 'stage database'
stage(rand,3);

if (youtube!='dQw4w9WgXcQ'){
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"?autoplay=1&mute=1 width='500' height='300' frameborder='0'></iframe><br>STAGE ("+rand+"): <b>"+mydiv+"</b> <a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png title=STG_"+mydiv+"></a>"
}
else{
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/HZxpB5C-iuA?autoplay=1&mute=1 width='500' height='300' frameborder='0'></iframe><br>Full-Game: <b>Alex Kidd in Trouble</b> <a target='_blank' href='https://www.dropbox.com/s/wueu530ny6iowdi/AlexKiddinTrouble.zip?dl=1'><img src=https://i.imgur.com/pJFCm25.png title='Alex'></a>"
}
document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
tempo=setTimeout('viytmisc()',50000); //vichar -> vistg -> viytmisc 
}

//Stage database
function stage(numero,cod) {
youtube='dQw4w9WgXcQ';
//rng
//if (numero<134 && cod==2){
//cod=cod-(Math.floor(Math.random() * 2));
//}
switch (numero) {
case 1:
mydiv='Genostages',imgur='VTTE2gJ.gif',youtube='GsXvJzi8hXA',gdrv='1sUUQGAlS_eAuu_OMKyW-2Qk_X0io-Pf3'
break;
case 2:
mydiv='Blacks_Base',imgur='AmpFGDr.gif',youtube='YuyLAxy0cK0',gdrv='1YhNUX_0osdyDKucya4xLUMGDrKt5MVO0',bannerHtml='www.treasure-inc.co.jp',bannerImg='i.imgur.com/cQUJEzO.png'
break;
case 3:
mydiv='Force_Mine',imgur='QVjmOo1.png',youtube='E1pig0Bt4xs',gdrv='1YhNUX_0osdyDKucya4xLUMGDrKt5MVO0',bannerHtml='www.treasure-inc.co.jp',bannerImg='i.imgur.com/cQUJEzO.png'
break;
case 4:
mydiv='Vegetable_Valley',imgur='L0okcXj.gif',youtube='u1F_oNZ6NIE',gdrv='168fKeVWT3Wz8ZsiH15brYFZePJ3WvsLz'
break;
case 5:
mydiv='Hazard_Tank',imgur='byemFHj.gif',youtube='rpETB6b3v9Q',gdrv='17nvOuqdoREYJoPy1yhXLXxUleRFkTFCt'
break;
case 6:
mydiv='Burning_Arena',imgur='Yfl1Ngj.png',youtube='TmpppvL-Pc0',gdrv='1LWy90J1QSC9Ljs6mNy4bpv7l-SQ7B7Sa'
break;
case 7:
mydiv='Abadox',imgur='Ov5zTi6.png',youtube='WRswqM3An44',gdrv='1bmRBeV4_jMrJ7EOG6gK5JUuBauTSyA1n'
break;
case 8:
mydiv='Titans_forest',imgur='goFjeiV.png',youtube='-k4ycXSIsvw',gdrv='1MRECApSGzHfDQzdnfQTrymNrRqx6Cw8x'
break;
case 9:
mydiv='Slim_Subway_Smash',imgur='ZMRsPYv.png',youtube='WX-iu4yVpRc',gdrv='11YnMUNCEu9_eMTGoxUSn6WWSDZPI6C4t'
break;
case 10:
mydiv='Crystal_Forest',imgur='b3DTdKy.png',youtube='8EssnxUl2EI',gdrv='1alZm1osFH0AHHDydXTEmkzgAwShPHvaO'
break;
case 11:
mydiv='Tower_of_Succubus',imgur='6esytlH.png',youtube='oLHqK4ONhJc',gdrv='1alZm1osFH0AHHDydXTEmkzgAwShPHvaO'
break;
case 12:
mydiv='GORN',imgur='3zvtOl9.png',youtube='a-xKiNZxt_I',gdrv='1I96lvaw2ZqwwlzyCh9GiD7pmgYvaMrqs'
break;
case 13:
mydiv='Ulu_City',imgur='RnyPbox.gif',youtube='ItObX-W-pBE',gdrv='1RdyfNVA4Dx7yAjUUewun8EhSeD6DGqhH'
break;
case 14:
mydiv='Stage_Etna',imgur='wUfekDC.png',youtube='r5nPcz3zcyY',gdrv='13vZUJmD97XnsU5JMdwdutcUniuPr6Pd5'
break;
case 15:
mydiv='Ancient_Shadows',imgur='9QvIahU.gif',youtube='XPhPzGHhvVE',gdrv='18ucHZ1wXVEmX40FO3J5LCf1M7k_ao4ib'
break;
case 16:
mydiv='Burning_Village',imgur='pSV0xV2.png',youtube='_vbjdMV4dRU',gdrv='1alZm1osFH0AHHDydXTEmkzgAwShPHvaO'
break;
case 17:
mydiv='Death_Star_3',imgur='tieF0Cw.png',youtube='BZD4XUBHid4',gdrv='1cy-n32Funvw1ktwXoMU5_OX3Ox6D0kfk'
break;
case 18:
mydiv='CDB',imgur='AaxPzr9.gif',youtube='7K0xRJ0Y1c8',gdrv='193jWOMqr2J3k5F0nyUbPEQGEmFtenT-p'
break;
case 19:
mydiv='Stage_Cammy',imgur='WsinSDY.png',youtube='uDYQKZiUiZs',gdrv='1qUvUCsJ6-cTF8t-pkE57qcuP7ttEiaO9'
break;
case 20:
mydiv='Radioactive_Maze',imgur='QEIiYs1.png',youtube='YFHcR2fWu-Q',gdrv='1H3lheymzSV6WWoLL9_J0RPnds7u2uF15'
break;
case 21:
mydiv='Club_MFG',imgur='0edotiu.png',youtube='Jswp0qjtgDA',gdrv='1w1wVnBn-_sEr2K-wLCk9qHtDfqLWY5L6'
break;
case 22:
mydiv='Transylvania',imgur='dQfLncX.png',youtube='_Xj-1a348aU',gdrv='1wwEIGabRJlyf8KqKHjVMI3nggaPNj3Id'
break;
case 23:
mydiv='Chemical_Plant',imgur='3Xba3Hf.gif',youtube='XmymnWPSTnY',gdrv='18oxoRSj3r25I99vVUW3ET9KXAhOG6oEa'
break;
case 24:
mydiv='Wild_Side',imgur='LdboBiv.png',youtube='enFWREWvXZQ',gdrv='1koEXqyq-nh8_LSxCyvuEHyTPWoXww-ns'
break;
case 25:
mydiv='Oil_Ocean',imgur='pcjB4Sm.png',youtube='5qwkqiCIPBk',gdrv='18oxoRSj3r25I99vVUW3ET9KXAhOG6oEa'
break;
case 26:
mydiv='Moai_ruin',imgur='aen5RVb.gif',youtube='Vem04FZhZaI',gdrv='1HCbYOLepWExO6LUFPiMweydWVgAjYCvu',bannerHtml='www.ne.jp/asahi/across/chronicle/',bannerImg='www.ne.jp/asahi/across/chronicle/image/banner.png'
break;
case 27:
mydiv='X_Granada',imgur='7VMUvKp.png',youtube='i3YqRlxk9Wo',gdrv='19DwhFwCvUL9yOyNktgjMhFB1Vx4kuxIb'
break;
case 28:
mydiv='Planet_Prision',imgur='1TljLfd.png',youtube='DObjw9nB4HM',gdrv='1JhnQx-GmJzmJfnzZk7njhhjH-ouv4Aiy'
break;
case 29:
mydiv='Mechanical_Fortress',imgur='79yVFIN.png',youtube='MCIU3F1uFCQ',gdrv='1I0RUUylHjABYlAOii3XR5AZtwn4nBVPD'
break;
case 30:
mydiv='Haunted_Graveyard',imgur='OFjAdRB.png',youtube='12IsGm5ctK8',gdrv='1alZm1osFH0AHHDydXTEmkzgAwShPHvaO'
break;
case 31:
mydiv='NeonLight',imgur='vxBbbkP.png',youtube='H4r_22BklVg',gdrv='114xNnXpr_WCTn3IKkK9P_7SgzJu5-3z7'
break;
case 32:
mydiv='Leventhan',imgur='AaXCSHe.png',youtube='mHXrgqKMSBQ',gdrv='1oNKmO6lMX3P7-4QBSd2JJhLYLv0zI7rK'
break;
case 33:
mydiv='Stage_ChunLi',imgur='SQ4IEWA.png',youtube='-xeEuxzwA8o',gdrv='1oQKJTJvKI-ftvYHG1AL_fnHZzAZtttmU'
break;
case 34:
mydiv='Stage_Makoto',imgur='swX7scp.png',youtube='Usqeb_NjCt8',gdrv='11MffW0ZA_2AOUsepDLhEa-WkOV26ROJM'
break;
case 35:
mydiv='Stage_Scharlachrot',imgur='Q8ZaFoF.png',youtube='KuY4lxPGbj0',gdrv='16Xcp7eARuu5zNGq4YvNAUCko_yLr1KOB'
break;
case 36:
mydiv='Hispeed_Elevator',imgur='ibSCSvX.png',youtube='NImq6xAzIcA',gdrv='14KoyR7xOTvSeDttPxq8h8YjPgW9frreW'
break;
case 37:
mydiv='Space_Rocket',imgur='dj4xnbC.png',youtube='Dwj-9UamU-0',gdrv='14KoyR7xOTvSeDttPxq8h8YjPgW9frreW'
break;
case 38:
mydiv='Transportrain',imgur='9rbsCG5.png',youtube='Vo4MeDuLiRI',gdrv='14KoyR7xOTvSeDttPxq8h8YjPgW9frreW'
break;
case 39:
mydiv='Random_Insanity',imgur='oVbJf9D.png',youtube='fbl8omvZ2_A',gdrv='1g93dXyyJUAa5kZyPB_EVBrBUg-Atyq-M'
break;
case 40:
mydiv='DDND',imgur='fobMeKj.gif',youtube='hfFLh2sXNxA',gdrv='1FQaEZlhwn_YN9WQIdn4YgK66p2sJGjWy'
break;
case 41:
mydiv='The_bronze_auditorium',imgur='tMOSb03.png',youtube='QK_QRqgsj7A',gdrv='1Xfo5mGiR1HBudXTIPk4iPRQUpHiyEVKB'
break;
case 42:
mydiv='secretvillage',imgur='qfpb7XO.gif',youtube='TmWgpamHDrs',gdrv='1x0w8xldkvUZWbuO4ixG2DlsoQaLGGTBi'
break;
case 43:
mydiv='Subspace_Highway',imgur='ZU71Rq3.gif',youtube='ZmafphZZJWY',gdrv='1pBjgxNoq6zNZm0A49TKo3snT12Eh8k_r'
break;
case 44:
mydiv='Snow_Rush',imgur='MfuWeak.png',youtube='LZkr6N1zKS4',gdrv='14KoyR7xOTvSeDttPxq8h8YjPgW9frreW'
break;
case 45:
mydiv='Arkanoid_Syn',imgur='KzmXv7S.gif',youtube='dH4I-xUtUsI',gdrv='15hIaPhP6DsDUjVJ-Un7rnOg5ogUIQTKx' //dH4I-xUtUsI
break;
case 46:
mydiv='Dr_Wily_stgs',imgur='PNYxIH7.gif',youtube='zjbR3UtGK2I',gdrv='1BajqmRlVucJYaruSyGeK_de5eYO7CsPu'
break;
case 47:
mydiv='Arena',imgur='2kXqJTC.png',youtube='Ks5OQOeheTA',gdrv='12hO-ATk2ljQrhaHB9BUrF5Vqx3C9xOHR'
break;
case 48:
mydiv='Stage_Draco',imgur='1jmQ14m.png',youtube='tvqiT8S4sbs',gdrv='1EUlp0lxtk9rVYnVcGXHuiZL4TpoEF6Hu'
break;
case 49:
mydiv='Metal_Gun',imgur='ZisA65d.gif',youtube='8G-MzU_7l2A',gdrv='1PrKFYlEcoYQD1OSgOScH_J-HNdFfKnnl',bannerHtml='www.ne.jp/asahi/across/chronicle/',bannerImg='www.ne.jp/asahi/across/chronicle/image/banner.png'
break;
case 50:
mydiv='TerrariA',imgur='9Vc4Kbf.png',youtube='KszTCEGOYqg',gdrv='1Je8oEvhKLywxauT1r82OpygpZ3-FljLJ',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg'
break;
case 51:
mydiv='Random_Space',imgur='TN4XU4m.png',youtube='mCOttatT4TY',gdrv='14x_bwTrKjZtpERMj4mLkMXSoslv8Nzqz'
break;
case 52:
mydiv='Mojo_Stronghold',imgur='8x7jLDj.png',youtube='vckqNZrcVJw',gdrv='14Asrt2kJ0k4WHOKdtVGeqe9v2cds_m3m'
break;
case 53:
mydiv='Hell_Gate',imgur='qPSAYRK.gif',youtube='RjMXO3T-VJA',gdrv='1CHtHK7UycHiRX0w13V_16_7s4-eNchEg'
break;
case 54:
mydiv='Whisper_Forest',imgur='yj3qJ8W.gif',youtube='WsnzXw-o6kA',gdrv='10ISB1TYCzgLDa0nlJGtDhuAkgeET6nGy'
break;
case 55:
mydiv='Last_Dungeon',imgur='Segr9oc.gif',youtube='mjV3pDrpwNQ',gdrv='14zbO8F_tlSZvlfKBRYFMcTRmuLCpDvMR'
break;
case 56:
mydiv='TerrorVision',imgur='avje3sN.png',youtube='SM8LHBDAsc0',gdrv='1nYIwOYfc3V0gf8pAeItuqAShZLzDsLEj'
break;
case 57:
mydiv='Escape_in_a_Forest',imgur='DTzvZ6p.png',youtube='Oy7hu_J8ZR8',gdrv='1mHq1Yp7rNCpRMCNM6k-5xFWJuW5h23sB'
break;
case 58:
mydiv='Rescue_Geisha',imgur='hddoqUx.png',youtube='MKADzsQ_J4E',gdrv='1mHq1Yp7rNCpRMCNM6k-5xFWJuW5h23sB'
break;
case 59:
mydiv='Mutation_Nation',imgur='jKesnb5.gif',youtube='-0j61OqpjEQ',gdrv='1Rk-VZr9dZw9dLYGdvseyPE_s4_hI83-g',bannerHtml='ngmc.retrogames.com/index.html',bannerImg='i.imgur.com/X4AzHu1.gif'
break;
case 60:
mydiv='Mystic_Cave',imgur='OrOgvJ9.png',youtube='8P4VjUofC_Q',gdrv='18oxoRSj3r25I99vVUW3ET9KXAhOG6oEa'
break;
case 61:
mydiv='Monster_Party',imgur='lWi1U0G.gif',youtube='Vabz-SaEuHg',gdrv='10RxGf32a_aMFNu98zO5chUkP0r89vQ_i'
break;
case 62:
mydiv='8_Street',imgur='WIfJ5MG.png',youtube='pFcmoRFlAo0',gdrv='1ISZE3Ao87Muw6Tzm-X354goNBesxcVJX'
break;
case 63:
mydiv='Ruins_of_Metro',imgur='IGsMDvn.png',youtube='OP2u-24_CV8',gdrv='15Y7stedmBIO0x5nDSBnb8FeT2R9EVNXF'
break;
case 64:
mydiv='Z-Leo',imgur='MbtkMgt.png',youtube='nYzWMxX54NU',gdrv='1OkIpLS0e62aq2uG3QWvMBRhhyIOERn4L',bannerHtml='www.treasure-inc.co.jp',bannerImg='i.imgur.com/cQUJEzO.png'
break;
case 65:
mydiv='Labyrinth_Zone',imgur='Rfv7CCF.png',youtube='PypFGdvf8zo',gdrv='1zWWD2hpbTetEEOYYqxxyC2Lv9GMYKMHD'
break;
case 66:
mydiv='Jungle_Zone',imgur='lHK4I0Q.png',youtube='4tg1r_cO-mc',gdrv='1IgCC20_LftsIx_4IzuQ7U-8Jll2s0UQV'
break;
case 67:
mydiv='ScrapBrainZone',imgur='zCmVTXI.png',youtube='KZuNhbkBVIM',gdrv='1zWWD2hpbTetEEOYYqxxyC2Lv9GMYKMHD'
break;
case 68:
mydiv='Phantasy_Starship',imgur='dQdjmEa.png',youtube='zcomgKmXtZA',gdrv='1eBsUwt7Q31-EgBK7tE4eU4rQJE6NjH6z'
break;
case 69:
mydiv='Stage_Humio',imgur='vQfR8CP.png',youtube='uG5gD17kPLk',gdrv='1Z-D3blpn4dVEivSYxgH1TvPGC6_grEWg'
break;
case 70:
mydiv='sonic_Special_Stage',imgur='AALc2fw.png',youtube='YcIoUw9zFME',gdrv='1zWWD2hpbTetEEOYYqxxyC2Lv9GMYKMHD'
break;
case 71:
mydiv='Tower_of_MORGUL',imgur='36jrd6T.png',youtube='gf2Msy4AqTY',gdrv='1-NKnO4xFHRgjm3PZRhHC-K5EF6ukcb9Q'
break;
case 72:
mydiv='Cilia_Monster',imgur='hzdVhqX.png',youtube='TgOKrZjGvWc',gdrv='1bmRBeV4_jMrJ7EOG6gK5JUuBauTSyA1n',bannerHtml='www.ne.jp/asahi/across/chronicle/',bannerImg='www.ne.jp/asahi/across/chronicle/image/banner.png'
break;
case 73:
mydiv='Galatic-Night-Club',imgur='9mhQVWp.png',youtube='IiEFOz6aggU',gdrv='1bmRBeV4_jMrJ7EOG6gK5JUuBauTSyA1n'
break;
case 74:
mydiv='Pokemon_3D',imgur='QUbwkVz.gif',youtube='z1HH-Jrun2Y',gdrv='1D8MGAPvC13AzWN0rboXhyPeywRmWaHte'
break;
case 75:
mydiv='Shaq_Fu_Lab',imgur='qAKWhQu.gif',youtube='3qyw9U8A__o',gdrv='14T2PRb9Wfbd8bDOzoz5i2mds6IjgY9Nn'
break;
case 76:
mydiv='Flappy_Bird_stg',imgur='BRTNcNB.gif',youtube='GcNVPutPdP0',gdrv='1WcSCX0Zzps3fHTGSZBCffnx2uZAaLNBg'
break;
case 77:
mydiv='NightmareInTheDark',imgur='8cmYQlH.gif',youtube='wk7iNQln7u4',gdrv='1uGf6QH7d85pPgOaj1gqVsrS6Nn6DGOia'
break;
case 78:
mydiv='Mini_city',imgur='NJ65z0S.png',youtube='cpggG34smDQ',gdrv='1zq0AlCF4Z8xvoqPbzchVhTQ1Hxk0Vlig'
break;
case 79:
mydiv='Dark_Forest',imgur='mGnlE5S.png',youtube='2aijF_wkQ_A',gdrv='1zq0AlCF4Z8xvoqPbzchVhTQ1Hxk0Vlig'
break;
case 80:
mydiv='TerrariB',imgur='nxum0HB.png',youtube='SIU1jfmXVSU',gdrv='1Je8oEvhKLywxauT1r82OpygpZ3-FljLJ',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg'
break;
case 81:
mydiv='Battle_Capacity',imgur='ulhRFM8.gif',youtube='hs12EKYpDAQ',gdrv='1dAQDOMPQN_-9nEA8A_wZIAZW1eGZe8uR'
break;
case 82:
mydiv='Axel_City',imgur='Isbps72.png',youtube='J5ZZnyr_fBY',gdrv='1oRKGQfLQT6WBWq3DdKwKelUOHr1-iz7y'
break;
case 83:
mydiv='Isamu_Game',imgur='xEfYQyh.gif',youtube='GkghboF6Wrg',gdrv='1NMp-yMb7ykkUeZdbjwRKssVn0VVHLbSY',bannerHtml='www.ne.jp/asahi/across/chronicle/',bannerImg='www.ne.jp/asahi/across/chronicle/image/banner.png'
break;
case 84:
mydiv='GoingThroughHell',imgur='rgY553Q.png',youtube='-7moCk_iVp8',gdrv='1B-9djPWc599QfAckvePBlZc7-juAG5FH'
break;
case 85:
mydiv='TerrariC',imgur='kgIqfzU.png',youtube='S_lShswZPm0',gdrv='1Je8oEvhKLywxauT1r82OpygpZ3-FljLJ',bannerHtml='terraria.org',bannerImg='i.imgur.com/z4fwWXe.jpg'
break;
case 86:
mydiv='mm7_Graveyard',imgur='fZpRFsG.png',youtube='2mR2aCY9NZQ',gdrv='1crKBwVmyfnbYB2mphTnw4WZswYAwE1nq'
break;
case 87:
mydiv='Stage_hentai1',imgur='HqsZCtH.png',youtube='dQw4w9WgXcQ',gdrv='1ad6huW7vqhAdZg677FmxgEmSOZ1eab9H'
break;
case 88:
mydiv='Stage_hentai2',imgur='AYGqEmn.png',youtube='dQw4w9WgXcQ',gdrv='18FhvNthzjJfmz4FkfcWRe0Xxe9VhOFRL'
break;
case 89:
mydiv='Tyrone',imgur='qMVo2hp.png',youtube='DT5Jvm7clhE',gdrv='1OlD0wc2dK0fXsFA6o8kolBRguwTrzVI6'
break;
case 90:
mydiv='R-type_Junk',imgur='LMLAnUi.png',youtube='QJvG3Hipkyc',gdrv='1vrGpdGB43ZvJHbJpZMzPnz0JlzMR_Cv7'
break;
case 91:
mydiv='The_Fire_Prominence',imgur='itQi8iD.png',youtube='9gaaoT_YVmc',gdrv='1wb-01h0Ooaj4vdbE7d-UiEb29J0QyH-M'
break;
case 92:
mydiv='Equinox',imgur='poyLmJ7.gif',lupdate='30/10/15',youtube='LrcZPVpGbZg',gdrv='1M1WLF79J0c2J-g8sFOeNYpLXu6N57iUy'
break;
case 93:
mydiv='Musya',imgur='dE9LGSX.png',youtube='Yxw_a2fuyYo',gdrv='1AbgKz82V6NXdXISciUtY_8go80XTy-_s'
break;
case 94:
mydiv='Probertson+',imgur='gETlJMg.gif',youtube='th-4qX7UmVY',gdrv='1w9FXy4aAw_r0Wd_7g3F4I7tUrSOJZgEI'
break;
case 95:
mydiv='Aquatic_Ruins',imgur='cBIt8OT.png',youtube='YU0WSkoJ80Y',gdrv='18oxoRSj3r25I99vVUW3ET9KXAhOG6oEa'
break;
case 96:
mydiv='Weve-got-Shadowmans',imgur='Qqql4Ve.png',youtube='ohkTUKuFQ4k',gdrv='15_kwqkbcgY4Du6s3b-9yZuaX36nTIwit'
break;
case 97:
mydiv='FFSTAGE',imgur='STyoeBm.png',youtube='-32GbG3IHQs',gdrv='1mG8IPSYojKo6BeRbCM_RMCOpuI1gDusA'
break;
case 98:
mydiv='Naga_Valley',imgur='33JcF6I.png',youtube='6Eqt_aJtzdA',gdrv='19MzXevUjD7B1OWGXagW2TejZZGzv-23W'
break;
case 99:
mydiv='Ranmaru_STG',imgur='mmmg1Dt.gif',youtube='88h5IN8Cv2w',gdrv='12fw-PkLLuSAAmNljz-QK99e8ieOT6w7m'
break;
case 100:
mydiv='005',imgur='KvtjwY0.png',youtube='V6KA9IttI8w',gdrv='1YGnYorSWhsCL-TO_PgV-tpD82LOxn3kX'
break;
case 101:
mydiv='Gourmet_Factory',imgur='Gsk4nxa.gif',youtube='IX61pcPc-wk',gdrv='1UuakIrQFtW1CO9dpSEOEgclugBfcI3TM'
break;
case 102:
mydiv='Jurassic_Jungle',imgur='JHgeyPi.png',youtube='Mq5dEQvnT-A',gdrv='1xNNLPNwTJ2342HyzHVDP3ntvJe4QTVuW'
break;
case 103:
mydiv='Fortress-of-Doom',imgur='xRRYFhO.gif',youtube='SQNEVTr855o',gdrv='1r2GzPRtojN1KiEQ4MddTR_0KdeEv6jwr'
break;
case 104:
mydiv='Dead_Valley',imgur='Te6w5AS.png',youtube='HW4RCZfH5Ac',gdrv='1HPuR69GGT9DrhX8yWmgUNaaecSm0tbQA'
break;
case 105:
mydiv='Draglade',imgur='V4OdAro.gif',youtube='zH8fwZ4BZ7A',gdrv='1nZhAFkIDKwLuuQqvokYSTLGWOxEm1NhH'
break;
case 106:
mydiv='GanbareGoemon',imgur='dgknaTO.png',youtube='FjtbGL18Ads',gdrv='17Oo7KMKs63Af0-C9e3Vj98s0T4wEOgWX'
break;
case 107:
mydiv='Cry-of-the-Spirits',imgur='EO5HPUu.png',youtube='SOYi65MAbVc',gdrv='1SNobOvwGogN1h-hOF9Nzy7zn-lSZdfae',bannerHtml='sunnyworld.free.fr',bannerImg='i.imgur.com/gAsrMM0.png'
break;
case 108:
mydiv='Gourmet_Foot',imgur='53GMLf1.png',youtube='N7j8ndrcYlg',gdrv='1UuakIrQFtW1CO9dpSEOEgclugBfcI3TM'
break;
case 109:
mydiv='Jiii',imgur='t9ZGdu5.png',youtube='LiT5VqTFU6g',gdrv='1qQhbzMzLsLM8KEjb_Vw2yTnIOac-YJR_'
break;
case 110:
mydiv='Angel_Island',imgur='dST8Gh8.gif',youtube='HH7W4lCcQOM',gdrv='1IgCC20_LftsIx_4IzuQ7U-8Jll2s0UQV'
break;
case 111:
mydiv='ChompmanSTG',imgur='5t4sMNC.gif',youtube='gyoq7dZ8-O4',gdrv='1vKNjQiIpYTmdpEoqR5bhrlofcJy-6jmb',bannerHtml='www.sprites-inc.co.uk',bannerImg='i.imgur.com/RqfqBg1.png'
break;
case 112:
mydiv='Bay_Route',imgur='7irQzfU.png',youtube='pbtNXGinTPo',gdrv='1zUVbUMrHF3wEI1cCyvfsEu24NEWUnRnj'
break;
case 113:
mydiv='SonicBlastJet',imgur='3vJbHkk.png',youtube='_6okck1I05I',gdrv='1h860RW2yR0abY1eQy9ldPjcMK1-_1EVl'
break;
case 114:
mydiv='Crude-Buster',imgur='PFipzGL.gif',youtube='3qeXbhpoyf4',gdrv='1njc5P1vZi8Z-dUWjUX-NrGNev-BEo3jF'
break;
case 115:
mydiv='Gourmet_Street',imgur='0a7Nif5.png',youtube='phr598M8Gbw',gdrv='1UuakIrQFtW1CO9dpSEOEgclugBfcI3TM'
break;
case 116:
mydiv='ZeroCastle',imgur='tP99cjE.gif',youtube='G8PnX8z6xmk',gdrv='1B5zWBNVlpHFng28YeXLoqXhTqk41G5Gt'
break;
case 117:
mydiv='Viotoxica',imgur='4IAHHn8.gif',youtube='03RpA7w7ng8',gdrv='1m6J6S5zjqtt9OpwMcJuajwVmBEzTVCkV'
break;
case 118:
mydiv='ZookHero',imgur='qwrbijL.gif',youtube='YVo-StU24sk',gdrv='1PrOzL00vpXmloxTMDHuOOvEzicOeByPw'
break;
case 119:
mydiv='CollisionChaos',imgur='pdxfzgM.png',youtube='-zUXhzkksBQ',gdrv='1IgCC20_LftsIx_4IzuQ7U-8Jll2s0UQV'
break;
case 120:
mydiv='Religionchng',imgur='68AjZWE.gif',youtube='a2NobgA39Xw',gdrv='1AxvGGm16OSKQ74vrUh-DTXFYo7HZxwyC'
break;
case 121:
mydiv='Cybernoid',imgur='nJYbk4j.png',youtube='cMI25OhOp_c',gdrv='1RaC8Jl26mWdw6ii5X3gFH8fn_BYC5MDg'
break;
case 122:
mydiv='Menace',imgur='pNG8qhx.png',youtube='8yx3H3yOwtk',gdrv='1eEWr-zzW4wdrkccelrU7iWcT6Fa_jeEC'
break;
case 123:
mydiv='Moon',imgur='8J4MFUc.png',youtube='7FypNRSHXnA',gdrv='1F-ylCuSYN7o8IDBRZR_VrbptpsmN1CxE'
break;
case 124:
mydiv='Mighty_City',imgur='OnrOsvd.gif',youtube='cKawkHN8KrU',gdrv='1jrgVkcxso0oOCv5Zfhs7U71aM9N2IrLB'
break;
case 125:
mydiv='HomieYoshiStory',imgur='6kAf5vJ.gif',youtube='wUh7-qtQLoA',gdrv='1wR2XmLHzNnotWekpXiSZRG_EysHrGxwk'
break;
case 126:
mydiv='Endless_Corridor',imgur='P3ZBwfj.png',youtube='pR7JMIy1OOc',gdrv='1TB8eS9jsDC1gKH6MUgjg9uZOZovbpj0Y'
break;
case 127:
mydiv='Bay_Yard',imgur='VDiZw8h.gif',youtube='SOScws9h7Ec',gdrv='14KYviIi8D-koGCOC5V6CQGUZOzYtwHah'
break;
case 128:
mydiv='Ninja_Party_Again',imgur='MtiHdQn.png',youtube='dRaPAkYNFp4',gdrv='1waH3Ecc2kby0wX5Z6dbuzP3f3YY3LM3O'
break;
case 129:
mydiv='Green_base',imgur='3IeKAXd.png',youtube='46JLCPXJhpI',gdrv='1X8Iq2sOtGJfn9wT8nKQz350zr-6sDrF_'
break;
case 130:
mydiv='CosmoPG',imgur='Iqg4mFl.gif',youtube='tBUpJaT2vdU',gdrv='1DKFe9WVUJmBu9ekgoOHPbymzwLImbHVu'
break;
case 131:
mydiv='BusterSTG',imgur='I9XkGao.gif',youtube='1KmbMt57bR4',gdrv='1x8-qWjazOf97ZHIoZONyGJA9xQzGnBEU'
break;
case 132:
mydiv='Majyuuou',imgur='IPxOOKq.gif',youtube='69mt8hiGTok',gdrv='1OGF4O5R9EHDplwmpAb4lx58NaBC305Ag',bannerHtml='valgallah77.web.fc2.com/',bannerImg='i.imgur.com/q7RAxeG.png'
break;
case 133:
mydiv='Tails_Adventure',imgur='dZ6dOhE.gif',youtube='D6WbidumAJw',gdrv='1IgCC20_LftsIx_4IzuQ7U-8Jll2s0UQV'
break;
case 134:
mydiv='Trump_Castle',imgur='uuXaSYP.gif',youtube='k0pOz94lET4',gdrv='1cMAkHNBloMttCw9YAhQROHgqFx8vfzwa'
break;
case 135:
mydiv='Alex_Kidd_SW',imgur='Bh3ZJYA.gif',youtube='g6Kv5cj-kbo',gdrv='14tIuGNaATof4tdimK6HitxNYLBER-d5V'
break;
case 136:
mydiv='Mystic_Cave:RE',imgur='btOgGEX.gif',youtube='00vKl2Ywreg',gdrv='18oxoRSj3r25I99vVUW3ET9KXAhOG6oEa'
break;
case 137:
mydiv='KirbyMK4',imgur='VBu57Re.gif',youtube='Fx8dVwJ9pjY',gdrv='10ISB1TYCzgLDa0nlJGtDhuAkgeET6nGy'
break;
case 138:
mydiv='Psycho_Wasp',imgur='66f1HbI.png',youtube='W6WeXD40IT8',gdrv='1O3mXmF_II1f_yuL-7yOdOCZffCMP_ipZ'
break;
case 139:
mydiv='Shockman',imgur='TvKpECK.gif',youtube='WUyja03f-Es',gdrv='1M8Qb9lOi0kiJS0-i2tMwVLTrrbRD2_W3',bannerHtml='wani-shima.sakura.ne.jp',bannerImg='wani-shima.sakura.ne.jp/kyouryuubana.jpg'
break;
case 140:
mydiv='Ghost-Sweeper',imgur='btWjmQ7.gif',youtube='jIciRjH4vMw',gdrv='1IirAgUWUbBQWSPDMhavvFgDL-mbxZXoc',bannerHtml='sunnyworld.free.fr',bannerImg='i.imgur.com/gAsrMM0.png'
break;
case 141:
mydiv='Final_Assault',imgur='2sTDDfe.gif',youtube='tUHgV2ySH7U',gdrv='1YhNUX_0osdyDKucya4xLUMGDrKt5MVO0',bannerHtml='ikrgmugen.web.fc2.com',bannerImg='i.imgur.com/3UeeMUT.png'
break;
case 142:
mydiv='R-Factory',imgur='EKarctF.gif',youtube='PopSM7nY0fI',gdrv='1LPCgNr6RU-4j6c5avQdTzf7lZ23F2J18'
break;
case 143:
mydiv='Dense_Jungle',imgur='9aKwD6M.png',youtube='0bvZa8iuog0',gdrv='1ouGRVEP7IPamjAgjYiL1xhdYYGaPfnwr'
break;
case 144:
mydiv='Jiu_Xiang_Rong_Dong',imgur='mXzscPv.png',youtube='twVIILqenTM',gdrv='1e-D6IIh5lc_DO8wk4PoFM_Y88MgzvUKB',bannerHtml='ankokunaitou.blog.fc2.com',bannerImg='i.imgur.com/EIXSnzc.png'
break;
case 145:
mydiv='Tietê',imgur='hVQbFCj.png',youtube='FEZyP-KRdpM',gdrv='1TdrSHbkmHnV_h6Q3W520Wihc9646KZbJ',bannerHtml='kaendd.free.fr',bannerImg='i.imgur.com/8OmGYOX.png'
break;
case 146:
mydiv='Ulu_City_2',imgur='9urjRsW.png',youtube='pNI6x0I--g0',gdrv='1KmBAayxkuuEeHgKN-gyZ-GXy_vsW2wOK'
break;
case 147:
mydiv='MapleStory_Moon',imgur='lq3g3j8.png',youtube='TcftJ2bmK7w',gdrv='1CIejsSi-CPd-aK3LyyMstMP0iZCFoA3P'
break;
case 148:
mydiv='Soft_&_Cuddly',imgur='Q5vppKs.png',youtube='nkZCvcDhy7M',gdrv='1-wtDeg3G-pKsa3jX8nriaRjqHixSDOfA'
break;
case 149:
mydiv='Childam',imgur='vwyHC1p.png',youtube='l8TQn52Z6ag',gdrv='1Coma7X1m3yUBEn0RVq27Vzk7Ab0Fs28J'
break;
case 0:
mydiv=''
}
if (bannerHtml==''){
bannerHtml='wani-shima.sakura.ne.jp';
bannerImg='wani-shima.sakura.ne.jp/kyouryuubana.jpg';
}
switch (cod) {
case 1:
document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+" onClick='stage("+numero+",2)' title="+mydiv+" class='button' width='125'>" //250
break;
case 2:
document.getElementById(numero).innerHTML="<br><iframe src=https://www.youtube.com/embed/"+youtube+" width='430' height='240' frameborder='0'></iframe><br><b>"+mydiv+"</b><br><a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png></a><br>"
break;
case 3:
break;
}
}

// LINK GDRV DROPBOX YOUTUBE (img  width='140')
// <br><a target='_blank' href=><img onClick='stage("+numero+",2)' src=https://i.imgur.com/pJFCm25.png></a>
// https://drive.google.com/uc?id="+gdrv+"
// {window.open('https://www.dropbox.com/sh/4yvtvzi0bgvm6ky/AAD9c--Ke68LHTn2E1Nd3QVOa?dl=0','_blank')}
//<iframe src=https://www.youtube.com/embed/"+youtube+"?autoplay=1 width='430' height='240' frameborder='0'></iframe>
