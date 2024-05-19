import Db from "../service/db.js";
import EmailSender from "../service/email-sender.js";
import dotenv from 'dotenv';
import User from "../db/schema/user.js";
import dateConverter from "../service/date-converter.js";
import CachedFetcher from "../service/cached-fetcher.js";

dotenv.config({path: '../../.env'});

const db = new Db();
await db.init();

const {EMAIL_HOST: host, EMAIL_PORT: port, EMAIL_USER: user, EMAIL_PASSWORD: password} = process.env;

const emailSender = new EmailSender(host, port, user, password);

const currentDate = new Date();
const formattedDate = dateConverter(currentDate);
const currentRate = await (new CachedFetcher(currentDate).findRate());

for await (const user of User.find()) {
    const {email} = user;
    emailSender.sendEmail({from: 'admin@gses2.app', to: email, subject: `Currency rate on ${formattedDate}`, text: `Current rate: ${currentRate}`,});
}
