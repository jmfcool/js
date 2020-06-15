<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>JSONP</title>
		<script type="text/javascript">

			var View = {
				data: function(data)
				{
					var h = [];
						for(var key in data)
						{
							h.push('<button id="' + key + '">' + data[key].name + '</button>');
						}
					return h;
				},
				port: function(item,id,port)
				{
					var el = document.createElement('div');
						el.setAttribute('id',id);
						el.innerHTML = item.join('\r');
						document.getElementById(port).appendChild(el);
				},
				script: function(url)
				{
					var s = document.createElement('script');        
						s.src = url;
						s.type = 'text/javascript';                
						document.body.appendChild(s);
				}
			}
		
			var Controller = {
				init: function(id)
				{
					this.display(id);
					this.listener('click',this.handler,id);
				},
				display: function(id)
				{
					new View.port(new View.data(Model.data),'data',id);
					new View.script('http://frontendfiles.com/_sandbox/js/jsonp/jsonp.php?jsonp=callback');
				},
				jsonp: function(name,value)
				{
					document.getElementById('msg').innerHTML = value;
				},
				dispatcher: function()
				{},
				listener: function(type,func,id)
				{
					var el = document.getElementById(id);
					if (el.addEventListener)
					{
						el.addEventListener(type,func,false);
					} 
					else if (el.attachEvent)
					{
						el.attachEvent('on'+type,func);
					}
				},
				handler: function(e)
				{
					(window.event) ? e.cancelBubble = true : e.stopPropagation();
					var target = window.event ? e.srcElement : e.target;
					var el = document.getElementById(target.id);
					switch(e.type)
					{
						case 'click':
							if (target.nodeName.toLowerCase() === 'button')
							{
								var m = Model.get(target.id);
								new Controller.jsonp(m.name,m.value);
								var d = document.getElementsByTagName('button');
								for (var i = 0; i < d.length; i ++)
								{
									if (d[i].className === 'active')
									{
										d[i].className = '';
									}
								}
								if (el.className !== 'active')
									el.className = 'active';
								else
									el.className = ''; 
							}
						break;
					}
				}
			}
	
			window.onload = function()
			{
				Controller.init('port');
			}

		</script>
		<style type="text/css">
		
			@import url('../global.css');
			span 
			{ 
				font-size: 12px; 
				font-style: italic; 
				letter-spacing: 1px; 
			}
			#port
			{ 
				position: absolute; 
				top: 45%; 
				right: 0; 
				bottom: 0; 
				left: 0; 
			}
			#data 
			{ 
				float: right; 
				position: relative; 
				left: -50%; 
			}
			button 
			{ 
				float: left; 
				position: relative; 
				left: 50%; 
				font-size: 12px; 
				font-weight: bold; 
				padding: 10px 20px; 
				cursor: pointer; 
				color: #666;
				border: 1px solid #898989;
				background-color: #c3c3c3;
				background:
				-webkit-gradient(linear, 0% 0%, 0% 10%, from(#afafaf), to(#c3c3c3));
			}
			button:first-of-type 
			{ 
				border-left: 1px solid #898989; 
				border-radius: 10px 0 0 10px; 
			}
			button:last-of-type 
			{ 
				border-right: 1px solid #898989; 
				border-radius: 0 10px 10px 0; 
			}
			button:first-of-type.active 
			{ 
				border-left: 1px solid #458920; 
			}
			button:last-of-type.active 
			{ 
				border-right: 1px solid #458920; 
			}
			.active 
			{ 
				color: #fff; 
				border: 1px solid #458920;
				background-color: #33f;
				background: 
				-webkit-gradient(linear, 0% 0%, 0% 100%, from(#66f), to(#33f)); 
			}

		</style>
	</head>
	<body>
		<script src="http://frontendfiles.com/_sandbox/js/jsonp/jsonp.php?jsonp=callback" type="text/javascript"></script>
		<div id="msg">Msg</div>
		<section>
			<div id="port"></div>
		</section>
	</body>
</html>