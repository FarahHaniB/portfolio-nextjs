// import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async () => {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [""],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
