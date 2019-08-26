import mongoose from 'mongoose';

/**
 * Подключается к базе данных
 * @returns {Promise<void>}
 */
export async function connect() {
    await mongoose.connect('mongodb://localhost/victory-rehab', {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
    });
};
