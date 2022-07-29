const express = require("express");
const cors = require("cors");
const { serverConfig, emailConfig } = require("./core/config");
const dragonmailer = require("./core/dragonmailer");
//start the server 
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static("/public"));

//Routes

//1. Test
server.get("/", function(request, response){
    response.send("Dragon is up ...");
})

server.get("/test", (request, response) => {

    response.send({
        message: "Server is running fine ...",
        code: "test-okay"
    });



})

//2. Send email 
server.post("/send_email", (request, response) => {
    let message = request.body.message; //the message to send
    let recepient_address = request.body.recepient;
    let message_title = request.body.title;

    let from_sender = request.body.sender; //the sender of the message
    let logMessage = "The 'from' in the request body may not be respected if you used a free email service";

    if(emailConfig.emailService === "yahoo"){
        //if the email service is yahoo, then the "from" should be the same as the emailUser
        from_sender = emailConfig.emailUsername;
        logMessage = `You used 'yahoo' as your service, therefore, the 'from' in the request body must match the 'EMAIL_USER' in the .env \n
                        ---------------------------------------- \n
                        The 'from' in the request body may not be respected if you used a free email service
                        `;
    }

    const mailOptions = {
        from: from_sender,
        to: recepient_address,
        subject: message_title,
        text: message,
        html: message
    }


    //send the email
    dragonmailer.sendMail(mailOptions, (error, info) => {
            if(error) throw error;

            console.log("Email sent: ", info.response);



            response.send({
                message:"your email was sent successfully ",
                data: {
                    recepient_email: recepient_address,
                    email_subject: message_title,
                    logMessage: logMessage
                },
                code: "success",
                type: "send-email"
            })

    })  


})








//listening
server.listen(serverConfig.port, serverConfig.hostname, () => console.log(`Dragon server is running on ${serverConfig.hostname}:${serverConfig.port}`));

