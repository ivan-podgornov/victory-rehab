export default class Marginizer {
    /**
     * Расставляет потомков элемента по высоте
     * @param {HTMLElement} element
     * @returns {void}
     */
    static marginize(element) {
        const columnsCount = this.howManyColumns(element);
        const rowsCount = this.howManyRows(element.children.length, columnsCount);
        const marginBottom = parseInt(getComputedStyle(element.firstElementChild).marginBottom, 10);

        if (rowsCount === 1) return;

        for (let i = 1; i < rowsCount; i++) {
            const elementsAtPreviousRow = this.getElementsAtRow(element.children, i - 1, columnsCount);
            const elementsAtCurrentRow = this.getElementsAtRow(element.children, i, columnsCount);

            elementsAtCurrentRow.forEach((element, i) => {
                const above = elementsAtPreviousRow[i];
                const difference = element.offsetTop - (above.offsetTop + above.offsetHeight);
                element.style.marginTop = -difference + marginBottom + 'px';
            });
        }
    }

    /**
     * @private Подсчитывает количество колонок в элементе
     * @param {HTMLElement} element
     * @returns {Number}
     */
    static howManyColumns(element) {
        for (let i = 1; i < element.children.length; i++) {
            const current = element.children[i];
            const previous = element.children[i - 1];

            if (current.offsetTop > previous.offsetTop) {
                return i;
            }
        }

        return 1;
    }

    /**
     * @private Подсчитывает количество строк в элементе
     * @param {Number} elementsCount
     * @param {Number} columnsCount
     * @returns {Number}
     */
    static howManyRows(elementsCount, columnsCount) {
        return elementsCount / columnsCount;
    }

    /**
     * @private Возвращает элементы с указанной строки
     * @param {NodeList} elements
     * @param {Number} rowNumber
     * @param {Number} columnsCount
     * @returns {Array<HTMLElement>}
     */
    static getElementsAtRow(elements, rowNumber, columnsCount) {
        const start = rowNumber * columnsCount;
        const end = start + columnsCount;
        return Array.prototype.slice.call(elements, start, end);
    }
};
