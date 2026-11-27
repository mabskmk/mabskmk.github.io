const numExtras=2;
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
rng=(Math.floor(Math.random()*280));
	if (rng==0) {bitchute='AWXqY34Vs5Wh';}
	if (rng==1) {bitchute='VYGYEGEtVDaA';}
	if (rng==2) {bitchute='KKMFek1pNHP5';}
	if (rng==3) {bitchute='64sZqbTvvVpE';}
	if (rng==4) {bitchute='TWUBbXbPIx5b';}
	if (rng==5) {bitchute='joKEB1SowFP9';}		
	if (rng==6) {bitchute='3FqzRKMq9fED';}
	if (rng==7) {bitchute='0jZP9bwdgIbX';}
	if (rng==8) {bitchute='UY5A8MgdORG0';}
	if (rng==9) {bitchute='z39ht6GMTLc7';}
	if (rng==10) {bitchute='L2x9MNVZhG8r';}
	if (rng==11) {bitchute='qt7RD2Wy1AbD';}
	if (rng==12) {bitchute='PWSWUcQ393Kw';}
	if (rng==13) {bitchute='PSawT90C2Qws';}
	if (rng==14) {bitchute='F4xFWUEv1FhZ';}
	if (rng==15) {bitchute='4FZ8ld8mx9dq';}
	if (rng==16) {bitchute='uEMESJI1rpx1';}
	if (rng==17) {bitchute='1FjTcJXRtTuw';}
	if (rng==18) {bitchute='c3MPmuSZ2KcI';}
	if (rng==19) {bitchute='oYxLTcBSGkrf';}
	if (rng==20) {bitchute='nN9EtUSJTo7i';}
	if (rng==21) {bitchute='naqWl8VoY5sl';}
	if (rng==22) {bitchute='n5oBnpn99Whw';}
	if (rng==23) {bitchute='W9uGDHx9vLK2';}
	if (rng==24) {bitchute='bnMuVOkcmSZw';}
	if (rng==25) {bitchute='V31qWhD4AlWF';}
	if (rng==26) {bitchute='t2C38auilmMw';}
	if (rng==27) {bitchute='ruJPke7BM4e1';}
	if (rng==28) {bitchute='go5cxZnwtMX7';}
	if (rng==29) {bitchute='GWZhrMwVr26M';}
	if (rng==30) {bitchute='x0BVn6OsFUgd';}
	if (rng==31) {bitchute='sdyuiUCPffN0';}
	if (rng==32) {bitchute='hK3qBL1Jqqjq';}
	if (rng==33) {bitchute='igAdiRS2e56H';}
	if (rng==34) {bitchute='6AK5p9uo46iA';}
	if (rng==35) {bitchute='9lp8nEulEgZX';}
	if (rng==36) {bitchute='Zi5YiuV227Fi';}
	if (rng==37) {bitchute='JkFICLAK50FS';}
	if (rng==38) {bitchute='CDlKHt7bpvPl';}
	if (rng==39) {bitchute='7OGBakKdO81v';}
	if (rng==40) {bitchute='1KRvsossOE6f';}
	if (rng==41) {bitchute='3W4G9wPSa5zM';}
	if (rng==42) {bitchute='kWhB5OQ8ttMP';}
	if (rng==43) {bitchute='OqUcy8dIugxx';}
	if (rng==44) {bitchute='iitJ114nmx0g';}
	if (rng==45) {bitchute='HS5Y4AKcm6EJ';}
	if (rng==45) {bitchute='HS5Y4AKcm6EJ';}
	if (rng==46) {bitchute='1jXG46nBieUz';}
	if (rng==47) {bitchute='jYwTyAVxAXTt';}
	if (rng==48) {bitchute='eB0lZgfHKbTV';}
	if (rng==49) {bitchute='W9udG2L5Ehaj';}
	if (rng==50) {bitchute='8lqiCPleChnQ';}
	if (rng==51) {bitchute='f82YfRGVBjCG';}
	if (rng==52) {bitchute='D0VJwWpTZ8C3';}
	if (rng==53) {bitchute='oYIDS8MOvypq';}
	if (rng==54) {bitchute='CrLcMfyhL5CD';}
	if (rng==55) {bitchute='qKWD1dQ6Fdi5';}
	if (rng==56) {bitchute='UsDECwVNLqaQ';}
	if (rng==57) {bitchute='BNMRvxdFdPZ1';}
	if (rng==58) {bitchute='4Pcgb9g5gesS';}
	if (rng==59) {bitchute='p0ElUxpt3eni';}
	if (rng==60) {bitchute='ddvVnI1gOgns';}
	if (rng==61) {bitchute='n0a1lQJGEscF';}
	if (rng==62) {bitchute='OpHx8acGQEd3';}
	if (rng==63) {bitchute='tfi9OHBoeDy3';}
	if (rng==64) {bitchute='hilk8Y0Yh84t';}
	if (rng==65) {bitchute='bW99jaLVBoXE';}
	if (rng==66) {bitchute='WwXWO5GtpT4R';}
	if (rng==67) {bitchute='JlgvyCFxgNRB';}
	if (rng==68) {bitchute='Y3Ul0zYdBqrx';}
	if (rng==69) {bitchute='NdoczpcikL8o';}
	if (rng==70) {bitchute='Fs9EiCrdkS7Z';}
	if (rng==71) {bitchute='buDsnpgVl118';}
	if (rng==72) {bitchute='Vr0c2N8BIIUo';}
	if (rng==73) {bitchute='A2Fdq6VwmDcD';}
	if (rng==74) {bitchute='dYw0I6K2B7Tb';}
	if (rng==75) {bitchute='dAfiH4bxpLvJ';}
	if (rng==76) {bitchute='BSkhmETzBxQI';}
	if (rng==77) {bitchute='YuDf3dpgOnBV';}
	if (rng==78) {bitchute='U85JJwKVzXiz';}
	if (rng==79) {bitchute='eKpihfQCjP41';}
	if (rng==80) {bitchute='zHyy8GyaFHng';}
	if (rng==81) {bitchute='TYHVOi4PJ4BP';}
	if (rng==82) {bitchute='S2tDHEO9HPfe';}
	if (rng==83) {bitchute='r46arFfVGUsc';}
	if (rng==84) {bitchute='HzJ97wHqz0pJ';}
	if (rng==85) {bitchute='Qq43Kw6pK5XE';}
	if (rng==86) {bitchute='MPsM0sjhSjfK';}
	if (rng==87) {bitchute='ljmlyKhe5phO';}
	if (rng==88) {bitchute='VEdc3JpRRLaT';}
	if (rng==89) {bitchute='5N0QCcwTm5kF';}
	if (rng==90) {bitchute='kgMqf61rgMBM';}
	if (rng==91) {bitchute='PB1kjQxRbBJr';}
	if (rng==92) {bitchute='Cv46jwRIVYpE';}
	if (rng==93) {bitchute='9S1NJbKAaGeq';}
	if (rng==94) {bitchute='73YAFjoZy6Mr';}
	if (rng==95) {bitchute='z28P2dfeHU6l';}
	if (rng==96) {bitchute='z28P2dfeHU6l';}
	if (rng==97) {bitchute='2pTQcDswl28F';}
	if (rng==98) {bitchute='pHMlwqm4FaNg';}
	if (rng==99) {bitchute='ivA0nTjCMc96';}
	if (rng==100) {bitchute='DtUP9KpoLgXb';}
	if (rng==101) {bitchute='PdotHikkkfOj';}
	if (rng==102) {bitchute='rUHM00VDVE7G';}
	if (rng==103) {bitchute='8kkYqCBgrxQH';}
	if (rng==104) {bitchute='SUgZCdsz8zXw';}
	if (rng==105) {bitchute='af0TcvlEwgnT';}
	if (rng==106) {bitchute='Ue1Rjbtrh5Dn';}
	if (rng==107) {bitchute='3KaAlZOPkMRw';}
	if (rng==108) {bitchute='Yecjkb3961g7';}
	if (rng==109) {bitchute='qnA1oPOWviX8';}
	if (rng==110) {bitchute='B6sF48VcvzH9';}
	if (rng==111) {bitchute='5UYaEnRE0hOd';}
	if (rng==112) {bitchute='NA5MfTOBZNba';}
	if (rng==113) {bitchute='wejFkj9VwVvJ';}
	if (rng==114) {bitchute='gfNpKeoyyhun';}
	if (rng==115) {bitchute='Ff0NjdfIJnVV';}
	if (rng==116) {bitchute='IFqqeNIvh4Ss';}
	if (rng==117) {bitchute='hzBIRRgdC1l1';}
	if (rng==118) {bitchute='4HUxtw58gaaC';}
	if (rng==119) {bitchute='wOSPxKlsBlpY';}
	if (rng==120) {bitchute='ZfaCrxUC5BwS';}
	if (rng==121) {bitchute='8m4whzxIApKS';}
	if (rng==122) {bitchute='WO5nRHRufD0G';}
	if (rng==123) {bitchute='pUAsaxNN8wr1';}
	if (rng==124) {bitchute='Za6W2SAXpTQs';}
	if (rng==125) {bitchute='jyGaaRx7qjHR';}
	if (rng==126) {bitchute='zehjnQwPFXcA';}
	if (rng==127) {bitchute='tGZxPZIsYhMU';}
	if (rng==128) {bitchute='tvHMe31UszEK';}
	if (rng==129) {bitchute='fyS4OJiYwAta';}
	if (rng==130) {bitchute='NqbEvcH6ogMS';}
	if (rng==131) {bitchute='HPAlZy3otfir';}
	if (rng==132) {bitchute='ShlC3k0Y6ncc';}
	if (rng==133) {bitchute='6OkkmV0ys1Y4';}
	if (rng==134) {bitchute='cipZ89ebuc8R';}
	if (rng==135) {bitchute='VHchjFtaHRyg';}
	if (rng==136) {bitchute='KmVbAy99bVDC';}
	if (rng==137) {bitchute='KpiS7dbe9ZCG';}
	if (rng==138) {bitchute='TnhZZYkn5crd';}
	if (rng==139) {bitchute='6ddlRirZ5S2Y';}
	if (rng==140) {bitchute='GJIObSv18dK7';}
	if (rng==141) {bitchute='3tfZbcdnPeHW';}
	if (rng==142) {bitchute='wKm4k0WWIowz';}
	if (rng==143) {bitchute='x4DSLB6l07z6';}
	if (rng==144) {bitchute='sHJEg6NR70AY';}
	if (rng==145) {bitchute='avWPqFhhyy5Z';}
	if (rng==146) {bitchute='Ew1ooYVBBPB5';}
	if (rng==147) {bitchute='z5ksA7ERyuSB';}
	if (rng==148) {bitchute='Gr9xVKLnZgiJ';}
	if (rng==149) {bitchute='3xkgytzwmx5A';}
	if (rng==150) {bitchute='iw5whYdBe3Du';}
	if (rng==151) {bitchute='kmgj5k9QN2rl';}
	if (rng==152) {bitchute='CJWqWVJ4fNst';}
	if (rng==153) {bitchute='lQULryE5Tuuw';}
	if (rng==154) {bitchute='vKef49HHFhrT';}
	if (rng==155) {bitchute='AywqGvWJbeMO';}
	if (rng==156) {bitchute='WIYVjsYiyatx';}
	if (rng==157) {bitchute='BIE4m6WzyI4F';}
	if (rng==158) {bitchute='kJO7UbftwXwT';}
	if (rng==159) {bitchute='pFLRnhogaLnp';}
	if (rng==160) {bitchute='ljq0uazWFWkU';}
	if (rng==161) {bitchute='UYuT94F38iI0';}
	if (rng==162) {bitchute='nCQOSLTgR5ul';}
	if (rng==163) {bitchute='43bq6kS8JO2a';}
	if (rng==164) {bitchute='Dlbzkpp3rcua';}
	if (rng==165) {bitchute='QLeT1EbBVdPn';}
	if (rng==166) {bitchute='lSEt6Oa5nJkO';}
	if (rng==167) {bitchute='HT5iattG1T6p';}
	if (rng==168) {bitchute='TqBGsXVq0MjL';}
	if (rng==169) {bitchute='ha1X6qd3e7rf';}
	if (rng==170) {bitchute='DTawLoVYcIYT';}
	if (rng==171) {bitchute='1f2yoaVDLj66';}
	if (rng==172) {bitchute='7C9mOKrv7TC8';}
	if (rng==173) {bitchute='R0r6G4da9k1T';}
	if (rng==174) {bitchute='rxwoQwlkNZit';}
	if (rng==175) {bitchute='LfXTumbiI2Jj';}
	if (rng==176) {bitchute='ETNACWFKz1az';}
	if (rng==177) {bitchute='sMrAS9FCLKjt';}
	if (rng==178) {bitchute='qtsvPbYNZCyI';}
	if (rng==179) {bitchute='9vNhxII9HyR1';}
	if (rng==180) {bitchute='teCKh4KOXCB0';}
	if (rng==181) {bitchute='4UULFtmrCA41';}
	if (rng==182) {bitchute='bM4B9DUJOnam';}
	if (rng==183) {bitchute='dhkrhldwi3ur';}
	if (rng==184) {bitchute='S50ItgQcLbz1';}
	if (rng==185) {bitchute='R6zYLnXrnAFW';}
	if (rng==186) {bitchute='Ksh7Gm7x7Zef';}
	if (rng==187) {bitchute='ca0k5WOn6uQ4';}
	if (rng==188) {bitchute='Gd8chHV9EbRz';}
	if (rng==189) {bitchute='RuXyHnS21nz8';}
	if (rng==190) {bitchute='Bq7MqoZSXFmc';}
	if (rng==191) {bitchute='1YhhribfavmG';}
	if (rng==192) {bitchute='Da2VqUmxTTmV';}
	if (rng==193) {bitchute='lVwZAlVvkwtf';}
	if (rng==194) {bitchute='APxsgS7VoLKl';}
	if (rng==195) {bitchute='fqJyfBJJljNQ';}
	if (rng==196) {bitchute='ELwwJHI1LRv2';}
	if (rng==197) {bitchute='8p4DGMbxxJqi';}
	if (rng==198) {bitchute='8zjUXvytfQf4';}
	if (rng==199) {bitchute='8I8xdfMSvnab';}
	if (rng==200) {bitchute='jsQh5NRTCDBp';}
	if (rng==201) {bitchute='NVea3FKBMfGD';}
	if (rng==202) {bitchute='ijrSOKzz9lYo';}
	if (rng==203) {bitchute='MgZrshdWSrCm';}
	if (rng==204) {bitchute='qFjiQe7pMYfZ';}
	if (rng==205) {bitchute='86sVRPGLrOna';}
	if (rng==206) {bitchute='5B5m8kDeO2m5';}
	if (rng==207) {bitchute='BVQQK8nkG0uB';}
	if (rng==208) {bitchute='GhWBmWfCEH2j';}
	if (rng==209) {bitchute='WHBfqqn4OVDZ';}
	if (rng==210) {bitchute='1kG215uCqLVm';}
	if (rng==211) {bitchute='ONito2MWtFpl';}
	if (rng==212) {bitchute='QalLpvSkugaD';}
	if (rng==213) {bitchute='2xetshrtEASd';}
	if (rng==214) {bitchute='PWi4wo0kThzf';}
	if (rng==215) {bitchute='6ZmHEZMOy90v';}
	if (rng==216) {bitchute='QDQECk8Y4TuN';}
	if (rng==217) {bitchute='V5FLGSBZBFiO';}
	if (rng==218) {bitchute='heZUgTMMBWD6';}
	if (rng==219) {bitchute='KJjnCXuarZzk';}
	if (rng==220) {bitchute='V4Mj19ZBXc9b';}
	if (rng==221) {bitchute='HPWhiVizO7Ts';}
	if (rng==222) {bitchute='8NhPt9YBA5pS';}
	if (rng==223) {bitchute='qiLiVJuCVQb3';}
	if (rng==224) {bitchute='3P0GajoCEdrE';}
	if (rng==225) {bitchute='ewFCKujlGsXz';}
	if (rng==226) {bitchute='uZsnGu1rwshb';}
	if (rng==227) {bitchute='BYEMzJfBtETu';}
	if (rng==228) {bitchute='QaKAnjGtI8hn';}
	if (rng==229) {bitchute='5QTzQhbYwYIH';}
	if (rng==230) {bitchute='38N6e62QA5ie';}
	if (rng==231) {bitchute='FNdiT92MiyP3';}
	if (rng==232) {bitchute='08dqHaHpXLbD';}
	if (rng==233) {bitchute='KKmy1ZbIFKTY';}
	if (rng==234) {bitchute='xv0lFe8bN5uf';}
	if (rng==235) {bitchute='Bp9TskNKZVuH';}
	if (rng==236) {bitchute='uPj1lybTS5yP';}
	if (rng==237) {bitchute='le7z9EdQToLY';}
	if (rng==238) {bitchute='idlxFsRs0aHz';}
	if (rng==239) {bitchute='P79elypWphyL';}	
	if (rng==240) {bitchute='mGnuzl86aXwL';}
	if (rng==241) {bitchute='xQR2JKUBKPFJ';}
	if (rng==242) {bitchute='qtSq2wR5dDdm';}
	if (rng==243) {bitchute='2XAvZzRzXZbO';}
	if (rng==244) {bitchute='9VkJX4pz4ysT';}
	if (rng==245) {bitchute='jylo7BMIjhAg';}
	if (rng==246) {bitchute='q4smOSb3IxoH';}
	if (rng==247) {bitchute='rHVAgN6DGGNm';}
	if (rng==248) {bitchute='upJTcPTuRojN';}
	if (rng==249) {bitchute='8um5OkwrBvbq';}
	if (rng==250) {bitchute='aD943PDEGuk2';}
	if (rng==251) {bitchute='aTGVe59OoeJP';}
	if (rng==252) {bitchute='NNpRvFvKFATx';}
	if (rng==253) {bitchute='VhaNjv7hU3aV';}
	if (rng==254) {bitchute='jwN2LwIbAfNG';}
	if (rng==255) {bitchute='w05WWr9AmCoQ';}
	if (rng==256) {bitchute='HWQTs9nHnYJQ';}
	if (rng==257) {bitchute='KqslytBZTwDr';}
	if (rng==258) {bitchute='KYVDKeBV2y2z';}
	if (rng==259) {bitchute='NVkn5wbyYXSk';}
	if (rng==261) {bitchute='xFacVAVdsQbk';}
	if (rng==262) {bitchute='eMCvAKf29nj3';}
	if (rng==263) {bitchute='47mFmLGFS9mJ';}
	if (rng==264) {bitchute='kPlFlHIhjnna';}
	if (rng==265) {bitchute='GctYJ2BjN7aI';}
	if (rng==266) {bitchute='pahTXIOLB4ZF';}
	if (rng==267) {bitchute='SD8Y6J6XumBZ';}
	if (rng==268) {bitchute='FiXZnNrdPZiQ';}
	if (rng==269) {bitchute='9ti8rRLYcvjD';}
	if (rng==270) {bitchute='mJLZtJiQB1Xs';}
	if (rng==271) {bitchute='zfOuahRntL1f';}
	if (rng==272) {bitchute='2nLst1X3ESHD';}
	if (rng==273) {bitchute='6V0o3INvrBu3';}
	if (rng==274) {bitchute='VsI0HUj5a9U3';}
	if (rng==275) {bitchute='MAZgq6ULxIBR';}
	if (rng==276) {bitchute='7MWPviFUdsvZ';}
	if (rng==277) {bitchute='DdWfWEFKUyzn';}
	if (rng==278) {bitchute='xWVqq2emWY3s';}
	if (rng==279) {bitchute='xrJiPu9geuEd';}
