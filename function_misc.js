function viytmisc() {
rand=Math.floor(Math.random() * 6);
mydiv='';youtube=''
switch (rand) {
case 1:
mydiv='MUGEN_-_Fantastico_Jaspion',youtube='1_7gepKMuts?si=RPYmXGIbHLL4--Kn',bannerHtml='sato.tv.br/',bannerImg='i.imgur.com/rMxn204.png'
break;
case 2:
mydiv='Castle_Defense',youtube='uzctO7j_1Sg?si=E-_6g4JTy7pjYPV5&start=180&end=230'
break;
case 3:
mydiv='MAGMML2_-_Chomp_man',youtube='0IACU-xea7o?si=Zw5JWWPj-H8A86Nc&start=737&end=787'
break;
case 4:
mydiv='Nemesis_Online_-_Crystal_Forest',youtube='vsisup-v2mk?si=3kCcOpLS6E_djvsE&start=101&end=151'
break;
case 5:
mydiv='MUGEN_-_Dr.Wily',special='uNyQi6YTfg8?si=XjaN7IxIJBDCC3Nk&start=18&end=168'
break;
}
if (youtube!=''){
document.getElementById('videoshowcase').innerHTML="<iframe src=https://www.youtube.com/embed/"+youtube+"&autoplay=1&mute=1 width='500' height='300' frameborder='0' title="+mydiv+" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe><br><b>"+mydiv+"</b>"
}
else {
document.getElementById('videoshowcase').innerHTML="<iframe src='https://www.youtube.com/embed/b7vz7krharY?si=Bi_DRud39PtvqqkR&autoplay=1&mute=1' width='500' height='300' frameborder='0' allow='autoplay; web-share' allowfullscreen></iframe><br><b>Just a normal day</b>"
}
document.getElementById('banner').innerHTML="<a target='_blank' href=https://"+bannerHtml+"><img src=https://"+bannerImg+"></a>";
tempo=setTimeout('vichar()',50000);
}
