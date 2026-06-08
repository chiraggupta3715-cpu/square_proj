ovalBtn.addEventListener("click",function(){

 const boxes =document.queryselectorAll(".shape-box");

  boxes.forEach(function(box){

        box.style.width = "150px";

        box.style.height = "100px";

        box.style.borderRadius = "50";


    });
});
