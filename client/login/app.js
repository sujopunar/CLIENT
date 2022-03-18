const form = document.querySelector('form')
const btn = document.querySelector('.btn');

form.onsubmit = async (event)=>{
    event.preventDefault()

    if(!(form.username.value) && !(form.password.value)) {
        console.log('please input usename & password')
        return 
    }

    const response = await fetch("http://localhost:3000/login", {
        method:'POST',
        body:JSON.stringify({
            username:form.username.value,
            password:form.password.value,
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })

    const data = await response.json()

    console.log(data)
    if(data.username){

        if(data.isAdmin){
            localStorage.setItem('adminLogedIn',true)
            window.location.href = '/client/adminDashboard/index.html?id='+data._id
        }else{
            window.location.href = "/client/userDashboard/index.html?id="+data._id
            localStorage.setItem('adminLogedIn',false)
            
        }
    }

}
    