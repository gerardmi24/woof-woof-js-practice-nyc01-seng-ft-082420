document.addEventListener('DOMContentLoaded', () =>{

    
  fetchDogs();
  clickHandler();
    
})

const dogsUrl = "http://localhost:3000/pups/"
const doginfo = document.querySelector('#dog-info')
//const divdogbar = document.querySelector('#dog-bar')

const fetchDogs = () => {
    fetch(dogsUrl)
   .then(resp => resp.json())
   .then(dogs => addDogs(dogs))

 }

const addDogs = (dogs) => {
     for(const dog of dogs){
         addDogToDom(dog)
     }
 }

const addDogToDom = (dog) =>{
    const divdogbar = document.querySelector('#dog-bar')
    let span = document.createElement('span')
    span.dataset.id = dog.id
    span.classList.add('dogspan')
    span.textContent = `${dog.name}`
    divdogbar.appendChild(span);

 }

 const dogInfoToDom = (dog) => {
    const doginfo = document.querySelector('#dog-info')
    doginfo.dataset.id = dog.id
    if(dog.isGoodDog === true){
        doginfo.innerHTML = `
          <img src="${dog.image}"/>
          <h2>${dog.name}</h2>
          <button class="good-bad-dog-button" data-id=${dog.id}/>
        `
    }
    if(dog.isGoodDog === false){
        doginfo.innerHTML = `
          <img src="${dog.image}"/>
          <h2>${dog.name}</h2>
          <button class="good-bad-dog-button" data-id=${dog.id}/>
        `
    }
 }

const clickHandler = () => {

    document.addEventListener('click', e => {
        if(e.target.matches('.dogspan')){
            const puppy = e.target 
            const puppyId = puppy.dataset.id

            fetch(dogsUrl + puppyId)
            .then(resp => resp.json())
            .then(pup => dogInfoToDom(pup))
        }
        else if

        if()
        
    })
}
if(goodDog == "Good Dog!"){
    button.textContent = "Bad Dog!"
    status = false
}
else if(goodDog == "Bad Dog!"){
    button.textContent = "Good Dog!"
    status = true
}
