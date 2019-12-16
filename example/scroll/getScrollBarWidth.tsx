export default function scrollbarWidth() {
    const body = document.body;
    const box = document.createElement('div');
    const boxStyle = box.style;

    boxStyle.position = 'absolute';
    boxStyle.top = boxStyle.left = '-99999px';
    boxStyle.width = boxStyle.height = '100px';
    boxStyle.overflowX = 'scroll';
    boxStyle.overflowY = 'scroll';
    box.classList.add('seele-hide-scrollbar');

    body.appendChild(box);

    const width = box.offsetWidth - box.clientWidth;

    body.removeChild(box);

    return width;
}
