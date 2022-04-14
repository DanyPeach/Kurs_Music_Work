var text = "Добро пожаловать на MMFBeats";
var delay = 100; // cкорость
var elem = document.getElementById("result");
 
var print_text = function(text, elem, delay) {
    if(text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1),  elem, delay); 
            }, delay
        );
    }
}
print_text(text, elem, delay);


$(document).on('click', '.intro a[href^="#"]', function (event) {
    event.preventDefault();
 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

