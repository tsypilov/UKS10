$(function(){
    $('.fs2_2').mouseenter(function(){ // Навели на ссылку?
      $( ".real-hint1" ).show(); // Показываем блок
    });

    $('.real-hint1').mouseleave(function(e){
    $('.real-hint1').hide();
});
   
    $(document).click(function(e){ // Функция скрывает элемент если произошёл клик в не поля #div-test
            if ($(e.target).closest('.real-hint1').length) return;  // Не знаю что тут происходит
            $('.real-hint1').hide(); // Скрываем блок
            e.stopPropagation(); // Не знаю что тут происходит
        });
    
});