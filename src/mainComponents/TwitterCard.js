import { Tweet } from 'react-twitter-widgets'
import axios from 'axios';
import Async from "react-async"


const fetchTweet = () => {
    return axios({
        method: 'post',
        url: 'https://us-central1-taof-reactapp.cloudfunctions.net/twitterCard',
    })
        .then((response) => {
            return response.data.url.substring(response.data.url.lastIndexOf("/") + 1);;
        })
}

function TwitterCard() {
    return (
        <Async promiseFn={fetchTweet}>
            {({ data, error, isLoading }) => {
                if (isLoading) return <div>Tweet is loading...</div>;
                if (error) return <div>Error: {error.message}</div>;
                return (
                    <div id='TwitterCard'>
                        <Tweet tweetId={data} />
                    </div>
                )
            }}
        </Async>
    )
}

export default TwitterCard;


