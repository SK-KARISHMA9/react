const colors= ['Red','green','yellow','blue','violet','skyblue','pink']
 const body= document.querySelector("body")
const button=document.queryselector("button")
 button.addEventListener("click",function(){
    const randomNumber =getRandomNumber();
                document.body.style.backgroundcolor=colors[randomNumber];
                    button.textcontent=colors[randomNumber];
 });
 function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
 }