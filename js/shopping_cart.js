const products = [
    {
        "id": 1,
        "name": "Brocolli - 1 Kg",
        "price": 120,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
        "category": "vegetables"
    },
    {
        "id": 2,
        "name": "Cauliflower - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
        "category": "vegetables"
    },
    {
        "id": 3,
        "name": "Cucumber - 1 Kg",
        "price": 48,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
        "category": "vegetables"
    },
    {
        "id": 4,
        "name": "Beetroot - 1 Kg",
        "price": 32,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
        "category": "vegetables"
    },
    {
        "id": 5,
        "name": "Carrot - 1 Kg",
        "price": 56,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
        "category": "vegetables"
    },
    {
        "id": 6,
        "name": "Tomato - 1 Kg",
        "price": 16,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
        "category": "vegetables"
    },
    {
        "id": 7,
        "name": "Beans - 1 Kg",
        "price": 82,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
        "category": "vegetables"
    },
    {
        "id": 8,
        "name": "Brinjal - 1 Kg",
        "price": 35,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
        "category": "vegetables"
    },
    {
        "id": 9,
        "name": "Capsicum",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
        "category": "vegetables"
    },
    {
        "id": 10,
        "name": "Mushroom - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
        "category": "vegetables"
    },
    {
        "id": 11,
        "name": "Potato - 1 Kg",
        "price": 22,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
        "category": "vegetables"
    },
    {
        "id": 12,
        "name": "Pumpkin - 1 Kg",
        "price": 48,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
        "category": "vegetables"
    },
    {
        "id": 13,
        "name": "Corn - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
        "category": "vegetables"
    },
    {
        "id": 14,
        "name": "Onion - 1 Kg",
        "price": 16,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
        "category": "vegetables"
    },
    {
        "id": 15,
        "name": "Apple - 1 Kg",
        "price": 72,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
        "category": "fruits"
    },
    {
        "id": 16,
        "name": "Banana - 1 Kg",
        "price": 45,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
        "category": "fruits"
    },
    {
        "id": 17,
        "name": "Grapes - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
        "category": "fruits"
    },
    {
        "id": 18,
        "name": "Mango - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
        "category": "fruits"
    },
    {
        "id": 19,
        "name": "Musk Melon - 1 Kg",
        "price": 36,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
        "category": "fruits"
    },
    {
        "id": 20,
        "name": "Orange - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
        "category": "fruits"
    },
    {
        "id": 21,
        "name": "Pears - 1 Kg",
        "price": 69,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
        "category": "fruits"
    },
    {
        "id": 22,
        "name": "Pomegranate - 1 Kg",
        "price": 95,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
        "category": "fruits"
    },
    {
        "id": 23,
        "name": "Raspberry - 1/4 Kg",
        "price": 160,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
        "category": "fruits"
    },
    {
        "id": 24,
        "name": "Strawberry - 1/4 Kg",
        "price": 180,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
        "category": "fruits"
    },
    {
        "id": 25,
        "name": "Water Melon - 1 Kg",
        "price": 28,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
        "category": "fruits"
    },
    {
        "id": 26,
        "name": "Almonds - 1/4 Kg",
        "price": 200,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
        "category": "nuts"
    },
    {
        "id": 27,
        "name": "Pista - 1/4 Kg",
        "price": 190,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
        "category": "nuts"
    },
    {
        "id": 28,
        "name": "Nuts Mixture - 1 Kg",
        "price": 950,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
        "category": "nuts"
    },
    {
        "id": 29,
        "name": "Cashews - 1 Kg",
        "price": 650,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
        "category": "nuts"
    },
    {
        "id": 30,
        "name": "Walnuts - 1/4 Kg",
        "price": 170,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
        "category": "nuts"
    }
];

const cart = [];// tuong duong sp ben trong gio hang 
const newProducts = products.map((prod)=> ({...prod, quantity : 1 }));
//dom cho product 
const productElement = document.querySelector(".products .row");
const searchInputElement = document.querySelector(".search input");
const searchBtnElement  = document.querySelector(".search button");
const numItemElement = document.querySelector(".num-item")
const totalElement  = document.querySelector(".total");
const cartDropdownElement = document.querySelector(".cart-dropdown");
const cartChangeInput = document.querySelector(".input-quantity");

