var win = null;

function setWindow(page,name,w,h,s)
{
    var l, t, settings;
        l = (screen.width) ? (screen.width-w)/2 : 0;
        t = (screen.height) ? (screen.height-h)/2 : 0;
        settings = 'height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + ',scrollbars=' + s + ',resizable';
	if (win != 'null')
	{
	    win = window.open(page,name,settings);
    }
}
