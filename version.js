function vers()
{
	var Text = ""
	Text+="Изменение 1\n";
	Text+="Изменение 2\n";
	Text+="Изменение 3 Изменено  в основной ветке Изменение - 9\n";
	Text+="Изменение 4\n";
	Text+="Изменение 5\n";
	Text+="Изменение 6  Отмена 5-й фиксации!\n";
	Text+="Изменение 7  \n";
	Text+="Изменение 8  \n";
	Text+="Изменение 10  \n";
	Text+="Изменение 11 GitHub \n";
	Text+="Изменение 12 GitHub \n";
	Text+="Изменение 13 GitHub \n";
	Text+="Изменение 14 GitHub 13.02.2017\n";
	
	alert(Text);
	
	
	var resWorkFunc=" ";
	resWorkFunc+=newFunc_1()
	resWorkFunc+=newFunc_2()
	resWorkFunc+=newFunc_3()
	alert(resWorkFunc)
	
}
//------------------------------------------------------------
function newFunc_1()
{
	var Text = "Новая функция !!!!\n"
	//alert(Text);
	return Text;
}
//------------------------------------------------------------
function newFunc_2()
{
	var Text = "Новая функция - 2\n"
	//alert(Text);
	return Text;
	
}
//------------------------------------------------------------
function newFunc_3()
{
	var Text = "Новая функция - 3\n По прошествии времени многое было забыто!"
	//alert(Text);
	return Text;
}
//-------------------------------------------------------------
vers();
