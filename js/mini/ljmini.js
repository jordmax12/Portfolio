var _0x2cfd=["\x63\x61\x6E\x76\x61\x73","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x77\x69\x64\x74\x68","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x68\x65\x69\x67\x68\x74","\x69\x64","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x6E\x69\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x6C\x65\x66\x74\x41\x72\x6D","\x6C\x65\x67\x73","\x74\x6F\x72\x73\x6F","\x72\x69\x67\x68\x74\x41\x72\x6D","\x68\x65\x61\x64","\x68\x61\x69\x72","\x6C\x65\x66\x74\x41\x72\x6D\x2D\x6A\x75\x6D\x70","\x6C\x65\x67\x73\x2D\x6A\x75\x6D\x70","\x72\x69\x67\x68\x74\x41\x72\x6D\x2D\x6A\x75\x6D\x70","\x4D\x61\x72\x69\x6F\x30\x53\x71\x75\x61\x72\x65","\x4D\x61\x72\x69\x6F\x31\x53\x71\x75\x61\x72\x65","\x6F\x6E\x6C\x6F\x61\x64","\x73\x72\x63","\x69\x6D\x67\x2F\x4C\x69\x74\x74\x6C\x65\x20\x4A\x6F\x72\x64\x61\x6E\x2F","\x2E\x70\x6E\x67","\x5F\x69\x64","\x23\x6C\x69\x74\x74\x6C\x65\x4A\x6F\x72\x64\x61\x6E\x43\x61\x6E\x76\x61\x73","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x6F\x66\x66\x73\x65\x74","\x2E\x61\x61\x5F\x69\x6E\x6E\x65\x72","\x6C\x65\x66\x74","\x74\x6F\x70","\x63\x73\x73","\x67\x65\x74\x54\x69\x6D\x65","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x62\x6C\x61\x63\x6B","\x62\x65\x67\x69\x6E\x50\x61\x74\x68","\x6D\x6F\x76\x65\x54\x6F","\x62\x65\x7A\x69\x65\x72\x43\x75\x72\x76\x65\x54\x6F","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x66\x69\x6C\x6C","\x63\x6C\x6F\x73\x65\x50\x61\x74\x68"];function updateFPS(){curFPS= numFramesDrawn,numFramesDrawn= 0}function prepareCanvas(_0xbb61x3,_0xbb61x4,_0xbb61x5){canvas= document[_0x2cfd[1]](_0x2cfd[0]),canvas[_0x2cfd[3]](_0x2cfd[2],_0xbb61x4),canvas[_0x2cfd[3]](_0x2cfd[4],_0xbb61x5),canvas[_0x2cfd[3]](_0x2cfd[5],_0x2cfd[0]),_0xbb61x3[_0x2cfd[6]](canvas),_0x2cfd[7]!=  typeof G_vmlCanvasManager&& (canvas= G_vmlCanvasManager[_0x2cfd[8]](canvas)),context= canvas[_0x2cfd[10]](_0x2cfd[9]),loadImage(_0x2cfd[11]),loadImage(_0x2cfd[12]),loadImage(_0x2cfd[13]),loadImage(_0x2cfd[14]),loadImage(_0x2cfd[15]),loadImage(_0x2cfd[16]),loadImage(_0x2cfd[17]),loadImage(_0x2cfd[18]),loadImage(_0x2cfd[19]),loadImage(_0x2cfd[20]),loadImage(_0x2cfd[21])}function loadImage(_0xbb61x3){images[_0xbb61x3]=  new Image,images[_0xbb61x3][_0x2cfd[22]]= function(){resourceLoaded()},images[_0xbb61x3][_0x2cfd[23]]= _0x2cfd[24]+ _0xbb61x3+ _0x2cfd[25],images[_0xbb61x3][_0x2cfd[5]]= _0xbb61x3+ _0x2cfd[26]}function resourceLoaded(){if(numResourcesLoaded+= 1,numResourcesLoaded=== totalResources){setInterval(redraw,1e3/ fps);var _0xbb61x3=$(_0x2cfd[27]),_0xbb61x4=_0xbb61x3[_0x2cfd[28]](),_0xbb61x5=(_0xbb61x3[_0x2cfd[29]](),$(_0x2cfd[31])[_0x2cfd[30]]()),_0xbb61x8=$(window)[_0x2cfd[2]]();if(_0xbb61x8> 860){var _0xbb61x9=_0xbb61x5[_0x2cfd[32]]+ _0xbb61x4,_0xbb61xa=_0xbb61x5[_0x2cfd[33]]- _0xbb61x4+ 30}else {var _0xbb61x9=-30,_0xbb61xa=_0xbb61x5[_0x2cfd[33]]- _0xbb61x4+ 42};_0xbb61x3[_0x2cfd[34]]({left:_0xbb61x9,top:_0xbb61xa})}}function wait(_0xbb61x3){for(var _0xbb61x4=( new Date)[_0x2cfd[35]](),_0xbb61x5=_0xbb61x4;_0xbb61x4+ _0xbb61x3> _0xbb61x5;){_0xbb61x5= ( new Date)[_0x2cfd[35]]()}}function redraw(){if(canvas[_0x2cfd[2]]= canvas[_0x2cfd[2]],showMarioBox&& (boxIsOriginalState?context[_0x2cfd[36]](images.Mario0Square,254,5):context[_0x2cfd[36]](images.Mario1Square,254,5)),jumping){y-= jumpHeight}else {if(justJumped&&  !jumping){switch(190> y?y+= jumpHeight:justJumped=  !1,numTimesJumped){case 1:break;case 2:break;case 3:}}};jumping?context[_0x2cfd[36]](images[_0x2cfd[17]],x+ 30,y- 45- breathAmt):context[_0x2cfd[36]](images[_0x2cfd[11]],x+ 20,y- 21- breathAmt),jumping?context[_0x2cfd[36]](images[_0x2cfd[18]],x,y- 5):context[_0x2cfd[36]](images[_0x2cfd[12]],x,y),context[_0x2cfd[36]](images[_0x2cfd[13]],x,y- 25),context[_0x2cfd[36]](images[_0x2cfd[15]],x- 10,y- 62.5- breathAmt),context[_0x2cfd[36]](images[_0x2cfd[16]],x- 23,y- 70- breathAmt),jumping?context[_0x2cfd[36]](images[_0x2cfd[19]],x- 20,y- 21- breathAmt):context[_0x2cfd[36]](images[_0x2cfd[14]],x- 10,y- 21- breathAmt),drawEllipse(x+ 18,y- 35- breathAmt,4,curEyeHeight,_0x2cfd[37]),drawEllipse(x+ 25,y- 35- breathAmt,4,curEyeHeight,_0x2cfd[37]),++numFramesDrawn}function drawEllipse(_0xbb61x3,_0xbb61x4,_0xbb61x5,_0xbb61x8,_0xbb61x9){context[_0x2cfd[38]](),context[_0x2cfd[39]](_0xbb61x3,_0xbb61x4- _0xbb61x8/ 2),context[_0x2cfd[40]](_0xbb61x3+ _0xbb61x5/ 2,_0xbb61x4- _0xbb61x8/ 2,_0xbb61x3+ _0xbb61x5/ 2,_0xbb61x4+ _0xbb61x8/ 2,_0xbb61x3,_0xbb61x4+ _0xbb61x8/ 2),context[_0x2cfd[40]](_0xbb61x3- _0xbb61x5/ 2,_0xbb61x4+ _0xbb61x8/ 2,_0xbb61x3- _0xbb61x5/ 2,_0xbb61x4- _0xbb61x8/ 2,_0xbb61x3,_0xbb61x4- _0xbb61x8/ 2),context[_0x2cfd[41]]= _0xbb61x9,context[_0x2cfd[42]](),context[_0x2cfd[43]]()}function updateBreath(){1=== breathDir?(breathAmt-= breathInc,-breathMax> breathAmt&& (breathDir=  -1)):(breathAmt+= breathInc,breathAmt> breathMax&& (breathDir= 1))}function updateBlink(){eyeOpenTime+= blinkUpdateTime,eyeOpenTime>= timeBtwBlinks&& blink()}function updateBox(){boxIsOriginalState= boxIsOriginalState?!1:!0}function blink(){curEyeHeight-= 1,0>= curEyeHeight?(eyeOpenTime= 0,curEyeHeight= maxEyeHeight):setTimeout(blink,10)}function jump(){jumping|| (jumping=  !0,numTimesJumped++,setTimeout(function(){land()},500))}function land(){jumping=  !1,justJumped=  !0,redraw()}var canvas,context,images={},totalResources=11,numResourcesLoaded=0,fps=30,x=245,y=190,breathInc=0.1,breathDir=1,breathAmt=0,breathMax=2,breathInterval=setInterval(updateBreath,1e3/ fps),maxEyeHeight=8,curEyeHeight=maxEyeHeight,eyeOpenTime=0,timeBtwBlinks=4e3,blinkUpdateTime=200,boxUpdateTime=1e3,blinkTimer=setInterval(updateBlink,blinkUpdateTime),boxTimer=setInterval(updateBox,boxUpdateTime),fpsInterval=setInterval(updateFPS,1e3),numFramesDrawn=0,curFPS=0,numTimesJumped=0,boxIsOriginalState=!0,jumping=!1,justJumped=!1,showMarioBox=!1,jumpHeight=3