break;
case 2:
rng=(Math.floor(Math.random()*7));
let anotheRNG=(Math.floor(Math.random()*10)+1)
	if (rng==0) {myLabel='Misc uploads playlist',youtube="videoseries?si=QQ8yi5cHcLnFNksB&amp;list=PLwmmiI53xsNQvJP2DEdkA-Y5U6qDv_18M&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNQvJP2DEdkA-Y5U6qDv_18M';}
	if (rng==1) {myLabel='Mugenize playlist',youtube="videoseries?si=2ZMgE207rmPLtDGF&amp;list=PLwmmiI53xsNSYw7zpYJztCY58nKnvMh9-&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNSYw7zpYJztCY58nKnvMh9-';}
	if (rng==2) {myLabel='Mugen community videos',youtube="videoseries?si=oqow6my_GV8l5n-y&amp;list=PLwmmiI53xsNQsutr_aFPXdNxuCh8xuYAW&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNQsutr_aFPXdNxuCh8xuYAW';}
	if (rng==3) {myLabel='GaMeS',youtube="videoseries?si=Jq4dbVss0i5wgg1_&amp;list=PLwmmiI53xsNS2p5bVRnEMvTK7A54VZ8GA&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNS2p5bVRnEMvTK7A54VZ8GA';}
	if (rng==4) {myLabel='Cinema',youtube="videoseries?si=w07VQ4Vt-E0CpyFp&amp;list=PLwmmiI53xsNQlEEWr2XpDDa7Qi0TSjNxJ&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNQlEEWr2XpDDa7Qi0TSjNxJ';}
	if (rng==5) {myLabel='FAVs',youtube="videoseries?si=JRDXxGQiVaqONwNq&amp;list=PLwmmiI53xsNTAnaBZXJfYuYRTtKgH58oV&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNTAnaBZXJfYuYRTtKgH58oV';}
	if (rng==6) {myLabel='Following playlist',youtube="videoseries?si=63o-JDeYPi4X4Tai&amp;list=PLwmmiI53xsNRl0wVykp6pZ5zg_6JPgY1U&index="+anotheRNG ,link='www.youtube.com/playlist?list=PLwmmiI53xsNRl0wVykp6pZ5zg_6JPgY1U';}
break;
case 3:
myLabel='Check out the 66th place in MAGMML2',youtube='zSFWH5X9K_Y?si=oPb63hYxItrSzeOP',link='magmmlcontest.com/wiki/index.php/Chomp_Man_(stage)',bannerHtml='www.sprites-inc.co.uk',bannerImg='i.imgur.com/RqfqBg1.png'
rng=(Math.floor(Math.random()*738));
	youtube=(youtube+"&start="+rng+"&end="+(rng+50));
break;
case 4:
myLabel='MUGEN_means_INFINITY',youtube='yfgdqUY4CSc?si=dyLvAwEU11ouWsBL'
rng=(Math.floor(Math.random()*288));
	youtube=(youtube+"&start="+rng+"&end="+(rng+50));
break;
case 5:
myLabel='some Jayce and the wheeled warriors',youtube='JFBGdRH2ajk?si=phppoIuckRSw__Dj'
rng=(Math.floor(Math.random()*280));
	youtube=(youtube+"&start="+rng+"&end="+(rng+50));
break;
}

if (bannerHtml==''){
rng=(Math.floor(Math.random()*16));
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
	if (rng==15) {bannerHtml='imgur.com/vugh2if';bannerImg='i.imgur.com/vugh2if.png';}
}

if ( youtube!=='' ) { prefix='youtube',sufix=youtube+"&autoplay=1&mute=1";}
if ( bitchute!=='') { prefix='bitchute',sufix=bitchute;}

document.getElementById('videoshowcase').innerHTML="<iframe src=https://www."+prefix+".com/embed/"+sufix+" width='500'   height='300' frameborder='0' title="+myLabel+"></iframe><br><a target='_blank' href=https://"+link+"><img src='https://i.imgur.com/FZ2erTD.gif'> <b>"+myLabel+"</b></a>"
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
linkTitle='pcloud',linkHref='my.pcloud.com/#page=register&invite=QyVhZug5dQk',linkImagee='my.pcloud.com/favicons/favicon-32x32.png';
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
linkTitle='animemusicvideos',linkHref='www.animemusicvideos.org',linkImagee='www.animemusicvideos.org/favicon.ico';
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
linkTitle='cling',linkHref='cling.com/c/Bookmarks-b2DI9fiwpjI75GAEvRmvezb',linkImagee='cling.com/c/static/icon_512.png';
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
