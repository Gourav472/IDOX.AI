function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
$('.responsive_1').slick({
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  arrows: false,
  ltr: true,
  cssEase: "linear",
  autoplaySpeed: 0,
  variableWidth:true,


  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 8,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 8,
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
        slidesToShow: 3,

      }
    }
  ]
});