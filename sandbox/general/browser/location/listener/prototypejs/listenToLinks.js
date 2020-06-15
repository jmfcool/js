var setLink = false;

document.observe('dom:loaded', function() 
{
	new Event.observe(document.body,'click',function(event)
	{
		var element = Event.element(event);
		if('IMG' == element.tagName)
		{
			if(element.hasClassName('link-no') != false)
			{
				return false;
			}
			else if(setLink != false)
			{
				document.location = setLink;						
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}); 
});