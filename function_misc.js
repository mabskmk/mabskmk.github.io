function viytmisc() {
rand=Math.floor(Math.random() * 6);
mydiv='';youtube='';tea='';
switch (rand) {
case 1:
mydiv='MUGEN_-_Fantastico_Jaspion',youtube='1_7gepKMuts'
break;
case 2:
mydiv='Alex_Kidd_in_Trouble_-_The_Hand_clan',youtube='1JUxenU5Ct8'
break;
case 3:
mydiv='MAGMML2_-_Chomp_man',youtube='0IACU-xea7o',tea='&t=737s'
break;
case 4:
mydiv='Nemesis_Online_-_Crystal_Forest',youtube='vsisup-v2mk',tea='&t=101'
break;
case 5:
mydiv='MUGEN_-_Dr.Wily',special='uNyQi6YTfg8',tea='&t=18'
break;
}
if (youtube!=''){
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"?autoplay=1&mute=1&t=40s width='500' height='300' frameborder='0'></iframe><br><b>"+mydiv+"</b>"
}
else {
document.getElementById('videoshowcase').innerHTML="<iframe src='https://www.youtube.com/embed/b7vz7krharY?autoplay=1&mute=1' width='500' height='300' frameborder='0'></iframe><br><b>Just a normal day</b>"
}
tempo=setTimeout('vichar()',50000);
}
