import React from 'react'
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

const items = [
  {
    src: '/images/slide1.jpg',
    altText: 'Slider1 Alt text',
    caption: 'slider1 Caption'
  }, {
    src: '/images/slide2.jpg',
    altText: 'Slider2 Alt text',
    caption: 'slider2 Caption'
  }, {
    src: '/images/slide3.jpg',
    altText: 'Slider3 Alt text',
    caption: 'slider3 Caption'
  }, {
    src: '/images/slide4.jpg',
    altText: 'Slider4 Alt text',
    caption: 'slider4 Caption'
  }
]
class Slider extends React.Component {
  state = {
    activeIndex: 0,
    animating: false
  }
  next = () => {
    if (this.state.animating) {
      return
    }
    const nextIndex = this.state.activeIndex === items.length - 1
      ? 0
      : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex})
  }
  previous = () => {
    if (this.state.animating) {
      return
    }
    const nextIndex = this.state.activeIndex === 0
      ? items.length - 1
      : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex})

  }
  goToIndex = (newIndex) => {
    if (this.state.animating) {
      return
    }
    this.setState({activeIndex: newIndex})
  }
  render() {
    const slides = items.map((item, idx) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({animating: true})}
          onExited={() => {
          this.setState({animating: false})
        }}
          key={idx}>
          <img src={item.src} alt={item.altText}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
        </CarouselItem>
      )
    })
    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators
          items={items}
          activeIndex={this.state.activeIndex}
          onClickHandler={this.goToIndex}/>
          {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}/>
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}/>
      </Carousel>
    )
  }
}

export default Slider