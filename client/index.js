Flags = {
  AU: "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg",
  BR: "https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg",
  CA: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
  CH: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png",
  DE: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  DK: "https://cdn.freelogovectors.net/wp-content/uploads/2012/05/denmark-flag1.jpg",
  ES: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
  FI: "https://cdn.britannica.com/79/579-004-0EA4217C/Flag-Finland.jpg",
  FR: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
  GB: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
  IE: "https://cdn.britannica.com/33/1733-004-5BA407D6/FLAG-Ireland.jpg",
  IR: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1200px-Flag_of_Iran.svg.png",
  NO: "https://cdn.britannica.com/01/3101-004-506325BB/Flag-Norway.jpg",
  NL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png",
  NZ: "https://cdn.britannica.com/17/3017-004-DCC13F9D/Flag-New-Zealand.jpg",
  TR: "https://cdn.iconscout.com/icon/free/png-128/turkey-flag-country-nation-union-empire-33109.png",
  US: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/american-flag-backdrop~35_1048",
};

// API call to populate page
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

      const flagURL = Flags[person.nat];
      const newFlag = $("<img>").attr("src", flagURL).addClass("flag");

      const newText = $("<p>").text(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      $(newText).addClass("card-text");

      // Attach new elements to existing elements
      $(newTitle).append(newFlag);
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
    $("#modal, #modal-body").attr("aria-hidden", "false");
    return;
  }
  $("#modal, #modal-body").attr("aria-hidden", "true");
}
