window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const selectedTariff = localStorage.getItem('selectedTariff');
    const userInfo = document.getElementById('userInfo');
    const tariffInfo = document.getElementById('tariffInfo');

    if (loggedInUser) {
        userInfo.textContent = `Вы вошли как: ${loggedInUser}`;
    } else {
        userInfo.textContent = 'Информация о пользователе недоступна.';
    }

    if (selectedTariff) {
        tariffInfo.textContent = `Выбранный тариф: ${selectedTariff}`;
    } else {
        tariffInfo.textContent = 'Информация о выбранном тарифе недоступна.';
    }

    sendEmail(loggedInUser, selectedTariff);
};
