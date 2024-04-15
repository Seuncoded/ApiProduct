let productArry = []
let plist = document.getElementById('plist')
fetch("https://dummyjson.com/products").then(result => result.json()).then(data => {
    console.log(data);
    productArry.push(data);
    let OurProducts = productArry[0].products
    console.log(OurProducts);
    console.log(OurProducts[0].title);

    for (let index = 0; index < OurProducts.length; index++) {
        plist.innerHTML += `
            <li class="itemList">
            <img src="${OurProducts[index].images[0]}" class="image">
            <h2 class="title">${OurProducts[index].title}</h2>
            <span class="desp">${OurProducts[index].description}</span>
            <p class="discount">Discount Rate: ${OurProducts[index].discountPercentage}</p>
            <p class="rate">Ratings: ${OurProducts[index].rating}</p>
            <p class="stock">Available Stock: ${OurProducts[index].stock}</p>
            <p class="brand">Products Brand: ${OurProducts[index].brand}</p>
            <p class="category">Products Category: ${OurProducts[index].category}</p>
            <span class="price">N:${OurProducts[index].price}.00</span>
        </li>`
    }



})