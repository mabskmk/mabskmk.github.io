
function menuchar() {
document.getElementById('principal').innerHTML="<center><table border=0><td align=right><h1><b>Characters</b></h1><a target='_blank' href='https://ln.sync.com/dl/8130397b0/ciy6yjaq-ibypwy7w-fbra5drz-q6dp5tub'><img src=https://i.imgur.com/QPa6H3A.png class='rbutton'></a><br><div id=53>Sandwitch</div><div id=52>OOMK</div><div id=51>Golem</div><div id=50>thicc</div><div id=49>shimeji</div><div id=48>ukyo</div><div id=47>RM</div><div id=46>Reznors</div><div id=45>boobs</div><div id=44>mermaid</div><div id=8>devilpeso</div><div id=7>slugwanzer</div><div id=33>yashahime</div><div id=43>dress</div><div id=23>flappyb</div><div id=42>eyeofbalor</div><div id=41>fullspiders</div><div id=4>flyingtara</div><div id=39>Wall Face</div><div id=38>capitalism</div><div id=40>tictactoe</div><div id=37>bikergal</div><div id=36>ckebab</div><div id=35>brainoc</div><div id=34>hannyaned</div><div id=2>bullchan</div><div id=9>morgul</div><div id=19>destroyer</div><div id=18>e-o-w</div><div id=20>w-o-f</div><div id=14>vanpookin</div><div id=13>truckjoe</div><div id=24>helimaster</div><div id=16>dcar</div><div id=25>drwily</div><div id=22>murderwall</div><div id=15>car3</div><div id=26>ddd</div><div id=21>sarlacc</div><div id=11>garekky</div><div id=12>mash</div><div id=17>e-o-c</div><div id=5>pesoguin</div><div id=10>kido</div><div id=6>slugwanzerold</div><div id=1>deathforce</div><div id=3>metagang</div>...<br><h1 id=nomeprinc><b>Mini-games</b></h1><div id=32>castlewar</div><div id=30>jokenpon</div><div id=31>msw-subway</div><div id=29>gng-burn</div><div id=28>gng-tower</div><div id=27>gng-grave</div>...<br><br><a target='_blank' href='https://www.mediafire.com/folder/ftea2duwm6m09/WarehouseCHAR'><b>Warehouse</b></a><br><br><input type=rbutton onClick='ppmain(1)' value='.Clean.'><br><tr></table></center>"
btnnew.disabled=false;
btnchar.disabled=true;
btnstg.disabled=false;
btnfullg.disabled=false;
btntuto.disabled=false;
btnyotu.disabled=false;
for (x=53;x>0;x--) {
char((x),2)
}
char(53);
}

function vichar() {
rand=Math.floor(Math.random() * 54);
//rand=Math.floor((Math.random() * 5) + 45);
char(rand,1);
if (youtube!=''){
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"?autoplay=0&mute=0 width='500' height='300' frameborder='0'></iframe><br>CHAR ("+rand+"): <b>"+mydiv+"</b> <a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png title=CHAR_"+mydiv+"></a></marquee>"
}
else{
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/OyQa9DowOrQ?autoplay=0&mute=0 width='500' height='300' frameborder='0'></iframe><br>Full-Game: <b>Steel Warriors</b> <a target='_blank' href=https://www.dropbox.com/s/hp2b158fiqff6he/MSW-Steel%20Warriors1.1.rar?dl=1><img src=https://i.imgur.com/pJFCm25.png title='Steel Warriors'></a>"
}
tempo=setTimeout('vistg()',50000);
}

