function cityAlert(){
    alert("Loading weather report...");
}

function noMoreCookies(element){
    element.parentElement.remove();
}

//Function is to swap all temperatures on the page from Celsius (default) to Fahrenheit if selected from the <select> options
//if for some reason the page is reloaded while °F is selected and you change to °C if does run the calculation back and gives you lower Celsius degrees...
//Math also breaks a little because of floor - the more you swap back and forth the more the temperature changes down
//for a single change it's pretty close though!

function swapTemp(element){
    console.log(element.value);
    if (element.value == "fahrenheit"){
        var highs = document.querySelectorAll(".high");
        for (var x = 0; x < highs.length ; x++) {
            highs[x].innerText = Math.floor(((9 * highs[x].innerText + (32 * 5)) / 5));
        }
        var lows = document.querySelectorAll(".low");
        for (var y = 0; y < lows.length ; y++) {
            lows[y].innerText = Math.floor(((9 * lows[y].innerText + (32 * 5)) / 5));
        }
    }else if (element.value == "celsius"){
        var highs = document.querySelectorAll(".high");
        for (var x = 0; x < highs.length ; x++) {
            highs[x].innerText = Math.floor(((5 * (highs[x].innerText - 32)) / 9));
        }
        var lows = document.querySelectorAll(".low");
        for (var y = 0; y < lows.length ; y++) {
            lows[y].innerText = Math.floor(((5 * (lows[y].innerText - 32)) / 9));
        }
    }
}