rectangleBtn.addEventListener("click", function(){

    const boxes = document.querySelectorAll(".shape-box");

    boxes.forEach(function(box){
        box.style.width = "150px";
        box.style.height = "100px";
        box.style.borderRadius = "0";
    });

});