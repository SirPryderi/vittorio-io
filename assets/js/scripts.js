var rocket = $('#rocket');
var second = $("#second");
var firstContent = $("#first_content");
var secondContent = $('#second_content');
var icons = $('#icons');

$(window).on("load", function () {
    second.scroll(function () {
        var percentage = $(this).scrollTop() / (secondContent.height() - $(this).height() + 45);

        var rocket_height = rocket.height();

        var factor = -1 + 2 * percentage;

        rocket.dequeue().animate({bottom: $(this).height() * percentage + (rocket_height * factor)}, 1000);
    });

    $('body').addClass('loaded');

    firstContent.animate({top: "50%"}, 1000);

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