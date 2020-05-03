const API_BASE_URL = 'http://localhost:8080';
const ACCESS_TOKEN = 'user-token';

const OAUTH2_REDIRECT_ROUTE='/oauth2/redirect';
const OAUTH2_REDIRECT_URI = 'http://localhost:3000'+OAUTH2_REDIRECT_ROUTE

const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;


export default {
    OAUTH2_REDIRECT_ROUTE: OAUTH2_REDIRECT_ROUTE,
    API_BASE_URL: API_BASE_URL,
    ACCESS_TOKEN: ACCESS_TOKEN,
    GOOGLE_AUTH_URL: GOOGLE_AUTH_URL,
    FACEBOOK_AUTH_URL: FACEBOOK_AUTH_URL,
    GITHUB_AUTH_URL: GITHUB_AUTH_URL
}