document.addEventListener('DOMContentLoaded', (event) => {
  const subHeadingArray = ['Web Developer', 'JavaScript Enthusiast', 'Learner'];
  const subHeadingEl = document.getElementById('subheading');
  let index = 0;
    setInterval(function () {
      subHeadingEl.textContent = subHeadingArray[index];
      index = (index + 1) % subHeadingArray.length;
    }, 3500);
})

$('body').scrollspy({target: ".navbar", offset: 50});

$("#myNav a").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  } 
});