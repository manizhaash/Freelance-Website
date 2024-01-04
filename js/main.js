const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () =>{
  if (nav.classList.toggle('open')){ navBtnImg.src = "./img/icons/nav-close.svg"
  } 
  
  else {
    navBtnImg.src = "./img/icons/nav-open.svg"
  }
}

AOS.init({
  disable: function () {
    // Получаем ширину экрана
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Проверяем условие
    if (screenWidth >= 700) {
      return false;
    } else {
      return true;
    }
  },
  once: true
});