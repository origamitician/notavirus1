

var listOfQuotes = [
    'Your computer has detected that you have moved your mouse. Please click OK to fix.',

    'Are you sure you want to exist?',

    'Task failed successfully.',

    'Windows is collecting information about the problem. This may take several years. Do not turn off or close your computer during this time.',

    'If cliques were polymers, and your crush is a monomer within that polymer, perform hydrolysis so you can bond with her.',

    'Do you want to delete Earth?',

    'Keyboard is not responding. Please press Space.',

    'Your computer is not happy. Please cheer it up.',

    '<iframe width="320" height="200" src="https://www.youtube.com/embed/QB7ACr7pUuE?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe width="320" height="200" src="/mlp.mp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

]

var listOfResponses = ['OK','No','Try again','Force close','Hydrolyze!','Yes','OK', 'No','Thank you', 'My Little Pony']



function clone(){
    document.getElementById('hitbox').style.backgroundColor = 'white';
    document.body.backgroundColor = 'white';
    document.body.style.cursor = '';

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
    var r = Math.floor(Math.random() * listOfQuotes.length)
    if(r == 8){
        if(Math.floor(Math.random() * 10) == 1){
            content.innerHTML = listOfQuotes[r];
            document.getElementsByClassName('topText')[document.getElementsByClassName('errorMsg').length-1].innerHTML = 'Haha you got rickrolled xD!'
            content.className = 'contentText';
            document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);
            setInterval(function(){
                content.style.left = (Math.floor(Math.random() * window.innerWidth)-175) + 'px';
                content.style.top = (Math.floor(Math.random() * window.innerHeight)-50) + 'px';
            }, 2000)
        }else{
            
            content.innerHTML = 'You are stupid enough to go on this website.'
            content.className = 'contentText';
            document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);
        }
    }else if (r==9){
        if(Math.floor(Math.random() * 2) == 1){
            content.innerHTML = listOfQuotes[r];
            document.getElementsByClassName('topText')[document.getElementsByClassName('errorMsg').length-1].innerHTML = 'Enjoy the music 😃'
            content.className = 'contentText';
            document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);
            setInterval(function(){
                content.style.left = (Math.floor(Math.random() * window.innerWidth)-175) + 'px';
                content.style.top = (Math.floor(Math.random() * window.innerHeight)-50) + 'px';
            }, 2000)
        }else{
            
            content.innerHTML = 'You are stupid enough to go on this website.'
            content.className = 'contentText';
            document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);
        }
    }else{
        content.innerHTML = listOfQuotes[r];
        content.className = 'contentText';
        document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);
    }
    
    

    var exit = document.createElement('p');
    exit.innerHTML = listOfResponses[r]
    exit.className = 'exitBtn';
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(exit);

    document.getElementById('hitbox').style.width = window.innerWidth + "px";
    document.getElementById('hitbox').style.height = window.innerHeight + "px";

    //random window pop up
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.left = (Math.floor(Math.random() * window.innerWidth)-175) + 'px';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.top = (Math.floor(Math.random() * window.innerHeight)-50) + 'px';

    document.getElementById("myAudio").cloneNode(true).play();

    //window follows mouse
    /*
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.left = event.clientX + 'px';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.top = event.clientY + 'px';*/

    //window.open('https://origamitician.github.io/', 'VIRUS!', 'width=200,height=100')

    for (var i = 0; i < document.getElementsByClassName('errorMsg').length; i++){
        document.getElementsByClassName('exitBtn')[i].addEventListener('click', openRickroll);
    }

    for (var i = 0; i < document.getElementsByClassName('errorMsg').length; i++){
        document.getElementsByClassName('x')[i].addEventListener('click', closeWindow);
    }
}

document.body.addEventListener('mousemove', function outerClone(){
    clone()
});

var randomCoordinate;
var randomName = ['haha get rekt', 'rickroll!', 'VIRUS!', 'What\'s your life', 'You are an idiot', 'iamrobloxpro379', 'fortnite is dead', 'minecraft rules', 'sub to my yt', 'ur mom']
function openRickroll(){
    var counter = 0;
    /*if(this.innerHTML == 'Force close'){*/
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }
        for (var j = 0; j < document.getElementsByClassName('errorMsg').length; j++){
            document.getElementsByClassName('errorMsg')[0].remove();
        }

        document.getElementById("myAudio2").play();
        document.body.style.backgroundColor = 'black';
        document.getElementById('hitbox').style.backgroundColor = 'black';
        document.body.style.cursor = 'none';
    /*}*/
    
}

function closeWindow(){
    this.style.display = 'none';
}

