
const testimonials = [
  {
    name : "Cherise G",
    photoUrl : "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text : "Our productivity skyrocketed after implementing the solution. The user-friendly design and real-time analytics have allowed us to streamline operations and focus on what matters most—serving our customers."
  },
  {
    name : "Alaxender Hipp",
    photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    text :  "One of the things I love most about this company is how innovative they are. They're constantly updating their platform with new, relevant features that meet our needs before we even realize them. It feels like they’re always one step ahead."
  },
  {
    name : "Venrick Azcueta",
    photoUrl : "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    text :  "In an era where data security is crucial, this company has provided the peace of mind we needed. Their robust security protocols and regular updates have ensured our data—and our clients' data—remain protected. We feel secure every step of the way."
  }
]
const containerEl = document.querySelector(".testimonial-container");
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let index = 0;
function updateTestimonial() {
  const {name, photoUrl, text} = 
  testimonials[index];
  imgEl.src = photoUrl;
  textEl.innerHTML = text;
  userNameEl.innerHTML = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(()=>{
    updateTestimonial();
  }, 10000);
}
updateTestimonial();