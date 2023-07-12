var createContent = document.getElementsByClassName('createContent')[0];
var userInput = document.getElementById('userInput');
var Note = document.getElementsByClassName('inside_container')[0];


document.getElementById('create_box').addEventListener('click',function(){
    // console.log('click');
    createContent.style.display='block';
})

document.getElementById('create_box').addEventListener('keydown',content);


function content(e){
    if(e.keyCode == '13'){
        createContent.style.display='none';
        // once complete the text you can use enter button to hide createbox....
    DisplayFun(userInput.value);
    userInput.value='';
    }
}

function DisplayFun(text){
    var div = document.createElement('div');
    div.className ='note';
    div.innerHTML = '<div class="details">'+text+'</div>';

    Note.appendChild(div);
}