import { NextResponse } from "next/server"
import NM from 'nodemailer'

export async function POST(req) {

    const { name, email, msg } = await req.json()

    const user = "b3massessoria@gmail.com"
    const pass = process.env.EMAIL_PASS

    const transporter = NM.createTransport({
        host: "smtp.gmail.com",
        port: "465",
        auth: { user, pass }
    })

    return transporter.sendMail({
        from: "b3massessoria@gmail.com",
        to: "b3massessoria@gmail.com",
        subject: "Contato do Site",
        text: `Nome: ${name}. Email: ${email}, Mensagem: ${msg}`,
        replyTo: email
    }).then(data => {
        console.log(data)
        return NextResponse.json({ data })
    })
        .catch(error => {
            return NextResponse.json({ error })
        })

}

