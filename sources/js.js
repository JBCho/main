$(document).ready(function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    
    if(isMobile) {
        
    $("#pagetitle").css({height:window.innerHeight});
        
    }
    $("#nametitle").fadeIn(1250);
    $("#subtitle").fadeIn(1250);
});
        