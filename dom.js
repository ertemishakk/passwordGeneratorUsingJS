document.getElementById('generate').addEventListener('click', createPassword)

function createPassword(){
    var len= document.getElementById('length').value;
    var password=''

    for(let i=0; i<len; i++){
        var random= Math.floor(Math.random()*94)+33
        password+= String.fromCharCode(random)
    }
 
    document.getElementById('result').innerText=password;


}
document.getElementById('clipboard').addEventListener('click',clipBoard)

function clipBoard(){
    
    var text= document.getElementById('result')
    var textarea= document.createElement('textarea')
    var password= text.innerText;
    if(!password){return;}
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove()

   

}