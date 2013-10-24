/* Попробуем не использовать jQuery */
function toggleSpoiler() {
    var btn = document.getElementById('toggleBtn');
    var el = document.getElementById('spoiler');
    if (el.style.display === 'block') {
        btn.innerText = 'Показать текст';
        el.style.display = 'none'
    } else {
        btn.innerText = 'Скрыть текст';
        el.style.display = 'block'
    }
}

function addContent() {
    var el = document.getElementsByClassName('pad')[0];
    if(typeof(el.innerText) != 'undefined') {
        el.innerText += ' Декскриптор.';
    } else {
        el.textContent += ' Декскриптор.';
    }
}