// fixed menu
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>130){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>300){
    $(".back_top").css("visibility","visible");
  }else{
    $(".back_top").css("visibility","hidden");
  }
})







//banner_part slider
$('#banner_part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="prev_arrow"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>', 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
      }
    }
  ]  
});
	
//portfolio_part venobox
$('.venobox').venobox(); 


//service_part slider js

$('.service_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<span class="angle_up"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
  nextArrow: '<span class="angle_down"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',    
      responsive: [
          
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows:true,
        
      }
    },    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    }
  ] 
});

//TESTI_PART JS

$('#testi_part .left').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor:'#testi_part .right_slider .right',
    prevArrow: '<span class="angle_up"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
  nextArrow: '<span class="angle_down"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:false,
      }
    }
  ] 


});


//testi_part right_slider js

$('#testi_part .right_slider .right').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    asNavFor:'#testi_part .left',
    ///vertical: true,
   // centerMode: true,
   // centerPadding: 0,
    prevArrow:false,
  nextArrow: false,
    fade: true,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    }
  ] 


});


//counter up js
 $('.count').counterUp({
                delay: 10,
                time: 1000
            });



