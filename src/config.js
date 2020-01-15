const LOCAL_STORE_URL = 'http://localhost:4000'
const REMOTE_STORE_URL = 'https://www.litekart.in'
const apiUrl = "https://api.litekart.in";
const HOST = "https://www.litekart.in";
const CDN = "https://ik.imagekit.io/3wzatecz51w3i/litekart"
const ANALYTICS_TRACKING_ID = "UA-49421899-6";
const storeUrl = (process.env.NODE_ENV === 'production') ? REMOTE_STORE_URL : LOCAL_STORE_URL
export {
  HOST,
  CDN,
  apiUrl,
  storeUrl,
  ANALYTICS_TRACKING_ID
};