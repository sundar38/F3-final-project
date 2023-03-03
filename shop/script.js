const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

let men = document.querySelector(".itemsformen")

fetch("https://fakestoreapi.com/products")
  .then((datas) => datas.json())
  .then((data) => validate(data))

function validate(data) {
  console.log("hi");
  console.log(data);
  localStorage.setItem("entireitems", JSON.stringify(data))
  // for(let i=0;i<20;i++){
  //   if(data[i].title = "men's clothing"){
  //     console.log(data[i]);
  //   }
  // }










  // if (data.filter((item) => item.category = "men's clothing")) {
  //   console.log(("hi"));
  //   console.log(data[item]);
  //   men.innerHTML = `
  //   <div class="itemse">
  //             img.src="${item.image}"
  //             <div class="info">
  //               <div class="row">
  //                 <div class="price">${item.price}</div>
  //                 <div class="sized">S,M,L</div>
  //               </div>
  //               <div class="colors">
  //                 Colors:
  //                 <div class="row">
  //                   <div class="circle" style="background-color: #000"></div>
  //                   <div class="circle" style="background-color: #4938af"></div>
  //                   <div class="circle" style="background-color: #203d3e"></div>
  //                 </div>
  //               </div>
  //               <div class="row">Rating:</div>
  //             </div>
  //             <button id="addBtn">Add to Cart</button>
  //           </div>
  //   `
  // }
}
