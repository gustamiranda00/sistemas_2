
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Limpa a lista antes de adicionar os novos itens

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}

window.onload = loadUsers;
