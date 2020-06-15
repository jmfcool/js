<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
	<head>
		<title>Set Layout</title>
		<script type = "text/javascript">
		
			var f,r,c,p;
                r = 0;
                c = 0;
                p = '<div id="board">';
			while(r <= <?php print (empty($_GET['r'])) ? '8' : $_GET['r'] ?>)
			{
			   p += '<div class="row">';
			   while (c <= <?php print (empty($_GET['c'])) ? '8' : $_GET['c'] ?>)
			   {
			      if (r%2 != c%2) { p += '<div class="cell cell-1"><div class="cell-wrapper">X</div></div>'; }
			      else { p += '<div class="cell cell-2"><div class="cell-wrapper">O</div></div>'; }
			      c++;
			   }
			   p += '</div>';
			   c = 0;
			   r++;
			}
			p += '</div>';
			document.write(p);
		
		</script>
		<style type="text/css">
		
			* { margin: 0 auto; padding: 0px; }
			form { width: 100%; position: absolute; top: 0; left: 0; background-color: #fff; padding: 10px 0; }
			.row { overflow: hidden; clear: both; height: 40px; }
			.cell { width: 40px; height: 40px; display: block; float: left; text-align: center; }
			.cell-1 { color: #fff; background-color: #000; }
			.cell-2 { color: #000; }
			.cell-wrapper { padding: 10px 0 0 0; }
			#board { margin-top: 50px; }
					
		</style>
	</head>
	<body>
		<form method="get" action="<?php $_SERVER['PHP_SELF'] ?>">
			<label>Row: </label>
			<input type="text" name="r" value="<?php print $_GET['r'] ?>" />
			<label>Col:</label>
			<input type="text" name="c" value="<?php print $_GET['c'] ?>" />
			<input type="submit" value="Change" />
		</form>
	</body>
</html>
