<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>SoundSkee Version 1 - Provided Under the CC-GNU LGPL</title>
		<script type="text/javascript" src="js/SoundSkee.class.js"></script>
		<script type="text/javascript">

			function loadSound() { SoundSkee.setup('id',{ selector:'load',sound:'media/load.wav',method:'onload' }); }
			window.addEventListener('load',loadSound,false)

			function clickSound() { SoundSkee.setup('tag',{ selector:'a',sound:'media/open.wav',method:'onclick' }); }
			window.document.addEventListener('click',clickSound,false)

		</script>
	</head>
	<body id="load">
		<ul>
			<li><a href="javascript://" id="open">Open</a></li>
			<li><a href="javascript://" id="close">Close</a></li>
			<li><a href="javascript://" id="error">Error</a></li>
			<li><a href="javascript://" id="minimize">Minimize</a></li>
			<li><a href="javascript://" id="maximize">Maximize</a></li>
			<li><a href="javascript://" id="up">Up</a></li>
			<li><a href="javascript://" id="down">Down</a></li>
			<li><a href="javascript://" id="send">Send</a></li>
		</ul>
		<div id="SoundSkee"></div>
		
		<a rel="license" href="https://creativecommons.org/licenses/by-nd/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/3.0/88x31.png" /></a><br /><span xmlns:dc="https://purl.org/dc/elements/1.1/" href="https://purl.org/dc/dcmitype/InteractiveResource" property="dc:title" rel="dc:type">SoundSkee</span> by <a xmlns:cc="https://creativecommons.org/ns#" href="https://www.soundskee.com" property="cc:attributionName" rel="cc:attributionURL">Jeremiah Faria</a> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nd/3.0/">Creative Commons Attribution-No Derivative Works 3.0 Unported License</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="https://creativecommons.org/ns#" href="https://www.soundskee.org" rel="cc:morePermissions">https://www.soundskee.org</a>.

	</body>
</html>