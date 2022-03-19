console.log("here");

//GETTING USER ID FROM PARAMS
address = window.location.search;
parameterList = new URLSearchParams(address);
const id = parameterList.get("id");

async function fetchSingleUser() {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data = await response.json();

  const name = document.querySelector(".firstName");
  name.innerHTML = data[0].firstName;

  const tr = document.createElement("tr");
  tr.classList.add(userData[k]._id);
  tr.innerHTML = `
    <td >
              <div class="d-flex align-items-center">
              <img
              src=${src}
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
                <div class="ms-3">
                  <p class="fw-bold mb-1">${userData[k].firstName} ${
    userData[k].lastName
  }</p>
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
                  <span style="background:${
                    duration > 0 ? "red" : "green"
                  };border-radius:10px;font-size:0.8rem;padding:0.2rem;color:white">${
    duration > 0 ? "NOT PAID" : "PAID"
  }</span>
              </td>
              <td>
                  ${image}
              </td>
            </td>
            `;
}

fetchSingleUser();
