//IMPORTANT NOTE:
//The POST/PUT/DELETE methods will NOT change database

async function getAllBrands() {
    let brands;
    
    await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas", {
        method: "GET",
        mode: "cors",
    })
        .then((response) => response.json())
        .then((data) => (brands = data))
        .catch((_) => console.log("Error"));
    // console.log(brands);
    return brands;
}

async function getAllModels(brand) {
    let models;

    await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`, {
        method: "GET",
        mode: "cors",
    })
        .then((response) => response.json())
        .then((data) => (models = data.modelos))
        .catch((_) => console.log("Error"));
    // console.log(models);
    return models;
}

async function getAllYears(brand, model) {
    let years;

    await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`,
        {
            method: "GET",
            mode: "cors",
        }
    )
        .then((response) => response.json())
        .then((data) => (years = data))
        .catch((_) => console.log("Error"));
    // console.log(years);
    return years;
}

async function getVehValue(brand, model, year) {
    let vehValue;

    await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`,
        {
            method: "GET",
            mode: "cors",
        }
    )
        .then((response) => response.json())
        .then((data) => (vehValue = data))
        .catch((_) => console.log("Error"));
    // console.log(vehValue);
    return vehValue;
}

// async function getAllProducts() {
//     let products;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/products", {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (products = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(products);
//     return products;
// }

// async function getProduct(productID) {
//     let product;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/products/" + productID, {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (product = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(product);
//     return product;
// }

// async function getAllCategories() {
//     let categories;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/products/categories", {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (categories = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(categories);
//     return categories;
// }

// async function getProductsInCategory(category) {
//     let productsInCategory;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/products/category/" + category, {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (productsInCategory = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(productsInCategory);
//     return productsInCategory;
// }

// async function getAllCarts() {
//     let carts;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/carts", {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (carts = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(carts);
//     return carts;
// }

// async function getSingleCart(cartID) {
//     let singleCart;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/carts/" + cartID, {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (singleCart = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(singleCart)
//     return singleCart;
// }

// async function getUserCart(userId) {
//     let userCard;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/carts/user/" + userId, {
//         method: "GET",
//         mode: "cors",
//     })
//         .then((response) => response.json())
//         .then((data) => (userCard = data))
//         .catch((_) => console.log(errorMessage));
//     console.log(userCard)
//     return userCard;
// }

// async function addNewCart(userId) {
//     let cart;
//     const errorMessage =
//         "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

//     await fetch("https://fakestoreapi.com/carts/", {
//         method: "POST",
//         mode: "cors",
//         body: JSON.stringify({
//             userId: userId,
//             date:2020-02-03,
//             products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//             // date: new Date().toISOString().slice(0, 10),
//             // products: [],
//         }),
//     })
//         .then((response) => response.json())
//         .then((body) => (cart = body))
//         .catch((_) => console.log(errorMessage));
//     console.log(cart)
//     return cart;
// }

