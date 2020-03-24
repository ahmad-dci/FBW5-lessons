//1 task
// write javascript function that will recieve div Id "container"  as a parameter 
// and create inside this div an text input

// 2 task
// change your previuos function to add the input inside a div and this div
//  suppose to be in the container

// 3 task
// add a button after the previous input

// 4 task 
// add a div comes after the last div which contains input and button

//5 task
// set class 'container' to the main div
// set class 'controls-container' for the first child div

// 6 task 
// the 20 images should be shown only after click the search button

// 7 task
// delete old html content from div2 before adding the new 20 images

// 8 task
// https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion
// log the data that will be returned from the Api using fetch

// 9 task 
// use the the value from the input as keyword to search through the Api
// so you need to pass the value as a parameter to the getData() function

function appInit(containerId){
    // get element by id containerId the parameter
    let appContainer = document.getElementById(containerId);
    // check if this element exist
    if(appContainer){
        let div1 = document.createElement('div')
        // create input
        let inp1 = document.createElement('input')
        // add input inside div
        div1.append(inp1)
        // add class 'controls-container' to div1
        div1.classList.add('controls-container')
        // create a button and add it to div1
        let btn1 = document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)
        // create pagging buttons container
        let paggingDiv = document.createElement('div')
        div1.append(paggingDiv)
        // add div inside the container
        appContainer.append(div1)
        // create and add another div to container
        let div2 = document.createElement('div')
        appContainer.append(div2)
        // add class images-container to div2
        div2.classList.add('images-container') 
        // add click event listner to btn1
        btn1.addEventListener('click', function(){
            
            // clear div2 old content
            //div2.innerHTML = ''
            // call getData function
            getData(inp1.value, div2, paggingDiv, 1)
            
            
            // add 20 dummy images inside div2
        // for(let i = 0; i<20; i++){
        //     // create image
        //     let img = document.createElement('img')
        //     // set src attribute to the image
        //     img.setAttribute('src','./imgs/dummy.png')
        //     // add the image inside div2
        //     div2.append(img)
        // }
        })
        // add class 'container to appContainer'
        appContainer.classList.add('container')
        
    } else {
        // container not exist
        console.log('Element with Id "' + containerId + '" could not be found')
    }
}

// call the function 
window.onload = function () {
    appInit('container')
  }

  async function getData(keyword, imagesContainer, paggingContainer, pageNumber) {
      //console.log(pageNumber)
    // clear images container  
    imagesContainer.innerHTML = ''
    // getting data from Api using fetch
      let response = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword+'&page='+pageNumber)
      if(response.status == 200){
          let data = await response.json()

          console.log(data);
          // get how many pagging buttons 
          // we need to divide total hits to 20 in each page
          let num = data.totalHits / 20
          //console.log(num);
          // round up num
          let btnNumbers = Math.ceil(num)
          //console.log();
          // clear paggingContainer content before add buttons to it
          paggingContainer.innerHTML = ''
          for(let i = 0 ; i < btnNumbers ; i++ ){
              let paggingBtn = document.createElement('button')
              paggingBtn.innerText = i+1
              paggingContainer.append(paggingBtn)
              // add event click for pagging button
              paggingBtn.addEventListener('click',function(){
                getData(keyword, imagesContainer, paggingContainer, i+1)
              })
          }
          
          data.hits.forEach(element => {
              // create img element
              let img = document.createElement('img')
              // set the url from the element previewUrl property
              img.src = element.previewURL
              // add the image inside imagesContainer
              imagesContainer.append(img)

          });

          
      }
    }

