window.onload = function() {

//Menu Toggle Script

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(".wrapper").toggleClass("toggled");
});

// User Menu toggle
$('#notification-toggle').click(function(e) {
  $("#notification-popup").toggle();
});


// Toggle Plan

$(".choose ul li").slideUp();
$(".choose label").click(function () {
    $(".choose ul li").slideToggle();
});
$(".choose ul li").click(function () {
    $(".choose label").text($(this).text());
    $(".choose ul li").slideToggle();
});

// Add mobile number on User Account
$('body').on('click', '.add-num-bt', function() {
  mobilelist = $(this).parent().find('li input');
  addmobilelist = '<li><input type="text" placeholder="Type Here" maxlength="11"></li>';
  
   // If Multiple List Remove Empty
  mobilelist.each(function(i) {
    var list = $(this);
    if (list.val() == "" && i > 0) {
       list.parent().remove();
       
    }
  });
  
  if(mobilelist.val() == "") {
   $('.error-message').show().delay(100).hide('slow');
   
       }else {

      $('.mobile-list ul').prepend(addmobilelist);
      $('.mobile-list input:first').focus();
  }
  
})

// On Enter Mobile List

$('.mobile-list ul li input').on('keypress', function(e) {

  code = e.keyCode || e.which;

  if(code == 13) {
    
    code.blur();
    

  }

})
}

