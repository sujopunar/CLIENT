console.log('here')

  //GETTING USER ID FROM PARAMS
  address = window.location.search
  parameterList = new URLSearchParams(address)
  const id = parameterList.get("id")

    async function fetchSingleUser(){
        const response = await fetch(`http://localhost:3000/user/${id}`);
        const data = await response.json();
        
        const name = document.querySelector('.firstName')
        name.innerHTML = data[0].firstName
    }

    fetchSingleUser()