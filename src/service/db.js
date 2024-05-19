import mongoose from "mongoose";

class Db {
    async init() {
        const connectString = process.env.MONGODB_URL;
        if (!connectString) {
            throw new Error('MONGODB_URL is not defined');
        }

        await mongoose.connect(connectString);
    }
}

export default Db;
