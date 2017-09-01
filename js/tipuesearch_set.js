/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["это", "и", "или", "после", "еще", "а", "они"];

// Word replace
var tipuesearch_replace = {'words': [
    {'word': 'сыы', 'replace_with': 'css'},
    {'word': 'реьд', 'replace_with': 'html'},
    {'word': 'javscript', 'replace_with': 'javascript'},
    {'word': 'jqeury', 'replace_with': 'jquery'}
]};

// Weighting
var tipuesearch_weight = {'weight': [
    {'url': 'http://www.tipue.com', 'score': 20},
    {'url': 'http://www.tipue.com/search', 'score': 30},
    {'url': 'http://www.tipue.com/is', 'score': 10}
]};

// Illogical stemming
var tipuesearch_stem = {'words': [
    {'word': 'e-mail', 'stem': 'email'},
    {'word': 'javascript', 'stem': 'jquery'},
    {'word': 'javascript', 'stem': 'js'}
]};

// Related searches
var tipuesearch_related = {'searches': [
    {'search': 'html', 'related': 'HTML5'},
    {'search': 'html5', 'related': 'HTML'}
]};

// Internal strings
var tipuesearch_string_1 = 'Нет заголовка';
var tipuesearch_string_2 = 'Показаны результаты для';
var tipuesearch_string_3 = 'Искать вместо';
var tipuesearch_string_4 = '1 результат';
var tipuesearch_string_5 = 'результатов';
var tipuesearch_string_6 = 'Назад';
var tipuesearch_string_7 = 'Больше';
var tipuesearch_string_8 = 'Ничего не найдено.';
var tipuesearch_string_9 = 'Общие слова игнорируются.';
var tipuesearch_string_10 = 'Запрос слишком короткой';
var tipuesearch_string_11 = 'Должен быть 1 символ или более.';
var tipuesearch_string_12 = 'Должно быть';
var tipuesearch_string_13 = 'символов или более.';
var tipuesearch_string_14 = 'секунд';
var tipuesearch_string_15 = 'Поисковые запросы, связанные с';

// Internals

// Timer for showTime
var startTimer = new Date().getTime();

var tipuesearch_pages = [
    "css3_animation.html",
    "html5_canvas.html",
    "html5_forms.html",
    "html5_images.html",
    "index.html"
];
