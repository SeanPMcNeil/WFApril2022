$('#btnFadeOut').click(function(){
    $('#box').fadeOut(1000, function(){
        $('#btnFadeOut').text('Its Gone');
    });
})

$('#btnFadeIn').click(function(){
    $('#box').fadeIn(1000);
})

$('#btnFadeTog').click(function(){
    $('#box').fadeToggle('fast');
})

$('#btnSlideUp').click(function(){
    $('#box').slideUp(1000);
})

$('#btnSlideDown').click(function(){
    $('#box').slideDown(1000);
})

$('#btnSlideTog').click(function(){
    $('#box').slideToggle(1000);
})

$('#btnStop').click(function(){
    $('#box').stop();
})

$('#moveRight').click(function(){
    $('#box2').animate({
        left: 500,
        height: '300px',
        width: '300px',
        opacity: '0.5'
    });
})

$('#moveLeft').click(function(){
    $('#box2').animate({
        left: 0,
        height: '100px',
        width: '100px',
        opacity: '1'
    });
})

$('#moveAround').click(function(){
    var box = $('#box2');
    box.animate({
        left: 300,
    });
    box.animate({
        top: 300,
    });
    box.animate({
        left: 0,
        top: 300
    });
    box.animate({
        left: 0,
        top: 0
    });
})