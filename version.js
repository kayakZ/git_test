var exp_1="x=5;z=x*x;"
var exp_2="str = 'cicada'\n str.toUpperCase()"
function vers()
{
	var Text = ""
	Text+="Изменение 14 GitHub 13.02.2017\n";
	Text+="Изменение 15 GitHub 13.02.2017\n";
	
	alert(Text);
	
	
	var resWorkFunc=" ";
	
	resWorkFunc+=generateCode(exp_1)
	alert(resWorkFunc)
	
}
//------------------------------------------------------------
function generateCode(expressions)
{
	f = new Function('x', 'return x + 1975');  // 
	return eval(expressions) + " " + f(75) + " " + eval(exp_2); // 
}
//-------------------------------------------------------------
vers();
