$(function(){
    var page_name = window.location.pathname;  // Путь до открытого документа
    // Делаем активными пункты меню для открытого документа
    $('#navbar').load('navbar.html', function(){  // Загружаем содержимое меню навигации из файла 'navbar.html'
        $(this).find('a').each(function(){  // Делаем активными все ссылки "вглубь"
            if (page_name == $(this).attr('href') ||
                (page_name == '/' && '/index.html' == $(this).attr('href'))
            ) {
                $(this).parents().each(function() {  // делаем активными все "li" "наружу" от текущего элемента "a"
                    $(this).addClass('active')
                });
            }

            /* Так как меню подгружается после того, как страница была загружена,
             * то и поиск активирум после загрузки меню, т.к. форма ввода находится в меню
             */
            if (page_name == '/search.html') {
                $('#tipue_search_input').tipuesearch({
                    'mode': 'live',
                    'liveContent': '.container',
                    'liveDescription': '.page-header'
                });
            }
        });
    });
});
