window.onload = ()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click', function(e){
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
        //ballDiv.setAttribute('class', 'ball')
        console.log(e)
        ballDiv.style.left = e.clientX -5  + 'px'
        ballDiv.style.top = e.clientY -5  + 'px'
        container.append(ballDiv)
        throwTheBall(ballDiv,e.clientY -5, e.clientX -5, 500, 10  )
        //alert(e.clientX + '  ' + e.clientY)

    })
}


function throwTheBall(ball, y, x, parentHight, ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y
    setInterval(() => {
        ball.style.top = counter+ 'px';
        if(down){
            counter++;
        } else {
            counter--;
        }
        if(counter == parentHight - ballHeight){
            down = false
        }
        if(counter == 0){
            down = true
        }
    }, 1);
  }