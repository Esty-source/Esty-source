const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.AddEventListener( 'click', () => {
    container.classList.add("active");
});

loginBtn.AddEventListener( 'click', () => {
    container.classList.remove("active");
});