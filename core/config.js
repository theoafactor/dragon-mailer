require("dotenv").config();

//Server Configuration
const serverConfig = {
    port: process.env.PORT,
    hostname: process.env.HOSTNAME
}


//Email Configuration
const emailConfig = {
    emailService: process.env.EMAIL_SERVICE,
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailIsSecure: process.env.EMAIL_IS_SECURE,
    emailUsername: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD
}


//Cors Configuration
const corsConfig = {

}





module.exports = { serverConfig, emailConfig, corsConfig }