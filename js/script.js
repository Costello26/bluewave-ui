$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__nav").toggleClass("active-m");
    if ($(".header__nav").hasClass("active-m")) {
      $(".header__nav").css({ display: "flex" });
      $(".header__nav").animate({ opacity: "1" }, 150);
    } else {
      $(".header__nav").animate({ opacity: "0", display: "none" }, 150);
      $(".header__nav").css({ display: "none" });
    }
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
