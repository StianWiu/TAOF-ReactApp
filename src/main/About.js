import ImageGallery from 'react-image-gallery';

import image1 from '../assets/22-12-2020_15-16-55-v1vunyak.png'
import image2 from '../assets/27-12-2017_20-59-14.png'
import image3 from '../assets/2021-12-15_22.57.50.png'
import image4 from '../assets/2021-12-15_22.59.17.png'
import image5 from '../assets/heist setup (3).png'
import image6 from '../assets/minecraft aztec build.png'
import image7 from '../assets/Tue_May_5_23-48-39_UTC+0100_2015.png'

const images = [
    { original: image1, thumbnail: image1, }, { original: image2, thumbnail: image2, }, { original: image3, thumbnail: image3, }, { original: image4, thumbnail: image4, }, { original: image5, thumbnail: image5, }, { original: image6, thumbnail: image6, }, { original: image7, thumbnail: image7, },
];

export default function About() {
    return (
        <div className='main--about--div'>
            <h1 className='about--title'>About TAOF</h1>
            <div className="about--div">
                <div className="about--images">
                    <ImageGallery items={images} isRTL={true} slideDuration={500} slideInterval={8500} thumbnailPosition="bottom" autoPlay={true} showNav={false} />
                </div>
                <div className="about--box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget porta diam, ac sodales orci. Cras vestibulum rhoncus mauris, a molestie mauris tempor in. Cras et dapibus arcu. Duis cursus, mi ut dignissim euismod, felis libero laoreet massa, nec sodales augue nulla et mauris. Donec dignissim nec ex a vulputate. Ut nunc enim, efficitur at blandit et, faucibus in tortor.</p>
                </div>
            </div>
        </div>
    )
}