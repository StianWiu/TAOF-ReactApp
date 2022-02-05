import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export default function About() {
    return (
        <div className='main--about--div'>
            <h1 className='about--title'>About TAOF</h1>
            <div className="about--div">
                <div className="about--images">
                    <ImageGallery items={images}
                        isRTL={true}
                        slideDuration={500}
                        slideInterval={5500}
                        thumbnailPosition="bottom"
                        autoPlay={true}
                        showNav={false}
                    />
                </div>
                <div className="about--box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget porta diam, ac sodales orci. Cras vestibulum rhoncus mauris, a molestie mauris tempor in. Cras et dapibus arcu. Duis cursus, mi ut dignissim euismod, felis libero laoreet massa, nec sodales augue nulla et mauris. Donec dignissim nec ex a vulputate. Ut nunc enim, efficitur at blandit et, faucibus in tortor.</p>
                </div>
            </div>
        </div>
    )
}