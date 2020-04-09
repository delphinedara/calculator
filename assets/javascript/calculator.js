	const textField= document.getElementById('result');
		let toBeCleared = false;
		function appendForCalculation(symbol){
			if(toBeCleared){
				clearText();
			}

			textField.value= textField.value + symbol;
		}

		function calculate(){

			toBeCleared = true;
			textField.value += ' = ' + eval(textField.value);


		}

		function clearText(){
			textField.value='';
			toBeCleared =false;

		}