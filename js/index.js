
   // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const proj01 = document.getElementById("projeto1");
  const proj02 = document.getElementById("projeto2");
  const proj03 = document.getElementById("projeto3");
  const proj04 = document.getElementById("projeto4");
  const proj05 = document.getElementById("projeto5");
  const proj06 = document.getElementById("projeto6");


  function openImage(imgId){
    var captionText = document.getElementById("caption");
    var img01 = document.getElementById("img-01")
    var img02 = document.getElementById("img-02")
    var img03 = document.getElementById("img-03")
    var img04 = document.getElementById("img-04")
    var img05 = document.getElementById("img-05")
    var img06 = document.getElementById("img-06")
    modal.style.display = "block";
    captionText.innerHTML = this.alt;
    img01.src = "img/" + imgId + "/proj-1.png" 
    img02.src = "img/" + imgId + "/proj-2.png" 
    img03.src = "img/" + imgId + "/proj-3.png" 
    img04.src = "img/" + imgId + "/proj-4.png" 
    img05.src = "img/" + imgId + "/proj-5.png" 
    img06.src = "img/" + imgId + "/proj-6.png" 
  }




  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
  

const imageContainer = document.querySelector(".rotate-gallery");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x = x + 60;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 60;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(100dvw) rotateY(${x}deg)`;
}


const mq = window.matchMedia("(max-width: 600px)");
if(mq.matches){
  const mainNav = document.getElementById("menu-h");
  const menuIcon = document.getElementById("menu-icon");


  menuIcon.addEventListener('click', () => {
    if(mainNav.style.display != "flex"){
      mainNav.style.display = "flex";
      menuIcon.innerHTML= "X";
    }
    else{
      mainNav.style.display = "none";
      menuIcon.innerHTML = "MENU";
    }
  });

  
}

function buttonClick(buttonName){
  const button = document.getElementById("btn-"+buttonName);
  const mq = window.matchMedia("(max-width: 600px)");
  window.location="#"+buttonName;
  if(mq.matches){
    const mainNav = document.getElementById("menu-h");
    const menuIcon = document.getElementById("menu-icon");
    button.addEventListener('click', () => {
      if(mainNav.style.display != "flex"){
        mainNav.style.display = "flex";
        menuIcon.innerHTML= "X";
      }
      else{
        mainNav.style.display = "none";
        menuIcon.innerHTML = "MENU";
      }
    });
  }

}

  