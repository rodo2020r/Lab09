const mongoose = require('mongoose');

const dbconection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conexión exitosa a la base de datos');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexión a la base de datos');
    }

}
module.exports = {
    dbconection
}