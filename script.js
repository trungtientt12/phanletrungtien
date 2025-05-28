window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
})

const nameElement = document.getElementById("typing-name");
const fullName = "Phan Lê Trung Tiến";
let index = 0;

function typeName() {
  if (index <= fullName.length) {
    nameElement.textContent = fullName.substring(0, index++);
    setTimeout(typeName, 100);
  } else {
    
    setTimeout(() => {
      index = 0;
      nameElement.textContent = "";
      typeName();
    }, 2000); 
  }
}

document.addEventListener("DOMContentLoaded", typeName);


window.onload = () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('mainContent');

  setTimeout(() => {
    loader.classList.add('open');

    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
      }, 800);
    }, 2000); // Thời gian để cánh cửa mở và chữ tách
  }, 1000);
};