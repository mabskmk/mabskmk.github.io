const numExtras=15;
var bannerHtml='';
var bannerImg='';
var rand=0;
var checkMisc = new Array((numExtras)+1);

// Function to play a random video
function viytmisc() {
mydiv='';youtube='';link='';

	// Disable the function when leaving the showcase
	if (btnnew.disabled==false) {return;}

// Check if the array is full
for (x=numExtras;x>0;x--) {
if ( checkMisc[x]!=='ok' ) {break;}
if (x==1 && checkMisc[x]=='ok' ) {checkMisc = [];} 
}

// Set a randomValue
rand=(Math.floor(Math.random()*numExtras)+1);
	
	// Compare with checklist
	while (rand>0 && checkMisc[rand]=='ok') {rand=(Math.floor(Math.random()*numExtras)+1);}

	if (rand>0 && checkMisc[rand]!='ok') {checkMisc[rand]='ok';}

// Get the info of the video [id]
switch (rand) {
case 0:
mydiv=''
break;
case 1:
mydiv='Check out my Bitchute channel',youtube='uzctO7j_1Sg?si=E-_6g4JTy7pjYPV5&start=180&end=230',link='www.bitchute.com/channel/LIy5FtdNRSH2';
break;
case 2:
mydiv='Check out the 66th place in MAGMML2',youtube='0IACU-xea7o?si=Zw5JWWPj-H8A86Nc&start=737&end=787',link='magmmlcontest.com/wiki/index.php/Chomp_Man_(stage)'
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
mydiv='Fantastico_Jaspion',youtube='1_7gepKMuts?si=RPYmXGIbHLL4--Kn',bannerHtml='sato.tv.br/',bannerImg='i.imgur.com/rMxn204.png'
break;
case 11:
mydiv='MUGEN_means_INFINITY',youtube='1ZUwgwQQoTU?si=PjHwcYXOizpxsn4T&start=224&end=274'
break;
case 12:
mydiv='Dougar_with_super_armor_soon',youtube='PzFymxJK-70?si=ePZfsY4u5EGKpwWZ'
break;
case 13:
mydiv='Arknights_ridiculous',youtube='c3IT6VnI5rw?si=o_a-I_IkEwjw5g4P&start=360&end=410'
break;
case 14:
mydiv='Will_RIOS_be_a_char_or_stage?',youtube='GJ2bJH6tOew?si=liJKoc88OXzyLmdW&start=165&end=215'
break;
case 15:
mydiv='Good_times',youtube='99FOYzN9U7A?si=5e2ZYNHH0WMbdX4P'
break;

}
if (bannerHtml==''){
bannerHtml='twitter.com/Zanmyo';
bannerImg='i.imgur.com/qV3Q36A.gif';
}
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"&autoplay=1&mute=1 width='500'   height='300' frameborder='0' title="+mydiv+"></iframe><br><a target='_blank' href=https://"+link+"><b>"+mydiv+"</b></a>"
document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
tempo=setTimeout('vichar()',50000); //vichar -> vistg -> viytmisc
}
