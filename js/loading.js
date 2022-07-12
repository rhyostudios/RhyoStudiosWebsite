window.onload = () =>{
    
    setInterval(()=>{
        document.getElementById("welcome-screen-id").style.top='-100vh'
        document.getElementById("loading-r").style.top='-100vh'
        document.getElementById("loading-h").style.top='-100vh'
        document.getElementById("loading-y").style.top='-100vh'
        document.getElementById("loading-o").style.top='-100vh'
        document.getElementById("loading-message-id").style.opacity='0'
    },500)
    setInterval(()=>{
        document.getElementById('welcome-screen-id').style.display='none'
    },2000)

}