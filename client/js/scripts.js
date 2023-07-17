const buttonElment = document.getElementById('button');

const formElement = document.getElementById('form');

const fetchData = async () => {
    
    const response = await fetch('http://localhost:8000/api/users/123' , {
      method: 'POST'
    });
    const data = await response.json();
    console.log(data);
    
  };

// buttonElemnt.addEventListener('click' , fetchData);

formElement.addEventListener('submit' , event => {
  event.preventDefault();

  const number = event.target.number.value;

  fetch('http://localhost:8000/api/users/writeNumber' , {
    method: 'POST',
    body: JSON.stringify({ number }),
    headers: {
      Accept: '*/*',
      'Content-Type' : 'application/json'
    }
  })
  
  console.log(event.target.number.value);
});


