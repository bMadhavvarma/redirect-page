document.addEventListener("DOMContentLoaded", function() {
    var tenthClassContainer = document.getElementById("10thClass");
    var twelfthClassContainer = document.getElementById("12thClass");
 let textPara=  document.querySelector(".text-para");
 textPara.addEventListener("click",function(){
    document.getElementById("content-1").style.display = "block";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "none";
    textPara.innerHTML="I am interested in";
 })
    tenthClassContainer.addEventListener("click", function() {
      document.getElementById("content-1").style.display = "none";
      document.getElementById("content-2").style.display = "block";
      document.getElementById("content-3").style.display = "none";
      textPara.innerHTML="back";
      
    });
  
    twelfthClassContainer.addEventListener("click", function() {
      document.getElementById("content-1").style.display = "none";
      document.getElementById("content-2").style.display = "none";
      document.getElementById("content-3").style.display = "block";
      textPara.innerHTML="back";
    });
  });
  