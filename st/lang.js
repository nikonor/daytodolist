var transLang={"ru":{"Lang":"ru",
					"headTitle":"Простой список задач на день",
					"headTitle_daylist":"Рабочий лист",
					"menuHelp":"Помощь",
					"HelpBody":"<p>Данный проект - простейший список задач на день. Никаких сложностей, никаких фокусов. <p>Для работы нажмите <b>Настройка</b> и внесите задачи, которые вы запланировали на сегодня. Формула простая - одна задача=одна строка. Тут же в любое время можно внести дополнительные задача <p>Выполнили задачу - ставите галочку<p>Сообщаю, никаких резервных копий, никаких отмен. <p>Задачу можно отложить - для этого справа внизу есть ссылочка. <p>Если есть желание хранить данные между входами, то входит через gmail", "helpDivLabel":"Помощь",
					"Title":"Простой список задач на день",
					"Title2":"Страница дня",					
					"SkipLink":"Пропустить задачу",
					"menuSetup":"Настройка",
					"setupDivLabel":"Настройка",
					"cancelSetupButton":"Отмена",
					"Done":"Все сделано, можно идти домой",
					"cancelHelpButton":"Закрыть",
					"rusure":"Вы уверены?",
					"quick_tasks_head":"Быстрые задачи",
					"timeline_head":"График",
					"notes_head":"Заметки",
					"saveSetupButton":"Записать"},
			  "en":{"Lang":"",
			  		"headTitle":"Simple todo list for one day",
			  		"headTitle_daylist":"Work List",
			  		"menuHelp":"Help",
			  		"HelpBody":"Coming soon",
			  		"helpDivLabel":"Help",
			  		"Title":"Simple todo list for one day",
			  		"Title2":"Work list",			  		
			  		"SkipLink":"Skip task",
					"menuSetup":"Setup",
					"setupDivLabel":"Setup",
					"cancelSetupButton":"Cancel",
					"Done":"All done, you can go to home",
					"rusure":"Are you sure?",
					"cancelHelpButton":"Close",
					"quick_tasks_head":"Quick Tasks",
					"timeline_head":"Time Line",
					"notes_head":"Notes",
					"saveSetupButton":"Save"}
}				

var menuData = {'ru':{'/':'список задач на день',
				       '/daylist':'рабочий лист'},
				'en':{'/':'day todo list',
					   '/daylist':'work list'}
};

function make_menu (d){
	// __debug('call make_menu');
	var m = [];
	$('#'+d).html('');
	for (var i in menuData[lang]){
		$("&nbsp;<a href=\""+i+"\">["+menuData[lang][i]+"]</a>&nbsp;").appendTo($('#'+d));
	}

}

function translateHTML(){
	$('.label').each(function(i,o){
		// __debug(o.id+'='+o.type+'='+transLang[lang][o.id]);
		if (o.type == 'button'){
			$(o).val(transLang[lang][o.id]);
		}else{
			$(o).html(transLang[lang][o.id]);
		}
	});	
}

function changeLang(new_lang){
	// __debug(lang);
	$.cookie('daytodolistlang',new_lang);
	// __debug('меняем');
	lang = new_lang;
	translateHTML();
	make_menu('menuDiv');
}

function fillToday(){
	var d = new Date();
	$('#today').html(d.getDate()+'.'+(parseInt(d.getMonth())+parseInt(1))+'.'+d.getFullYear())
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