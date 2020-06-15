var has_submitted_order=false; 
var rules = new Array;
rules['customer.email'] = /(\w+)\@(\w+)\.(\w+)/;
rules['customer.zip'] = /\d{5,5}/;
rules['customer.phone'] = /^\D?\d{3,3}\D?\d{3,3}\D?\d{4,4}$/;
  
self.submit_order = function() {
	if (!checkform()) return false;
    if(!has_submitted_order) {
		toggle('edit'); 
		toggleOff('editText');
        has_submitted_order=true;
        document.forms[0].submit();  
    } 
    return(false);
}  

self.submit_order_block = function() {
	if (!checkform()) return false;
	var noAmex = document.forms[0]['customer.cc.number'];
	if (noAmex && noAmex.value.match(/^(\s+)?[3|6]/)) {
		var AmexId = document.getElementById('noamex');
		if (AmexId) AmexId.innerHTML = 'We do not accept American Express or Discover at this time.';
		return false
	}
    if(!has_submitted_order) {
		toggle('edit'); 
		toggleOff('editText');
        has_submitted_order=true;
        document.forms[0].submit();  
    } 
    return(false);
}

self.submit_order_page1 = function() {
	if (!checkform()) return false;
	var x = document.getElementById("customer.state").selectedIndex;
	var state = document.getElementsByTagName("option")[x].value;
	if(state == "CT" || state == "MN"  || state == "OR") {
		alert("We're sorry. Our offer is not currently available in CT, MN, or OR.");
		return false;
	}
    if(!has_submitted_order) {
        has_submitted_order=true;
        document.forms[0].submit();    
    } 
    return(false);
} 

self.toggle = function(it) {
	var doc = document.getElementById(it);
	if (!doc) return false;
	if (doc.style.display == "block") { 
		doc.style.display = "none"; 
	} else { 
		doc.style.display = "block"; 
	}
}

self.toggleOff = function(it) {
	var doc = document.getElementById(it);
	if (!doc) return false;
	if (doc.style.display == "none") { 
		doc.style.display = "block"; 
	} 
	else { 
		doc.style.display = "none"; 
	}
}

self.formFocus = function() {
	var doc = document.forms[0].elements;
	for(i=0; i<doc.length; i++) {
		if(doc[i].value == null || doc[i].value == "") {
			doc[i].focus();
			break;
		}
	}
}

self.checkform = function() {
	var a = document.forms[0];
	if (!a) return false;
	var flag = 0;
	for (var i=0;i<a.elements.length;i++) {
		if (!a.elements[i].value||(a.elements[i].value&&rules[a.elements[i].name]&&!a.elements[i].value.match(rules[a.elements[i].name]))) {
			var b = a.elements[i].nextSibling;
			while (b&&!b.tagName&&b.nextSibling) {b = b.nextSibling}
			if (b.className == 'error') { 
				b.style.display = "block";
				flag++;
				var c = b.nextSibling;
				while (c&&!c.tagName&&c.nextSibling) {c = c.nextSibling}
				if (c&&c.className&&c.className.match(/errormessage/i)) c.style.display = 'none'
			}
		} 
		else {
			var b = a.elements[i].nextSibling;
			while (b&&!b.tagName&&b.nextSibling) {b = b.nextSibling}
			if (b.className == 'error') { 
				b.style.display = "none";
			}
		}
	}
	if (flag) return false;
	return true;
}

self.popUp = function(url,name,w,h,s) {
	var opts = 'toolbar=no,status=no,location=no,menubar=no,resizable=no,width='+w+',height='+h+',scrollbars='+s+'';
	var popupbox = window.open(url, name, opts);
	popupbox.focus();
}