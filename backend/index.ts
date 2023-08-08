import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { OAuth2Client } from "google-auth-library";
import { loginHandler } from "./controllers/loginHandler";

const PORT = 4001

const app = express();
const client = new OAuth2Client("630963405175-57r6dghbqe7j7grk77o78rg4r9ss5mu5.apps.googleusercontent.com")

app.use(bodyparser.json());
app.use(cors());

app.post("/api/google-login", loginHandler )

app.listen(PORT, () => {
  console.log(`Server is running @ http://localhost:${PORT}`);
});
