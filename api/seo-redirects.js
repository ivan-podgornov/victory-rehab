import path from 'path';

/**
 * Seo Redirects
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export default function seoRedirects(req, res, next) {
    const host = req.headers.host.replace('www.', '');
    const extension = req.url === '/' ? '/' : path.extname(req.url) || '.html';
    const url = req.url === '/' ? '' : req.url.replace(new RegExp('\\' + extension + '$'), '');
    const protocol = /^https?/.test(host) ? '' : 'http://';

    if (process.env.NODE_ENV === 'development') return next();

    if ((req.headers.host + req.url) !== (host + url + extension)) {
        return res.redirect(301, protocol + host + url + extension);
    }

    next();
}
