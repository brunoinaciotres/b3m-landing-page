import { NextResponse } from "next/server"
import NM from 'nodemailer'

export async function POST(req) {

    const { name, email, msg } = await req.json()
    
    const user = "MS_oLV16r@trial-jpzkmgqwn32g059v.mlsender.net"
    const pass = process.env.EMAIL_PASS

    const transporter = NM.createTransport({
        host: "smtp.mailersend.net",
        port: "587",
        auth: { user, pass }
    })

    return transporter.sendMail({
        from: "MS_oLV16r@trial-jpzkmgqwn32g059v.mlsender.net",
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

