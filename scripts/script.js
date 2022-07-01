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
});

