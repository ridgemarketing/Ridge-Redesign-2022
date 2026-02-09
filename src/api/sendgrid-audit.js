import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const message = JSON.parse(req.body.message)
  const subject = req.body.subject

  if (message['email'] === `robert.87@outlook.com` || message['message'].includes('bankllist.us')) {
    return res.status(200).json({ error: "" });
  }

  try {

    const sendGridRequest = {
      personalizations: [
        {
          to: [
              {
                email: "aquincy@ridgemarketing.com", 
                name: "Andrea Quincy"
              }
            ], 
          cc: [
            {
              email:"rquincy@ridgemarketing.com", 
              name:"Rob Quincy"
            }, 
            {
              email:"dev@ridgemarketing.com", 
              name:"Developers"
            },
            {
              email:"chase@ridgemarketing.com", 
              name:"Chase"
            }
          ],
          subject: subject && subject.length > 0 ? subject : `Ridge AI Audit - ${message['firstName']} ${message['lastName']}`,
          dynamic_template_data:{
            firstName:`${message['firstName']}`,
            lastName:`${message['lastName']}`,
            email:`${message['email']}`,
            website:`${message['website']}`,
            subject: subject && subject.length > 0 ? subject : `Ridge AI Audit - ${message['firstName']} ${message['lastName']}`,
          }
        },
      ],
      template_id:"d-3de66472614041f89dc0e592642ed808",

      from: {
        email: "noreply@ridgemarketing.com", // your website email address here  
        name: "No Reply"
      },
      replyTo: {  
        email: `${req.body.email}`,
      },
    }

    await sendgrid.send(sendGridRequest);

  } catch (error) {
    //console.log(error);
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
