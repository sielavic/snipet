
var select = document.querySelector("select");

document.querySelector("select").addEventListener('change', function (e) {
  console.log("Changed to: " + e.target.value)
})



  // Показываем поля соответствующие выбранному значению списка
  select.addEventListener('change', function() {
    // Получаем выбранное значение списка
    var selectedType = this.value;
    
    // Получаем все поля ввода на странице
    var fields = document.querySelectorAll('input');
    
    // Перебираем каждое поле ввода
    fields.forEach(function(field) {
        
        if ('1' === selectedType) {
            field.value = 'первый тип полей'
        }  if ('2' === selectedType) {
            field.value = 'второй тип полей'
        } if ('3' === selectedType) {
            field.value = 'третий тип полей'
        } if ('4' === selectedType) {
            field.value = 'четвертый тип полей'
        } if ('5' === selectedType) {
            field.value = 'пятый тип полей'
        }
    });
});
