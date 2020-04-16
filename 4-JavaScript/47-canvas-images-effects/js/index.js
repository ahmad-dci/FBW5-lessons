// task1
// draw the dices image inside the canvas

// task2 
// grayscale the  image
window.onload = () => {
    // get html elements
    const canv = document.querySelector('#canv')

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
        // getting image data (pixels)
        const imgData = ctx.getImageData(0, 0, 500, 500)
        // console.log(imgData[4])
        // console.log(imgData[5])
        // console.log(imgData[6])
        // console.log(imgData[7])
        
        for (let i = 0; i < imgData.data.length; i+=4) {
            let avg = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2]) / 3
            imgData.data[i] = avg; // red
            imgData.data[i+1] = avg; // green
            imgData.data[i+2] = avg; // blue
        }
        // redraw the changed data 
        ctx.putImageData(imgData, 0, 0)
    }
}


// first loop
// i = 0
