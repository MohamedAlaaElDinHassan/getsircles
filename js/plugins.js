$(function(){
'use scrict';
    $('.featured-work ul li').on('click',function() {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all'){
            $('.mix-move .col-md').css('opacity', 1);
        } else {

            $('.mix-move .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity',1);
        }
    });

    $('#particles').particleground({
        minSpeedX: 0.3,
        maxSpeedX: 1.1,
        minSpeedY: 0.3,
        maxSpeedY: 1.1,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 5000, // How many particles will be generated: one particle every n pixels
        dotColor: '#D6D6D6',
        lineColor: '#D6D6D6',
        particleRadius: 5, // Dot size
        lineWidth: 1,
        curvedLines: true,
        proximity: 120, // How close two dots need to be before they join
        parallax: false
    });
    $("body").niceScroll({cursorcolor:"#E91E63",cursorwidth: "8px",cursorborder: "1px solid #444",cursorminheight: 100});
});