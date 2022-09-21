$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.tag').each(function(){
    var el = $(this);
    var disp = el.css("display");
    el.css("display","inline");
    el.width(el.width());
    el.css("display",disp);
});