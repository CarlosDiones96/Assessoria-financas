// Interação com depoimentos da página
$("#depoimentos-btn1").on("click", function(){
    $("#depoimento1").addClass("visible");
    $("#depoimento2, #depoimento3, #depoimento4").removeClass("visible");
});

$("#depoimentos-btn2").on("click", function(){
    $("#depoimento2").addClass("visible");
    $("#depoimento1, #depoimento3, #depoimento4").removeClass("visible");
});

$("#depoimentos-btn3").on("click", function(){
    $("#depoimento3").addClass("visible");
    $("#depoimento1, #depoimento2, #depoimento4").removeClass("visible");
});

$("#depoimentos-btn4").on("click", function(){
    $("#depoimento4").addClass("visible");
    $("#depoimento1, #depoimento2, #depoimento3").removeClass("visible");
});