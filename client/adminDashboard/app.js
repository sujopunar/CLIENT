const btn = document.querySelector(".logout");
//when logg out button clicked
btn.onclick = () => {
  localStorage.setItem("adminLogedIn", "false");
  window.location.href = "/client/index.html";
};

//ALL USERS ARE HERE

//FETCHING ALL USERS // all users is an api made in allUsers file in routes
async function getAllUsers() {
  const response = await fetch("http://localhost:3000/allusers");
  const userData = await response.json();
  //query selector uses preorder traversal to look for tbody in document and stores the first value found in the constant tbody
  const tbody = document.querySelector("tbody");
  console.log(userData);
  console.log(tbody);
  //moment is a javascript library
  const td = document.createElement("td");
  for (let k = 0; k < userData.length; k++) {
    //the information of each user is rendered through this loop
    console.log(userData[k].lastBillPaidDate);
    const duration = window
      .moment()
      .diff(window.moment(userData[k].lastBillPaidDate), "months"); //shows us the difference in months(as seen in the second paramenter), user ks last paid is shown
    let image = false;
    if (userData[k].lastBillPaidImage == "noImage") {
      //if there is no image in the last bill paid
      image = `<a>No Bill Paid</a>`;
    } else {
      image = `<a href=${userData[k].lastBillPaidImage} download=${
        "billImageOf" + userData[k].username + ".png" //.png is the format and the image is downloaded with the name in the bravkets
      }>BILL IMAGE</a>`;
    }
    //this creates an html tr tag. In bootstrap tr is used to create a column .
    const tr = document.createElement("tr");
    // console.log(userData[k].lastBillPaidDate)
    tr.innerHTML = `
                <th scope="row">${k}</th>
                <td>${userData[k].username}</td>
                <td>${userData[k].lastBillPaidDate}</td>
                <td>${duration} MONTHS
                </td>
                <td>${image}</td>
            `; // these values were created in the code above and then are now being shown through the creation of html tags through javascript
    tbody.append(tr); //append pushes these values in the tbody tag. tbody is a tag already called in the index.html file.
  }

  console.log("here");
  //
}

getAllUsers();
