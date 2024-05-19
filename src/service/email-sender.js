import nodemailer from "nodemailer";

class EmailSender {
    constructor(host, port, user, password) {

        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure: false,
            auth: {
                user,
                pass: password
            }
        });
    }

    async sendEmail({from, to, subject, text, html}) {
        try {
            const info = await this.transporter.sendMail({
                from,
                to,
                subject,
                text
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default EmailSender;
