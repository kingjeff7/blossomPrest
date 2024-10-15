document.addEventListener('DOMContentLoaded', function(){
// side bar
let sidebtn = document.getElementById('sbtn');
let sidebar = document.getElementById('sidebar');
let btni2 = document.getElementById('btni2');

sidebtn.addEventListener('click', function(event) {
    event.preventDefault();

    // Toggle the sidebar visibility
    sidebar.classList.toggle('sidetoggle');
    sidebtn.classList.toggle('open');
    
    // Change the button icon based on the sidebar state
    if (sidebar.classList.contains('sidetoggle')) {
        // sidebtn.innerHTML = '<i class="fa-solid fa-xmark btni2"></i>';

        
    } else {
        sidebtn.innerHTML = '<i class="fa-solid fa-bars btnicon"></i>'; // Show hamburger icon  
        sidebtn.classList.remove('open'); 
    };

    btni2.addEventListener('click', function(event) {
      event.preventDefault();
1
      // Close the sidebar if it's open
      if (sidebar.classList.contains('sidetoggle')) {
          sidebar.classList.remove('sidetoggle'); // Remove toggle class
          sidebtn.innerHTML = '<i class="fa-solid fa-bars btnicon"></i>'; // Revert to hamburger icon
          sidebtn.classList.remove('open');
      }
  });

});

// ========swiper=======

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
   loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay:{
    delay:3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// slide up effect starts
setTimeout(function() {
  // Slide the overlay page up by using CSS translateY
  $('.overlay').css('transform', 'translateY(-100%)');
  
  // After the sliding is complete (1 second), display the main content
  setTimeout(function() {
      $('.overlay').hide(); // Hide the overlay
      $('.main-content').fadeIn(); // Reveal the main content
  }, 1000); // Delay matches the slide-up duration (1 second)
}, 1000); // Optional: Delay before the sliding starts

// slide up effects ends










});