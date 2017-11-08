<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>开灯游戏</title>
		<script>
			function load()
			{
				//定义图片标识
				var num=0;
				document.write('<table border="1" align="center" width="550" height="475" style="border-collapse: collapse; id="tableid">');
				
				for(var i=0; i<5; i++)
				{
					document.write('<tr align="center">');
					
					for(var j=0; j<5; j++)
					{
						num++;
						document.write('<td><img src="img/1.png" id="img'+num+'" onclick="changeNum('+num+');" /></td>');
					}
					document.write('</tr>');
				}
				document.write('<tr align="center"><td colspan="5"><input type="button" value="重置" onclick="reset()" /></tr></td>')
				document.write('</table>');
				document.write('<audio src="music/洛天依,言和 - 神经病之歌.mp3" autoplay="autoplay" controls="controls" loop="true" hidden="true"></audio>');
			}
			
			//函数翻转的函数
			function changeImg(num)
			{
				
				//得到图片对象
				var objimg = document.getElementById("img"+num);
				//得到图片路径
				//var imgsrc = objimg.src.replace("http://127.0.0.1:8020/%E5%BC%80%E7%81%AF%E6%B8%B8%E6%88%8F","");
				//截取路径位置
				var imgsrc = objimg.src;
				
				//找到最后一个/的索引位置
				var index = imgsrc.lastIndexOf('\/');
				
				//得到最后一个/的路径
				var strsrc = imgsrc.substring(index,imgsrc.length);
				
				//判断路径进行修改路径
				if(strsrc=="/1.png")
				{
					document.getElementById('img'+num).src = "img/2.png";
				}
				else
				{
					document.getElementById('img'+num).src = "img/1.png";
				}
			}
			
			//定义函数来控制图片翻转规则
			function changeNum(num)
			{
				//判断点击翻转
				if(num<=25 && num>=1)
				{
					changeImg(num);
					if((num+1)<=25 && num%5!=0)
					{
						changeImg(num+1);
					}
					if((num+5)<=25)
					{
						changeImg(num+5);
					}
					if((num-1)>=1 && num%5!=1)
					{
						changeImg(num-1);
					}
					if((num-5)>=1)
					{
						changeImg(num-5);
					}
					win();
				}
			}
			
			//重置游戏函数
			function reset()
			{
				for(var i = 1; i <= 25; i++){
					document.getElementById('img'+i).src = "img/1.png";
				}
			}
			
			//胜利函数
			function win()
			{
				//定义标识来计数
				var count=0;
				
				//循环进行计算图片为2.png
				for(var i = 1; i <= 25; i++)
				{
					//得到图片对象
				var objimg = document.getElementById("img"+i);
				//得到图片路径
				//var imgsrc = objimg.src.replace("http://127.0.0.1:8020/%E5%BC%80%E7%81%AF%E6%B8%B8%E6%88%8F","");
				//截取路径位置
				var imgsrc = objimg.src;
				
				//找到最后一个/的索引位置
				var index = imgsrc.lastIndexOf('\/');
				
				//得到最后一个/的路径
				var strsrc = imgsrc.substring(index,imgsrc.length);
				if(strsrc=="/2.png")
				{
					count++;
				}
				}
				if(count==25)
				{
					alert("真是精彩！");
				}
			}
		</script>
	</head>
	<body onload="load()">

	</body>
</html>
