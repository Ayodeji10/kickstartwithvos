// about 
document.getElementById('open-about').addEventListener('click',
    function (e) {
        e.preventDefault();
        document.querySelector('#about').style.display = 'flex';
        document.querySelector('#body').style.overflow = 'hidden';
    });

document.getElementById('close').addEventListener('click',
    function (e) {
        e.preventDefault();
        document.querySelector('#about').style.display = 'none';
        document.querySelector('#body').style.overflow = 'visible';
    });


// workshop 
document.getElementById('open-workshop').addEventListener('click',
    function (e) {
        e.preventDefault();
        document.querySelector('#workshop').style.display = 'flex';
        document.querySelector('#body').style.overflow = 'hidden';
    });

document.getElementById('close').addEventListener('click',
    function (e) {
        e.preventDefault();
        document.querySelector('#workshop').style.display = 'none';
        document.querySelector('#body').style.overflow = 'visible';
    });

// enroll 
document.getElementById('open-enroll').addEventListener('click',
    function () {
        console.log('clicked')
        document.querySelector('#full-info').style.display = 'block';
    });




