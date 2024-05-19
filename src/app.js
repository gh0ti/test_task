import Db from "./service/db.js";
import 'dotenv/config';
import express from 'express';
import mainRouter from "./route/main-router.js";

class App {
    express;

    async start() {
        const db = new Db();
        await db.init();

        this.express = express();
        await this.startExpress()
    }

    async startExpress() {
        const port = process.env.PORT || 3000;

        this.express.use('/api', mainRouter);

        this.express.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }
}

export default App;
