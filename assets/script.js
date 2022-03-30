var buttonEl = document.getElementById('button');
var iniciarQuiz = document.getElementsByClassName('iniciarQuiz');

buttonEl.addEventListener('click', function (){
    if(buttonEl === true){
        iniciarQuiz.setAttribute('style', 'display: none')
    }
})

