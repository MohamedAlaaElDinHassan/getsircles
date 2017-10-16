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
});