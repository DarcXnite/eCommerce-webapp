import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Jumbotron = () => {
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={4000}
        autoPlay
        infiniteLoop
      >
        <div>
          <img
            className='j-img'
            src='/assets/axe-a-question-jumbotron.jpg'
            alt='axe'
          />
        </div>
        <div>
          <img
            className='j-img'
            src='/assets/flash-sale-jumbotron.jpg'
            alt='flash-sale'
          />
        </div>
        <div>
          <img
            className='j-img'
            src='/assets/holy-hilt-jumbotron.png'
            alt='holy'
          />
        </div>
      </Carousel>
    </>
  )
}

export default Jumbotron
