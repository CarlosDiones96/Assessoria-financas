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

// Interação com as marcas parceiras
$("#parceiros-btn1").on("click", function(){
    $("#brands-set1").addClass("visible");
    $("#brands-set2, #brands-set3").removeClass("visible");
});

$("#parceiros-btn2").on("click", function(){
    $("#brands-set2").addClass("visible");
    $("#brands-set1, #brands-set3").removeClass("visible");
});

$("#parceiros-btn3").on("click", function(){
    $("#brands-set3").addClass("visible");
    $("#brands-set1, #brands-set2").removeClass("visible");
});

// Interação área de planejamento
$("#planejamento-btn1").on("click", function(){
    $("#planejamento1").addClass("visible");
    $("#planejamento2, #planejamento3, #planejamento4").removeClass("visible");
});

$("#planejamento-btn2").on("click", function(){
    $("#planejamento2").addClass("visible");
    $("#planejamento1, #planejamento3, #planejamento4").removeClass("visible");
});

$("#planejamento-btn3").on("click", function(){
    $("#planejamento3").addClass("visible");
    $("#planejamento1, #planejamento2, #planejamento4").removeClass("visible");
});

$("#planejamento-btn4").on("click", function(){
    $("#planejamento4").addClass("visible");
    $("#planejamento1, #planejamento2, #planejamento3").removeClass("visible");
});