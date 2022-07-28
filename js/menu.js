$(document).ready(function () {
  // pizza
  $(".pizza").on("click", function () {
    $(".pizza, .pizza-subheading, .pizza-menu-data").addClass("active");
    $(
      ".pancit, .sizzlers, .home-made, .meryenda, .shawarma, .pancit-subheading, .sizzlers-subheading, .home-made-subheading, .meryenda-subheading, .shawarma-subheading, .other-meals-subheading, .pancit-menu-data, .sizzlers-menu-data, .home-made-menu-data, .meryenda-menu-data, .shawarma-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // pancit
  $(".pancit").on("click", function () {
    $(".pancit, .pancit-subheading, .pancit-menu-data").addClass("active");
    $(
      ".pizza, .sizzlers, .home-made, .meryenda, .shawarma, .sizzlers-subheading, .pizza-subheading, .sizzlers-subheading, .home-made-subheading, .meryenda-subheading, .shawarma-subheading, .other-meals-subheading, .pizza-menu-data, .sizzlers-menu-data, .home-made-menu-data, .meryenda-menu-data, .shawarma-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // sizzlers
  $(".sizzlers").on("click", function () {
    $(".sizzlers, .sizzlers-subheading, .sizzlers-menu-data").addClass(
      "active"
    );
    $(
      ".pancit, .pizza, .home-made, .meryenda, .shawarma, .pancit-subheading, .pizza-subheading, .home-made-subheading, .meryenda-subheading, .shawarma-subheading, .other-meals-subheading, .pizza-menu-data, .pancit-menu-data, .home-made-menu-data, .meryenda-menu-data, .shawarma-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // home-made
  $(".home-made").on("click", function () {
    $(".home-made, .home-made-subheading, .home-made-menu-data").addClass(
      "active"
    );
    $(
      ".pancit, .sizzlers, .pizza, .meryenda, .shawarma, .pizza-menu-data, .pancit-menu-data, .pizza-subheading, .pancit-subheading, .sizzlers-subheading, .meryenda-subheading, .shawarma-subheading, .other-meals-subheading, .sizzlers-menu-data, .meryenda-menu-data, .shawarma-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // meryenda
  $(".meryenda").on("click", function () {
    $(".meryenda, .meryenda-subheading, .meryenda-menu-data").addClass(
      "active"
    );
    $(
      ".pancit, .sizzlers, .home-made, .pizza, .shawarma, .pizza-subheading, .pancit-subheading, .sizzlers-subheading, .home-made-subheading, .shawarma-subheading, .other-meals-subheading, .pizza-menu-data, .pancit-menu-data, .home-made-menu-data, .sizzlers-menu-data, .shawarma-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // shawarma
  $(".shawarma").on("click", function () {
    $(".shawarma, .shawarma-subheading, .shawarma-menu-data").addClass(
      "active"
    );
    $(
      ".pancit, .sizzlers, .home-made, .meryenda, .pizza, .pizza-subheading, .pancit-subheading, .sizzlers-subheading, .home-made-subheading, .meryenda-subheading, .other-meals-subheading, .pizza-menu-data, .pancit-menu-data, .sizzlers-menu-data, .home-made-menu-data, .meryenda-menu-data, .other-meals-menu-data"
    ).removeClass("active");
  });
  // other-meals
  $(".other-meals").on("click", function () {
    $(".other-meals, .other-meals-subheading, .other-meals-menu-data").addClass(
      "active"
    );
    $(
      ".pancit, .sizzlers, .home-made, .meryenda, .pizza, .shawarma, .pizza-subheading, .pancit-subheading, .sizzlers-subheading, .home-made-subheading, .meryenda-subheading, .shawarma-subheading, .pizza-menu-data, .pancit-menu-data, .sizzlers-menu-data, .home-made-menu-data, .meryenda-menu-data, .shawarma-menu-data"
    ).removeClass("active");
  });
});
