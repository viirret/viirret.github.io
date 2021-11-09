const formRegister = document.querySelector('#form-register')
const submitter = document.querySelector('#submitter')

submitter.addEventListener('click', myRequest)

function myRequest(e) {
    e.preventDefault();
    
    let sec = document.querySelector('#question').value

    if(sec == !{testObj}.ans)
    {

        // defining input values
        let Firstname = document.querySelector('#firstname').value
        let Lastname = document.querySelector('#lastname').value
        let Email = document.querySelector('#email').value
        let Phone = document.querySelector('#phone').value
        let Company = document.querySelector('#company').value
        let Msg = document.querySelector('#msg').value

        const data = {
            firstname: Firstname,
            lastname: Lastname,
            email: Email,
            phone: Phone,
            company: Company,
            msg: Msg
        }

        console.log(JSON.stringify(data))

        fetch('/api/people', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        
        .then(function(html) {
            document.body.innerHTML = html  
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    else
    {
        console.log('Not correct!')
    }
}
