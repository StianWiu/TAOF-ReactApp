import { Tweet } from 'react-twitter-widgets'
import axios from 'axios';
import Async from "react-async"
import LoadingScreen from 'react-loading-screen';
import crooksLogoPng from "../assets/Crooks-png.png"
import { BsTwitch } from 'react-icons/bs';
import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const fetchTweet = async () => {
    return axios({
        method: 'post',
        url: 'https://us-central1-taof-reactapp.cloudfunctions.net/twitterCard',
    })
        .then((response) => {
            console.clear()
            return response.data.url.substring(response.data.url.lastIndexOf("/") + 1);;
        })
}

var styleTagStringContent = "html {" + "overflow:hidden" + "}" + ".about--box { display: none;}";

function TwitterCard() {
    return (
        <Async promiseFn={fetchTweet}>
            {({ data, error, isLoading }) => {
                if (isLoading) return <>
                    <style type="text/css">
                        {styleTagStringContent}
                    </style>
                    <LoadingScreen loading={true} bgColor='#F9D003' spinnerColor='black' textColor='black' logoSrc={crooksLogoPng} text='Loading...' />
                </>
                if (error) return <div>Error: {error.message}</div>;

                return (
                    <>
                        <div className="socials">
                            <div className='twitter-card' id='TwitterCard'>
                                <Tweet
                                    tweetId={data}
                                    className="test"
                                />
                            </div>
                            <div className="socials--icons">
                                <a href='https://twitter.com/TheArtOfFailTV'><FaTwitterSquare style={{ color: "#1DA1F2" }} className='twitter-icon' /></a>
                                <a href='https://www.twitch.tv/theartoffail'><BsTwitch style={{ color: "#9146FF" }} className='twitch-icon' /></a>
                                <a href='https://www.instagram.com/theartoffail/'><FaInstagramSquare style={{ color: "#E4405F" }} className='instagram-icon' /></a>
                            </div>
                        </div>
                    </>
                )
            }}
        </Async >
    )
}

export default TwitterCard;


