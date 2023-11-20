
// light box

const  lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)


let mainImage = document.querySelector(".product-image")
let container = document.querySelector(".container1")

let img = document.querySelectorAll("img")

mainImage.addEventListener('click' , () => {
     
    let clone  = container.cloneNode("true")
    lightbox.classList.add('active')
    lightbox.appendChild(clone)

    const images = clone.querySelectorAll(".responsive")
    const MainImageLightbox = clone.querySelector(".product-image")

    images.forEach(image => {
        image.addEventListener("click" , () => {
            let src = image.src
            let changeSrc = src.replace("-thumbnail","")
            MainImageLightbox.src = changeSrc
        })
    } )
} )



