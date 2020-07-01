function find_curr_time()
{
    let date_time = JSON.stringify(Date.apply());
    return date_time.split(' ')[4];
}

function show_time(starting)
{
    // console.log(date_time.split(' ')[4]);
    let time = find_curr_time();
    // finding the difference
    let start_time = starting.split(':');
    // console.log(start_time);
    let current_time = time.split(':');
    // console.log(current_time);
    // finalising the time
    let hours = parseInt(current_time[0] - start_time[0]);
    let minutes = parseInt(current_time[1] - start_time[1]);
    let seconds = Math.abs(parseInt(current_time[2] - start_time[2]));
    document.querySelector('.time').innerText = hours + ' : ' + minutes + ' : ' + seconds;
}
function isLess(time, than)
{
    let x = time.split(':');
    let y = than.split(':');
    if(parseInt(x[0]) < parseInt(y[0]))
    {
        return true;
    }
    else if(parseInt(x[1]) < parseInt(y[1]))
    {
        return true;
    }
    else if(parseInt(x[2]) < parseInt(y[2]))
    {
        return true;
    }
    else
    {
        return false;
    }
}
let start = find_curr_time();
// show_time(start);
// setTimeout('show_time(start)', 1000)

let pause = [];
let current = find_curr_time();
while(true)
{
    let x = 0;
    // console.log(x);
    if(isLess(current, find_curr_time()))
    {
        pause.push(x);
        current = find_curr_time();
        // console.log(current);
        show_time(start);
        continue;
    }
    if(pause.length == 5)
    {
        break;
    }
}
// console.log(isLess(find_curr_time(),));
console.log('done');
