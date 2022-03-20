console.log("here");

//GETTING USER ID FROM PARAMS
address = window.location.search;
parameterList = new URLSearchParams(address);
const id = parameterList.get("id");

async function fetchSingleUser() {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data = await response.json();

  console.log(data);
  const name = document.querySelector(".firstName");
  name.innerHTML = data[0].firstName;

  const td1 = document.querySelector(".email");
  const td2 = document.querySelector(".firstName");
  const td3 = document.querySelector(".lastName");
  const td4 = document.querySelector(".phone");
  const td5 = document.querySelector(".duration");
  const td6 = document.querySelector(".street");

  // const tbody = document.querySelector("tbody");
  // // SETTING INNER HTML = "" SO THAT WE CAN START NEW EACH TIME THIS FUNCITON IS CALLED.
  // tbody.innerHTML = "";

  // FINDING USER LAST PAID DATE.
  const duration = window
    .moment()
    .diff(window.moment(data[0].lastBillPaidDate), "months");

  console.log(data);
  console.log(td1, td2, td3, td4, td5, td6);
  td1.innerHTML = data[0].email;
  td2.innerHTML = data[0].firstName;
  td3.innerHTML = data[0].lastName;
  td4.innerHTML = data[0].phone;
  td5.innerHTML = data[0].street;
  td6.innerHTML = data[0].street;

  if ((billRequest = true)) {
    // CONDITIONAL RENDERING OF IMG TAG DEPENDING ON IF THE USER HAS SUBMIT A RECEIPT
    let image = "";
    if (data[0].lastBillPaidImage == "noImage") {
      image = `<a>No Bill Paid</a>`;
    } else {
      image = `<a href=${data[0].lastBillPaidImage} download=${
        "billImageOf" + data[0].username + ".png"
      }>BILL IMAGE</a>`;
    }
    
  }
}

fetchSingleUser();
