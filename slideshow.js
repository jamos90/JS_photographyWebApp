 document.addEventListener('DOMContentLoaded', () =>
  var intervalId;

   function startSlideShow() {
     intervalId = setInterval(changeImage, 3000);
   }

   //will clear interval id ie stop the slideshow
   function stopSlideShow() {
     clearInterval(intervalId);
   }

  function changeImage() {
    let imageScoure = document.getElementById("image").getAttribute("src");
    let currentImageNumber = imageScoure.substring(imageScoure.lastIndexOf("/") +1 ,imageScoure.lastIndexOf("/") +2);

    if (currentImageNumber === 12){
      currentImageNumber = 0;
    };
    //number function changes currentImageNumber to a number and then adds one to it.

    //takes the current image source and changes it to the current image number, one at the start, to it's value plus 1.
    document.getElementById("image").setAttribute("src", "../public/slideshowimages/" + (Number(currentImageNumber) +1) + ".jpg");
  };
);
