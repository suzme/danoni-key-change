g_presetObj.keysData = `
|keyExtraList=1,5g,6,6s,7p,8i,9j,9A,9B,9g,9t,9v,10,10p,10R,11f,11j,12i,12F,12,18,20,21i,24i,23,27k,31k,47k,51k|

|-= 1key =-|
|chara1=space|color1=2|shuffle1=0|stepRtn1=onigiri|div1=1|pos1=0|keyCtrl1=32/0|
|assist1=Onigiri::1|

|-= 5gkey =-|
|chara5g=left,down,up,right,space|
|color5g=0,0,0,0,2|
|shuffle5g=0,0,0,0,1|
|stepRtn5g=0,45,135,180,giko|
|div5g=5|pos5g=5_0|
|keyCtrl5g=112/0,113/0,114/0,115/0,13/16|
|scroll5g=5_0|
|assist5g=Giko::0,0,0,0,1|

|-= 6key =-|
|chara6=space,left,leftdia,down,rightdia,right|
|color6=2,0,1,0,1,0|
|shuffle6=0,1,1,1,1,1|
|stepRtn6=onigiri,0,45,-90,135,180|
|div6=6|pos6=0,1,2,3,4,5|
|keyCtrl6=32/0,75/0,79/0,76/0,80/0,187/0|
|scroll6=Cross::1,1,-1,-1,1,1/Split::1,1,1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1|
|assist6=Onigiri::1,0,0,0,0,0,0|

|-= 6skey =-|
|chara6s=left,leftdia,down,up,rightdia,right|
|color6s=2,0,0,0,0,2|
|shuffle6s=0,1,1,1,1,2|
|stepRtn6s=onigiri,0,-90,90,180,onigiri|
|div6s=6|pos6s=0,1,2,3,4,5|
|keyCtrl6s=32/0,37/0,40/0,38/0,39/0,13/0|
|scroll6s=Cross::1,1,-1,-1,1,1/Split::1,1,1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1|
|keyRetry6s=9|
|keyTitleBack6s=27|
|assist6s=Onigiri::1,0,0,0,0,1|

|-= 7pkey =-|
|chara7p=7_0|
|color7p=2,1,0,2,0,1,0|
|shuffle7p=0,1,1,2,3,3,3|
|stepRtn7p=iyo,-45,-90,onigiri,90,135,180|
|div7p=7|pos7p=7_0|
|keyCtrl7p=16/0,90/0,70/0,32/0,55/0,56/0,57/0|
|scroll7p=Cross::1,1,-1,-1,-1,1,1/Split::1,1,1,1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1|
|assist7p=Iyo::1,0,0,0,0,0,0,0|

|-= 8ikey =-|
|chara8i=left,leftdia,down,space,up,rightdia,right,sleft$8i_0
left,leftdia,down,up,rightdia,right,sleft,space
space,left,leftdia,down,up,rightdia,right,sleft
8i_3$8i_3$8i_3$8i_3|
|color8i=1,1,1,2,0,0,0,0$8i_0$8_0$8_1$8_2$8_3$8_4$8_5|
|shuffle8i=0,0,0,2,1,1,1,1$8i_0$8_0$8_1$8_2$8_3$8_4$8_5|
|stepRtn8i=0,-90,180,onigiri,0,-90,90,180$giko,morara,iyo,onigiri,0,-90,90,180$8_0$8_1$8_2$8_3$8_4$8_5|
|div8i=8$8$8$8$8$8$8$8|
|pos8i=0,1,2,3,4,5,6,7$8i_0$8_0$8_1$8_2$8_3$8_4$8_5|
|keyCtrl8i=65/90,83/88,68/67,32/0,37/0,40/0,38/0,39/0$8i_0$8_0$8_1$8_2$8_3$8_4$8_5|
|transKey8i=$$8$8$12$12$12$12|
|scroll8i=Cross::1,1,1,-1,-1,1,1,1/Split::1,1,1,1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1$8i_0$8_0$8_1$8i_0$8i_0$8i_0$8i_0|

|-= 9gkey =-|
|chara9g=left,down,up,right,sleft,sdown,sup,sright,space|
|color9g=0,0,0,0,1,1,1,1,2|
|shuffle9g=0,0,0,0,1,1,1,1,2|
|stepRtn9g=0,45,135,180,0,45,135,180,giko|
|div9g=9|pos9g=9A_0|
|keyCtrl9g=112/0,113/0,114/0,115/0,116/0,117/0,118/0,119/0,13/16|
|scroll9g=9B_0|
|assist9g=Giko::0,0,0,0,0,0,0,0,1|
|minWidth9j=650|

|-= 9jkey =-|
|chara9j=9A_0|
|color9j=2,0,1,0,2,0,1,0,2|
|shuffle9j=1,0,0,0,1,0,0,0,1|
|stepRtn9j=giko,0,-45,-90,onigiri,90,135,180,iyo|
|div9j=9|pos9j=9A_0|
|keyCtrl9j=9/0,83/0,68/0,70/0,32/0,74/0,75/0,76/0,13/0|
|scroll9j=9B_0|
|assist9j=AA::1,0,0,0,1,0,0,0,1|
|minWidth9j=650|

|-= 9A/9Bkeyに9jkeyのトランスキー追加 =-|
|append9A=true|append9B=true|
|chara9A=9j_0|color9A=9j_0|shuffle9A=9j_0|stepRtn9A=9j_0|div9A=9j_0|pos9A=9j_0|keyCtrl9A=9j_0|transKey9A=9j|scroll9A=9j_0|assist9A=9j_0|
|chara9B=9j_0|color9B=9j_0|shuffle9B=9j_0|stepRtn9B=9j_0|div9B=9j_0|pos9B=9j_0|keyCtrl9B=9j_0|transKey9B=9j|scroll9B=9j_0|assist9B=9j_0|

|-= 9tkey =-|
|chara9t=left,down,up,right,space,sleft,sdown,sup,sright$9t_0|
|color9t=0,0,0,0,2,0,0,0,0$9t_0|
|shuffle9t=0,0,0,0,1,0,0,0,0$9t_0|
|stepRtn9t=45,90,135,0,onigiri,180,-45,-90,-135$9t_0|
|div9t=9$9|
|pos9t=9A_0$9A_0|
|keyCtrl9t=103/0,104/0,105/0,100/0,101/0,102/0,97/0,98/0,99/0$55/0,56/0,57/0,85/0,73/0,79/0,74/0,75/0,76/0|
|scale9t=1$1|

|-= 9vkey =-|
|chara9v=9B_0$9B_0|
|color9v=1,0,1,0,2,0,1,0,1$9B_0|
|shuffle9v=9B_0$9B_0|
|stepRtn9v=90,120,150,180,onigiri,0,30,60,90$9B_0|
|div9v=9$9|
|pos9v=9A_0$9A_0|
|keyCtrl9v=52/0,82/0,70/0,86/0,32/0,78/0,74/0,73/0,57/0$9B_0|
|transKey9v=$9B|
|scroll9v=---::1,1,-1,-1,-1,-1,-1,1,1/flat::1,1,1,1,1,1,1,1,1$9B_0|
|minWidth9v=650|

|-= 10key =-|
|chara10=left,down,up,right,space,sleft,sdown,sup,sright,sspace|
|color10=0,0,0,0,2,1,1,1,1,2|
|shuffle10=0,0,0,0,1,2,2,2,2,3|
|stepRtn10=0,-90,90,180,onigiri,0,-90,90,180,onigiri|
|div10=10|
|pos10=0,1,2,3,4,5,6,7,8,9|
|keyCtrl10=83/0,68/0,69/82,70/0,32/0,74/0,75/0,73/79,76/0,13/0|
|blank10=9A_0|
|scroll10=Cross::1,1,-1,-1,-1,-1,-1,1,1,1/Split::1,1,1,1,-1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1/AA-Split::-1,-1,-1,-1,1,-1,-1,-1,-1,1|
|minWidth10=650|

|-= 10pkey =-|
|chara10p=left,down,gor,up,right,sleft,sdown,siyo,sup,sright$10p_0$10p_0|
|color10p=0,1,2,1,0,0,1,2,1,0$0,1,2,1,0,0,1,2,1,0$0,0,2,0,0,3,3,2,3,3|
|shuffle10p=0,0,0,0,0,0,0,0,0,0$0,0,0,0,0,0,0,0,0,0$0,0,0,0,0,2,2,2,2,2|
|stepRtn10p=-45,45,onigiri,135,-135,-45,45,onigiri,135,-135$10p_0$0,-90,giko,90,180,0,-90,iyo,90,180|
|div10p=10$10$10|
|pos10p=0,1,2,3,4,5,6,7,8,9$10p_0$10p_0|
|keyCtrl10p=88/90,69/87,68/70/83,84/82,86/67,66/78,89/85,72/74/75,73/79,77/188$88/90,87/81,68/83/70,82/84,67/86,77/78,85/89,75/74/76,79/80,188/190$83/0,88/67,68/0,69/82,70/0,74/0,77/188,75/0,73/79,76/0|
|blank10p=11i_0$11i_0$11i_1|
|transKey10p=$$11i|
|scroll10p=Cross::1,1,1,-1,-1,-1,-1,1,1,1/Split::1,1,1,1,1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1$10p_0$10p_0|
|assist10p=AA::0,0,1,0,0,0,0,1,0,0$10p_0$10p_0|
|minWidth10p=650|

|-= 10Rkey =-|
|chara10R=left,down,up,right,gor,siyo,sleft,sdown,sup,sright|
|color10R=0,0,0,0,2,2,3,3,3,3|
|shuffle10R=0,0,0,0,1,1,2,2,2,2|
|stepRtn10R=0,-90,90,180,giko,iyo,0,-90,90,180|
|div10R=10|
|pos10R=0,1,2,3,4,5,6,7,8,9|
|keyCtrl10R=81/0,87/0,69/0,82/0,86/0,78/0,73/0,79/0,80/0,192/0|
|blank10R=9A_0|
|scroll10R=Cross::1,1,1,-1,-1,-1,-1,1,1,1/Split::1,1,1,1,1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1|
|assist10R=AA::0,0,0,0,1,1,0,0,0,0|
|minWidth10R=650|

|-= 11fkey =-|
|chara11f=left,leftdia,down,space,up,rightdia,right,sleft,sdown,sup,sright
left,leftdia,down,space,up,rightdia,right,sleft,sdown,sup,sright
leftdia,space,sleft,sup,left,down,up,rightdia,right,sdown,sright
11f_0$11f_0|
|color11f=0,1,0,1,0,2,0,1,0,1,0$0,1,0,1,0,2,0,1,0,1,0$3,3,3,3,0,1,0,2,0,1,0$11i_0$11i_1|
|shuffle11f=0,0,0,0,0,1,2,2,2,2,2$0,0,0,0,0,1,2,2,2,2,2$0,0,0,0,1,1,1,2,1,1,1$11i_0$11i_1|
|stepRtn11f=0,45,-90,135,180,onigiri,0,45,-90,135,180
0,45,-90,135,180,onigiri,0,45,-90,135,180
0,-90,90,180,0,-45,-90,onigiri,90,135,180
11i_0$11i_1|
|div11f=$$6$$|
|pos11f=0,1,2,3,4,5,6,7,8,9,10$0,1,2,3,4,5,6,7,8,9,10$0,1,4,5,6,7,8,9,10,11,12$11i_0$11i_1|
|keyCtrl11f=83/0,69/0,68/0,82/0,70/0,32/0,74/0,73/0,75/0,79/0,76/0
88/0,68/0,67/0,70/0,86/0,32/0,78/0,74/0,77/0,75/0,188/0
69/0,82/0,73/0,79/0,83/0,68/0,70/0,32/0,74/0,75/0,76/0
11i_0$11i_1|
|blank11f=52.5$52.5$55$11i_0$11i_1|
|transKey11f=$$11F$11i$11i|
|scroll11f=Cross::1,1,1,1,-1,-1,-1,1,1,1,1/Split::1,1,1,1,1,-1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1,1$11f_0$11_0$11i_0$11i_1|
|minWidth11f=750|

|-= 11jkey =-|
|chara11j=gor,left,down,up,right,space,sleft,sdown,sup,sright,siyo|
|color11j=2,0,0,0,0,2,3,3,3,3,2|
|shuffle11j=0,1,1,1,1,2,3,3,3,3,4|
|stepRtn11j=giko,0,-90,90,180,onigiri,0,-90,90,180,iyo|
|div11j=11|
|pos11j=0,1,2,3,4,5,6,7,8,9,10|
|keyCtrl11j=9/0,83/0,68/0,69/82,70/0,32/0,74/0,75/0,73/79,76/0,13/0|
|blank11j=9A_0|
|scroll11j=Cross::1,1,1,-1,-1,-1,-1,-1,1,1,1/Split::1,1,1,1,1,-1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1,1/AA-Split::1,-1,-1,-1,-1,1,-1,-1,-1,-1,1|
|assist11j=AA::1,0,0,0,0,1,0,0,0,0,1|
|minWidth11j=750|

|-= 12ikey =-|
|chara12i=oni,left,leftdia,down,sleft,sdown,sup,sright,space,up,rightdia,right$12i_0$12_0$12_1$12_0$12_1$12_2$12_3|
|color12i=1,0,1,0,3,3,3,3,0,1,0,1$12i_0$3,3,3,3,0,0,0,0,1,1,1,1$12i_2$12_0$12_1$12_2$12_3|
|shuffle12i=0,0,0,0,1,1,1,1,2,2,2,2$12i_0$12_0$12_0$12_0$12_1$12_2$12_3|
|stepRtn12i=45,0,-45,-90,giko,onigiri,iyo,c,90,135,180,225$12i_0$12_0$12_0$12_0$12_1$12_2$12_3|
|div12i=$$5$5$5$5$5$5$5|
|pos12i=0,1,2,3,4,5,6,7,8,9,10,11$12i_0$12_0$12_0$12_0$12_1$12_2$12_3|
|keyCtrl12i=112/0,113/0,114/0,115/0,116/0,117/0,118/0,119/0,120/0,121/0,122/0,123/0
81/0,87/0,69/0,82/0,84/0,89/0,85/0,73/0,79/0,80/0,192/0,219/0
120/0,121/0,122/0,123/0,112/0,113/0,114/0,115/0,116/0,117/0,118/0,119/0
79/0,80/0,192/0,219/0,81/0,87/0,69/0,82/0,84/0,89/0,85/0,73/0
12_0$12_1$12_2$12_3|
|blank12i=50$50$55$55$55$55$55$55|
|transKey12i=$$12F$12F$12$12$12$12|
|scroll12i=Cross::1,1,1,1,-1,-1,-1,-1,1,1,1,1/Split::1,1,1,1,1,1,-1,-1,-1,-1,-1,-1/Alternate::1,-1,1,-1,1,-1,1,-1,1,-1,1,-1$12i_0$12_0$12_0$12_0$12_1$12_2$12_3|
|minWidth12i=750|

|-= 12Fkey =-|
|chara12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|color12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|shuffle12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|stepRtn12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|div12F=5$5$$$5$5$5$5|
|pos12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|keyCtrl12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|blank12F=55$55$50$50$55$55$55$55|
|transKey12F=$$12i$12i$12$12$12$12|
|scroll12F=12i_2$12i_3$12i_0$12i_1$12_0$12_1$12_2$12_3|
|minWidth12F=750|

|-= 12keyに12ikeyのトランスキー追加 =-|
|append12=true|
|chara12=12i_0$12i_1$12F_0$12F_1|
|color12=12i_0$12i_1$12F_0$12F_1|
|shuffle12=12i_0$12i_1$12F_0$12F_1|
|stepRtn12=12i_0$12i_1$12F_0$12F_1|
|div12=$$5$5|
|pos12=12i_0$12i_1$12F_0$12F_1|
|keyCtrl12=12i_0$12i_1$12F_0$12F_1|
|blank12=50$50$55$55|
|scroll12=12i_0$12i_1$12F_0$12F_1|
|transKey12=12i$12i$12F$12F|
|minWidth12=750|

|-= 18key =-|
|chara18=sleft,sdown,sup,sright,space,tleft,tdown,tup,tright,left,leftdia,down,gor,oni,iyo,up,rightdia,right|
|color18=3,3,3,3,2,4,4,4,4,0,1,0,2,2,2,0,1,0|
|shuffle18=0,0,0,0,1,2,2,2,2,3,3,3,4,4,4,3,3,3|
|stepRtn18=0,-90,90,180,onigiri,0,90,-90,180,0,-45,-90,giko,onigiri,iyo,90,135,180|
|div18=9|
|pos18=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17|
|keyCtrl18=87/0,69/0,51/52,82/0,32/0,37/0,40/0,38/0,39/0,83/0,68/0,70/0,90/0,88/0,67/0,74/0,75/0,76/0|
|scroll18=Flat::1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1|

|-= 20key =-|
|chara20=aleft,adown,aup,aright,sleft,sdown,sup,sright,bleft,bdown,bup,bright,oni,left,leftdia,down,space,up,rightdia,right$20_0|
|color20=4,4,4,4,3,3,3,3,4,4,4,4,2,0,1,0,1,0,1,0$20_0|
|shuffle20=3,3,3,3,0,0,0,0,4,4,4,4,1,2,2,2,2,2,2,2$20_0|
|stepRtn20=0,-90,90,180,0,-90,90,180,0,-90,90,180,onigiri,0,30,60,90,120,150,180$20_0|
|div20=15$13|
|pos20=1,2,3,4,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22$1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20|
|keyCtrl20=87/0,69/0,51/52,82/0,85/0,73/0,56/57,79/0,37/0,40/0,38/0,39/0,32/0,78/0,74/0,77/0,75/0,188/0,76/0,190/0$20_0|
|blank20=55$55|
|scale20=1$1| 
|minWidth20=900|

|-= 21ikey -=|
|chara21i=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,left,down,up,right,space,sleft,sdown,sup,sright|
|color21i=1,0,1,0,3,3,3,3,0,1,0,1,4,0,4,0,2,0,4,0,4|
|shuffle21i=0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,3,3,3,3|
|stepRtn21i=45,0,-45,-90,giko,onigiri,iyo,c,90,135,180,225,45,0,-45,-90,onigiri,90,135,180,225|
|div21i=12|
|pos21i=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20|
|keyCtrl21i=112/0,113/0,114/0,115/0,116/0,117/0,118/0,119/0,120/0,121/0,122/0,123/0,65/0,83/0,68/0,70/0,32/0,74/0,75/0,76/0,187/0|
|scroll21i=Flat::1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1|
|minWidth21i=800|

|-= 24ikey -=|
|chara24i=oni,left,leftdia,down,aleft,adown,aup,aright,space,up,rightdia,right,soni,sleft,sleftdia,sdown,bleft,bdown,bup,bright,sspace,sup,srightdia,sright$24i_0|
|color24i=1,0,1,0,3,3,3,3,0,1,0,1,1,0,1,0,3,3,3,3,0,1,0,1$24i_0|
|shuffle24i=0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5$24i_0|
|stepRtn24i=45,0,-45,-90,giko,onigiri,iyo,c,90,135,180,225,45,0,-45,-90,giko,onigiri,iyo,c,90,135,180,225$24i_0|
|div24i=12$24i_0|
|pos24i=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23$24i_0|
|keyCtrl24i=112/0,113/0,114/0,115/0,116/0,117/0,118/0,119/0,120/0,121/0,122/0,123/0,81/0,87/0,69/0,82/0,84/0,89/0,85/0,73/0,79/0,80/0,192/0,219/0
81/0,87/0,69/0,82/0,84/0,89/0,85/0,73/0,79/0,80/0,192/0,219/0,65/0,83/0,68/0,70/0,71/0,72/0,74/0,75/0,76/0,187/0,186/0,221/0|
|blank24i=50$50|
|minWidth24i=750|

|-= 23keyに24ikeyのトランスキー追加 =-|
|append23=true|
|chara23=24i_0$24i_1|
|color23=24i_0$24i_1|
|div23=12$12|
|keyCtrl23=24i_0$24i_1|
|pos23=24i_0$24i_1|
|shuffle23=24i_0$24i_1|
|stepRtn23=24i_0$24i_1|
|transKey23=24i$24i|
|blank23=50$50|

|-= キリズマ =-|
|chara27k=keyA,keyB,keyC,keyD,keyE,keyF,keyG,keyH,keyI,keyJ,keyK,keyL,keyM,keyN,keyO,keyP,keyQ,keyR,keyS,keyT,keyU,keyV,keyW,keyX,keyY,keyZ,space|
|color27k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
|shuffle27k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
|stepRtn27k=c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c|
|div27k=27|
|pos27k=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26|
|keyCtrl27k=65/0,66/0,67/0,68/0,69/0,70/0,71/0,72/0,73/0,74/0,75/0,76/0,77/0,78/0,79/0,80/0,81/0,82/0,83/0,84/0,85/0,86/0,87/0,88/0,89/0,90/0,32/0|
|scale27k=0.95|

|chara31k=keyA,keyB,keyC,keyD,keyE,keyF,keyG,keyH,keyI,keyJ,keyK,keyL,keyM,keyN,keyO,keyP,keyQ,keyR,keyS,keyT,keyU,keyV,keyW,keyX,keyY,keyZ,left,down,up,right,space$keyA,keyB,keyC,keyD,keyE,keyF,keyG,keyH,keyI,keyJ,keyK,keyL,keyM,keyN,keyO,keyP,keyQ,keyR,keyS,keyT,keyU,keyV,keyW,keyX,keyY,keyZ,space,left,down,up,right|
|color31k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3$0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2|
|shuffle31k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3$0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2|
|stepRtn31k=c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,0,-90,90,180,onigiri$c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,onigiri,0,-90,90,180|
|div31k=26$26|
|pos31k=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30$0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30|
|keyCtrl31k=65/0,66/0,67/0,68/0,69/0,70/0,71/0,72/0,73/0,74/0,75/0,76/0,77/0,78/0,79/0,80/0,81/0,82/0,83/0,84/0,85/0,86/0,87/0,88/0,89/0,90/0,37/0,40/0,38/0,39/0,32/0$65/0,66/0,67/0,68/0,69/0,70/0,71/0,72/0,73/0,74/0,75/0,76/0,77/0,78/0,79/0,80/0,81/0,82/0,83/0,84/0,85/0,86/0,87/0,88/0,89/0,90/0,32/0,37/0,40/0,38/0,39/0|
|scale31k=0.9$0.9|

|chara47k=keyA,keyI,keyU,keyE,keyO,keyKA,keyKI,keyKU,keyKE,keyKO,keySA,keySI,keySU,keySE,keySO,keyTA,keyTI,keyTU,keyTE,keyTO,keyNA,keyNI,keyNU,keyNE,keyNO,keyHA,keyHI,keyHU,keyHE,keyHO,keyMA,keyMI,keyMU,keyME,keyMO,keyYA,keyYU,keyYO,keyRA,keyRI,keyRU,keyRE,keyRO,keyWA,keyWO,keyNN,space|
|color47k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
|shuffle47k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
|stepRtn47k=c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c|
|div47k=47|
|pos47k=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46|
|keyCtrl47k=51/0,69/0,52/0,53/0,54/0,84/0,71/0,72/0,186/0,66/0,88/0,68/0,82/0,80/0,67/0,81/0,65/0,90/0,87/0,83/0,85/0,73/0,49/0,188/0,75/0,70/0,86/0,50/0,222/0,189/0,74/0,78/0,221/0,191/0,77/0,55/0,56/0,57/0,79/0,76/0,190/0,187/0,226/0,48/0,48/0,89/0,32/0|
|scale47k=0.95|

|chara51k=keyA,keyI,keyU,keyE,keyO,keyKA,keyKI,keyKU,keyKE,keyKO,keySA,keySI,keySU,keySE,keySO,keyTA,keyTI,keyTU,keyTE,keyTO,keyNA,keyNI,keyNU,keyNE,keyNO,keyHA,keyHI,keyHU,keyHE,keyHO,keyMA,keyMI,keyMU,keyME,keyMO,keyYA,keyYU,keyYO,keyRA,keyRI,keyRU,keyRE,keyRO,keyWA,keyWO,keyNN,left,down,up,right,space$keyA,keyI,keyU,keyE,keyO,keyKA,keyKI,keyKU,keyKE,keyKO,keySA,keySI,keySU,keySE,keySO,keyTA,keyTI,keyTU,keyTE,keyTO,keyNA,keyNI,keyNU,keyNE,keyNO,keyHA,keyHI,keyHU,keyHE,keyHO,keyMA,keyMI,keyMU,keyME,keyMO,keyYA,keyYU,keyYO,keyRA,keyRI,keyRU,keyRE,keyRO,keyWA,keyWO,keyNN,space,left,down,up,right|
|color51k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3$0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2|
|shuffle51k=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3$0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2|
|stepRtn51k=c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,0,-90,90,180,onigiri$c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,onigiri,0,-90,90,180|
|div51k=46$46|
|pos51k=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50$0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50|
|keyCtrl51k=51/0,69/0,52/0,53/0,54/0,84/0,71/0,72/0,186/0,66/0,88/0,68/0,82/0,80/0,67/0,81/0,65/0,90/0,87/0,83/0,85/0,73/0,49/0,188/0,75/0,70/0,86/0,50/0,222/0,189/0,74/0,78/0,221/0,191/0,77/0,55/0,56/0,57/0,79/0,76/0,190/0,187/0,226/0,48/0,48/0,89/0,37/0,40/0,38/0,39/0,32/0$51/0,69/0,52/0,53/0,54/0,84/0,71/0,72/0,186/0,66/0,88/0,68/0,82/0,80/0,67/0,81/0,65/0,90/0,87/0,83/0,85/0,73/0,49/0,188/0,75/0,70/0,86/0,50/0,222/0,189/0,74/0,78/0,221/0,191/0,77/0,55/0,56/0,57/0,79/0,76/0,190/0,187/0,226/0,48/0,48/0,89/0,32/0,37/0,40/0,38/0,39/0|
|scale51k=0.9$0.9|
`
