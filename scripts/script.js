$(function () {
    // import
    $('#import-header').load("header.html", function () {
        // load dropdown
        $('[data-toggle="tooltip"]').tooltip({
            placement: 'bottom'
        });
    });
    $('#import-footer').load("footer.html");

    $('.dropdown-toggle').dropdown();

    var data = [
        "SECRETARIA DOS TRANSPORTES METROPOLITANOS",
        "SECRETARIA DE LOGÍSTICA E TRANSPORTES",
        "SECRETARIA DA JUSTIÇA E CIDADANIA",
        "SECRETARIA DA SAÚDE",
        "SECRETARIA DA HABITAÇÃO",
        "SEC. DOS DIREITOS DA PESSOA COM DEFICIÊNCIA",
        "SECRETARIA DA CULTURA E ECONOMIA",
        "SECRETARIA DE DESENVOLVIMENTO REGIONAL",
        "SECRETARIA DE TURISMO",
        "SECRETARIA DA SEGURANÇA PÚBLICA",
        "SECRETARIA DA ADMINISTRAÇÃO PENITENCIÁRIA",
        "CIA.PAULISTA DE SECURITIZAÇÃO-CP",
        "SECRETARIA DE ESPORTES"
    ];
    $("#autocomplete").autocomplete({
        source: data, // specify the data source
        minLength: 1 // minimum number of characters a user must type before a search   
    });
    //$('#modal').modal(options);
});

