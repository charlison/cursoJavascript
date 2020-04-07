var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/charlison');
xhr.send(null);

xhr.onreadstatechange = function(){
    if(xhr.readState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}