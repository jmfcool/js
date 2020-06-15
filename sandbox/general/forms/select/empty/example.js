function formFocus(focus)
{
	document.getElementById(focus).focus();
	var doc = document.forms[0].elements;
	for(i=0; i<doc.length; i++)
	{
		if(doc[i].value == null || doc[i].value == "")
		{
			doc[i].focus();
			break;
		}
	}
}