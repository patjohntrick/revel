$(document).ready(function () {
  // pizza
  $(".pizza").on("click", function () {
    $(".pizza, .pizza-subheading").addClass("active");
    $(
      ".pancit, .sizzlers, .home-made, .meryenda, .shawarma, .pancit-subheading"
    ).removeClass("active");
  });
  // pancit
  $(".pancit").on("click", function () {
    $(".pancit, .pancit-subheading").addClass("active");
    $(
      ".pizza, .sizzlers, .home-made, .meryenda, .shawarma, .sizzlers-subheading, .pizza-subheading"
    ).removeClass("active");
  });
  // sizzlers
  $(".sizzlers").on("click", function () {
    $(".sizzlers, .sizzlers-subheading").addClass("active");
    $(
      ".pancit, .pizza, .home-made, .meryenda, .shawarma, .pancit-subheading, .pizza-subheading"
    ).removeClass("active");
  });
  // home-made
  $(".home-made").on("click", function () {
    $(".home-made").addClass("active");
    $(".pancit, .sizzlers, .pizza, .meryenda, .shawarma").removeClass("active");
  });
  // meryenda
  $(".meryenda").on("click", function () {
    $(".meryenda").addClass("active");
    $(".pancit, .sizzlers, .home-made, .pizza, .shawarma").removeClass(
      "active"
    );
  });
  // shawarma
  $(".shawarma").on("click", function () {
    $(".shawarma").addClass("active");
    $(".pancit, .sizzlers, .home-made, .meryenda, .pizza").removeClass(
      "active"
    );
  });
});
