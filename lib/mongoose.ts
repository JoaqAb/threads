import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

export const connectToDb =async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODE_URL) return console.log('MONGODE_URL not found')
    if(isConnected) return console.log('Already connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODE_URL);

        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);   
    }
}