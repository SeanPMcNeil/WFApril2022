// jQuery is a small, fast and feature-rich JS library
// jQuery makes things like DOM manipulation, even handling and Ajax MUCH easier
// Much less code

// $('h1').hide();
// $('h1#heading1').hide();
// $('.heading2').hide();

// $('p span').css('color', 'red');
// $('span').css('color', 'red');

$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'green');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', '#cccccc');

$('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

$('[href]').css('color', 'red');
$('a[href="http://yahoo.com"]').css('color', 'green');

// $('*').hide();
