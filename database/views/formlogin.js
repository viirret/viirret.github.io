const formLogin = document.querySelector('#form-login')
const submitter = document.querySelector('#submitter')

submitter.addEventListener('click', myRequest)

function myRequest(e) {

    e.preventDefault();

    let Email = document.querySelector('#email').value
    let Password = document.querySelector('#password').value

    const data = {
        email: Email,
        password: Password
    }

    console.log(JSON.stringify(data))

    fetch('/info', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(token => {
        console.log('Success:', token.token);
        fetch('/api/people', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token.token
        }
        })
        .then(function(response) {
            return response.text()
        })
        .then(function(html) {
            document.body.innerHTML = html  
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}
