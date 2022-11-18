function checkUserPass() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Marius1' && password === 'xyzw') {
        document.getElementById('try_success').style.display = 'block';
        document.getElementById('try_error').style.display = 'none';

        sessionStorage.setItem('userLogged', 'logged');
        window.location.replace('index.html');
    } else {
        document.getElementById('try_success').style.display = 'none';
        document.getElementById('try_error').style.display = 'block';
    }
}

function checkLoggedInUser() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log(userLoggedIn);
    if (userLoggedIn === 'logged') {
        window.location.replace('index.html');
    }
    
}