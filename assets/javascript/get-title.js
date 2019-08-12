export default function getTitle(route) {
    const titles = {
        '/about': 'О нашем центре',
        '/contacts': 'Контакты',
        '/': '«Виктори» - лечение зависимости в Луганске',
        '/lechenie-alkogolizma': 'Лечение алкоголизма в Луганске',
        '/lechenie-igromanii': 'Лечение игромании в Луганске',
        '/lechenie-narkomanii': 'Лечение наркомании в Луганске',
        '/reviews': 'Отзывы',
    };

    return titles[route];
};
