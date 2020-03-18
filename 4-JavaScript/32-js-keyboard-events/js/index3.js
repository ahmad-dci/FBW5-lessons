window.onload = () => {
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan)
    // priceInput.addEventListener('keyup', function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)

    //   })
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan)
      // priceInput.addEventListener('change', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })


      setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan)
      // quantityInput.addEventListener('keyup', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })
      setEvent('change',quantityInput,priceInput,quantityInput,resultSpan)
      // quantityInput.addEventListener('change', function (e) {
      //   let price = parseFloat(priceInput.value)
      //   let quantity = parseFloat(quantityInput.value)
      //   calculator(resultSpan, price, quantity)

      // })

      let newProduct = document.querySelector('#newProduct')
      newProduct.addEventListener('click', function (e) {
          e.preventDefault()
          let productDiv = document.createElement('div')
          productDiv.classList.add('product')

          let firstDiv = document.createElement('div')
          let productInput = document.createElement('input')
          productInput.type = 'text'
          firstDiv.append(productInput)
          productDiv.append(firstDiv)

          let secondDiv = document.createElement('div')
          let newPriceInput = document.createElement('input')
          newPriceInput.type = 'number'
          newPriceInput.setAttribute('min', '0')
          newPriceInput.value = '0'
          secondDiv.append(newPriceInput)
          productDiv.append(secondDiv)

          let thirdDiv = document.createElement('div')
          let newquantityInput = document.createElement('input')
          newquantityInput.type = 'number'
          newquantityInput.setAttribute('min', '0')
          newquantityInput.value = '0'
          thirdDiv.append(newquantityInput)
          productDiv.append(thirdDiv)

          let fourthDiv = document.createElement('div')
          let newResultSpan = document.createElement('span')
          newResultSpan.innerText = '0'
          fourthDiv.append(newResultSpan)
          productDiv.append(fourthDiv)

          let productsDiv = document.querySelector('.products')
          productsDiv.append(productDiv)

          setEvent('keyup',newPriceInput, newPriceInput, newquantityInput, newResultSpan)
          setEvent('change',newPriceInput, newPriceInput, newquantityInput, newResultSpan)
          setEvent('keyup',newquantityInput, newPriceInput, newquantityInput, newResultSpan)
          setEvent('change',newquantityInput, newPriceInput, newquantityInput, newResultSpan)
          // here you need to write your events handler


    //       productsDiv.innerHTML += '<div class="product">'+
    //       '<div>'+
    //           '<input type="text">'+
    //       '</div>'+
    //       '<div>'+
    //           '<input type="number" min="0" value="0">'+
    //       '</div>'+
    //       '<div>'+
    //           '<input type="number" min="0" value="0">'+
    //       '</div>'+
    //       '<div>'+
    //           '<span>0</span>'+
    //       '</div>'+
    //   '</div>'







        })
}

// function calculator(resultEmenet, price, quantity){
//     resultEmenet.innerText = price * quantity
// }

function setEvent(eventName,triggerElement, priceElement, quantityElement, resultElement) {
  triggerElement.addEventListener(eventName, function (e) {
    let price = parseFloat(priceElement.value)
    let quantity = parseFloat(quantityElement.value)
    resultElement.innerText = (price * quantity) + ' EUR'

  })
  }
