const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});

const sendbutton=document.getElementById('.send-btn');
const userinput=document.getElementById('.user-input');
const chatbox=document.querySelector('.chat-box');

sendbutton.addEventListener('click',()=>{
    sendmessage();
});
userinput.addEventListener('keypress',(e)=>{
    if('e.key=== Enter'){
        sendmessage();
    }
   
});

  function sendmessage(){
    const message=userInput.value.trim();
    if (message !== ") {
        const messageDiv=document.createElement('div');
        messageDiv.classListadd('chat-message','sent');
        messagediv.innerHTML ='<P>${message} </p>';
        chatBox.appendChild(messageDiv);
        userInput.value=";
        chatbox.box.scrollTop=chatBox.scrollHeight;
    }

    }


