console.log("hello world")

//1 - grab html element
//2 - write out function
//last - combine step one and step two adding an event listener

let message = document.querySelector('#message')


const addMovie = (event) => {
    event.preventDefault();

    let inputField = document.querySelector('input');

    if (inputField.value === "") {
        alert('you need to put something in there')
    } else {

        const movie = document.createElement("li");
        
        const movieTitle = document.createElement('span');
        
        movieTitle.textContent = inputField.value;
        
        movie.appendChild(movieTitle);

        const list = document.querySelector('ul');
        
        list.appendChild(movie);
        
        inputField.value = '';
        
        let deleteBtn = document.createElement('button');

        deleteBtn.textContent = "x";

        movie.appendChild(deleteBtn);
        
        movie.querySelector('button').addEventListener('click',deleteMovie)

        movieTitle.addEventListener('click', crossOffMovie)
    }
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }
} 


document.querySelector('form').addEventListener('submit', addMovie)

