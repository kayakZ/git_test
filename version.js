function vers()
{
	var Text = ""
	Text+="Изменение 1\n";
	Text+="Изменение 2\n";
	Text+="Изменение 3\n";
	Text+="Изменение 4\n";
	Text+="Изменение 5\n";
	Text+="Изменение 6  Отмена 5-й фиксации!\n";
	Text+="Изменение 7  \n";
	Text+="Изменение 8  \n";
	
	alert(Text);
	newFunc_1()
	newFunc_2()
	newFunc_3()
}
//------------------------------------------------------------
function newFunc_1()
{
	var Text = "Новая функция !!!!"
	alert(Text);
}
//------------------------------------------------------------
function newFunc_2()
{
	var Text = "Новая функция - 2"
	alert(Text);
	
}
function newFunc_3()
{
	var Text = "Новая функция - 3"
	alert(Text);
}
vers();
