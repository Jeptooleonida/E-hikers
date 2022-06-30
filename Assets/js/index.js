// function to display customer reviews
document.addEventListener("DOMContentLoaded", () => {
    let reviewmsg = document.querySelector("#reviewmsg")
    reviewmsg.addEventListener("submit",(e) =>{
        e.preventDefault();
        postComment(document.getElementById('custreview').value)
        reviewmsg.reset()

    })
});

function postComment(comment){
    let li = document.createElement("li")
     let btn = document.createElement("button")
     btn.addEventListener('click', deletebtn)
     btn.textContent="X"
    li.textContent = `${comment}`
    li.appendChild(btn);
    document.querySelector('#unordered').appendChild(li);   
};

function deletebtn(e){
    e.target.parentNode.remove()
}

// code to display the like functionality
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const tapHeart = document.querySelectorAll('.like-glyph');

tapHeart.forEach(element =>{
    element.addEventListener('click',() =>{
        if (element.textContent === EMPTY_HEART) {
            element.textContent = FULL_HEART
            element.className = 'activated-heart'
        }
        else {
            element.textContent = EMPTY_HEART
            elememt.className = 'activated-heart'
          }
    })

});