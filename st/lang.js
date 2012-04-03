var transLang={"ru":{"Lang":"ru",
					"headTitle":"Простой список задач на день",
					"menuHelp":"Помощь",
					"HelpBody":"<p>Данный проект - простейший список задач на день. Никаких сложностей, никаких фокусов. <p>Для работы нажмите <b>Настройка</b> и внесите задачи, которые вы запланировали на сегодня. Формула простая - одна задача=одна строка. Тут же в любое время можно внести дополнительные задача <p>Выполнили задачу - ставите галочку<p>Сообщаю, никаких резервных копий, никаких отмен. <p>Задачу можно отложить - для этого справа внизу есть ссылочка. <p>Если есть желание хранить данные между входами, то входит через gmail", "helpDivLabel":"Помощь",
					"Title":"Простой список задач на день",
					"SkipLink":"Пропустить задачу",
					"menuSetup":"Настройка",
					"setupDivLabel":"Настройка",
					"cancelSetupButton":"Отмена",
					"Done":"Все сделано, можно идти домой",
					"cancelHelpButton":"Закрыть",
					"saveSetupButton":"Записать"},
			  "en":{"Lang":"",
			  		"headTitle":"Simple todo list for one day",
			  		"menuHelp":"Help",
			  		"HelpBody":"Coming soon",
			  		"helpDivLabel":"Help",
			  		"Title":"Simple todo list for one day",
			  		"SkipLink":"Skip task",
					"menuSetup":"Setup",
					"setupDivLabel":"Setup",
					"cancelSetupButton":"Cancel",
					"Done":"All done, you can go to home",
					"cancelHelpButton":"Close",
					"saveSetupButton":"Save"}
}				

var menuData = {'ru':{'/':'список задач на день',
				       '/daylist':'рабочий лист'},
				'en':{'/':'day todo list',
					   '/daylist':'work list'}
};

function make_menu (d){
	var m = [];
	for (var i in menuData[lang]){
		$("&nbsp;<a href=\""+i+"\">["+menuData[lang][i]+"]</a>&nbsp;").appendTo($('#'+d));
	}

}

// var en={"Lang":"",
//		"headTitle":"",
//		"menuHelp":"",
//		"HelpBody":"",
//		"helpDivLabel":"",
//		"Title":"",
//		"SkipLink":"",
// 		"menuSetup":"",
// 		"setupDivLabel":"",
// 		"cancelSetupButton":"",
//		"Done":"",
//		"cancelHelpButton":"",
// 		"saveSetupButton":""};		