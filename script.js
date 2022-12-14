currentDate=new Date();
console.log(currentDate);

//fetch data from user
var input=document.getElementById('input');
var btnClick=document.getElementById('btn');
var paragraph=document.getElementById('para');

//button click
btnClick.addEventListener('click',function(){
    var para=document.createElement('p');
    paragraph.appendChild(para);
    para.innerHTML=input.value;
    input.value="";

    //single click action
    para.addEventListener('click',function(){
        para.style.textDecoration='line-through';
    })
    //double click action
    para.addEventListener('dblclick',function(){
        paragraph.removeChild(para);
    })
})
