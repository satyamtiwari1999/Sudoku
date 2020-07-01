function grid_formation()
{
    let arr = [];
    for(let i = 0; i < 9; i++)
    {
        arr.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    return arr;
}
function record_grid_formation()
{
    let arr = [];
    for(let i = 0; i < 9; i++)
    {
        arr.push([[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]]);
    }
//    console.log(arr);
    return arr;
}
function rand_seq()
{
    let arr = [];
    while(arr.length < 9)
    {
        let number = Math.floor((Math.random() * 100) % 10)
        if(number > 0 && !arr.includes(number))
        {
            arr.push(number);
        }
    }
//    console.log(arr.length)
//    console.log(arr);
    return arr;
}
function form_col_arr(arr, column)
{
    let x = [];
    for(let j = 0; j < 9; j ++)
    {
        x.push(arr[j][column]);
    }
    return x;
}
function form_block_arr(arr, row, column)
{
    let x = [];
    if(row < 3)
    {
        if(column < 3)
        {
//            console.log('block 1');
            for(let a = 0; a < 3; a ++)
            {
                for(let b = 0; b < 3; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 6)
        {
//            console.log('block 2');
            for(let a = 0; a < 3; a ++)
            {
                for(let b = 3; b < 6; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 9)
        {
//            console.log('block 3');
            for(let a = 0; a < 3; a ++)
            {
                for(let b = 6; b < 9; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
    }
    else if(row < 6)
    {
        if(column < 3)
        {
//            console.log('block 4');
            for(let a = 3; a < 6; a ++)
            {
                for(let b = 0; b < 3; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 6)
        {
//            console.log('block 5');
            for(let a = 3; a < 6; a ++)
            {
                for(let b = 3; b < 6; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 9)
        {
//            console.log('block 6');
            for(let a = 3; a < 6; a ++)
            {
                for(let b = 6; b < 9; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
    }
    else if(row < 9)
    {
        if(column < 3)
        {
//            console.log('block 7');
            for(let a = 6; a < 9; a ++)
            {
                for(let b = 0; b < 3; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 6)
        {
//            console.log('block 8');
            for(let a = 6; a < 9; a ++)
            {
                for(let b = 3; b < 6; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
        else if(column < 9)
        {
//            console.log('block 9');
            for(let a = 6; a < 9; a ++)
            {
                for(let b = 6; b < 9; b ++)
                {
                    x.push(arr[a][b]);
                }
            }
            return x;
        }
    }
}
// main game starts here
function finding_sol(game, values, record_game)
{
    let curr_row = 0;
    let curr_col = 0;
//    console.log(game);
    while(true)
    {
//        console.log(curr_row, curr_col);
        if(curr_row === 9)
        {
            break;
        }
        else
        {
            let found_value = false;
            for(let i = 0; i < values.length; i ++)
            {
                let curr_val = values[i];
                let block_arr = form_block_arr(game, curr_row, curr_col);
                let row_arr = game[curr_row];
                let col_arr = form_col_arr(game, curr_col);
//                console.log(record_game[curr_row][curr_col][0]);
                if(!block_arr.includes(curr_val) && !col_arr.includes(curr_val) && !row_arr.includes(curr_val) && i > record_game[curr_row][curr_col][record_game[curr_row][curr_col].length - 1])
                {
                    game[curr_row][curr_col] = curr_val;
//                    console.log(form_col_arr(game, curr_col));
                    if(record_game[curr_row][curr_col][0] === -1)
                    {
                        record_game[curr_row][curr_col] = [i];
                    }
                    else
                    {
                        record_game[curr_row][curr_col].push(i);
                    }
//                    console.log(curr_val, 'satisfies');
                    found_value = true;
                    break;
                }
                else
                {
                    if(i == 9)
                    {
//                        console.log('value not found in', curr_row, curr_col);
                        found_value = false;
                    }
                }
            }
            if(found_value)
            {
                if(curr_col === 8)
                {
                    curr_row ++;
                    curr_col = 0;
                }
                else
                {
                    curr_col ++;
                }
            }
            else
            {
//                console.log('thinking next move');
                record_game[curr_row][curr_col] = [-1];
                game[curr_row][curr_col] = 0;
                if(curr_col == 0)
                {
                    curr_row --;
                    curr_col = 8;
                }
                else
                {
                    curr_col --;
                }
            }
        }
    }
}
function show_solution()
{
    for(let i = 0; i < 9; i ++)
    {
        console.log(sud_main_grid[i]);
    }
}
// filling the grid on page;
function fill_sudoku(values)
{
    cells = document.querySelectorAll('.grid tr td');
    // finding the number of elements that will be hidden
    let hiddenElements = 0;
    while(true)
    {
        if(hiddenElements > 45)
        {
            break;
        }
        else
        {
            hiddenElements = Math.floor((Math.random() * 1000) % 75);
        }
    }
    console.log(hiddenElements);
    // finding the cells that will be hidden
    let cells_to_hide = [];
    while(true)
    {
        let num = Math.floor((Math.random() * 1000) % 81);
        if(!cells_to_hide.includes(num))
        {
            cells_to_hide.push(num);
        }
        if(cells_to_hide.length == hiddenElements)
        {
            break;
        }
    }
//    cells_to_hide = [];
    for(let j = 0; j < cells.length; j ++)
    {
        val_row = Math.floor(j / 9);
        val_col = j % 9;
        if(!cells_to_hide.includes(j))
        {
            cells[j].innerText = JSON.stringify(values[val_row][val_col]);
        }
    }
}
function fill_sudoku_fully(values)
{
    cells = document.querySelectorAll('.solution-grid tr td');
    document.querySelector('.solution-grid').style.display = 'inline-block';
    document.querySelector('.time').style.display = 'none';
    for(let j = 0; j < cells.length; j ++)
    {
        if(cells[j].innerText == '')
        {
//            cells[j].style.backgroundColor = "white";
            cells[j].style.color = "black";
        }
        else
        {
//            cells[j].style.backgroundColor = "yellowGreen";
            cells[j].style.color = "black";
        }
        val_row = Math.floor(j / 9);
        val_col = j % 9;
        cells[j].innerText = JSON.stringify(values[val_row][val_col]);
        document.querySelector('button').style.display = "none";
    }
}
// forming the grid for game
let sud_main_grid = grid_formation();
let record_index = record_grid_formation();
let seq = rand_seq();
finding_sol(sud_main_grid, seq, record_index);  // fills the solution to the sud_main_grid
fill_sudoku(sud_main_grid);

// linking the button of the page to see solution
let button = document.querySelector('button');
button.addEventListener('click', function(){ fill_sudoku_fully(sud_main_grid) });
