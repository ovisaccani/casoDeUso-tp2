import nodemailer from 'nodemailer'


async function createEmailSender(user, pass) {

    const transporter = nodemailer.createTransport({
        /*host: "smtp.ethereal.email",
        port: 587,
        secure: false,*/
        service: 'Gmail',
        auth: {
            user: user,
            pass: pass
        }
    });

    return {
        send: async(emailOptions) => {
            try {
                let info = await transporter.sendMail(emailOptions);
                console.log(info);
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export {createEmailSender}