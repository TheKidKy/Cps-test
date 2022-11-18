var sec = document.getElementById('sec');
var btn = document.getElementById('btnClick');
var result = document.getElementById('result')
var click_count;
var time;

function Click()
{
    click_count = document.getElementById('click').innerHTML++;
    time = setTimeout(Timer, 10000);
}

function Timer()
{
    btn['disabled'] = true;
    clearTimeout(time);
    var cps = click_count / 10.00; // Calculating click per 10 seconds
    result.innerHTML = cps;

    // Showing different scores by colors
    if (cps <= 3) {
        result.style.color = 'red';
    }
    else if (cps <= 5) {
        result.style.color = 'green';
    }
    else {
        result.style.color = 'gold';
    }
}

function Reset() {
    location.reload();
}