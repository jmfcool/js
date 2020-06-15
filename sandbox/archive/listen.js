/*
 *		Written By Jeremiah Faria using Prototype
 *		
 *		Below is the code that need to be included to run this Widget
 *      
 *		<script src="http://frontendfiles.com/js/prototype/1.6.0.2/prototype.js" type="text/javascript"></script> <!-- Calls the Frameworks that is being used -->
 *		<script src="http://frontendfiles.com/js/listen.js" type="text/javascript"></script> <!-- Calls the Script that creates the Hijack -->
 *		<script type="text/javascript">
 *        
 *			var setLink = "page2.html"; // Link that will be placed on the Hijack
 *		
 *		</script>
 *
 *		<img src="IMAGE_PATH_HERE" class="link-no" /> <!-- Sets flag that bypasses Hijack on image -->
 *
 */

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