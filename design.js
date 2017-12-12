//https://github.com/AmandaScheunemann/design_de_interiores.git
$(document).ready(function () {
    $(".servicos").click(function () {
        $("#principal").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".divServicos").show();
        $(".topicoQuarto").hide();
        $(".topicoCozinha").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $("#principal").click(function () {
        $("#principal").show();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".divServicos").hide();
        $(".topicoQuarto").hide();
        $(".topicoCozinha").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $(".produtos").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").show();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $(".ambientes").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").show();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $("#logo").click(function () {
        $("#principal").show();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
    });


    $(".cozinha").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").show();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });

    $(".quarto").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").show();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $(".banheiro").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").show();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });
    $(".sala").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").show();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
    });


    $(".palavras").animate({
        opacity: 1
    }, 2000);
    $(".liPrincipal").animate({
        opacity: 1
    }, 2000);

    $("#wpp").hover(function () {
        $(".contatowpp").show();
        $(".contatogmail").hide();
    });
    $("#gmail").hover(function () {
        $(".contatowpp").hide();
        $(".contatogmail").show();
    });


    var buscaFunction = function () {
        var busca = $("#inBuscar").val().toLowerCase();

        if (busca == "cozinha" || busca == "cozinhas") {

            $("#principal").hide();
            $(".divServicos").hide();
            $(".divProdutos").hide();
            $(".divAmbientes").hide();
            $(".topicoCozinha").show();
            $(".topicoQuarto").hide();
            $(".topicoBanheiro").hide();
            $(".topicoSala").hide();
            $(".contatowpp").hide();
            $(".contatogmail").hide();
        }

        if (busca == "quarto" || busca == "quartos") {

            $("#principal").hide();
            $(".divServicos").hide();
            $(".divProdutos").hide();
            $(".divAmbientes").hide();
            $(".topicoCozinha").hide();
            $(".topicoQuarto").show();
            $(".topicoBanheiro").hide();
            $(".topicoSala").hide();
            $(".contatowpp").hide();
            $(".contatogmail").hide();
        }

        if (busca == "banheiro" || busca == "banheiros") {
            $("#principal").hide();
            $(".divServicos").hide();
            $(".divProdutos").hide();
            $(".divAmbientes").hide();
            $(".topicoCozinha").hide();
            $(".topicoQuarto").hide();
            $(".topicoBanheiro").show();
            $(".topicoSala").hide();
            $(".contatowpp").hide();
            $(".contatogmail").hide();
        }

        if (busca == "area de estar" || busca == "área de estar" || busca == "areas de estar" || busca == "áreas de estar" || busca == "sala" || busca == "salas") {
            $("#principal").hide();
            $(".divServicos").hide();
            $(".divProdutos").hide();
            $(".divAmbientes").hide();
            $(".topicoCozinha").hide();
            $(".topicoQuarto").hide();
            $(".topicoBanheiro").hide();
            $(".topicoSala").show();
            $(".contatowpp").hide();
            $(".contatogmail").hide();
        }
    };


    $("#lupa").click(buscaFunction);
    $(document).keypress(function (e) {
        if(e.which == 13) {
            buscaFunction();
        }
    })
});