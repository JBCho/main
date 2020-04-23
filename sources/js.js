$(document).ready(function(){
    if($("body").hasClass("mobile")) {
    var viewportHeight = $("#pagetitle").outerHeight();
    $("#pagetitle").css({height:viewportHeight});
    }
    $("#nametitle").fadeIn(1250);
    $("#subtitle").fadeIn(1250);
});
        