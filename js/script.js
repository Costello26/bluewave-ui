$(document).ready(function () {

  function headerFoo(){ // HEADER MOBILE MENU DISPLAY AND COLLAPSE
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

    $('img[data-func="plus"]').click(function(){ // STEP ONE EDIT ITEM PLUS
      let input = $(this).parent().siblings('input.qty-input');
      let val = Number(input.val())
      val +=1
      input.val(val)
    })

    $('img[data-func="minus"]').click(function(){ // STEP ONE EDIT ITEM MINUS
      let input = $(this).parent().siblings('input.qty-input');
      let val = Number(input.val())
      if(val > 1){
        val -=1
        input.val(val)
      }
    })

    $('img[data-func="edit"]').click(function(){ // STEP ONE EDIT ITEM (PENCIL ICON)
      let controls = $(this).parents('.step-one-table__col').find('.controls');
      let qtyForm = $(this).parents('.step-one-table__col').find('.qty-input');
      controls.toggleClass('controls-hidden');
      $(this).siblings('.step-one__manage-link').css('visibility', 'visible');
      if (controls.hasClass('controls-hidden')){
        qtyForm.css('border','none');
        qtyForm.attr('readonly', 'readonly');
      } else {
        qtyForm.css('border','1px solid #666');
        qtyForm.removeAttr('readonly')
      }
    })

    $('.step-one__manage-link').click(function(e){ // STEP ONE EDIT ITEM 'SAVE' LINK
      e.preventDefault();
      let controls = $(this).parents('.step-one-table__col').find('.controls');
      let qtyForm = $(this).parents('.step-one-table__col').find('.qty-input');
      $(this).css('visibility','hidden');
      controls.addClass('controls-hidden');
      qtyForm.css('border','none');
      qtyForm.attr('readonly', 'readonly');
    })

    $('img[data-func="delete"]').click(function(){ // STEP ONE DELETE ITEM
      let listItem = $(this).parents('.step-one-table__col');
      listItem.slideUp(250);
      setTimeout(()=>listItem.remove(), 1000);
      //on remove list item (step one)
      //do something
    })
 
    $('#infoModalClose').click(function(){ // STEP ONE - ITEM SEARCH KNOW MORE ICON/DISPLAY MODAL
      $('.item-info__modal').animate({'opacity':'0'}, 150)
      $('.item-info__modal').css({'display':'none'});
    })

    $('span.info-modal').click(function(){ // STEP ONE - ITEM SEARCH KNOW MORE ICON/HIDE MODAL
      $('.item-info__modal').css('display', 'flex');
      $('.item-info__modal').animate({'opacity':'1'}, 150)
    })

    const customerInfo = {
      poNumber: $('.po-number__num'),
      name: $('#stepTwoName'),
      lastName: $('#stepTwoLastName'),
      adress:$('#stepTwoAddress1'),
      country: $('#stepTwoCountry'),
      zipCode: $('#stepTwoZipCode'),
      state: $('#stepTwoState'),
      city: $('#stepTwoCity'),
      phone: $('#stepTwoPhone'),

      //ADD ITEM FIELDS
      item: $('#stepOneSearch'),
      itemQty: $('#itemQty')
    }

    $('.add-item').click(function(event){ // ADD ITEM FUNCTION
      event.preventDefault();
      if(!customerInfo.item.val() || !customerInfo.itemQty.val()){
        $('.warning__notification').css('display','block');
        $('.warning__inner.required.fields h2').css('display','inline');
        $('body,html').animate({scrollTop: 0}, 600);
        if(!customerInfo.item.val()){
          customerInfo.item.addClass('required-placeholder-red');
        }
        if(!customerInfo.itemQty.val()){
          customerInfo.itemQty.addClass('required-placeholder-red');
        }
      } else{
        //DO SOMETHING
      }
    })

    $('.save-customer-info').click(function(event){ //SAVE CUSTOMER INFO FUNCTION
      event.preventDefault();
      $('.required.input, .po-number__num').removeClass('required-placeholder-red');
      if(!customerInfo.poNumber.val() || !customerInfo.name.val() || !customerInfo.lastName.val() || !customerInfo.adress.val() || !customerInfo.country.val() || !customerInfo.zipCode.val() || !customerInfo.state.val() || !customerInfo.state.val() || !customerInfo.city.val() || !customerInfo.phone.val()){
        $('.warning__notification').css('display','block');
        $('.warning__inner.required.fields h2').css('display','inline');
        $('body,html').animate({scrollTop: 0}, 600);
        if(!customerInfo.poNumber.val()){
          customerInfo.poNumber.addClass('required-placeholder-red');
        }
        if(!customerInfo.phone.val()){
          customerInfo.phone.addClass('required-placeholder-red');
        }
        if(!customerInfo.city.val()){
          customerInfo.city.addClass('required-placeholder-red');
        }
        if(!customerInfo.state.val()){
          customerInfo.state.addClass('required-placeholder-red');
        }
        if(!customerInfo.state.val()){
          customerInfo.state.addClass('required-placeholder-red');
        }
        if(!customerInfo.zipCode.val()){
          customerInfo.zipCode.addClass('required-placeholder-red');
        }
        if(!customerInfo.name.val()){
          customerInfo.name.addClass('required-placeholder-red');
        }
        if(!customerInfo.lastName.val()){
          customerInfo.lastName.addClass('required-placeholder-red');
        }
        if (!customerInfo.adress.val()){
          customerInfo.adress.addClass('required-placeholder-red');
        }
        if (!customerInfo.country.val()){
          customerInfo.country.addClass('required-placeholder-red');
        }
      } else {
        $('.warning__notification').css('display','none');
        $('.warning__inner.required.fields h2').css('display','none');
        // SEND FORM 
      }
    })

    $('.submit__order').click(function(event){ // SUBMIT ORDER - 1ST STEP
      const availableQty = 5; // QUANTITY OF AVAILABLE ITEMS
      event.preventDefault();
      $('.step-one-table__col').removeClass('warning-bordered')
      if(true){ //CATCHING ERROR

        $('.warning__notification').css('display','block');
        $('.warning__inner.unavailable h2, .warning__inner.unavailable p').css('display','block');
        $('body,html').animate({scrollTop: 0}, 600);

        $('.step-one-table__col').css('margin-bottom','20px')
        $('.step-one-table__col:nth-child(3)')
        .append(`
          <span class='out-of-stock'>
            Maximum <span class='count'>${availableQty}</span> items available current time.
          </span>
        `)
        $('.step-one-table__col:nth-child(3)').addClass('warning-bordered').css('margin-bottom','20px');
      } else { //FORM VALIDATED
        //SEND FORM
      }
    })

    const date = new Date();
    $('#username').text( $('.header__name .header__user').text() );
    $('#now').text(` ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `);

    $('#suggestion').click(function(){
      $('#suggestion-modal').css('display','flex')
      .animate({'opacity':'1'}, 150);
    })
    $('.desc-modal__close').click(function(){
      $('#suggestion-modal').animate({'opacity':'0'}, 150).css('display','none');
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
