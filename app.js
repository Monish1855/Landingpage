const mobile = document.querySelector('menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

mobilelink.addEventListener("click",function({
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
}))

var step = 100;
var stepfilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".hightlight-wrapper").animate({
        scrollLeft: "=" + step + "px"
    })
})
$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlighter-wrapper").animate({
        scrollLeft: "+" + step + "px"
    })
})

$(".back-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepfilter + "px" 
    })
})

$(".next-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepfilter + "px"
    })

})