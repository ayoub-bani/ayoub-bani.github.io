 // Get the current Year for the copyright
 $('#year').text(new Date().getFullYear())

 // Init ScrollSpy
 $('body').scrollspy({
     target: '#main-nav'
 })

 // addsmouth scroling
 $("#main-nav a").on("click", function (i) {
     // check for a hash value
     if (this.hash !== "") {
         // Pervent default behavior
         i.preventDefault()

         // store hash
         const hash = this.hash

         // Animate smooth scroll
         $("html, body").animate({
             scrollTop: $(hash).offset().top
         }, 900, function () {
             //  Add a hash to URL after scroll
             window.location.hash = hash
         })
     }
 })

 //  Back To Top Button 
 jQuery(document).ready(function () {

     var btn = $('#button');

     $(window).scroll(function () {
         if ($(window).scrollTop() > 500) {
             btn.addClass('show');
             console.log('Show class ADDED');
         } else {
             btn.removeClass('show');
             console.log('Show class REMOVED');
         }
     });

     btn.on('click', function (e) {
         e.preventDefault();
         $('html, body').animate({
             scrollTop: 0
         }, '300');
     });

 });