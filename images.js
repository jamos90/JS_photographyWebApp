  window.onload  = () => {

  const content = document.getElementById('image-holder');

    content.onmouseover = function () {
      document.getElementById('image-div').style.display ='block';
    }
    content.onmouseout = function () {
      document.getElementById('image-div').style.display ='none';
    }

  };
