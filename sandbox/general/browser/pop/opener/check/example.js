function checkOpener()
{
	if ((document.all && !window.opener.closed) || (!document.all && window.opener))
	{
		self.close()
	}
	else
	{
		console.log('main window was closed')
	}
}