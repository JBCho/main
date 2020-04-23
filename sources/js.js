$(document).ready(function(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    
    if(isMobile) {
        var height = window.innerHeight;
        var name_margintop = height*0.3;
    $("#pagetitle").css({height:window.innerHeight});
    $("#pagetitle #nametitle").css("margin-top", name_margintop);
    }
    
    $("#nametitle").fadeIn(1250);
    $("#subtitle").fadeIn(1250);
});
        