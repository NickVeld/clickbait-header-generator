//code from Wes
$(document).ready(function(){
	var words = 
		{

		story:{
			"origin":["#recipe#"],
			"recipe":[
					"#event# #youwontbelieve#", 
					"Был Ли #deadperson# #abadthingtobe#?", 
					"Является Ли #liveperson# #abadthingtobe#?", 
					"Был Ли Этот #categoryofperson# На Самом Деле #abadthingtobe#?",
					"#dothisto# #thesethings# И Не Говорите Мне, Что Вы Не #abadthingtobe#",
					"Этот #categoryofperson# Заставил #mademe#",
					"Что Открытое Этим #categoryofperson#  #makeyou#",
					"Если Вы Сможете Просмотреть Это И Не Быть Удивленным, То Вы Сделаны Из Камня",
					"Жаль, Я Не Возмущен Еще Больше Тем, Что Этот #categoryofperson# Раскрыл, Но Увы.",
					"Некоторые Называют Это #reallygoodthing#. Другие Отзываются Об Этом, Как О #reallybadthing#",
					"Вы Будете Расстроены, Когда Увидите, Что Этот #categoryofperson# Создал",
					"Прежде, Чем Вы Скажете, Что #questionableassertion#, #dothisto# #thesethings# От Этого #categoryofperson#",
					"#number# Советов, Которые Не Позволят Вам Стать #abadthingtobe#",
					"#number# Самых Полезных Правил, Которые Поддержают Отношения Здоровыми",
					],
			"event": ["Этот #categoryofperson# Сказал, Что #questionableassertion#. #youwontbelieve#",
					"#liveperson# Подрался С #liveperson# на Гала-концерте. #youwontbelieve#",
					"#categoryofperson# Так Высказался О #reallybadthing#. #youwontbelieve#"],
			"liveperson": ["Beyonce", "Бред Питт", "Джордж Буш", "Обама",
					"Ким Кардашьян", "Канье Вест", "Eminem", "Macklemore", "Том Круз", "Опра",
					"Мадонна", "Дженнифер Лопез", "Стивен Спилберг", "Микки Маус",
					"Бритни Спирс", "Том Хэнкс", "Тэйлор Свифт", "Джордж Клуни",
					"Элтон Джон"],
			"deadperson": ["Бен Франклин", "Эмма Голдман", "Соджорнер Трут",
					"Джордж Вашингтон", "Томас Джефферсон", "Чарльз Дикенс", "Д. Д. Сэлинджер",
					"Исаак Ньютон", "Альберт Эйнштейн", "Леонардо Да Винчи",
					"Аристотель", "Галилео", "Ганди", 
					"Александр Великий", "Шекспир", "Сократ",
					"Авраам Линкольн", "Никола Тесла", "Томас Едиссон", "Моцарт", "Будда",
					"Карл Маркс", "Наполеон", "Бетховен", "Брюс Ли", "Уолт Дисней", 
					"Мерлин Монро", "Элвис Пресли", "Че Гевара", "Клеопатра", "Майкл Джексон",
					"Принцесса Диана", "Френк Синатра"],
			"categoryofperson": ["Предприниматель-новатор", "Именитый Ученый", 
					"Падший Священник", "8-месячный ребенок",
					"Безумный Физик", 
					"Офицер Полиции", "Забытый Поэт", "Современный Программист"],
			"dothisto": ["Прослушайте", "Прочтите", "Посидите С", "Насладитесь", "Исследуйте", "Купите"],
			"thesethings": ["Эту Песню", "Эти #number# #things#"],
			"number": ["Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "10",
					"12", "13", "15", "20", "25", "30"],
			"things": ["Слов", "Песен", "Книг", "Веб-сайтов", "Моментов В Истории",
					"Разрушенных Обещаний", "Известных Картин", "Знаменитых Концертов"],
			"abadthingtobe": ["Сатанист", "Многоженец", "Отмыватель Денег", "Мафиозий", 
					"Рабовладелец", "Продавец Наркотиков", "Сердцеед",
					"Секретный герой революции", "Фальшивомонетчик", "Плагиатчик", 
					"Первый Хакер", "Наемник", "Женоненавистник"],
			"mademe": ["Изменит То, Как Я Смотрю На Мир", "Меня Пересмотреть Свою Жизнь", 
					"Меня Отказаться От Покупок в Интернете", "Меня Перестать Давать Деньги На Благотворительность"],
			"reallybadthing": ["Скрытом Геноциде", "Исчезновении Других Видов", "Эксплуатации",
					"Эксплуатации Рабочего Класса", "Характерныых Перегибах Капитализма ", "Голоде",
					"Большем Вмешательстве Государства", "Начале Конца", 
					"Закручивании Гаек В Промышленности", "Конце Демократии", "Катастрофе"],
			"reallygoodthing": ["Ответом Мировому Голоду", "Кратным Увеличением Средств Производства",
					"Способом Встать Людям На Ноги", "Разрушением Цепей, Сковывающих Их,",
					"Законами, Защищающие Уязвимых", 
					"Лучшим, что происходило, когда-либо,"],
			"questionableassertion": ["Страна Вышла Из Кризиса", 
					"Граждане Живут в Стране Без Террористов", "Социализм Не Такой Уж И Плохой", 
					"#liveperson# Не Такой Уж И Плохой", "Вы Не Расист", "Ваше Образование Стоило Этого", 
					"Экономика В Хорошей Форме", "Вы Найдете Работу Быстро", 
					"Ваши Дети Будут Справляться С Этим Лучше, Чем Вы", "Все Будет Хорошо", 
					"Есть Свет В Конце Тунеля", "Есть Жизнь После Смерти", 
					"Нет Жизни После Смерти", "Вы Имете Не Расскрытый Талант"],
			"youwontbelieve": ["Этот Факт #makeyou#", "Вы Не Поверите, Что Случилось Потом", 
					"Больше Вы не Сможете Так Же Относится К Этому", "Вы Будете Шокированы Ответом"],
			"makeyou": ["Заставит Вас Кричать", "Шокирует Вас!", "Изменит Ваши Привычки", "Взорвет Ваш Мозг",
					"Сделает Из Вас Нового Человека"],
		}
	};

	$('#buttonTrigger').click(function(){
		loadGrammar();
	});
	
	function loadGrammar(){
		var grammar = tracery.createGrammar(words["story"]);
		$('#output').html("<div>"+grammar.flatten('#origin#')+"</div>");
		console.log("finished loading!");
	}

	setTimeout(function() {
        loadGrammar();
    }, 10);

});
