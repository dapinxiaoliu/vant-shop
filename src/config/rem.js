 var deviceWidth = document.documentElement.clientWidth;
 var dpr=window.devicePixelRatio;
 document.documentElement.setAttribute('data-dpr',dpr );
 if(deviceWidth > 750) deviceWidth = 750;
 document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
 window.onresize = function(){
     var deviceWidth = document.documentElement.clientWidth;
     var dpr=window.devicePixelRatio;
     document.documentElement.setAttribute('data-dpr',dpr );
     if(deviceWidth > 750) deviceWidth = 750;
     document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
 }