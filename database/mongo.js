const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            // En la version 5.0 ya no es necesario
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}