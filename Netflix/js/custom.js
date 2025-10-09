
function scrollTrending(offset) {
  const container = document.querySelector('.trending-wrapper');
  container.scrollBy({ left: offset, behavior: 'smooth' });
}

document.querySelectorAll('.faq-question').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.parentElement.classList.toggle('active');
  });
});



const Trending = {
  card1: {
    title: "Project 1: Food Ordering Website",
    desc: "A robust, web-based e-commerce platform for food delivery, featuring a dynamic shopping cart, checkout, and comprehensive customer feedback features.",
    // Use camelCase for cleaner JavaScript key names
    features: [
        "Dynamic Menu Browsing: Users can browse food items categorized by type (e.g., Starters, Mains), with clear photos and descriptions.",
        "Shopping Cart System: Implementation of a dynamic cart that allows users to add, remove, and update quantities before checkout.",
        "Secure Checkout Process: Simple, multi-step checkout with user registration/login and order confirmation/tracking.",
        "Customer Order Details Storage: Securely stores detailed order history (items, quantities, total price, timestamp, and status) in the MySQL database for future reference and reporting.",
        "Customer Review System: Implemented a rating and review feature, allowing users to provide feedback on specific food items or the overall service, enhancing user engagement.",
        "Responsive Design: Optimized layout ensuring a perfect viewing experience on both desktop and mobile devices.",
        "Admin Management Panel: A secure interface allowing the owner to easily update menu items (prices, stock), manage customer orders, and maintain the user database.",
       
    ],
    Techstack: "Techstack: HTML, CSS, JavaScript, PHP, and MySQL", 
    // Store just the URL for easier code generation later
    "GithubUrl": 'Github link : <a href="https://github.com/Debi357/Food-Ordering-Website">Click</a>' 
  },
  card2: {
    title: "Project 2: College Website",
   desc: "A responsive, feature-rich web portal designed for educational institutions to manage information, faculty, and student interactions.", 
    features: ["User-Focused Home Page: A dynamic, visually appealing landing page providing quick access to notices, admission information, and core departments.",
        "Faculty/Staff Directory: Dedicated sections for browsing faculty profiles and contact details.",
        "Admin Panel: A secure, centralized dashboard for managing user roles, updating news/announcements, scheduling classes, and modifying subjects.",
        "Subject Management: A module allowing administrators to add, edit, or delete courses and manage curriculum details.",
        "Gallery & Events: A sleek photo gallery section to showcase campus life and upcoming student activities.",
        "Contact & Feedback Form: Integrated form for public inquiries and dedicated pages for department-specific contact information."],
    Techstack: "Techstack: HTML, CSS, JavaScript, PHP, and MySQL", 
    // Store just the URL for easier code generation later
    "GithubUrl": 'Github link : <a href="https://github.com/Debi357/College-website">Click</a>'   
},
// Inside your const projects = {...} object

card3: {
    title: "Project 3: Netflix Clone (Frontend)",
    
    // Short description for the card
    desc: "A responsive, pixel-perfect frontend clone of the Netflix UI built purely with fundamental web technologies", 
    
    // Main description for the modal/info-screen
    
    
    // Detailed list of features for the modal
    features: [
        "Pure Frontend Development: Built exclusively with HTML, CSS, and JavaScript, showcasing strong proficiency in core web fundamentals and DOM manipulation.",
        "Responsive UI/UX: Features a responsive layout that faithfully reproduces the look and feel of the original Netflix platform across all desktop and mobile screen sizes.",
        "Interactive Display: Implemented features such as detailed movie cards on hover, and smooth horizontal scrolling for content rows.",
   
      ],
      
        Techstack: "Techstack: HTML, CSS (Flexbox/Grid), and JavaScript",

      
    
    "GithubUrl": 'Github Link : <a href="https://github.com/Debi357/College-website">Click</a>'
}
};
// Cards data
const cards = {
  1: {
    title: "Wednesday",
    desc: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy.",
    img: "https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeoohnxFnnker6egKMvwn6DeDzabFIl9ofD4lkS5kkiTPw-oLlWlg5EpZ55JS5_fxaNaPe3XQikLVASgsLctH9EVpSaAa9-tUfqu6sGD8TTXs0N1KWu9-ZWOWYdhA6HajAgl.jpg?r=f17",
    tags: ["2023", "Mystery", "Teen", "Supernatural"],
    link: "https://www.netflix.com/in/title/81231974"
  },

  2: {
    title: "The Great Indian Kapil Show",
    desc: "Comedy talk show hosted by Kapil Sharma featuring celebrity guests and laughter.",
    img: "pic/kapil-sharma.webp",
    tags: ["2024", "Comedy", "Talk Show", "Entertainment"],
    link: "https://www.netflix.com/in/title/81707041"
  },
  3: {
    title: "Heartland",
    desc: "A family drama centered around life on a horse ranch in Alberta, Canada.",
    img: "pic/Zende.webp",
    tags: ["2022", "Drama", "Family", "Inspiring"],
    link: "https://www.netflix.com/in/title/70171942"
  },
 4: {
  title: "Samrajya",
  desc: "An intense political thriller that follows the rise of a fearless leader navigating power, betrayal, and destiny in the world of Indian politics.",
  img: "https://occ-0-1161-2164.1.nflxso.net/art/12345abcde.jpg", // replace this with your own image path, e.g. "pic/samrajya.webp"
  tags: ["2024", "Thriller", "Political", "Drama"],
  link: "https://www.netflix.com/in/title/81709123" // use your own valid Netflix link or placeholder
},

  5: {
  title: "Raid 2",
  desc: "After taking down a powerful tycoon, a fearless officer dives into a darker web of corruption, crime, and political conspiracies that test his limits of justice.",
  img: "pic/raid2.webp", // replace with your image file path
  tags: ["2025", "Action", "Crime", "Thriller"],
  link: "https://www.netflix.com/in/title/81692154" // replace with actual link if available
},
 6: {
  title: "Mareesan",
  desc: "A thrilling sci-fi adventure where a highly skilled soldier must confront his past and battle an extraterrestrial threat to save humanity's future.",
  img: "pic/mareesan.webp", // Use your actual local image path
tags: ["2024", "Sci-Fi", "Action", "Thriller"],
  link: "https://www.netflix.com/in/title/81709124" // Use your own valid Netflix link or placeholder
},
   7: {
  title: "Squid Game",
  desc: "A compelling survival drama where hundreds of deeply in debt contestants accept a strange invitation to compete in children's games for a tempting cash prize, with deadly high stakes.",
  img: "pic/squidgame.webp", // Use your actual local image path
  tags: ["2021", "Survival", "Thriller", "Drama"],
  link: "https://www.netflix.com/in/title/81040344" // Use your own valid Netflix link or placeholder
}
};

// Show popup
function showCardInfo(id) {
  const card = cards[id];
  if (!card) return;

  document.getElementById("cardImage").src = card.img;
  document.getElementById("cardTitle").innerText = card.title;
  document.getElementById("cardDesc").innerText = card.desc;

  // Create tags dynamically
  const tagContainer = document.getElementById("cardTags");
  tagContainer.innerHTML = "";
  card.tags.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    tagContainer.appendChild(span);
  });

  // Set link for button
  const btn = document.getElementById("cardLinkBtn");
  btn.onclick = () => window.open(card.link, "_blank");

  const modal = document.getElementById("infoScreen");
  modal.style.display = "flex";
  modal.style.opacity = "0";
  setTimeout(() => (modal.style.opacity = "1"), 50);
}

// Close popup
function closeCardInfo() {
  const modal = document.getElementById("infoScreen");
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.opacity = "1";
  }, 300);
}

