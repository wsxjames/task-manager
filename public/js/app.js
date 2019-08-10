console.log('client side js loading!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(search.value)
    messageOne.textContent = 'Loading...'
    fetch('/users/5d4d04a0fa7b6d060c23c174', { method: 'GET' }).then(response => {
        response.json().then((data) => {
            if (data.error) {
                console.log("error")
                messageTwo.textContent = 'error'
            } else {
                console.log(data)
                messageOne.textContent = JSON.stringify(data)
            }
        })
    })
})