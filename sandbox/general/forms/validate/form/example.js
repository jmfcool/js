var hasSubmitted = false;
var rules = new Array;
    rules['user.mail'] = /(\w+)\@(\w+)\.(\w+)/;
    rules['user.zip'] = /\d{5,5}/;

/* Submit */

function submitOrder()
{
	if (!checkForm()) return false;
    if(!hasSubmitted)
	{
        hasSubmitted = true;
        document.forms[0].submit();    
    } 
	return(false);
} 

/* End of Submit */
/* Form Validation */

function checkForm()
{
	var a = document.forms[0];
	if (!a) return false;
	var flag = 0;
	for (var i=0;i<a.elements.length;i++) 
	{
		if (!a.elements[i].value||(a.elements[i].value && rules[a.elements[i].name] && !a.elements[i].value.match(rules[a.elements[i].name])))
		{
			var b = a.elements[i].nextSibling;
			while (b && !b.tagName && b.nextSibling)
			{
			    b = b.nextSibling;
		    }
			if (b.className == 'error') 
			{ 
				b.style.display = "block";
				flag++;
				var c = b.nextSibling;
				while (c && !c.tagName && c.nextSibling)
				{
				    c = c.nextSibling;
			    }
				if (c && c.className && c.className.match(/errormessage/i))
				{
				    c.style.display = 'none';
				}
			}
		} 
		else 
		{
			var b = a.elements[i].nextSibling;
			while (b && !b.tagName && b.nextSibling)
			{
			    b = b.nextSibling;
	        }
			if (b.className == 'error') 
			{ 
				b.style.display = "none";
			}
		}
	}
	if (flag)
	{
	    return false;
	}
	return true;
}

/*

CSS:

span.error {
	font: bold 13px "Arial", Helvetica, sans-serif;
	color: #ce0000;
	display: none;
	margin: 0px;
	padding: 0px;
}

HTML:

<span class="error">Last Name Required</span>

*/

/* End of Form Validation */