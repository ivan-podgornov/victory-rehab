/**
 * Seo Redirects
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export default function seoRedirects(req, res, next) {
    if (['/index.html', 'index.php', 'index'].includes(req.url)) {
        res.redirect(301, req.headers.host);
        return;
    }

    const url = (req.url === '/') ? '' : req.url;
    const startUrl = req.headers.host + url;

    const resultUrl = 'https://'
        + req.headers.host.replace('www.', '')
        + url.replace(/\/$/, '');

    if (startUrl !== resultUrl.slice('https://'.length)) {
        res.redirect(301, resultUrl);
        return;
    }

    next();
}
