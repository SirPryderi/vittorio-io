var rocket = $('#rocket');
var content = $("#content");
var about = $("#sidebar .about");
var contentInner = $('#content-inner');
var icons = $('.social-icons');

$(window).on("load", function () {
    content.scroll(function () {
        var percentage = $(this).scrollTop() / (contentInner.height() - $(this).height() + 45);

        var rocket_height = rocket.height();

        var factor = -1 + 2 * percentage;

        rocket.dequeue().animate({bottom: $(this).height() * percentage + (rocket_height * factor)}, 1000);
    });

    $('body').addClass('loaded');

    about.animate({top: "50%"}, 1000);

    icons.animate({opacity: 1}, 1000);

    $.instagramFeed({
        'cors_proxy': "https://cors-anywhere.herokuapp.com/https://www.instagram.com/",
        'username': 'sirpryderi',
        'container': "#instagram-feed",
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'get_raw_json': false,
        'callback': null,
        'styling': true,
        'items': 9,
        'items_per_row': 3,
        'margin': 0.5
    });
});