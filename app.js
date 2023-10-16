function singleProduct(target) {
  const parent = target.parentNode;
  const itemsTitle = parent.childNodes[1].childNodes[5].innerText;
  const priceString = parent.childNodes[1].childNodes[7].innerText;
  const price = parseFloat(priceString);

  // Show product items list 
  const selector = document.getElementById('selection_item_box');
  const li = document.createElement('li');
  li.style.listStyle = 'number';
  li.style.paddingBottom = '10px';
  li.innerText = itemsTitle;
  selector.appendChild(li);

  // calculate product Total Price
  const priceElement = document.getElementById('Total_item_Price');
  const totalPriceString = priceElement.innerText;
  const itemPrice = parseFloat(totalPriceString);
  const totalPrice = itemPrice + price;
  priceElement.innerText = totalPrice.toFixed(2);

  // Purchase apply 
  if (totalPrice > 0) {
    const Purchase_btn = document.getElementById('Purchase_btn');
    Purchase_btn.removeAttribute('disabled');
  } else {
    Purchase_btn.setAttribute('disabled', true);
  }
  
  // Coupon apply 
  const couponButton = document.getElementById('coupon_apply');
  if (totalPrice >= 200) {
    couponButton.removeAttribute('disabled');
    
  } else {
    couponButton.setAttribute('disabled', true);
  }

  const TotalPriceElement=document.getElementById('Total_Price')
  TotalPriceElement.innerText=totalPrice.toFixed(2);

  let discountedPrice = 0;
  couponButton.addEventListener('click', function() {
    const inputFiled = document.getElementById('discount_input');
    const inputValue = inputFiled.value;
    const discountApply = document.getElementById('discount_price');

    if (inputValue === 'SELL200') {
      discountedPrice = (totalPrice * 0.20);
      const totalDescrountPrice=discountedPrice.toFixed(2)
      discountApply.innerText = totalDescrountPrice;
    }
    const TotalPriceElement=document.getElementById('Total_Price')
    const showTotalPrice=totalPrice-discountedPrice
    TotalPriceElement.innerText=showTotalPrice.toFixed(2)
  });
}

