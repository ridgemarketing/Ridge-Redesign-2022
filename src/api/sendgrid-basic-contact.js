import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {

    const message = JSON.parse(req.body.message)

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
            }
          ],
          subject: `Ridge Site Lead - ${message['name']}`,
          dynamic_template_data:{
            name:`${message['name']}`,
            company:`${message['company']}`,
            email:`${message['email']}`,
            phone:`${message['phone']}`,
            message:`${message['message']}`,
            subject: `Ridge Site Lead - ${message['name']}`,
          }
        },
      ],
      template_id:"d-4719197d6c064d99aa32313eb1b3ffc2",

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
