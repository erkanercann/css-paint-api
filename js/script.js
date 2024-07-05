import { random } from './utilities.js';

const body = document.body;
const huodiniBtn = document.querySelector('.huodini-button');

huodiniBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'huodini';
    div.attributeStyleMap.set(
        'left',
        random(0, window.innerWidth - 300) + 'px'
    );
    div.attributeStyleMap.set(
        'top',
        random(0, window.innerHeight - 300) + 'px'
    );

    body.appendChild(div);

    setTimeout(() => {
        body.removeChild(div);
    }, 3000);
});

(async () => {
    CSS.paintWorklet.addModule('js/worklet.js');
})();
