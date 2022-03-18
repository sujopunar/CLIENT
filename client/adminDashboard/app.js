

const btn = document.querySelector('.logout')

btn.onclick = ()=>{
    localStorage.setItem('adminLogedIn',"false")
    window.location.href = '/client/index.html'
}

//ALL USERS ARE HERE

//FETCHING ALL USERS
async function getAllUsers (){
    
    const response = await fetch('http://localhost:3000/allusers')
    const userData= await response.json()

    const tbody = document.querySelector('tbody')
    console.log(userData)
    console.log(tbody)

    
    
    const td = document.createElement('td')
    for(let k = 0; k<userData.length;k++){
        console.log(userData[k].lastBillPaidDate)
        const duration = window.moment().diff(window.moment(userData[k].lastBillPaidDate),'months');
        let image = false
        if(userData[k].lastBillPaidImage == 'noImage'){
            image = `<a>No Bill Paid</a>`
        }else{
            image = `<a href=${userData[k].lastBillPaidImage} download=${'billImageOf'+userData[k].username+".png"}>BILL IMAGE</a>`
        }
        
            const tr = document.createElement("tr")
            // console.log(userData[k].lastBillPaidDate)
            tr.innerHTML = `
                <th scope="row">${k}</th>
                <td>${userData[k].username}</td>
                <td>${userData[k].lastBillPaidDate}</td>
                <td>${duration} MONTHS
                </td>
                <td>${image}</td>
            `
            tbody.append(tr)
        }

    console.log('here')
//     

}

getAllUsers();




