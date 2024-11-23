function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const regMessage = document.getElementById("regMessage");

    if (password !== confirmPassword) {
        regMessage.textContent = "Пароли не совпадают.";
        return false;
    }

    if (password.length < 6) {
        regMessage.textContent = "Пароль должен содержать не менее 6 символов.";
        return false;
    }

    const user = { username, email, password };
    localStorage.setItem('user_' + username, JSON.stringify(user));

    regMessage.style.color = "green";
    regMessage.textContent = "Регистрация успешна!";

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);

    return false;
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    const user = JSON.parse(localStorage.getItem('user_' + username));

    if (user && user.password === password) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Успешная авторизация!";

        localStorage.setItem('loggedInUser', username);

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);

        return false;
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Неверное имя пользователя или пароль.";
        return false;
    }
}

function displayLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userDisplay = document.getElementById('userDisplay');

    if (loggedInUser) {
        userDisplay.innerHTML = `Вы вошли как: ${loggedInUser} | <a href="#" onclick="logout()">Выйти</a>`;
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', displayLoggedInUser);
