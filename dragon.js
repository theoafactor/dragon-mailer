const express = require("express");
const { serverConfig, emailConfig } = require("./core/config");
const dragonmailer = require("./core/dragonmailer");
//start the server 
const server = express();


//Routes

//1. Test
server.get("/test", (request, response) => {



})

//2. Send email 
server.post("/send_mail", (request, response) => {
    let message = request.body.message; //the message to send
    let recepient_address = request.body.recepient;
    let message_title = request.body.title;

    let from_sender = request.body.sender; //the sender of the message

    const mailOptions = {
        from: from_sender == null ? "no-reply@email.com" : null
    }

    dragonmailer.sendMail(mailOptions, (error, info) => {
        


    })


})








//listening
server.listen(serverConfig.port, serverConfig.hostname, () => console.log(`Dragon server is running on ${serverConfig.hostname}:${serverConfig.port}`));

