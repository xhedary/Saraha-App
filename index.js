import path from "node:path"
import express from "express"
import * as dotenv from "dotenv"
import bootstrap from "./src/app.controller.js"
dotenv.config({ path: path.resolve("./src/config/.env") })
const app = express()
const PORT = process.env.PORT

bootstrap(app, express)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})



