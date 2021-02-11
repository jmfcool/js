/*	

Software Info:
.:SoundSkee - Version 1.1.2
.:Last Modified: 12/08/2008
.:Copyright 2008 – 2009
.:SoundSkee by Jeremiah Faria is licensed under a Creative Commons Attribution-No Derivative Works 3.0 Unported License.(http://creativecommons.org/licenses/by-nd/3.0/) 
.:Permissions beyond the scope of this license may be available at http://www.soundskee.org. 

Selector Types:
.:type: id, class, tag

Parameter Types:
.:params: selector, sound, method

*/

var SoundSkee = {
	//init: function()
	//{
		//alert('Initializing!');  
	//},
	setup: function(type,params)
	{
		selector: params.selector;
		sound: params.sound;
		method: params.method;
		this._selector(type,params.selector);
		this._player(params.sound);
		this._method(params.method);
	},
	_selector: function(type,selector)
	{
		//alert(type);
		//alert(selector);
		switch(type)
		{
			case "tag": alert("tag Selected"); break;
			case "id": alert("id Selected"); break;
			case "class": alert("class Selected"); break;
			default: alert("Missing Parent Parameter");
		}
	},
	_player: function(sound)
	{
		//alert(sound);
		player = '<object width="1" height="1" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">' + 
						'<param name="url" value="'+sound+'">' + 
						'<param name="uiMode" value="full">' + 
						'<param name="autoStart" value="true">' + 
						'<param name="loop" value="true">' + 
						'<embed type="application/x-mplayer2" pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" showcontrols="true" uimode="full" width="1" height="1" src="'+sound+'" autostart="true" loop="true">' + 
					 '</object>';
		document.getElementById('SoundSkee').innerHTML = player;
	},
	_method: function(method) 
	{
		//alert(method);	
	},
	mute: function() {}	
}

//window.onload = SoundSkee.init;