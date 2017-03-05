  
var checkInput = () =>  {

    function check(){
      var form = $('#form_container__tag');
      form.find('.form_container__input').each(function(){
        if($(this).val() != ''){
          $(this).parent().removeClass('empty');
        } else {
          $(this).parent().addClass('empty');
        }
      });
    };

    $('.form_container__submit').on('click', check);

};

export {checkInput};