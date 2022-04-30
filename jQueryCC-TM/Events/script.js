// $('#btn1').click(function(){
//     alert('Button Clicked!');
// })



// Can use a code to tell the JS to wait until the HTML document is loaded
// $(document).ready(function(){
//      function that needs to wait here
// })
// used typically when the script is loaded in the header instead of at the end of the body

// $('#btn1').click(function(){
//     $('.para1').hide();
// })

// $('#btn2').click(function(){
//     $('.para1').show();
// })

// $('#btn3').click(function(){
//     $('.para1').toggle();
// })

// $('#btn1').dblclick(function(){
//     $('.para1').toggle();
// });

// $('#btn1').hover(function(){
//     $('.para1').toggle();
// });
// hover is not actually an event, it's shorthand for other events: mouseenter & mouseleave

// $('#btn1').on('mousemove', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mousedown', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mouseup', function(){
//     $('.para1').toggle();
// })
//mousedown listens for a mouse click, mouseup listens for the click to release

// $('#btn1').click(function(e){
//     // alert(e.currentTarget.id);
//     // alert(e.currentTarget.innerHTML);
//     // alert(e.currentTarget.outerHTML);
//     // alert(e.currentTarget.className);
// })

// $('#btn1').on('mousemove', function(e){
//     console.log('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// })

// $(document).on('mousemove', function(e){
//     $('#coords').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// })

//Changes background of input box to pink on click in
$('input').focus(function(){
    // alert("Focus");
    $(this).css('background', 'pink');
})
//changes background to white when you click out
$('input').blur(function(){
    // alert("Focus");
    $(this).css('background', 'white');
})

//logs the values of the keys you are pressing while in an input
// $('input').keyup(function(e){
//     console.log(e.target.value);
// })

// $('select#gender').change(function(e){
//     // alert('Changed');
//     alert(e.target.value);
// })

$('#form').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
})