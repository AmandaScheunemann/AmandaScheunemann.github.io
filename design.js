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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
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
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").hide();
    });
    $(".luminarias").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
        $(".topicoLuminaria").show();
        $(".topicoUtensilio").hide();
    });
    $(".utensilios").click(function () {
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").show();
    });


    $(".palavras").animate({
        opacity: 1
    }, 2000);
    $(".liPrincipal").animate({
        opacity: 1
    }, 3000);
    $(".crie").animate({
        opacity: 1
    }, 7000);

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
            $(".topicoLuminaria").hide();
            $(".topicoUtensilio").hide();
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
            $(".topicoLuminaria").hide();
            $(".topicoUtensilio").hide();
        };

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
            $(".topicoLuminaria").hide();
            $(".topicoUtensilio").hide();
        };

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
            $(".topicoLuminaria").hide();
            $(".topicoUtensilio").hide();
        };

        if (busca == "luminaria" || busca == "luminarias" || busca == "luminaria exclusiva" || busca == "luminarias exclusivas"){
             $("#principal").hide();
            $(".divServicos").hide();
            $(".divProdutos").hide();
            $(".divAmbientes").hide();
            $(".topicoCozinha").hide();
            $(".topicoQuarto").hide();
            $(".topicoBanheiro").hide();
            $(".topicoSala").hide();
            $(".contatowpp").hide();
            $(".contatogmail").hide();
            $(".topicoLuminaria").show();
            $(".topicoUtensilio").hide();
    };
    if(busca == "utensilios" || busca == "utensilio"){
        $("#principal").hide();
        $(".divServicos").hide();
        $(".divProdutos").hide();
        $(".divAmbientes").hide();
        $(".topicoCozinha").hide();
        $(".topicoQuarto").hide();
        $(".topicoBanheiro").hide();
        $(".topicoSala").hide();
        $(".contatowpp").hide();
        $(".contatogmail").hide();
        $(".topicoLuminaria").hide();
        $(".topicoUtensilio").show();
    };
};
    $("#lupa").click(buscaFunction);
    $(document).keypress(function (e) {
        if (e.which == 13) {
            buscaFunction();
        }
    });
});