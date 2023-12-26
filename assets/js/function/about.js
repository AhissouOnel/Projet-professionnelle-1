//affichage des testimonials
document.addEventListener('DOMContentLoaded', function () {
   const testimonialsContainer = document.getElementById('testimonialsContainer');
   const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
   let currentIndex = 0;

   function showTestimonial(index) {
       testimonials.forEach((testimonial, i) => {
           if (i === index) {
               testimonial.classList.remove('none');
           } else {
               testimonial.classList.add('none');
           }
       });
   }

   function showNextTestimonial() {
       currentIndex = (currentIndex + 1) % testimonials.length;
       showTestimonial(currentIndex);
   }

   function showPreviousTestimonial() {
       currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
       showTestimonial(currentIndex);
   }

   showTestimonial(currentIndex);

   document.querySelector('.btn-next').addEventListener('click', showNextTestimonial);
   document.querySelector('.btn-previous').addEventListener('click', showPreviousTestimonial);
});
