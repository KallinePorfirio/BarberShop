function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var scrollY = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Função de interpolação para obter a velocidade personalizada
  function ease(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

// Adiciona um evento de clique aos links
var links = document.querySelectorAll("ul li a");
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtém o destino da âncora
    var target = this.getAttribute("href");

    // Faz o scroll suave com velocidade personalizada (800ms)
    smoothScroll(target, 2500);
  });
});