function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
$('.responsive_1').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 7,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 1500,
  pauseOnHover: true,
  cssEase: 'linear',




  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,

      }
    }
  ]
});
$('.responsive_2').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 900,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,

      }
    }
  ]
});