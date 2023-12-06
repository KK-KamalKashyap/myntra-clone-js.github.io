// const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();


function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
    document.addEventListener('DOMContentLoaded', function () {
    let bagSummaryElement = document.querySelector('.bag-summary');
let totalItem  =bagItemObjects.length;
let totalMrp = 0 ;
let totalDiscount = 0;

bagItemObjects.forEach(bagItem => {
    totalMrp += bagItem.original_price;
    totalDiscount += bagItem.original_price -bagItem.current_price;

})
let  finalPayment = totalMrp - totalDiscount ;


    bagSummaryElement.innerHTML = `                <div class="bag-details-container">
    <div class="price-header">
        PRICE DETAILS (${totalItem} Items)
    </div>
    <div class="price-item">
        <span class="price-item-tag">Total Mrp</span>
 
        <span class="price-item-value">Rs ${totalMrp}</div>
</span>
</div>
    <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
 
        <span class="price-item-value priceDetail-base-discount ">-Rs ${totalDiscount}</span>
    </div>
    <div class="price-item">

<div class="price-footer">
    <span class="price-item-tag">Total Amount</span>

    <span class="price-item-value">Rs ${finalPayment}</span>
</div>
    <button class="btn-place-order">
        <div> Plave Order</div>
    </button>
              
</div>

`;
});
}

function loadBagItemsObjects(){
    bagItemObjects = bagItems.map(itemId => {
    for(let i =0; i < items.length; i++){
        if(itemId == items[i].id){
return items[i];
        }
    }
});

}






function displayBagItems(){
    document.addEventListener('DOMContentLoaded', function () {

    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML ='';
    bagItemObjects.forEach(bagItem=> {
        innerHTML += generateItemHTML(bagItem)
    });
    containerElement.innerHTML = innerHTML ;

});
}

function removeFromBag(itemId){
 bagItems =   bagItems.filter(bagItemId => bagItemId !== itemId);
 localStorage.setItem('bagItems', JSON.stringify(bagItems));
 loadBagItemsObjects();
 displayBagIcon();
 displayBagItems();
 displayBagSummary();
}



function generateItemHTML(item){
return `         <div class="bag-item-container">   

<div class="item-left-part">
<img class="bag-item-img"     src="../${item.image}" alt=ff"> 
</div>
images/offers/3.jpg
<div class="item-right-part"> 
<div class="company_name">${item.company}</div>
<div class="item_name">${item.item_name} </div>
<div class="price">
<span class="current_price">Rs ${item.current_price}</span>
<span class="original_ptice">Rs ${item.original_price}</span>
<span class="discount">${ item.discount_percentage} OFF</span>
</div>
<div class="return-period">
<span class="return-period-days"> ${item.return_period} days</span> return available
</div>  
<div class="delivery-details">
Delivery by
<span class="delivery-details-days">${item.delivery_date }oct 2023</span>
</div>

<div class="remove-from-cart" onClick="removeFromBag(${item.id})"> ❌</div>
</div> 
</div>
</div>   `;
}

