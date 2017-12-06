//https://github.com/AmandaScheunemann/design_de_interiores.git
$(document).ready(function () {

    $('#wpp').hover(function () {
        $('.contatowpp').show();
    });


    $(".servicos").hover(function(){
        $("#principal").hide();
        $(".divServicos").show();
        $("divProdutos").hide();
        $("divAmbientes").hide();
    });
    $(".produtos").hover(function(){
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").show();
        $("divAmbientes").hide();
    });
    $(".ambientes").hover(function(){
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $("divAmbientes").show();
    });
});