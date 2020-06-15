var hasSubmitted = false;
function submitOrder()
{
    if (document.forms[0]['user.cc.number'] && document.forms[0]['user.cc.number'].value.match(/^(\s+)?3(\s+)?[4|7|5]/))
    {
        console.log('American Express');
        return false;
    }
    if(!has_submitted_order)
    {
        hasSubmitted = true;
        document.forms[0].submit();
    }
    return false;
}