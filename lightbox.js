$(function(){
    $('.fs1_1').mouseenter(function(){ // Навели на ссылку?
      $( ".real-hint" ).show(); // Показываем блок
    });

    $('.real-hint').mouseleave(function(e){
    $('.real-hint').hide();
});
   
    $(document).click(function(e){ // Функция скрывает элемент если произошёл клик в не поля #div-test
            if ($(e.target).closest('.real-hint').length) return;  // Не знаю что тут происходит
            $('.real-hint').hide(); // Скрываем блок
            e.stopPropagation(); // Не знаю что тут происходит
        });
    
});