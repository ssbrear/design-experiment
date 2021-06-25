const createProducts = () => {
  const main = $("main");
  const numProducts = 50;
  console.log(main);
  for (let i = 0; i < numProducts; i++) {
    // Creation of new elements
    const newSection = $("<section>");
    const newImage = $("<img>");
    // Change attribute of new element
    $(newImage).attr("src", "https://via.placeholder.com/300x200");
    // Attach new elements to existing elements
    $(newSection).append(newImage);
    $(main).append(newSection);
  }
};
createProducts();
