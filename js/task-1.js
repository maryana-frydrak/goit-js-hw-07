const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("li").length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});