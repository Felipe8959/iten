var txt1 = 'Confiança e credibilidade';
var txt2 = 'O ITEN – Instituto Tecnológico de Ensaios Ltda. – é um laboratório nacional de ensaios independentes que realiza os mais variados tipos de serviços e atua nas áreas elétrica, magnética, eletrônica, física, mecânica, óptica, térmica, acústica e química.';
var txt3 = 'Contamos com uma equipe de profissionais altamente qualificada e possuímos uma infraestrutura completa com diversas salas especiais para análises e ensaios e mais cinco salas para suporte e administração. Além disso, o principal objetivo da nossa empresa é fortalecer e proporcionar credibilidade aos produtos e serviços para os mais distintos segmentos do mercado.'
var speed = 20;

function typeWriter1() {
    var i = 0;
    function addChar() {
        if (i < txt1.length) {
            document.getElementById("welcome").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(addChar, speed);
        } else {
            typeWriter2();
        }
    }
    addChar();
}

function typeWriter2() {
    var i = 0;
    function addChar() {
        if (i < txt2.length) {
            document.getElementById("message").innerHTML += txt2.charAt(i);
            i++;
            setTimeout(addChar, speed);
        } else {
            typeWriter3();
        }
    }
    addChar();
}

function typeWriter3() {
    var i = 0;
    function addChar() {
        if (i < txt3.length) {
            document.getElementById("message2").innerHTML += txt3.charAt(i);
            i++;
            setTimeout(addChar, speed);
        }
    }
    addChar();
}

window.onload = function() {
    typeWriter1();
};


// Carregar página após o video ser carregado
var video = document.getElementById('background-video');

video.addEventListener('canplaythrough', function() {
    document.body.style.display = 'block';
}, false);

// Após 10 segundos, mostre a página mesmo que o vídeo não esteja totalmente carregado
setTimeout(function() {
    document.body.style.display = 'block';
}, 10000);