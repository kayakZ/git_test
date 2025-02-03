var exp_1="x=77;z=x*x+3;"
var exp_2="str = 'cicada'; x=5; x=x*x; str = str + ' ' + x;  \n str.toUpperCase(); "
function vers()
{
	var Text = ""
	Text+="Изменение 14 GitHub 13.02.2025\n";
	Text+="Изменение 15 GitHub 13.02.2017\n";
	Text+="Изменение 16 GitHub 03.02.2025\n";
	
	//alert(Text);
	
	
	var resWorkFunc=" ";
	
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
