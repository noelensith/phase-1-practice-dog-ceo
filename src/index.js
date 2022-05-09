const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.querySelector('#dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breedsArr = []
ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)
function getImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(images => {
            const imgs = images.message
            let imgsArray = creatingImgElements(imgs)
            renderImgs(imgsArray)
        })
}

function creatingImgElements(imgs) {
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    });
}
function renderImgs(imgsArray) {
    imgsArray.forEach(element => {
        renderElement(element)
    });
}
function renderElement(element) {
    ulContainer.innerHTML += element
}

function getBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            breedsArr = Object.keys(breeds.message)
            const breedsLis = createLiElements(breedsArr)
            renderLis(breedsLis)
        })
}

function createLiElements(breeds) {
    return breeds.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    });
}

function renderLis(breedLis) {
    breedLis.forEach(element => {
        renderElement(element)
    });
}

function handleClick(event) {
    if (event.target.style.color === 'purple') {
        event.target.style.color = 'black'
    } else {
        event.target.style.color = 'purple'
    }
        
}

function handleChange(event) {
    const letter = event.target.value
    const filter = breedsArr.filter(breed => breed.startsWith(letter))
    const filterLis = createLiElements(filter)
    ulContainer.innerHTML = ''
    renderLis(filterLis)
}

getImages()
getBreeds()


