self.getRules = function()
{
    var rules = new Array()
        rules[0] = [50,'URI'];
        rules[1] = [50,'URI'];

    var randomNumber = Math.random();
    var sum = 0;
    for(var i=0; i<rules.length; i++)
    {
        sum = sum + rules[i][0]/100;
        if(randomNumber <= sum)
        {
            return rules[i][1];
        }
    }
}

window.onload = function()
{
    window.location.href = getRules();
}
