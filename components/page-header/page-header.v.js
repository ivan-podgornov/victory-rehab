class PageHeader {
    constructor(element) {
        this.element = element;
        document.addEventListener('scroll', this.OnScroll.bind(this));
    }

    OnScroll() {
        const offset = window.pageYOffset || document.documentElement.offsetTop;
        const headerHeight = this.element.offsetHeight;
        this.element.classList.toggle('page-header--fixed', offset > headerHeight);
    }
}

requestAnimationFrame(() => {
    const header = document.querySelector('.page-header');
    if (header) new PageHeader(header);
});
