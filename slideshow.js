function changeImage() {
  const imageScoure = document.getElementById("image").getAttribute("src");
  const currentImageNumber = imageScoure.substring(imageScoure.lastIndexOf("/") +1 ,imageScoure.lastIndexOf("/") +2);

  //takes the current image source and changes it to the current image number, one at the start, to it's value plus 1.
  document.getElementById("src").setAttribute("src", "/slideshowimages" + (currentImageNumber ++) + ".jpg"  );
}
