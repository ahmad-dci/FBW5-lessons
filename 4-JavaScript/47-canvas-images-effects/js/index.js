// task1
// draw the dices image inside the canvas

// task2 
// grayscale the  image
window.onload = () => {
    // get html elements
    const canv = document.querySelector('#canv')
    const grayScalBtn = document.querySelector('#grayscaleBtn')
    const orginalBtn = document.querySelector('#orginalBtn')
    const invertBtn = document.querySelector('#invertBtn')
    const removeRedBtn = document.querySelector('#removeRedBtn')

    // create context instance from canv
    const ctx = canv.getContext('2d')

    // create html image
    const img = document.createElement('img')
    // set src to the image
    img.src = './imgs/dices.png'
    // create onload events for img to add it inside canvas after loading
    img.onload = () => {
        // draw the image
        ctx.drawImage(img, 0, 0, 500, 500)
        
    }

    // add event click to grayscal btn
    grayScalBtn.onclick = () => {

        // getting image data (pixels)
        const imgData = ctx.getImageData(0, 0, 500, 500)
        //the second pixel data
        // console.log(imgData.data[4]) // red
        // console.log(imgData.data[5])// green
        // console.log(imgData.data[6]) // blue
        // console.log(imgData.data[7]) // Alpha (transparancy)
        
        for (let i = 0; i < imgData.data.length; i+= 4) {
            let avg = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2]) / 3
            imgData.data[i] = avg; // red
            imgData.data[i+1] = avg; // green
            imgData.data[i+2] = avg; // blue
        }
        // clear drawing area
        ctx.clearRect(0, 0, 500, 500)
        // redraw the changed data 
        ctx.putImageData(imgData, 0, 0)

    }

    // add event click to orginal button
    orginalBtn.onclick = () => {
        // clear photo first
        ctx.clearRect(0, 0, 500, 500)
        ctx.drawImage(img, 0, 0, 500, 500)
    }
    // add click event to invert button
    invertBtn.onclick = () => {
        // getimage data
        const imageData = ctx.getImageData(0, 0, 500, 500)
        // loop through image data array
        for(let i = 0 ; i < imageData.data.length ; i += 4 ){
            imageData.data[i] = 255 - imageData.data[i] // red
            imageData.data[i+1] = 255 - imageData.data[i+1] // green
            imageData.data[i+2] = 255 - imageData.data[i+2] // blue
        }
        // clear drawing area
        ctx.clearRect(0, 0, 500, 500)
        // draw the new image
        ctx.putImageData(imageData, 0, 0)
    }
    // add click event to remove red button
    removeRedBtn.onclick = () => {
        const imageData = ctx.getImageData(0, 0, 500, 500)
        // loop through data array
        for (let i = 0; i < imageData.data.length; i+=4) {
            if (imageData.data[i] > imageData.data[i+1] && imageData.data[i] > imageData.data[i+2]){
                imageData.data[i+3] = 0
            }
            
        }
        // clear old image
        ctx.clearRect(0, 0, 500, 500)
        // draw the new image
        ctx.putImageData(imageData, 0, 0)
    }
}


// first loop
// i = 0
