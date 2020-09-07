import axios from 'axios';

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const axiosInstance = axios.create();

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
axiosInstance.defaults.responseType = 'json';

export default axiosInstance;
