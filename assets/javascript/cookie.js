const Cookie = {};

/**
 * Возвращает куки с указанным name, или undefined, если ничего не найдено
 * @param {String} name
 * @returns {String|null}
 */
Cookie.get = function(name) {
    const detector = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")
    const matches = document.cookie.match(detector);
    return matches ? decodeURIComponent(matches[1]) : null;
};

export default Cookie;
