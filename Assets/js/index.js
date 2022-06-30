

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

// function to implement the search functionality
//  let handleSearch = function(event){
//      event.preventDefault();
//     // call the search from the input 
//      let searchTerm = event.target.elements['search'].value;
     
//      // make the token term tokenized and ensure to remove spaces
//      let tokens = searchTerm
//                   .toLowerCase()
//                   .split('')
//                   .filter(function(token){
//                       return token.trim() !== '';

//                   });
    
//     if (tokens.length){
//         let searchTermRegex = new RegExp(tokens.join)
//     }
//  }


let getPlaces = () =>{
    const url = 'http://localhost:3000/Hiking_places'
    let result = JSON.stringify(db.json)
    fetch (url)
    .then (response => response.json())
    .then (searchData =>{
        let querySearch = document.getElementById('querySearch').value
        querySearch = querySearch.toLowerCase();
        let x = document.querySelector('#querySearch');
        x.innerHTML = ""

        for (i = 0; i <result.length; i++){
            let data = result[i];
            if (data.Name.toLowerCase().includes(input)) {
                const elem = document.createElement("li")
                x.appendChild(elem)
            }
        }

    })
    .catch(error => console.log(error))
}