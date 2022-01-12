function clone(){
    console.log('test');
    var x = document.createElement('div');
    x.className = 'errorMsg';
    document.body.appendChild(x);

    var top = document.createElement('div');
    top.className = 'top';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].appendChild(top);

    var text = document.createElement('p');
    text.innerHTML = 'Error!'
    text.className = 'topText';
    document.getElementsByClassName('top')[document.getElementsByClassName('errorMsg').length-1].appendChild(text);

    var text = document.createElement('p');
    text.innerHTML = '✖'
    text.className = 'x';
    document.getElementsByClassName('top')[document.getElementsByClassName('errorMsg').length-1].appendChild(text);

    var content = document.createElement('div');
    content.className = 'content';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);

    var content = document.createElement('p');
    content.innerHTML = 'Your computer has detected that you have moved your mouse. Please click OK to fix.'
    content.className = 'contentText';
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);

    var exit = document.createElement('p');
    exit.innerHTML = 'OK';
    exit.className = 'exitBtn';
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(exit);

    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.left = (Math.floor(Math.random() * window.innerWidth)-175) + 'px';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.top = (Math.floor(Math.random() * window.innerHeight)-50) + 'px';

    //window.open('https://origamitician.github.io/', 'VIRUS!', 'width=200,height=100')

    for (var i = 0; i < document.getElementsByClassName('errorMsg').length; i++){
        document.getElementsByClassName('exitBtn')[i].addEventListener('click', openRickroll);
    }
}

document.body.addEventListener('mousemove', function outerClone(){
    clone()
});

var randomCoordinate;
function openRickroll(){
    randomCoordinate = 'left=' + (Math.floor(Math.random() * window.innerWidth)-175) + ', top=' + (Math.floor(Math.random() * window.innerHeight)-50) +', width=400,height=200' ;
    console.log('exited');
    this.style.display = 'none';
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'VIRUS!', randomCoordinate);
}

