const createProducts = () => {
  const main = $("main");
  const numProducts = 50;
  for (let i = 0; i < numProducts; i++) {
    // Creation of new elements
    const newSection = $("<section>");
    $(newSection).addClass("card");

    const newImage = $("<img>");
    $(newImage).attr("src", "https://via.placeholder.com/300x200");
    $(newImage).addClass("card-img-top");

    const newBody = $("<div>");
    $(newBody).addClass("card-body");

    const newTitle = $("<h2>").text("Title");
    $(newTitle).addClass("card-title");

    const newText = $("<p>").text(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );
    $(newText).addClass("card-text");

    // Attach new elements to existing elements
    $(newBody).append(newTitle, newText);
    $(newSection).append(newImage, newBody);
    $(main).append(newSection);
    console.log(newSection);
  }
};
createProducts();

$("#burger, #modal").click(function (e) {
  if (checkInvalidModalChange(e.target)) return;
  toggleModal();
});
function checkInvalidModalChange(target) {
  const validToggles = [
    target.id === "modal",
    target.id === "burger",
    target.id === "modal-x",
    $(target).hasClass("line"),
  ];
  for (let i = 0; i < validToggles.length; i++) {
    if (validToggles[i] === true) return false;
  }
  return true;
}
function toggleModal() {
  const modalIsHidden = $("#modal").attr("aria-hidden");
  if (modalIsHidden == "true") {
    $("#modal").attr("aria-hidden", "false");
    return;
  }
  $("#modal").attr("aria-hidden", "true");
}
