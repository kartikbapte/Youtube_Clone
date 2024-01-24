const GOOGLE_API_KEY = "AIzaSyDgatlw7lZ7d5gvnWgx2QB4GuaC7n5j34I";
const Youtube_API_KEY = " AIzaSyBIVuEt0mV1pqFCqFXbr3oGXiUmwYUEMR0";
// const dummy = 'https://cors-anywhere.herokuapp.com/'
export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =

  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_1= "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
export const YOUTUBE_SEARCH_API_2= `&key=${Youtube_API_KEY}&type=suggest`;

   
  // "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  //  "https://api.tvmaze.com/search/shows?q=";
  //  AIzaSyBIVuEt0mV1pqFCqFXbr3oGXiUmwYUEMR0 => youtube api key
// Live Chat >>>> Infinite Scroll >>>>>> Pagination
