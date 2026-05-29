import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const message = JSON.parse(req.body.message)
  const subject = req.body.subject

  if (message['email'] === `robert.87@outlook.com`) {
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
          subject: subject && subject.length > 0 ? subject : `Ridge PPC Hero Lead - ${message['name']}`,
          dynamic_template_data:{
            name:`${message['name']}`,
            email:`${message['email']}`,
            source:`${message['source']}`,
            subject: subject && subject.length > 0 ? subject : `Ridge PPC Hero Lead - ${message['name']}`,
          }
        },
      ],
      template_id:"d-eea7a403662548d39b583b0a700bcb2f",

      from: {
        email: "noreply@ridgemarketing.com",
        name: "No Reply"
      },
      replyTo: {
        email: `${req.body.email}`,
      },
    }

    await sendgrid.send(sendGridRequest);

  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
