const nodemailer = require("nodemailer");
const { emailConfig } = require("./config")

console.log("Email Config: ", emailConfig)


//transporter
const dragonTransporter = nodemailer.createTransport({
    host: emailConfig.emailHost,
    port: emailConfig.emailPort,
    secure: emailConfig.emailIsSecure,
    auth: {
        user: emailConfig.emailUsername,
        pass: emailConfig.emailPassword
    }
});


module.exports = dragonTransporter;



