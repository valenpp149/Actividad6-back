import express from 'express';
import morgan from 'morgan';
import languageRoute from "./routes/language.routes";

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.set('port', 3002);
app.use(morgan('dev'));
app.use("/api/books",languageRoute);

export default app;