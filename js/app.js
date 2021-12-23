const nav = document.querySelector('.navbar');
const lis = nav.querySelectorAll('li');

lis.forEach(li => {
    li.classList.remove('active');
    if(window.location.pathname === `/projekti-ubt/${li.id}.html`){
        li.classList.add('active');
    }

    if(window.location.pathname === `/projekti-ubt/`){
        li.classList.add('active');
    }
})