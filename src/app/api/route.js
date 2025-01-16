import {NextResponse} from "next/server"
import NM from 'nodemailer'

export async function POST(req){
    const data = await req.json()

    return NextResponse.json({
        data,
    })
}

export async function GET(){
    const user = "btres76@gmail.com"
    const pass = "ppxo luse mubp bcbg"

    const transporter = NM.createTransport({
        host: "smtp.gmail.com",
        port: "465",
        auth: {user,pass}
    })

    return transporter.sendMail({
        from: "btres76@gmail.com",
        to: "btres76@gmail.com",
        subject: "Contato do Site",
        text: "TESTE DE MENSAGEM"
    }).then( data => {
        console.log(data)
        return NextResponse.json({data})
    })
    .catch(error => {
        return NextResponse.json({error})
    })
}