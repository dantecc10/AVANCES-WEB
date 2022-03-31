nombreUsuario = prompt("Soy Dante Castelán Carpinteyro y hoy terminará siguiéndome en mis redes sociales. Hoy le presentaré información sobre la programación en JavaScript. ¿Cuál es su nombre?");
function MensajeJavaScript(nombreUsuario)
    {
        if (nombreUsuario=="")
        {
            alert("Hola desconocido, veo que le ha dado click a mi 'logo' de JavaScript, lo llevaré a un artículo sobre el lenguaje...");
            location.href="https://es.wikipedia.org/wiki/JavaScript";
        }
        else
        {
            alert("Hola "+ nombreUsuario+ ", veo que le ha dado click a mi 'logo' de JavaScript, lo llevaré a un artículo sobre el lenguaje...");
            location.href="https://es.wikipedia.org/wiki/JavaScript";
        }
    }
    	//Declaración de funciones de redes sociales
        function AbrirFacebook(nombreUsuario)
	    {
	    if (nombreUsuario=="")
	    {
		    alert("Aunque no se identificó le redirigiré a mi perfil de Facebook...");
		    location.href="https://www.facebook.com/DanteCC10.4T";
	    }
    	else
	    {
		    alert(nombreUsuario+", le redirigiré a mi perfil de Facebook...");
		    location.href="https://www.facebook.com/DanteCC10.4T";
    	}
	    }
function MuestraImagen(src, width, height, alt) 
{
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
if (nombreUsuario=="") 
{
    document.write('Espero que disfrute de esta lectura, usuario que no ha querido revelarme su nombre... ¡sí! me di cuenta de eso. ¿Se siente vigilado o espiado? Y eso que aún no sé cómo programar cookies...');
    MuestraImagen('https://img1.freepng.es/20180719/hb/kisspng-logo-computer-icons-clip-art-white-hat-hacker-icon-5b501129bee196.7461762215319739297819.jpg', 80, 80, 'Black Hat');
}
else
{
    document.write('Disfrute de la lectura, destacado usuario ', nombreUsuario, ".");
    MuestraImagen('https://www.clipartmax.com/png/middle/232-2320630_sombrero-blanco-la-moda-white-hat.png', 80, 80, 'White Hat');
}

    function AbrirWhatsApp(nombreUsuario)
		{
		if (nombreUsuario=="")
		{
			alert("Aunque no se identificó le redirigiré a un chat conmigo en WhatsApp...");
			location.href="https://wa.me/527979773095";
		}
		else
		{
			alert(nombreUsuario+", le redirigiré a un chat conmigo en WhatsApp...");
			location.href="https://wa.me/527979773095";
		}
		}
	function AbrirMessenger(nombreUsuario)
        {
		if (nombreUsuario=="")
		{
			alert("Aunque no se identificó le redirigiré a un chat conmigo en Messenger...");
			location.href="https://m.me/dantecc10fi";
		}
		else
		{
			alert(nombreUsuario+", le redirigiré a un chat conmigo en Messenger...");
			location.href="https://m.me/dantecc10fi";
		}		
		}
    function AbrirYouTube(nombreUsuario)
        {
        if (nombreUsuario=="")
        {
            alert("Aunque no se identificó le redirigiré mi canal de YouTube...");
            location.href="https://www.youtube.com/channel/UCXjG-Lpe_lEUwVdBHS2u3Aw";
        }
        else
		{
			alert(nombreUsuario+", le redirigiré mi canal de YouTube...");
			location.href="https://www.youtube.com/channel/UCXjG-Lpe_lEUwVdBHS2u3Aw";
		}		
		}
	function AbrirTelegram(nombreUsuario)
		{
		if (nombreUsuario=="")
		{
			alert("Aunque no se identificó le redirigiré a un chat conmigo en Telegram...");
			location.href="https://t.me/dantecc10";
		}
		else
		{
			alert(nombreUsuario+", le redirigiré a un chat conmigo en Telegram...");
			location.href="https://t.me/dantecc10";
		}		
		}
	function AbrirTwitter(nombreUsuario)
		{
		if (nombreUsuario=="")
    	{
    		alert("Aunque no se identificó le redirigiré a mi cuenta de Twitter...");
			location.href="https://www.twitter.com/dantecc10";
		}
		else
		{
			alert(nombreUsuario+", le redirigiré a mi cuenta de Twitter...");
			location.href="https://www.twitter.com/dantecc10";
		}
		}
	function AbrirGitHub(nombreUsuario)
		{
		if (nombreUsuario=="")
		{
			alert("Aunque no se identificó le redirigiré a mis respositorios de GitHub...");
			location.href="https://www.github.com/dantecc10";
		}
		else
		{
	    	alert(nombreUsuario+", le redirigiré a mis respositorios de GitHub...");
			location.href="https://www.github.com/dantecc10";
		}		
		}
		//Fin de declaración de funciones de redes sociales
		//Función de comparación de texto en input
		function FórmulaGeneral()
		{
			var Avalor = document.getElementById("valorA").value;
			var Bvalor = document.getElementById("valorB").value;
			var Cvalor = document.getElementById("valorC").value;
			var discriminante=(Math.pow(Bvalor, 2)-(Avalor*Cvalor*4));
			var disc1 = (Math.pow(Bvalor, 2));
			var disc2 = -(4*Avalor*Cvalor);
			var disc3 = Math.sqrt((Math.pow(Bvalor, 2))-(4*Avalor*Cvalor));
			var disc4 = ("Semi x1= "+(-(Bvalor)-(Math.sqrt((Math.pow(Bvalor, 2))-(4*Avalor*Cvalor)))));
			var disc5 = ("Semi x2= "+(-(Bvalor)+(Math.sqrt((Math.pow(Bvalor, 2))-(4*Avalor*Cvalor)))));
		
            var x1 = (-(Bvalor)-(Math.sqrt((Math.pow(Bvalor, 2))-(4*Avalor*Cvalor))))/2;
			var x2 = (-(Bvalor)+(Math.sqrt((Math.pow(Bvalor, 2))-(4*Avalor*Cvalor))))/2;
			document.getElementById("Discriminante").innerText=("El valor del discriminante es "+discriminante+".");
			/*document.getElementById("DISC1").innerText=(disc1);
			document.getElementById("DISC2").innerText=(disc2);
			document.getElementById("DISC3").innerText=(disc3);
			document.getElementById("DISC4").innerText=(disc4);
			document.getElementById("DISC5").innerText=(disc5);*/
			document.getElementById("ResultadoX1").innerText=("El valor de x1 es "+x1+".");
			document.getElementById("ResultadoX2").innerText=("El valor de x2 es "+x2+".");
			alert("El valor de x1 es "+x1+".");
			alert("El valor de x2 es "+x2+".");
		}
			//Evaluación de primer input
			/*if (Bvalor>=0)
	    	{
				if(Math.pow(Bvalor, 2)-(Avalor*Cvalor*4)>=0)
				{
					alert("El valor de x1 es: "+x1);
					alert("El valor de x2 es: "+x2);
					document.getElementById("ResultadoX1").innerText=("El valor de x1 es "+x1+".");
					document.getElementById("ResultadoX2").innerText=("El valor de x2 es "+x2+".");
				}
				else
				{
					document.getElementById("Resultados").innerHTML=("Error: el valor del discriminante es negativo ("+discriminante+").");
				}
  			}
			else
  			{
				document.getElementById("Resultados").innerHTML=("Error: el valor de B es negativo ("+Bvalor+").");				
			}*/