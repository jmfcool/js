self.setState = function()
{
	var state = "ITEM TO SELECT";
	var doc = document.forms[0]['Col012'];
	if(doc) 
	{
		for(var i=0; i<doc.options.length; i++) 
		{
			if (doc.options[i].value == state) doc.options[i].selected = true
		}
	}
}