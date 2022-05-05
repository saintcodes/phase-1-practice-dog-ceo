console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(data => {
    const images = data.message
    images.forEach(image => {
      let img = document.createElement('img')
      let dogImage = document.createElement('ul')
      document.body.append(dogImage)
      img.src = image
      dogImage.append(img)
  })
})


fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      const breeds = data.message
      const dogBreed = document.querySelector('#dog-breeds')
      // console.log(breeds)
      const breedNames = Object.keys(breeds)
      // console.log(breedNames)
      for (const breeds of breedNames) {
        let li = document.createElement('li')
        dogBreed.append(li)
        li.innerHTML = breeds
        li.addEventListener('click', changesColor)
      }
    })

function changesColor(e) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16)
  e.target.style.color = "#"+randomColor
}

//create function where dropdown letter equal to first letter of each
//word in the list "onchange"
