// change image by clicking on thumbnail photo

const MainImage = document.querySelector(".product-image")
const images = document.querySelectorAll(".responsive")


images.forEach(image => {
   image.addEventListener('click',(e) => {
     let src = image.src
     let changeSrc = src.replace("-thumbnail", "")
     MainImage.src = changeSrc
    
   })
} )








