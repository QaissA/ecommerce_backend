import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import router from './routes/route';
import swaggerUi from 'swagger-ui-express';
import specs from "./swaggerConfig";


dotenv.config();


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))


app.use(cors());
app.use(express.json());


app.use("/api", router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})