// $(".flip-card").click(function() {

//     $(this).toggleClass("card-rotate");
// });
$('.flip-card').click(function(e) {
    if ($(this).hasClass('card-rotate')) {
        $(".flip-card").removeClass('card-rotate');
        $(this).toggleClass('card-rotate');
    } else {
        $('.flip-card').removeClass('card-rotate');
    }
    $(this).toggleClass('card-rotate');
});


$(".flip-card").hover(function() {
        $(this).children(".front").children('.p').css('z-index', '1');
        $(this).children(".front").children('.p').css('transition', '1.5s linear');
        // $(".p").css('z-index', '1');
        // $(".p").css('transition', ' 1.5s linear');
    },
    function() {
        $(this).children(".front").children('.p').css('z-index', '-1');
        $(this).children(".front").children('.p').css('transition', ' 0.2s ease-out');

        // $(".p").css('z-index', '-1');
        // $(".p").css('transition', ' 0.2s ease-out');
    });
$(".flip-card").hover(function() {
        $(this).children(".front").children('p').css('bottom', '2rem');
        $(this).children(".front").children('p').css('transition', ' 0.5s linear');
    },
    function() {
        $(this).children(".front").children('p').css('bottom', '0');
        $(this).children(".front").children('p').css('transition', ' 0.5s linear');

    });