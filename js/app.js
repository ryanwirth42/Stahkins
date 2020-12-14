/* EMAIL FORM HANDLING */

$('.form-button input').click(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    var val = $('#email').val();
    // add email address to message
    $('.form-message span').text(val);
    // show message (initially hidden in CSS)
    $('.form-message').css('display', 'grid');
  }
})

$('.form-message').click(function(){
  $(this).fadeOut(500);
})

AOS.init({
  duration: 1200,
})

$('.rightnav .faq1').click(function(){
$('.faq').css('display', 'grid');
 $(this).fadeIn(500);
})

$('.faq').click(function(){
  $(this).fadeOut(500);
})


$('.nav a').click(function(e){
  
  // prevent defalt click behavior
  // don't jump to content
  e.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

$('.middlenav a').click(function(e){
  
  // prevent defalt click behavior
  // don't jump to content
  e.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

$('.rightnav a').click(function(e){
  
  // prevent defalt click behavior
  // don't jump to content
  e.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

$('.leftnav a').click(function(e){
  
  // prevent defalt click behavior
  // don't jump to content
  e.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

$('.ship a').click(function(e){
  
  // prevent defalt click behavior
  // don't jump to content
  e.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

$('.mobilenav a').click(function(){
  $('.mobilenav2').addClass('open');
})

$('.mobilenav2').click(function(){
  $(this).fadeOut(500);
})