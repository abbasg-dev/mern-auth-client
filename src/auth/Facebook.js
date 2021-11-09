import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios';

const Facebook = ({ informParent = f => f }) => {
    const responseFacebook = (response) => {
        // console.log(response);
        axios({
            method: 'POST',
            url:  `${process.env.REACT_APP_API}/facebook-login`,
            data: { userID: response.userID, accessToken: response.accessToken }
        })
        .then(response => {
            // console.log('FACEBOOK SIGNIN SUCCESS', response)
            // inform parent component
            informParent(response);
        })
        .catch(error => {
            console.log('FACEBOOK SIGNIN ERROR', error.response)
        })
    }

    return (
        <div className="row mb-3">
            <div className="d-grid">
                <FacebookLogin
                    appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
                    autoLoad={false}
                    callback={responseFacebook}
                    disableMobileRedirect={true}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="btn btn-large btn-primary btn-block">
                            <i className="fab fa-facebook pr-2"></i> Login with Facebook
                        </button>
                    )}
                />
            </div>
        </div>
    )
}

export default Facebook;