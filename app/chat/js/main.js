function myClick11() {
    document.getElementById('loader').style.display='block';
    document.getElementById('div1-content').style.display='none';
    document.getElementById('div1').style.display='none';

    setTimeout(
        function() {
            document.getElementById('loader').style.display='none';
            document.getElementById('botui-app').style.display='block';
        }, 200);
}
function myClick12() {
    document.getElementById('loader').style.display='block';
    document.getElementById('div1-content').style.display='none';
    document.getElementById('div1').style.display='none';

    setTimeout(
        function() {
            document.getElementById('loader').style.display='none';
            document.getElementById('div3').style.display='block';

        }, 200);
}
function myClick3() {
    document.getElementById('loader').style.display='block';
    document.getElementById('div3-content').style.display='none';
    document.getElementById('div3').style.display='none';

    setTimeout(
        function() {
            document.getElementById('loader').style.display='none';
            document.getElementById('div4').style.display='block';

        }, 200);
}

$(document).ready(function(){
    $("button#btn11").click(function(){
        $("#botui-app").fadeIn(2000);
    });
});
$(document).ready(function(){
    $("button#btn12").click(function(){
        $("#div3").fadeIn(2000);
    });
});
$(document).ready(function(){
    $("button#btn3").click(function(){
        $("#div4").fadeIn(2000);
    });
});

$(document).ready(function(){

        $("#fade1").fadeIn(500);
        $("#fade2").fadeIn(1000);
        $("#fade3").fadeIn(1000);
        $("#fade4").fadeIn(2000);

});