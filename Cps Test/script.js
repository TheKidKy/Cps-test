var sec = document.getElementById('sec');
var btn = document.getElementById('btnClick');
var click_count;
var time;

function Click()
{
    // Calculating user's clicks and save it.
    click_count = document.getElementById('click').innerHTML++;
    time = setTimeout(Timer, 10000);

}

function Timer()
{
    btn['disabled'] = true;
    clearTimeout(time);
    document.getElementById('result').innerHTML = click_count / 10.00;
}
