$(document).ready(function () {

  function headerFoo(){
    $(".header__nav").toggleClass("active-m");
    if ($(".header__nav").hasClass("active-m")) {
      $(".header__nav").css({ display: "flex" });
      $(".header__nav").animate({ opacity: "1" }, 150);
    } else {
      $(".header__nav").animate({ opacity: "0", display: "none" }, 150);
      $(".header__nav").css({ display: "none" });
    }
  }

  $(".header__burger").click(function () {
    headerFoo()
  });
  $("span.orders__body-item").click(function () {
    $(".ordersModal").css({ visibility: "visible" });
    $(".ordersModal").animate({ opacity: "1" });
  });

  $(".ordersModal__close").click(function () {
    $(".ordersModal").animate({ opacity: "0" });
    $(".ordersModal").css({ visibility: "hidden" });
  });

  const transactionItem = $(".transaction__item");
  if (transactionItem.text() == "Invoice") {
    
  }
  
    $(".transacation__invoice + .highlighted").click(function () {
      $(".transaction-modal").toggleClass("active");
    });
    $(".transaction-modal__close").click(function () {
      $(".transaction-modal").removeClass("active");
    });

    $(".transaction-modal").click(function () {
      $(".transaction-modal").removeClass("active");
    });

    $(".transaction-modal__window ").click(function (e) {
      e.stopPropagation();
    });



    $('#stepOneSearch').on('click', function(){
      $(this).val() == '' ?
        $('.search-options__block').animate({'opacity':'1'},150)
      :
        $('.search-options__block').animate({'opacity':'0'},150)
    })

    $('#stepOneSearch').on('input', function(){
      $(this).val() == '' ?
        $('.search-options__block').animate({'opacity':'0'},150)
      :
        $('.search-options__block').animate({'opacity':'1'},150)
    })
 



    $(".transacation__payment + .highlighted").click(function () {
      $(".payment-modal").toggleClass("active");
    });
    $(".payment-modal__close").click(function () {
      $(".payment-modal").removeClass("active");
    });

    $(".payment-modal").click(function () {
      $(".payment-modal").removeClass("active");
    });

    $(".payment-modal__window ").click(function (e) {
      e.stopPropagation();
    });

    $('img[data-func="plus"]').click(function(){
      let input = $(this).parent().siblings('input.qty-input');
      let val = Number(input.val())
      input.val(val+1)
    })

    $('img[data-func="minus"]').click(function(){
      let input = $(this).parent().siblings('input.qty-input');
      let val = Number(input.val())
      if(val > 1){
        input.val(val-1)
      }
    })

    $('img[data-func="edit"]').click(function(){
      let controls = $(this).parents('.step-one-table__col').find('.controls');
      let qtyForm = $(this).parents('.step-one-table__col').find('.qty-input');
      controls.toggleClass('controls-hidden');
      $('.step-one__manage-link').css('visibility', 'visible');
      if (controls.hasClass('controls-hidden')){
        qtyForm.css('border','none');
        qtyForm.attr('readonly', 'readonly');
      } else {
        qtyForm.css('border','1px solid #666');
        qtyForm.removeAttr('readonly')
      }
    })

    $('.step-one__manage-link').click(function(e){
      e.preventDefault();
      let controls = $(this).parents('.step-one-table__col').find('.controls');
      let qtyForm = $(this).parents('.step-one-table__col').find('.qty-input');
      controls.addClass('controls-hidden');
      qtyForm.css('border','none');
      qtyForm.attr('readonly', 'readonly');
    })

    $('img[data-func="delete"]').click(function(){
      let listItem = $(this).parents('.step-one-table__col');
      listItem.slideUp(250);
      setTimeout(()=>listItem.remove(), 1000);
      //on remove list item (step one)
      //do something
    })
 
    $('#infoModalClose').click(function(){
      $('.item-info__modal').animate({'opacity':'0'}, 150)
      $('.item-info__modal').css({'display':'none'});
    })

    $('span.info-modal').click(function(){
      $('.item-info__modal').css('display', 'flex');
      $('.item-info__modal').animate({'opacity':'1'}, 150)
    })


 const stepOneDesc = $("#stepOneDesc");
 const descModal = $(".desc-modal");
 const descModalClose = $(".desc-modal__close");
 const descModalWindow= $(".desc-modal__window");
  $(stepOneDesc).click(function () {
      $(descModal).addClass("active");
    });
  $(descModalClose).click(function () {
      $(descModal).removeClass("active");
    });
  $(descModal).click(function () {
      $(descModal).removeClass("active");
    });
  $(descModalWindow).click(function (e) {
    e.stopPropagation();
    });





});
