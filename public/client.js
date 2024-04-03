const socket=io()
let name;
do{
    name=prompt("Enter userName")
}while(!name)
const input=document.querySelector('#input')
const form=document.querySelector('#form')
function appendmsg(msg,type){
    const list=document.createElement('div')  
    let className=type
    list.classList.add(className, "message")
    let markup=`
    <h1>${msg}</h1>
    `
    list.innerHTML=markup
    msg_container.appendChild(list)
  }
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    if(input.value){
      socket.emit('message',input.value)
     appendmsg(input.value,'outgoing')}})
   
     socket.on("message",(msg)=>{
        appendmsg(msg,"recieve")
     })