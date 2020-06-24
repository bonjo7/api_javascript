const url = 'http://api.icndb.com/jokes/random';

const getJokesBtn = document.querySelector('.btn.primary.u-full-width');
getJokesBtn.addEventListener('click', getJokes);

function getJokes(e){
    e.preventDefault();

    const number = document.querySelector('input').value;
    console.log('get jokes button clicked');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url + `/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke) {
                    output += `
                    <li><i class="fa fa-smile-o" aria-hidden="true"></i> ${joke.joke}</li>
                    <br>
                    `  
                });

            }else{
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    
}