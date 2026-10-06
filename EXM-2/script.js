function getJoke() {
fetch("https://official-joke-api.appspot.com/random_joke")
        .then(item => item.json())
        .then(joke => display(joke))
        .catch(err => console.log(err));
}
function display(joke) {
 document.getElementById("joke").innerHTML=joke.setup
 document.getElementById("punch").innerHTML=joke.punchline;
}