document.addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.closest('.review-propose')) {
        return alert('Спасибо! Ваш отзыв будет добавлен после проверки администратором');
    }

    alert('Спасибо! Мы ответим в ближайшее время');
});