renderProducts(newProducts);
renderCart(cart);

    searchInputElement.addEventListener("keyup",function(e){
        const searchValue = searchInputElement.value;// lay gia tri
        if(searchValue){
            const searchProducts = newProducts.filter((prod)=>//tim kiem filter 
            prod.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        renderProducts(searchProducts);
        }
    })
    // increase 
productElement.addEventListener("click", function(e){
        const target = e.target;// xem chi tiet 
        const itemElement  = target.closest(".item");// lay item gan nhat 
        if(target.classList.contains("inc")){
           const id = +itemElement.dataset.id;// lay id gan nhat 
        //    console.log(id);
           //tim index vi tri cua no
           const itemIndex = newProducts.findIndex((prod)=>prod.id === id);
           //quantity trong item quanity : so luong 
           const item  = newProducts[itemIndex];
           if(true){
            item.quantity += 1;
           }
            // console.log(item);    
            target.closest(".cart-quantity").children[1].value  = item.quantity ;   
        }
        //render ra giao dien
        // children[1] la on input trong html 
        //dau tru
        if(target.classList.contains("dec")){
        const id = +itemElement.dataset.id;
        const itemIndex = newProducts.findIndex((prod)=>prod.id === id)

        //quantity 
        const item = newProducts[itemIndex]
        if(item.quantity === 1){
            return;
        }
        item.quantity -= 1;
        target.closest(".cart-quantity").children[1].value = item.quantity;
    }

    // if(target.classList.contains("input-quantity")){
    //     const changeInput = btn.addEventListener("click", function(e){

    //     })
    // }
    if(target.classList.contains("btn-add")){
        const id = +itemElement.dataset.id;
        const itemIndex = newProducts.findIndex((prod)=> prod.id === id);
        const item = newProducts[itemIndex];
        // thay doi quantity vi add lan 2 sai 
        // trc khi add kiem tra xem trong gio hang co chua 
        const idx = cart.findIndex(val=> val.id === item.id)
        if(idx === -1){
            // chua co trong gio hang 
            cart.push({...item});// hk co ... se bi reference sau khi add 
        }
        else{
            // neo co trong gio hang 
            cart[idx].quantity += item.quantity;
        }
        renderCartInfo(cart);
        renderCart(cart);
        console.log(cart);
    }
});
//decrease
cartDropdownElement.addEventListener("click",function(e){
    const target = e.target
    // click delete item
    if(target.classList.contains("btn-delete-cart-item")){
        // de xoa goi len id cua no 
        const item = target.closest(".cart-item");
        const id = +item.dataset.id
        const idx = cart.findIndex(val=>val.id=== id)
        if(idx !== -1){
            cart.splice(idx,1)
        }
        renderCartInfo(cart);
        renderCart(cart);
    }
    // click item imange 
    if(target.classList.contains("main-item-image")){
        // create modal 
        const id = +itemElement.dataset.id;
        const itemIndex = newProducts.findIndex((prod)=>prod.id === id);
        const item = newProducts[itemIndex];
        const div = document.createElement("div")
        div.classList.add("modal");
            //append add vao sau 
        // console.log("hihi");
            // them content 
        div.innerHTML = `
        <div class="modal-content">
            <div class="img-wrapper">
                <img src="${item.imange}" alt="">
            </div>
            <h2>${item.name}</h2>
        </div>
        `
        document.body.append(div);
    }
});

        //bat su kien thay doi input
cartChangeInput.addEventListener("change", function(e){
    if(target.classList.contains("input-quantity")){
        const id = +itemElement.dataset.id;
        const itemIndex = newProducts.findIndex((prod)=>prod.id === id);
        const item = newProducts[itemIndex];
        // const addevent = 
        target.addEventListener("keyup", function(event){
            // console.log(event.target.value)
                item.quantity = +e.target.value;
                console.log("123");
            })
    }
})
// click de show modal
function renderProducts(newProducts) {
    let list = "";
    newProducts.forEach(prod => {
        list += `
                    <div class="col">
                        <div class="item" data-id = ${prod.id}>
                            <div class="item-image">
                                <img class="main-item-image" src="${prod.image}" alt="Brocolli - 1 Kg">
                            </div>
                            <h2 class="title">
                                ${prod.name}
                            </h2>
                            <span class="price"><i class="fa-solid fa-indian-rupee-sign"></i> ${prod.price}</span>
                            <div class="cart-quantity flex a-center j-center" >
                                <button class=" btn btn-dec"><i class="fa-solid fa-minus dec"></i></button>
                                <input value="${prod.quantity}" class="input-quantity" type="number">
                                <button class="quantity-inc btn btn-inc"><i class="fa-solid fa-plus inc"></i></button>
                            </div>
                            <button class="btn-add">ADD TO CART</button>
                        </div>
                    </div>
                `
    })
    productElement.innerHTML = list;
}
function renderCartInfo(cart){
    numItemElement.textContent = cart.length;// dem so luong item cong vao 
    totalElement.textContent = cart.reduce((acc,val)=>{ //  tong so tien them vao 
        return acc + val.price * val.quantity;
    },0);
}

function renderCart(cart){
    if(!cart.length){
        cartDropdownElement.innerHTML = `
        <div>
            <img src="public/image/empty-cart.png" alt="empty-cart">
            <p>Your cart is empty!</p>
        </div>
        <button class="btn-checkout disabled">PROCEDURE TO CHECKOUT</button> 
        `
        return;
        }
        let listLi = "";
        cart.forEach((val)=>{
            listLi += `
            <li data-id="${val.id}"  class="flex j-between a-center">
                <div class="flex">
                    <img src="${val.image}" alt="" width="50" height="50">
                    <div class="item-cart-info flex j-column">
                        <span>item ${val.name} </span>
                        <i class="fa-solid fa-indian-rupee-sign"> ${val.price} x ${val.quantity}</i>
                    </div>
                </div>
                <button class="btn-delete-cart-item"> x </button>
            </li>
            `
        });
    cartDropdownElement.innerHTML = `
        <ul class="cart-items">
            ${listLi}
        </ul>
        <button class="btn-checkout ">PROCEDURE TO CHECKOUT</button> 
        `;
        // console.log(cart);
        // console.log(cartDropdownElement);
}









  // DOM tuong ung
  //search
  //load product
  // screen item
  // increase , decrease number
  // 