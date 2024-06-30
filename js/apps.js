// main nav search bar starts
let box = document.querySelector('.box');
let searchIconOne = document.querySelector('.searchIcon1');

    searchIconOne.addEventListener('click', ()=>{
        box.classList.add("open");
    })

let searchIconTwo = document.querySelector('.searchIcon2');
    searchIconTwo.addEventListener('click', ()=>{
        box.classList.remove("open")
    })
    // second nav search bar starts
    let mobileBox = document.querySelector('.smallbox');
let searchIconSm = document.querySelector('.searchIconSm');
    searchIconSm.addEventListener('click', ()=>{
        mobileBox.classList.add("smOpen");
    })

let searchIconMobile = document.querySelector('.searchIconMobile');
    searchIconMobile.addEventListener('click', ()=>{
        mobileBox.classList.remove("smOpen");
    })


$(document).ready(function(){  

    //* SLICK SLIDER *//
    $('.bannerSlider').slick({
        arrows :false,
        dots : true,
        dotsClass :`bannerDots container`,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $(".bannerSliderSm").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
  });

    //* BOOTSTRAP TOOLIP *//

    const tooltipTriggerList = document.querySelectorAll
    ('[data-bs-toggle="tooltip"]');
   const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//* NEW PRODUCT SLIDER *//
$(".ProductsSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "#productLeftArrow",
    nextArrow: "#productRightArrow",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
         
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
         
        }
      },
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


});

//* Deals Of The Days
$('.Timer').countdown('2025/01/01', function(event) {
  // event.strftime('%w weeks %d days %H:%M:%S')
  $(`.days`).html(event.strftime(' %d '));

  $(`.Hour`).html(event.strftime(' %H '));

  $(`.Minute`).html(event.strftime(' %M '));

  $(`.Sec`).html(event.strftime(' %S '));
  
});

// $('.FairnessCream').slick({
//   slidesToShow: 4,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   prevArrow: "#productLeftArrow",
//   nextArrow: "#productRightArrow",

 });

$('.creamSlider').slick({
  slidesToShow: 2,
  arrows :false,
  autoplay: true,
  dots : true,
  dotsClass :`creamDots `,
  autoplaySpeed: 2000,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
       
      },
    },

    
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });

  $('.dealsofthedaysm').slick({
    slidesToShow: 1,
    arrows :false,
    autoplay: true,
    dots : true,
    dotsClass :`creamDots `,
    autoplaySpeed: 2000,
  
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,

         
        },
      },
  
      // {
      //     breakpoint: 750,
      //     settings: {
      //       slidesToShow: 1,
           
      //     },
      //   },
  
      //   {
      //     breakpoint: 400,
      //     settings: {
      //       slidesToShow: 1,
           
      //     },
      //   },
      
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
    });

  $('.productSlider').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    dots: true,   
    dotsClass: 'linear',


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
         
        },
      },

      {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
           
          },
        },

        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
           
          },
        },
      
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.tSlider').slick({
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    dots: true,   
    dotsClass: 'linear',


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
         
        },
      },

      {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
           
          },
        },

        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
           
          },
        },
      
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 $(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
    offset:70,
    beginAt:100,
});
 });
 $('.reviewSlider').slick({

  slidesToShow: 1,
  arrows :false,
  autoplay: true,
  dots : true,
  dotsClass :`creamDots `,
  autoplaySpeed: 2000,
  Infinity:true,
  speed:500,
  fade:true,
  cssEase:'liner'

  });
  $('.ProductsSliderclassic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "#productLeftArrow",
    nextArrow: "#productRightArrow",
  });

  // COUNT UP STARTS HERE
let dec = document .querySelector(".dec")
let result = document .querySelector(".result")
let inc = document .querySelector(".inc")

inc.addEventListener('click' , function(){
   
    if (result .value <=30){
        result .value = Number(result .value) +1;
    }
})

dec.addEventListener('click' , function(){
    if (result .value >=1){
        result .value = Number(result .value) -1;
    }
 })

 
 // COUNT UP ENDS HERE
// product Gallary Slider
$('.productgallaryslider').slick({
  arrows: false,
  asNavFor:'.productgallaryslidersm',
});
$('.productgallaryslidersm').slick({
  arrows: false,
  slidesToShow:5,
  centerMode: true,
  centerPadding: '0px',
  asNavFor:'.productgallaryslider',
  focusOnSelect: true,  
});


