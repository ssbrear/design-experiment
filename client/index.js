$.ajax({
  url: "https://randomuser.me/api/?results=50",
  dataType: "json",
  success: function (data) {
    const peopleArray = data.results;
    const main = $("main");
    peopleArray.forEach((person) => {
      // Creation of new elements
      const newSection = $("<section>");
      $(newSection).addClass("card");

      const newImage = $("<img>");
      $(newImage).attr("src", person.picture.large);
      $(newImage).addClass("card-img-top");

      const newBody = $("<div>");
      $(newBody).addClass("card-body");

      const newTitle = $("<h2>").text(person.name.first);
      $(newTitle).addClass("card-title");

      const newText = $("<p>").text(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      $(newText).addClass("card-text");

      // Attach new elements to existing elements
      $(newBody).append(newTitle, newText);
      $(newSection).append(newImage, newBody);
      $(main).append(newSection);
    });
  },
});

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
