  function filterSelection(category) {
    var cards = document.querySelectorAll('.card');
    if (category === 'all') {
        cards.forEach(function(card) {
            card.style.display = 'block';
        });
    } else {
        cards.forEach(function(card) {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

$(window).on("resize", function() {
    var width = $(window).width();
    if (width > 768) {
      $(".navbar-brand").css("height", "50px");
      $(".navbar-brand").css("width", "auto");
    } else {
      $(".navbar-brand").css("height", "30px");
      $(".navbar-brand").css("width", "auto");
    }
});

