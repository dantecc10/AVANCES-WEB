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