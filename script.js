onload = function(){
    var secunds = 00;
    var tens = 00;

    var appendSecunds = document.getElementById('secunds')
    var appendTens = document.getElementById('tens')

    var buttonStart = document.getElementById('btn-start')
    var buttonStop = document.getElementById('btn-stop')
    var buttonReset = document.getElementById('btn-reset')

    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        tens = '00';
        secunds = '00';

        appendSecunds.innerHTML = secunds;
        appendTens.innerHTML = tens;
    }

    function startTimer(){
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            secunds++;
            appendSecunds.innerHTML = '0' + secunds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }
        if(secunds > 9){
            appendSecunds.innerHTML = secunds;
        }
    }
}