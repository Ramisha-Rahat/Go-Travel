    
    /* sign up button and form*/
    let body = document.querySelector("body");
    let menu = document.querySelector('#side-menu');
    let form = document.querySelector('.signup-form');
    
    document.getElementById('btn1').addEventListener('click', function () {
        form.style.display = 'block';
    });
    
    /* menu */
    document.getElementById('menubtn').addEventListener('click', function (event) {
        menu.style.display = 'block';
        event.stopPropagation();
    });
    document.getElementById('btn1').addEventListener('click', function (event) {
        form.style.display = 'block';
        event.stopPropagation();
    });
    body.addEventListener("click", (event) => {
        if (!form.contains(event.target)) {
            form.style.display = 'none';
        }
    });

    body.addEventListener("click", (event) => {
        if(!menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
    
function submitForm(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    window.alert('Your information is successfully saved');
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Phone Number:', number);
    document.querySelector('.signup-form').style.display = 'none';
}

/*client*/
document.addEventListener('DOMContentLoaded', function () {
    const images = ['client2.jpg', 'client1.jpg', 'client3.jpg']; // Add your image URLs
    const texts = [
       'The exclusive VIP experiences took my trip to a whole new level. From skipping lines to enjoying private tours, it was a luxurious escape. Highly recommend this service for those looking to add a touch of opulence to their travels.',
       'Thanks to the seamless travel planning services, my vacation was stress-free from the start to finish. Everything was organize meticulously, leaving me with more time to enjoy the destinations without worrying about details.',
       'The expert-guided tours provided me with an in-depth understanding of the local culture. Our guide was not only knowledgeable but also passionate about showcasing the hidden gems that are nott in the typical tourist guides'
    ];
    const texts2=[
           ' Charles Leclerc',
           'Sophia ',
           'Maria Zayn'
    ]
 
   const text3=[
          'F1 Driver',
          'Teacher',
          'Travel Blogger'
   ]
    let currentIndex = 0;
 
    const sliderImage = document.getElementById('sliderImage');
    const sliderText = document.getElementById('sliderText');
    const sliderButton = document.getElementById('sliderButton');
 
    function updateSlider() {
       sliderImage.src = images[currentIndex];const styledText = `
       <p style="font-size: ${calculateFontSize(17)}; font-style: italic; color: #e65100; margin-top: 5px;">${texts[currentIndex]}</p>
       <p style="font-size: ${calculateFontSize(14)}; color: #000000; margin-top: 10px;">${texts2[currentIndex]}</p>
        <p style="font-size: ${calculateFontSize(14)}; color: #e65100; margin-top: 15px;">${text3[currentIndex]}</p>`;

   sliderText.innerHTML = styledText;
    }
    function calculateFontSize(baseSize) {
        const screenWidth = window.innerWidth;
        const scaleFactor = screenWidth > 900 ? 1 : (screenWidth / 900);
        return `${baseSize * scaleFactor}px`;
    }

    function nextSlide() {
       currentIndex = (currentIndex + 1) % images.length;
       updateSlider();
    }
 
    sliderButton.addEventListener('click', nextSlide);
 
    // Initial setup
    updateSlider();
 });



 /* slide show wala section*/ 

 const service= document.querySelector(".service-wrapper");

 Array.from(service.children).forEach(item=>{
    const duplicateNode= item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true)
    service.appendChild(duplicateNode);
 });
 

 /* tags wala section to just simply scroll to desired one */
        document.querySelectorAll('a[href^="#offer-section"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector('#offer-section').scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
     
// take a tour button for scroll down
document.querySelector("#Tour-btn").addEventListener("click", ()=>{
   window.scrollTo(0,document.body.scrollHeight);
})