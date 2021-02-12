console.log("Your index file is loaded woot");
$(document).ready(function() {
    $('#main-nav li a').click(function(e) {
        var targetHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 50
        }, 1000);
        e.preventDefault();
    });
});
