var message="Jmfcool.com Copyright &copy; 2004 - 2008";

function click(e)
{
	if (document.all)
	{
		if (event.button==2 || event.button==3)
		{
		    console.log(message);
		    return false;
		}
	}
	if (document.layers)
	{
		if (e.which == 3)
		{
            console.log(message);
            return false;
		}
	}
}

if (document.layers)
{
	document.captureEvents(Event.MOUSEDOWN);
}

document.onmousedown = click;