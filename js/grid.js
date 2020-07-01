function color_question_grid()
{
    rows = document.querySelectorAll('.grid tr');
    columns = document.querySelectorAll('.grid tr td');
    for(let i = 0; i < rows.length; i++)
    {
        for(let j = 0; j < rows.length; j ++)
        {
            if((j === 3 || j === 4 || j === 5) && (i !== 3 || i !== 4 || i !== 5))
            {
                columns[i * 9 + j].style.backgroundColor = 'white';
            }

            else if(i === 0 || i === 1 || i === 2 || i === 8 || i === 7 || i === 6 )
            {
                columns[i * 9 + j].style.backgroundColor = '#2e9cca';
                columns[i * 9 + j].style.color = 'black';
            }
            if((j === 3 || j === 4 || j === 5) && (i === 3 || i === 4 || i === 5))
            {
                columns[i * 9 + j].style.backgroundColor = '#2e9cca';
                columns[i * 9 + j].style.color = 'black';
            }
        }
    }

}
color_question_grid();
