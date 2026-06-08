redBtn.addEventListener("click", function(){

    const boxes = document.querySelectorAll(".shape-box");

    boxes.forEach(function(box){
        box.style.backgroundColor = "red";
    });

});