const jwt = require('jsonwebtoken');

const generateJWT = ( uid, name ) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject('Dont generate token');
            } else {
                resolve( token );
            }
        });
    });
}

module.exports = {
    generateJWT
}