function addContent() {
    var el = document.getElementById('content');
    el.innerHTML = el.innerHTML + ' Абракадабра.';
}

function spoile() {
    var el = document.getElementById('spoiler');
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
}