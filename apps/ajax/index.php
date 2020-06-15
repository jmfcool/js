<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title>XHR</title>
		<script type="text/javascript">

			var Model = {
				get: function (id)
				{
					return this.data[id];
				},
				del: function (id)
				{
					delete this.data[id];
				},
				data:
				{
					'1':
					{
						'file': 'xhr.txt',
						'text': '200'
					},
					'2':
					{
						'file': 'xhr.txt-bad',
						'text': '400'
					},
					'3':
					{
						'file': 'xhr.php?arg=1',
						'text': 'Arg 1'
					},
					'4':
					{
						'file': 'xhr.php?arg=2',
						'text': 'Arg 2'
					},
					'5':
					{
						'file': 'xhr.php?arg=3',
						'text': 'Arg 3'
					},
					'6':
					{
						'file': 'xhr.php?arg=4',
						'text': 'Arg 4'
					}
				}
			}

			var View = {
				data: function(data)
				{
					var h = [];
						for(var key in data)
						{
							h.push('<button id="' + key + '">' + data[key].text + '</button>');
						}
					return h;
				},
				port: function(item,id,port)
				{
					var el = document.createElement('div');
						el.setAttribute('id',id);
						el.innerHTML = item.join('\r');
						document.getElementById(port).appendChild(el);
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
				},
				load: function(req)
				{
					var xhr, el;
						xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
						xhr.onreadystatechange = function()
						{
							el = document.getElementById('msg');
							if(xhr.readyState === 4 && xhr.status === 200)
							{
								el.innerHTML = xhr.responseText;
							}
							else
							{
								el.innerHTML = xhr.status;
							}
						}
						xhr.open('GET',req,true);
						xhr.send();
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
								new Controller.load(m.file);
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

			@import url('../../../css/sandbox/_sass/global.css');

		</style>
	</head>
	<body>
		<div id="msg">Msg</div>
		<section>
			<div id="port"></div>
		</section>
	</body>
</html>
