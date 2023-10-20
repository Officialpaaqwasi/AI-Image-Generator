 const generateform = document.querySelector(".generate-form");
 const generateform = document.querySelector(".generate-form");


 const handleFormSubmission = (e) => {
  e.preventDefault();

  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;


  const imgCardMarkup = Array.from((length: userImgQuantity), -() ->
  `<div class="img-card loading">
  <img src="images/loader.svg" alt="image">
  <a href="#" class="download-btn">
    <img src="images/download.svg" alt="download icon">
   </a>
  </div>`
  ).join("")

  imageGallery.innerHTML = imgCardMarkup;
 }
 generateform.addEventListener("submit", handleFormSubmission);