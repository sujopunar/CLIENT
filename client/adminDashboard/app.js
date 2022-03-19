

const btn = document.querySelector('.logout')

btn.onclick = () => {
    localStorage.setItem('adminLogedIn', "false")
    window.location.href = '/client/index.html'
}

//ALL USERS ARE HERE

//FETCHING ALL USERS
async function getAllUsers() {

    const response = await fetch('http://localhost:3000/allusers')
    const userData = await response.json()

    const tbody = document.querySelector('tbody')

    for (let k = 0; k < userData.length; k++) {

        const duration = window.moment().diff(window.moment(userData[k].lastBillPaidDate), 'months');
        console.log(userData[k])
        console.log(duration)
        let image = "";
        console.log(userData[k].lastBillPaidImage)

        if (userData[k].lastBillPaidImage == 'noImage') {
            image = `<a>No Bill Paid</a>`
        } else {
            image = `<a href=${userData[k].lastBillPaidImage} download=${'billImageOf' + userData[k].username + ".png"}>BILL IMAGE</a>`
        }

        const tr = document.createElement("tr")

        tr.innerHTML = `
            <td>
              <div class="d-flex align-items-center">
              <img
              src="./profile.png"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
                <div class="ms-3">
                  <p class="fw-bold mb-1">${userData[k].firstName} ${userData[k].lastName}</p>
                  <p class="text-muted mb-0">${userData[k].email}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-muted mb-0">${userData[k].phone}</p>
              </td>
              <td>${duration} Months</td>
              <td>${userData[k].street}</td>
              <td>
                  <span style="background:${duration > 0 ? "red" : "green"};border-radius:10px;font-size:0.8rem;padding:0.2rem;color:white">${duration > 0 ? "NOT PAID" : "PAID"}</span>
              </td>
              <td>
                  ${image}
              </td>
            </td>
            `
        tbody.append(tr)
    }

    console.log('here')

}

getAllUsers();




