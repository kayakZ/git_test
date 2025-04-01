var exp_1="x=77;z=x*x+3;"
var exp_2="str = 'cicada'; x=40,y=20; x=x*y; str = str + ' ' + x;  \n str.toUpperCase(); "
function vers()
{
	date = new Date();
	var Text = "🍀 💠 🍀 💠 🍀 💠 🍀 💠 🍀 💠 🍀 💠 \n\nСегодня - " + date.toLocaleString() + "\n\n🍀 💠 🍀 💠 🍀 💠 🍀 💠 🍀 💠 🍀 💠 \n\n";
	Text+="Изменение 14 GitHub 13.02.2017\n";
	Text+= "⚛︎⚛︎⚛︎\n⚛︎⚛︎⚛︎\n⚛︎⚛︎⚛︎\n";
	Text+="Изменение 23 GitHub 01.04.2025\n";
			
	var resWorkFunc="";
	
	resWorkFunc+=generateCode(exp_2)
	alert(Text +  "\n" +resWorkFunc)
	
}
//------------------------------------------------------------
function generateCode(expressions)
{
	/*var n = prompt("Введите любой текст...", "");
	var analys = "?";
	switch(typeof n) 
	{
     case 'number': // Преобразуем число в шестнадцатеричное целое
	 analys = "number"
     break;
     case 'string': // Возвращаем строку, заключенную в кавычки
	 analys = "string"
     break;
     case 'boolean': // 
	 analys = "boolean"
	 break;
	  case 'string': // Возвращаем строку, заключенную в кавычки
	  analys = "string"
     break;
     case 'boolean': // 
	 analys = "boolean"
	 break;
	 case 'object': // 
	 analys = "object"
	 break;
	 case 'undefined': // 
	 analys = "undefined"
	 break;
	 default: // 
	 analys = "undefined"
	 break;
	}
	//--------------------------------------------------------------------
	Gl = analys.toUpperCase()
	f = new Function('x', 'return x ');	*/
	//return eval(expressions) + " " + f(n) + " " + "Тип ввода->" + Gl; // 
	return eval(expressions); // 
}
//-------------------------------------------------------------
vers();
