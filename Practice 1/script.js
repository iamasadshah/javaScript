var rect = document.querySelector("#center");

rect.addEventListener('mousemove', function(detail){
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRect = detail.clientX - rectangleLocation.left;

    if (insideRect < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: 'rgb(red, 0, 0)',
            ease: Power3,
        });
    }else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRect);
        gsap.to(rect, {
            backgroundColor: 'rgb(0, 0, red)',
            ease: Power3,
        });
    }

})

rect.addEventListener('mouseleave', function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
})