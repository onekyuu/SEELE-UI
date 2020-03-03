export default function scrollbarWidth() {
    const body = document.body;
    const box = document.createElement('div');
    const boxStyle = box.style;

    boxStyle.position = 'absolute';
    boxStyle.top = boxStyle.left = '300px';
    boxStyle.width = boxStyle.height = '100px';
    boxStyle.overflowX = 'scroll';
    boxStyle.overflowY = 'scroll';

    body.appendChild(box);

    const width = navigator.platform.indexOf('Mac') === 0 ? 14 : box.offsetWidth - box.clientWidth;

    body.removeChild(box);

    return width;
}
