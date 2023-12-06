/*
document.addEventListener('DOMContentLoaded', function() {
  let itemsContainerElement = document.querySelector('.items_container');



  

// let item = {
//   item_image: './images/offers/1.jpg',
//   rating : {
//       stars: 4.5,
//       noOhReviews: 1400,

//   },
//   company_name: 'Carlton London',
//   item_name: 'Rhodium-Plated C Z Floral Studs',
//   current_price:606 ,
//   original_ptice: 1400 ,
//   discount_percentage:40,
// }


  if (itemsContainerElement) {
    itemsContainerElement.innerHTML = `
      <div class="item_container"> 
        <a href="#"> <img class="sale_item" src=  "${item.item_image}"> </a>

        <div class="rating">
          ${item.rating.stars} ⭐| ${item.rating.noOhReviews}
        </div>
        <div class="company_name">${item.company_name} </div>
        <div class="item_name">${item.item_name}</div>
        <div class="price">
          <span class="current_price">Rs ${item.current_price}</span>
          <span class="original_price">Rs ${item.original_ptice}</span>
          <span class="discount">${item.discount_percentage}% OFF</span>
        </div>

        <button class="btn-add-bag">Add to Bag</button>
      </div>
    `;
  } else {
    console.error("Element with class 'items_container' not found.");
  }
});

*/

let bagItems;

// Call your initialization functions
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(item) {
  bagItems.push(item);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon(); // Call the function after adding an item to update the icon
}

function displayBagIcon() {
  // Ensure the DOM is fully loaded

  document.addEventListener('DOMContentLoaded', function () {
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if (bagItems.length > 0) {
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItems.length;
    } else {
      bagItemCountElement.style.visibility = 'hidden';
    }
  });
}




function displayItemsOnHomePage() {
  document.addEventListener('DOMContentLoaded', function() {
    let itemsContainerElement = document.querySelector('.items_container');
  
    // if(! itemsContainerElement){
    //   return
    // }
    let innerHTML = '';
  
    items.forEach(item => {
      innerHTML +=  `
        <div class="item_container"> 
          <a href="#"> <img class="sale_item" src="${item.image}"> </a>
  
          <div class="rating">
            ${item.rating.stars} ⭐| ${item.rating.count}
          </div>
          <div class="company_name">${item.company} </div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
          </div>
  
          <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
        </div>
      `;
    });
  
    if (itemsContainerElement) {
      itemsContainerElement.innerHTML = innerHTML;
    } else {
      console.error("Element with class 'items_container' not found.");
    }
  });
  
}


