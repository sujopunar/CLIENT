console.log('here')

const form = document.querySelector('form')


  //GETTING USER ID FROM PARAMS
  address = window.location.search
  parameterList = new URLSearchParams(address)
  const id = parameterList.get("id")

  const alerta = document.querySelector('.alert');
  console.log(alerta)
async function fetchLogedInUser () {
  const user =  await fetch(`http://localhost:3000/user/${id}`)
  const userObject = await user.json()
  console.log(userObject)
  const monthsBillNotPaid = window.moment().diff(window.moment(userObject[0].lastBillPaidDate),'months');
  console.log(monthsBillNotPaid,userObject)
 alerta.querySelector('.month').innerHTML = monthsBillNotPaid;
 alerta.querySelector('.bill').innerHTML = "$" + monthsBillNotPaid*400;
}
fetchLogedInUser()

form.onsubmit = async (event) => {
  event.preventDefault()

  //VALIDATION
  if(!form.file.files[0]) {
    console.log('please select an image')
    return
  }

  // BASE 64 CONVERTION OF THE IMAGE.
  const file = form.file.files[0];
 const image = await base64(file)

  //POSTING TO UPDATE LASTBILLDATE
  const response = await fetch("http://localhost:3000/userbill", {
    method: 'POST',
    body: JSON.stringify({
      userId: id,
      billImage:image,
      lastBillPaidDate:new Date()
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

  const data = await response.json()
  
  //RESPONSE TO USER
  if(data.billPaid){
    alert('paid')
  }else{
    alert('not paid')
  }

}


const base64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};