//DOWNLOAD-CHAR
function char(numero,cod) {
youtube='';
gdrv='';
imgur9='';
switch (numero) {
case 1:
mydiv='Death-Force',imgur='ocvdalJ',imgur9='xr3A7SH.gif',game='MetalSlug',ctype='Boss',lastupdate='13/12/08',gdrv='1nCEVFvv6_MWnOewCQEwqo3wBIEi0xOzk',youtube='57Twr3DTGbk'
break;
case 2:
mydiv='Bull_chan',imgur='ot8ebRi',game='Metalslug',ctype='Bonus',lastupdate='02/06/15',youtube='Dp3T1arUUmY',gdrv='15HH5HuYvK22p1AJw4_vWai6usFNw9IXt'
break;
case 3:
mydiv='MetaGang',imgur='VhoTRPp',game='Kirby',ctype='Multi-char',lastupdate='15/05/08',gdrv='19CzU8t9VOizNBDikp_Q210mQ0tRRruU-',youtube='8y4p4RwhPYA'
break;
case 4:
mydiv='FlyingTara',imgur='iEjzspe',game='Metalslug',ctype='Bonus',lastupdate='05/09/16',gdrv='1wI7dMOqTWskEBvXYxvoZLeOu4eSN-vrT',youtube='vACTOBHHlmI'
break;
case 5:
mydiv='Pesoguin',imgur='5NqzscO',imgur9='0aYs6iI.png',game='<a target=_blank href=https://www.peso.nu><img src=https://i.imgur.com/qV3Q36A.gif></a>',ctype='Char',lastupdate='18/10/11',youtube='byeHdxhDGIk',gdrv='1IEHqXNhl5pdGrZVSy27sRUSJpdjFSIY_'
break;
case 6:
mydiv='Slug_Wanzer_Old',imgur='FlLscmO',game='Metalslug',ctype='Char',lastupdate='20/04/08',gdrv='1DMfPTtg1jbegRXRq82pb7N11pteDhNnw',youtube='Stk5KQzVcXE'
break;
case 7:
mydiv='Slug_Wanzer',imgur='3tFzcit',game='Metalslug',ctype='Char',lastupdate='02/11/18',gdrv='1q9ZVUtQIz0pjdjtXAPG0MAi7fVdnglu-',youtube='tW_M0k_HFaY'
break;
case 8:
mydiv='Devil_Pesoguin',imgur='75lBnh5',game='Castlevania_edit',ctype='Bonus',lastupdate='02/11/18',gdrv='1n_A2vUVEDwaODoGRxMZ8t8iB1wR3-CRR',youtube='yISEi8PKipw'
break;
case 9:
mydiv='MORGUL',imgur='fPt2Off',imgur9='vk6MdFi.gif',game='Turrican',ctype='Boss',lastupdate='02/06/15',gdrv='1hHIoFEuw588ks3npH1apjGUmAUTyoRP_',youtube='8vk5g8fobnQ'
break;
case 10:
mydiv='Captain_Kido',imgur='0IaKgex',imgur9='XQkb69u.png',game='Parotte Fighters',ctype='Char',lastupdate='18/10/11',gdrv='1hjHAwkdngFnmEBSsMlllFSPHKbQJr_u8',youtube='8uvsBKXOAxg'
break;
case 11:
mydiv='Garekky',imgur='k7iIk5C',game='Makeruna Makendo 2',ctype='Bonus',lastupdate='15/07/12',gdrv='1a-d4pNJ4F3VO3LA6CzVVgD-DMJbG04AP',youtube='Aw7loTiadaI'
break;
case 12:
mydiv='Mash',imgur='AZMe0Bc',game='Megaman7',ctype='Bonus',lastupdate='20/05/12',gdrv='1Z69qGOh4MgnHqPm9grjKeJTP61GngjbE',youtube='ZHxpJXL_nYo'
break;
case 13:
mydiv='Truck_Joe',imgur='c9iJZbD',game='Megaman7',ctype='Bonus',lastupdate='16/07/14',gdrv='1ODwXTdfc3YJeI-KeY35tI1-IcMioT65C',youtube='ZAajIVtXzKY'
break;
case 14:
mydiv='Van_Pookin',imgur='yWqb56L',game='Megaman7',ctype='Bonus',lastupdate='31/10/14',gdrv='13dHiSewKjtn0zmYZRqU05LysSLPcqTNk',youtube='Bf4KLzjoNmk'
break;
case 15:
mydiv='CAR3',imgur='MbcbFyn',game='Street Fighter 2',ctype='Bonus',lastupdate='23/11/12',gdrv='1ha4jP2IAT8TgAKEAqMqGbPtPtzo73HTQ',youtube='pdW7ebSh6sM'
break;
case 16:
mydiv='DCar',imgur='97WL9th',game='Dong Dong Never Die',ctype='Bonus',lastupdate='24/05/13',gdrv='11XgXnbON0dn3EJoORv6svOfuG-JsByds',youtube='Vu_yVtBuZcw'
break;
case 17:
mydiv='Eye-of-Cthulhu',imgur='W9JHpa9',imgur9='8FOd0oL.gif',game='Terraria',ctype='Bonus',lastupdate='22/12/11',gdrv='1WQg7N9HyzrgQenmgVxuLvChK0B9O7KUx',youtube='LbYtJC3yEwc'
break;
case 18:
mydiv='Eater-of-Worlds',imgur='rFItKdC',game='Terraria',ctype='Bonus',lastupdate='02/06/15',gdrv='1Kc2WpuZ8EoErZd8ztfJ8q1MkKMnDLKbp',youtube='bZ_oo__6Fac'
break;
case 19:
mydiv='the-Destroyer',imgur='7dpm5WZ',game='Terraria',ctype='Bonus',lastupdate='02/06/15',gdrv='1yBtTASmCRApkCNeKmYbmdLX1JW_a8JlX',youtube='TMMmofbUPHw'
break;
case 20:
mydiv='Wall-of-Flesh',imgur='517R994',imgur9='HGEK7LB.gif',game='Terraria',ctype='Bonus',lastupdate='31/10/14',gdrv='1MgS3faH8veG9Xv2AyUuCEKp3EMwTn4_F',youtube='f1q18hAlo9U'
break;
case 21:
mydiv='Sarlacc',imgur='7o6fJVg',game='Star Wars',ctype='Boss',lastupdate='03/08/12',gdrv='1zOk5tBPfYPP5a7siNJxitX4fmPmek5pg',youtube='gB3VHt2W_Y0'
break;
case 22:
mydiv='Murder_Wall',imgur='Bs2AFdr',game='Kid Chameleon',ctype='Bonus',lastupdate='20/05/13',gdrv='17eXND0ylyX7igS8kho6jxz7avIIUvNE3',youtube='eTFu4Uu-NN4'
break;
case 23:
mydiv='Flappy_Bird',imgur='cyO80Il',game='Flappy Bird',ctype='Bonus',lastupdate='04/05/17',gdrv='1L3_0Rmf-QEPJ3AAWLPsquh3MJh4yTRI9',youtube='UJd1XZToI-Y'
break;
case 24:
mydiv='Heli-Master',imgur='lk7NGsI',game='Alex Kidd',ctype='Boss',lastupdate='03/06/13',gdrv='1Z6E3Jqg_QEQ06Sby8mfBmrflgSgWrb6B',youtube='yxzrwJR4FBE'
break;
case 25:
mydiv='Dr_Wily',imgur='jiB107a',game='Megaman',ctype='Bonus',lastupdate='21/05/13',gdrv='1i8t7TJQEw4RT7jphvoeMyTdaaT6RnKqa',youtube='BgT-H-F8Dv4'
break;
case 26:
mydiv='Devil-Dumb-Drum',imgur='rMWebNH',game='Donkey Kong',ctype='Bonus',lastupdate='21/11/12',gdrv='1YSmr-m2nVO26xY05MosqTNmu5LAMZD6m',youtube='YIEZKsJMDzw'
break;
case 27:
mydiv='GnG-Graveyard',imgur='p19yaAN',game='Makaimura',ctype='Plataform',lastupdate='01/10/11',gdrv='1OlrmXy18dRVI1cL7VT8ocLGTvWbcp25h',youtube='yAXctj9pVZ4'
break;
case 28:
mydiv='GnG-Tower',imgur='CkHRPvY',game='Makaimura',ctype='Arcade',lastupdate='30/09/11',gdrv='1s4SVGZOxGCeUxin621GOhFwMvfnIka-8',youtube='AgyJvl_cA-U'
break;
case 29:
mydiv='GnG-Burning',imgur='ScexylS',game='Makaimura',ctype='SHMUP',lastupdate='29/09/11',gdrv='1rPMAP0HkLOvngIqFxxgNWjZYKKVt0IwB',youtube='oeOOCOa3QWI'
break;
case 30:
mydiv='ALEX_Jankenpon',imgur='kHBUEcQ',game='Alex Kidd',ctype='JokenPo',lastupdate='01/03/12',gdrv='1o4UAIynon1lyGVFLCowRKstD-7RIxp5P',youtube='sRVVgsaoYYw'
break;
case 31:
mydiv='MSW-Subway',imgur='omSLMkl',game='Metalslug',ctype='SHMUP',lastupdate='19/01/12',gdrv='1nxtazK_0agbKe6wrJtUtYyDL21IiBIGw',youtube='Miwkebhi0lM'
break;
case 32:
mydiv='Castle_War',imgur='Xehem37',game='Various',ctype='Tower defense',lastupdate='07/11/12',gdrv='1usRBM7HowIsEPqHnE6guEGMk3EbZO87l',youtube='U-SaQWqoM7Q'
break;
case 33:
mydiv='Yasha-Hime',imgur='p4i3ONN',game='Ganryu',ctype='Boss',lastupdate='02/11/18',gdrv='1Dr6zJ0-Ah0ExxmRk2DfJ--burI9DMGMR',youtube='6HbSkHd7SbQ'
break;
case 34:
mydiv='HannyaNED',imgur='wObxscr',game='Megaman7',ctype='Boss',lastupdate='25/10/15',gdrv='1GZqpnaGxAyAyamsYPOEXwTrgdS5PpoNX',youtube='RsuTkkpzkmg'
break;
case 35:
mydiv='Brain-of-Cthulhu',imgur='8xMmvYn',game='Terraria',ctype='Boss',lastupdate='31/10/15',youtube='LOtAUorfxgc',gdrv='1piPhPxq4fi_Eph0dKRqjbkgRkHKGlcnl'
break;
case 36:
mydiv='Captain_Kebab',imgur='TsaW1dX',game='Parodius',ctype='Boss',lastupdate='28/06/16',gdrv='1CYYAi4kM1s-dFSH1ldcDdp9BEOxwQzOj',youtube='1BxSnIkb1co'
break;
case 37:
mydiv='Biker_GAL',imgur='7dP9qeT',imgur9='uhSntpz.png',game='Battle_Circuit',ctype='Bonus',lastupdate='29/06/16',youtube='wnNg3g0NXn0',gdrv='1kH-OrCFQMcm_gV8_sbxoSzLhySEqFrPT'
break;
case 38:
mydiv='Capitalism',imgur='HIynVUA',imgur9='LCZ5ymb.png',game='Real World',ctype='Boss',lastupdate='29/06/16',gdrv='1t27oAqR6ef55hUgMLvwCKMHiqOn1GtKS',youtube='P66-PjR3JgA'
break;
case 39:
mydiv='Wall_Face1-1',imgur='9uoKcu9',game='Skyblazer',ctype='Boss',lastupdate='15/08/16',gdrv='1VEBZzrcjKuZ6RXTy_E0PoMgzSEO0fv24',youtube='u2jrAqPJkjw'
break;
case 40:
mydiv='Tic-Tac-Toe',imgur='PgyIqB1',game='Oldschool',ctype='Bonus',lastupdate='24/07/16',gdrv='1JiWBKuN9LdOB_zZYlsK_SfHUx5gZUDvZ',youtube='md1d_rGgpJs'
break;
case 41:
mydiv='Full-of-Spiders',imgur='hXxFrKx',game='Splatterhouse',ctype='Bonus',lastupdate='28/10/16',gdrv='19f8oZl-KzlWeYGTo27vvteu9GPK_dVFi',youtube='h4nir7Y4E3o'
break;
case 42:
mydiv='Evil-Eye-of-Balor',imgur='1LDxq7H',game='Terraria',ctype='Boss',lastupdate='25/03/17',gdrv='1tsQ4AS7cl8emdMOHAtVbsGJtNp1ykaw6',youtube='cYUCj_SBbS0'
break;
case 43:
mydiv='Dress',imgur='yYVBanS',game='Queen Axe',ctype='Bonus',lastupdate='13/01/18',gdrv='1gYpG62kgEQYyLI0rLRhiNX_fJe-Egvrm',youtube='aqFfIf4SZms'
break;
case 44:
mydiv='Mermaid',imgur='YAMiPUI',game='Gaiares',ctype='Bonus',lastupdate='10/10/19',gdrv='1O5lFMuFeLyPYXAwB5SaumvtlXZzXLrRK',youtube='waAHbnYqKfg'
break;
case 45:
mydiv='Boobs',imgur='yD1AWaE',imgur9='YcjMbca.png',game='Amazon Brawl',ctype='Boss',lastupdate='24/05/20',gdrv='15iwEE0g8Jun3eQQlYxw7uC7Jt1Vpv9ME',youtube='7mFsq-ehdUI'
break;
case 46:
mydiv='Reznor',imgur='qVYNGvN',game='Mario',ctype='Boss',lastupdate='24/05/20',gdrv='15VTihsGmygebpBvSwTPvg2BkKdUNQ8u1',youtube='yHFz7D02q7w'
break;
case 47:
mydiv='R-Memory',imgur='RNwRj1K',game='R-Type',ctype='Bonus',lastupdate='31/10/20',gdrv='1PNzI6IssGK8BSsYcLCr2xSVrdiDblXVX',youtube='W1NexGA005g'
break;
case 48:
mydiv='Head-of-Ukyo',imgur='RZ9lnLU',game='original',ctype='Boss',lastupdate='31/10/20',gdrv='1jPx1agCPmLw2Sc9ew4o8zS9j4xnajn9E',youtube='hS2SEqNnglw'
break;
case 49:
mydiv='Shimeji',imgur='IDrbSZ8',imgur9='sJuKFFz.png',game='<a target=_blank href=https://kilkakon.com/shimeji><img src=https://i.imgur.com/RG52doK.png></a>',ctype='Bonus',lastupdate='24/12/20',gdrv='1nKdd3q6eaRqfTQz1I_vfykm8-u0Uq2IT',youtube='XpsEZcqlQ5I'
break;
case 50:
mydiv='Thicc-Tac-Toe',imgur='ld7q5PX',imgur9='yxzkrR1.png',game='Metal Slut',ctype='Bonus',lastupdate='13/01/21',gdrv='1ezCyx2EDm4b2Ko1hypdfUFB4Baw5zXVa',youtube='xrUfneVBPDo'
break;
case 51:
mydiv='Golem',imgur='pbrqOGU',imgur9='EpX4fu3.png',game='Nosferatu',ctype='Bonus',lastupdate='31/10/21',gdrv='18p-BFz34xr2fklFNuJkcr-kaqTYVNODy',youtube='xuMOQ4seKrE'
break;
case 52:
mydiv='OOM-Killer',imgur='meIJuGr',imgur9='WQjDqJm.png',game='Turrican',ctype='Bonus',lastupdate='31/10/21',gdrv='1mZm2fg8-GE29Uk61ZOPNlc7NMNy0LfJe',youtube='jqCbRdXSKpE'
break;
case 53:
mydiv='Sandwitch',imgur='2APcz3X',imgur9='zyTExeh.png',game='Puyo_Puyo',ctype='Bonus',lastupdate='31/10/21',gdrv='1CrFqUEl2u9or1SRXbJ5GqwpZVJ1FKtMu',youtube='ii9zUSrDCCA'
break;
case 0:
mydiv=''
}
switch (cod) {
case 1:
break;
case 2:
document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+".png onClick='char("+numero+")' class='rbutton' width=25 height=25><b>"+mydiv+"</b> "+game+" / "+ctype+" / Last update: "+lastupdate+"<br>"
break;
default:
document.getElementById(numero).innerHTML="<img src=https://i.imgur.com/"+imgur+".png onClick='char("+numero+")' class='rbutton' width=25 height=25><b>"+mydiv+"</b> "+game+" / "+ctype+" / Last update: "+lastupdate+"<br><img src=https://i.imgur.com/"+imgur9+" height='240' class='flip'><iframe src=https://www.youtube.com/embed/"+youtube+" width='430' height='240' frameborder='0'></iframe><br><a target='_blank' href=https://drive.google.com/uc?id="+gdrv+"><img src=https://i.imgur.com/pJFCm25.png></a>"
}
}

// LINK GDRV DROPBOX YOUTUBE
// <br><a target='_blank' href=><img src=https://i.imgur.com/pJFCm25.png></a>
// https://drive.google.com/uc?id="+gdrv+"
// {window.open('https://www.dropbox.com/sh/gqnzgea8ec80pvx/AACYMGQkTpC7rg6FcazaK-rPa?dl=0','_blank')}
//<iframe src=https://www.youtube.com/embed/"+youtube+"?autoplay=1 width='430' height='240' frameborder='0'></iframe>
