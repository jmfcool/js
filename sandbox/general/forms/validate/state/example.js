function getState()
{
    var selected, state;
        selected = document.getElementById('user.state').selectedIndex;
        state = document.getElementsByTagName('option')[selected].value;
    if(state == 'CA')
    {
        console.log(state + ' has been selected');
    }
}