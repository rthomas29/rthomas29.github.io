const scrollSpyFunc = () => {
  $('body').scrollspy({target: ".navbar", offset: 60});
  $("#myNav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        window.location.hash = hash;
      });
    } 
  });
}

const subHeadingFunc = () => {
  const subHeadingArray = ['JavaScript Enthusiast', 'Life Learner', 'Web Developer'];
  const subHeadingEl = document.getElementById('subheading');
  let index = 0;
    setInterval(() => {
      subHeadingEl.textContent = subHeadingArray[index];
      index = (index + 1) % subHeadingArray.length;
    }, 3500);
}

document.addEventListener('DOMContentLoaded', (event) => {
  scrollSpyFunc();
  subHeadingFunc();
});