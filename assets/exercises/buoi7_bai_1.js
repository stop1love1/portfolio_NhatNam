function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var submenus = document.querySelectorAll('.submenu');
  
    submenus.forEach(function (submenu) {
      submenu.addEventListener('click', function () {
        submenu.querySelector('.dropdown').classList.toggle('show');
      });
  
      submenu.addEventListener('mouseleave', function () {
        submenu.querySelector('.dropdown').classList.remove('show');
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    handleScrollEvent();
  
    window.addEventListener("resize", handleScrollEvent);
  });
  
  function handleScrollEvent() {
    var isMobile = window.innerWidth <= 768; 
    var isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; 
  
    if (isMobile) {
      window.addEventListener("scroll", mobileScrollHandler);
    } else if (isTablet) {
      window.addEventListener("scroll", tabletScrollHandler);
    } else {
      window.addEventListener("scroll", desktopScrollHandler);
    }
  }
  
  function mobileScrollHandler() {
    console.log("Mobile Scroll");
  }
  
  function tabletScrollHandler() {
    console.log("Tablet Scroll");
  }
  
  function desktopScrollHandler() {
    console.log("Desktop Scroll");
  }
  