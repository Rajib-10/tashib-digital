const SubhanAllahDisplay = document.getElementById("SubhanAllahDisplay");
const SubhanAllahIncremet = document.getElementById("SubhanAllahIncremet");
const SubhanAllahDecremet = document.getElementById("SubhanAllahDecremet");

const AlhamdurillahDisplay = document.getElementById("AlhamdurillahDisplay");
const AlhamdurillahIncremet =document.getElementById("AlhamdurillahIncremet");
const AlhamdurillahDecremet = document.getElementById("AlhamdurillahDecremet");

const AllahuakbarDisplay = document.getElementById("AllahuakbarDisplay");
const AllahuakbarIncremet = document.getElementById("AllahuakbarIncremet");
const AllahuakbarDecremet = document.getElementById("AllahuakbarDecremet");

const ResetAll = document.getElementById("Reset-all");

let SubhanAllahInitial  = 0;
let AlhamdurillahInitial = 0;
let AllahuakbarInitial = 0;

SubhanAllahIncremet.addEventListener("click",()=>{
    if(SubhanAllahInitial === 33){
        return alert("Subhan Allah finish.Try another one");
    }
    SubhanAllahInitial++;
    SubhanAllahDisplay.innerText = SubhanAllahInitial;
})
SubhanAllahDecremet.addEventListener("click",()=>{
    if(SubhanAllahInitial === 0){
        return alert("Value can not be negative");
    }
    SubhanAllahInitial--;
    SubhanAllahDisplay.innerText = SubhanAllahInitial;
})


AlhamdurillahIncremet.addEventListener("click",()=>{
    if(AlhamdurillahInitial === 33){
        return alert("Alhamdurillah finish.Try another one");
    }
    AlhamdurillahInitial++;
    AlhamdurillahDisplay.innerText = AlhamdurillahInitial;
})
AlhamdurillahDecremet.addEventListener("click",()=>{
    if(AlhamdurillahInitial === 0){
        return alert("Value can not be negative");
    }
    AlhamdurillahInitial--;
    AlhamdurillahDisplay.innerText = AlhamdurillahInitial;
})


AllahuakbarIncremet.addEventListener("click",()=>{
    if(AllahuakbarInitial === 33){
        return alert("Allahuakbar finish.Try another one");
    }
    AllahuakbarInitial++;
    AllahuakbarDisplay.innerText = AllahuakbarInitial;
})
AllahuakbarDecremet.addEventListener("click",()=>{
    if(AllahuakbarInitial === 0){
        return alert("Value can not be negative");
    }
    AllahuakbarInitial--;
    AllahuakbarDisplay.innerText = AllahuakbarInitial;
})

ResetAll.addEventListener("click",()=>{
    SubhanAllahDisplay.innerText = 0;
    AlhamdurillahDisplay.innerText = 0;
    AllahuakbarDisplay.innerText = 0;

    SubhanAllahInitial  = 0;
    AlhamdurillahInitial = 0;
    AllahuakbarInitial = 0;
})


   // Get references to the input element and the "Add" button
   const inputBox = document.getElementById('input-box');
   const addButton = document.getElementById('add-btn');

   // Add event listener to the "Add" button
   addButton.addEventListener('click', function() {
       // Get the value from the input element
       const inputValue = inputBox.value;

       // Do something with the inputValue, for example, you can add it to the list
       const list = document.getElementById('unorder-list');
       const listItem = document.createElement('li');
       listItem.textContent = inputValue;
       list.appendChild(listItem);

       // Clear the input box
       inputBox.value = '';
   });