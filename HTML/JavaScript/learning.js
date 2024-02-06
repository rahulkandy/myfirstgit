function display() 
{

    if (document.getElementById('btn').innerHTML == 'Hide')
    {
        document.getElementById('demo').style.display = 'none';
        document.getElementById('btn').innerHTML = 'Show';
    }

    else

    {

        document.getElementById('demo').style.display = 'block';
        document.getElementById('btn').innerHTML = 'Hide';
    }

}
