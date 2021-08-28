//closure and IIFE
function openWindow() {
    var myWindow=window.open("","myWindow","width=500,height=500");
    myWindow.document.write("This is myWindow");
    setTimeout(function()//IIFE means Immediately Invoked Function Expression. 
    { myWindow.close()},2000);
  } 


  

 