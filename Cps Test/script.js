var sec = document.getElementById('sec');
var btn = document.getElementById('btnClick');
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
    document.getElementById('result').innerHTML = click_count / 10.00;
}

function Reset() {
    location.reload();
}