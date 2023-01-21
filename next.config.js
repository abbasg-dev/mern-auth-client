import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    resolve: {
        fallback: { crypto: false },
      },
    env: {
        REACT_APP_API: process.env.REACT_APP_API,
        REACT_APP_FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
        REACT_APP_GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID
    }
}