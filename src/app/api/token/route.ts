import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const secret: string = process.env.AUTH_SECRET ?? "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = await getToken({ req, secret });
    console.log("JSON Web Token", token);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Erro ao obter o token", error);
    res.status(500).json({ error: "Erro ao obter o token" });
  }
}
