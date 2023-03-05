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
let women=document.querySelector(".itemsforwomen")
let jewel=document.querySelector(".Jewellery")
let electronics=document.querySelector(".Electronics")

fetch("https://fakestoreapi.com/products")
  .then((datas) => datas.json())
  .then((data) => validate(data))

function validate(data) {
  console.log("hi");
  console.log(data);
  localStorage.setItem("entireitems", JSON.stringify(data))
  // for(let i=0;i<20;i++){
  //   if(data[i].category = "men's clothing"){
  //     console.log(data[i]);
  //   }
  // }

  data.map((item)=>{
    let color=["red", "blue", "black"]
    let size=["s", "l", "m", "xl"]
    let colourse=[]
    let sizese=[]
    let finalindex=Math.floor(Math.random()*3)
    for(let i=0;i<=finalindex;i++){
      colourse.push(color[i])
    }
    let finalindex1=Math.floor(Math.random()*4)
      for(let i1=0;i1<=finalindex1;i1++){
        sizese.push(size[i1])
      }
    
        item.colours=colourse
    item.sizes=sizese
  })

  for (let i = 0; i < 20; i++) {
    if (data[i].category == "men's clothing") {
      console.log(("hi"));
      console.log(data[i]);
      men.innerHTML += `
        <div class="itemse">
              <img src="${data[i].image}"></img>
              <div class="info">
                <div class="row">
                  <div class="price">$${data[i].price}</div>
                  <div class="sized">${data[i].sizes}</div>
                </div>
                <div class="colors">
                  Colors: 
                  <div class="row">
                    <div class="circle" style="background-color: #000">${data[i].colours[0]}</div>
                    <div class="circle" style="background-color: #4938af">${data[i].colours[1]}</div>
                    <div class="circle" style="background-color: #203d3e">${data[i].colours[2]}</div>
                  </div>
                </div>
                <div class="row">Rating:</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>
    `
    }
    if (data[i].category == "women's clothing") {
      console.log(("hi"));
      console.log(data[i]);
      women.innerHTML += `
      <div class="itemse">
      <img src="${data[i].image}"></img>
      <div class="info">
        <div class="row">
          <div class="price">$${data[i].price}</div>
          <div class="sized">${data[i].sizes}</div>
        </div>
        <div class="colors">
          Colors: 
          <div class="row">
            <div class="circle" style="background-color: #000">${data[i].colours[0]}</div>
            <div class="circle" style="background-color: #4938af">${data[i].colours[1]}</div>
            <div class="circle" style="background-color: #203d3e">${data[i].colours[2]}</div>
          </div>
        </div>
        <div class="row">Rating:</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>
    `
    }
    if (data[i].category == "jewelery") {
      console.log(("hi"));
      console.log(data[i]);
      jewel.innerHTML += `
      <div class="itemse">
      <img src="${data[i].image}"></img>
      <div class="info">
        <div class="row">
          <div class="price">$${data[i].price}</div>
          <div class="sized">${data[i].sizes}</div>
        </div>
        <div class="colors">
          Colors: 
          <div class="row">
            <div class="circle" style="background-color: #000">${data[i].colours[0]}</div>
            <div class="circle" style="background-color: #4938af">${data[i].colours[1]}</div>
            <div class="circle" style="background-color: #203d3e">${data[i].colours[2]}</div>
          </div>
        </div>
        <div class="row">Rating:</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>
    `
    }
    if (data[i].category == "electronics") {
      console.log(("hi"));
      console.log(data[i]);
      electronics.innerHTML += `
      <div class="itemse">
      <img src="${data[i].image}"></img>
      <div class="info">
        <div class="row">
          <div class="price">$${data[i].price}</div>
          <div class="sized">${data[i].sizes}</div>
        </div>
        <div class="colors">
          Colors: 
          <div class="row">
            <div class="circle" style="background-color: #000">${data[i].colours[0]}</div>
            <div class="circle" style="background-color: #4938af">${data[i].colours[1]}</div>
            <div class="circle" style="background-color: #203d3e">${data[i].colours[2]}</div>
          </div>
        </div>
        <div class="row">Rating:</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>
    `
    }
  }
}
