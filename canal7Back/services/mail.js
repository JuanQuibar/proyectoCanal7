const nodemailer = require('nodemailer');

const send = async ({to, subjet = 'Gracias por registrarte 😁', html}) => {
    try{
        const transporter =nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "juanquibar@gmail.com",
                pass: "Nu3v0mundo"
            },
            /* tls : {
                rejectUnathorized: false, //le digo a mi service que no tengo certificado de seguridad corriendo en el server de donde mando los mails
            } */
        });
        const mail ={
            from: '<noreply> Servicio de registración </noreply>',
            to,
            subjet,
            html,
        }
        const envio = await transporter.sendMail(mail);
        return envio.messageId;



    } catch (e){
        console.log(e);
    }
}
module.exports = {send};
