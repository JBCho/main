$(document).ready(function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    
    if(isMobile) {
    $("#pagetitle").css({height:window.innerHeight});
    $("#pagetitle #nametitle").css({margin-top:window.innerHeight*0.3});
    }
    $("#nametitle").fadeIn(1250);
    $("#subtitle").fadeIn(1250);
});
        