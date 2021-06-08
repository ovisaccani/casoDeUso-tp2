import { createEmailSender } from "./EmailSender.js";
import { createEmailBuilder } from "./EmailBuilder.js";

async function crearEnviadorDeMail(user, pass) {

    const builder = await createEmailBuilder();
    const sender = await createEmailSender(user, pass);

    return {

        sendEmailWithAttachment: async (to, nombrePdf, pdfPath) => {
            let email = await builder.createEmailWithAttachment('Yo', to, "Datos para su vacunacion", "<h1> Datos de su vacunacion ! </h1> <b> Usted recibió adjunto en un pdf los datos para su vacunación</b>", nombrePdf, pdfPath, "application/pdf");
            sender.send(email);
        },
    }
}

export {crearEnviadorDeMail}