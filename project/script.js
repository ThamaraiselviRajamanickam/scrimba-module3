
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

var countNumber=document.getElementById("count-el")
var saveEl=document.getElementById("save-el")
let count=0;
function increment(){
        // Change this to use the plus equal technique you've learned
    count += 1;
    countNumber.innerHTML=count
     
}
function save(){
    var countStr=count + " - ";
    //we store prevoius count
    saveEl.textContent += countStr;
    countNumber.textContent=0;
    count=0;
}


