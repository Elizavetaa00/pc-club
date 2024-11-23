function regUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const regMessage = document.getElementById("regrMessage");

    if (password !== confirmPassword) {
        regMessage.textContent = "Пароли не совпадают.";
        return false;
    }

    if (password.length < 6) {
        regMessage.textContent = "Пароль должен содержать не менее 8 символов.";
        return false;
    }
    const user = { username: username, email: email, password: password };
    localStorage.setItem('user', JSON.stringify(user));

    regMessage.style.color = "green"
    regMessage.textContent = "Авторизация успешна!";

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
    return false;
}