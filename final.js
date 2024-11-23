document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('loggedInUser');
    const selectedTariff = localStorage.getItem('selectedTariff');
    const selectedSeat = localStorage.getItem('selectedSeat');
    const selectedDateTime = localStorage.getItem('selectedDateTime');
    const paymentStatus = localStorage.getItem('paymentStatus');

    const userDetails = document.getElementById('userDetails');
    const tariffDetails = document.getElementById('tariffDetails');
    const seatDetails = document.getElementById('seatDetails');
    const dateTimeDetails = document.getElementById('dateTimeDetails');
    const paymentDetails = document.getElementById('paymentDetails');

    if (user) {
        userDetails.textContent = `Пользователь: ${user}`;
    }

    if (selectedTariff) {
        tariffDetails.textContent = `Выбранный тариф: ${selectedTariff}`;
    }

    if (selectedSeat) {
        seatDetails.textContent = `Выбранное место: ${selectedSeat}`;
    }

    if (selectedDateTime) {
        const [selectedDate, selectedTime] = selectedDateTime.split('T');
        dateTimeDetails.textContent = `Дата и время: ${selectedDate}, ${selectedTime}`;
    }

    if (paymentStatus === 'successful') {
        paymentDetails.textContent = 'Оплата успешно выполнена.';
    } else {
        paymentDetails.textContent = 'Оплата не выполнена.';
    }

    if (user && selectedTariff && selectedSeat && selectedDateTime && paymentStatus === 'successful') {
        sendBookingEmail(user, selectedTariff, selectedSeat, selectedDateTime);
    }
});

function sendBookingEmail(user, tariff, seat, dateTime) {
    const emailBody = `
        Бронирование подтверждено!
        Пользователь: ${user}
        Тариф: ${tariff}
        Место: ${seat}
        Дата и время: ${dateTime}
    `;
    const mailtoLink = `mailto:info@clubxyz.ru?subject=Подтверждение бронирования&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}
