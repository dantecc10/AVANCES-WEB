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