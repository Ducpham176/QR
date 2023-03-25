const createButtonBtn = document.getElementById('create');
const inputText = document.getElementById('link');
const codeImg = document.getElementById('code');
const complete = document.getElementById('complete');
const imgClass = document.querySelector('.image');

createButtonBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    createButtonBtn.classList.add('active');
    complete.classList.add('show');
    let value = inputText.value;
    //  - Ngăn chặn hành vi mặc định của button ví dụ loatding...
    if(value.length > 0 && typeof value != 'number') {
        let src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' + value;
        setTimeout(function() {
            codeImg.firstElementChild.src = src;
            imgClass.style.filter = 'blur(10px)';
            setTimeout(function() {
            imgClass.style.filter = 'none';
            }, 800)
            createButtonBtn.classList.remove('active');
            complete.classList.remove('show');
            complete.innerHTML = '✔'
            setTimeout(function() {
                complete.innerHTML = '';
            }, 2700);
        }, 1100);

    }
})