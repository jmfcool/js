function popMain()
{
	window.open('POP LOCATION','ID','toolbar=no,status=no,location=no,menubar=no,resizable=no,copyhistory=no,scrollbars=no,directories=no,width=1,height=1,top=0,left=0');
	window.focus();
}

function popExit() 
{
	if (opener && !opener.closed) 
	{
		window.opener.focus();
		self.close();
	} 
	else 
	{
		if (document.all)
		{
			window.resizeTo(425,670);
			window.moveTo(10,10);
			window.focus();
		}
		else
		{
			window.resizeTo(425,650);
			window.moveTo(10,10);	
			window.focus();
		}
	}
}

function popClose()
{
	window.open('URL','NAME','toolbar=yes,status=yes,location=yes,menubar=yes,resizable=yes,copyhistory=yes,scrollbars=yes,directories=yes');
	window.focus();
	self.close();
	return false;
}