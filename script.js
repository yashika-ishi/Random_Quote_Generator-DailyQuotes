const quoteText=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
quoteBtn= document.querySelector("button");
voiceBtn= document.querySelector(".voice");
copyBtn= document.querySelector(".copy");
x_twitterBtn = document.querySelector(".x_twitter");

//using function random quote
function randomQuote(){
    quoteBtn.classList.add("Loading")
    quoteBtn.innerText="Generating Quote..."
    fetch("https://api.quotable.io/random").then(res=> res.json()).then(result=>{
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("Loading");
    });
}

//voice button
voiceBtn.addEventListener("click",()=>{
   //SpeechSynthesisUtterance = web speech API{ a speech request}
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speek method
});

 //copy event
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
 });


x_twitterBtn.addEventListener("click",()=>{
    let posturl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(posturl,"_blank");
 });

quoteBtn.addEventListener("click",randomQuote);
