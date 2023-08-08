import type { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client("630963405175-57r6dghbqe7j7grk77o78rg4r9ss5mu5.apps.googleusercontent.com")
export async function loginHandler(req: Request, res: Response) {
  const {token} = req.body;
const ticket = await client.verifyIdToken({
  idToken: token
})
res.status(200).json(ticket.getPayload())
}
