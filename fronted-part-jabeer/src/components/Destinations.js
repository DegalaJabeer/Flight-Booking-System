import React from 'react'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'


const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in 46 countries!</h3>
      <div className='grid'>
        <div>
          <img src={pic2} alt='destination-1' />
          <h3>Fly to India</h3>
          <p>
          Ranked 13th, our very own country too has made it to the list. 
          To say that India is best known for its culture, heritage, 
          enthralling landscape and natural beauty would be a very myopic view of the country.
           India is an experience of a lifetime.
          </p>
        </div>

        <div>
          <img src={pic3} alt='destination-2' />
          <h3>Experience England</h3>
          <p>
          England bags the seventh spot, thanks to its stunning coastlines and historic sites. 
          From the majestic hills of the Lake District to the blissful shores of Cornwall,
           England's beauty is to die for.
          </p>
        </div>

        <div>
          <img src={pic4} alt='destination-3' />
          <h3>Switzerland</h3>
          <p>
          Considered to be one of the most beautiful countries in the world,
           Switzerland's mountainous landscape, snowy ski runs,
            and hiking trails help it to the 15th spot on the list.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations