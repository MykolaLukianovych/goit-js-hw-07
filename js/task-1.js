
// const categoriesEl = document.querySelector("#categories");

// const itemEl = categoriesEl.querySelectorAll(".item");

// console.log(`Number of categories: ${itemEl.length}`);

// itemEl.forEach(item => {
//     const itemTitle = item.querySelector("h2").textContent;

//     const elementsCount = item.querySelectorAll("li").length;

//     console.log(`Category: ${itemTitle}`);

//     console.log(`Elements: ${elementsCount}`);
    
    
// })










const listEl = document.querySelector("#categories");

const itemEl = listEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;

    const elemenstCount = item.querySelectorAll("li").length;

    console.log(`Category: ${itemTitle}`);

    console.log(`Elements: ${elemenstCount}`);
})










