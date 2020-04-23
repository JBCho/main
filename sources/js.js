$(document).ready(function(){
    if($("body").hasClass("mobile")) {
    $("#pagetitle").css({height:window.innerHeight});
    }
    $("#nametitle").fadeIn(1250);
    $("#subtitle").fadeIn(1250);
});
        