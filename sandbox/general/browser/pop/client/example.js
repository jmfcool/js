function exitPop(e)
{
    var ev = (!e) ? window.event : e;
    if (ev.pageX)
    {
        x = ev.pageX;
        y = ev.pageY;
    }
    else if (ev.clientX)
    {
        x = ev.clientX;
        y = ev.clientY;
    }
    if (y <= 0)
    {
        var opts = "toolbar=no,status=no,location=no,menubar=no,resizable=no,width=425,height=600,scrollbars=no";
        var popupbox = window.open('exitPop.html','ExitPop', opts);
            popupbox.focus();
    }
}