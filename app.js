const usersDiv = document.querySelector('.users')

function getUsers() {
    console.log('hola')
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            usersDiv.innerHTML = '';
            res.data.forEach(user => {
                usersDiv.innerHTML += `
    <div class="user">
        <h3 class="name">${user.email}</h3>
        <h3 class="name">${user.name}</h3>
    </div>`
            });
        })
        .catch(err => console.error(err))

}
getUsers()