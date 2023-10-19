import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const message = JSON.parse(req.body.message)
  
  if (message['email'] === `robert.87@outlook.com` || message['message'].includes('bankllist.us')) {
    return res.status(200).json({ error: "" });
  }

  try {
    
    const sendGridRequest = {
      personalizations: [
        {
          to: [
              {
                // email: "dev@ridgemarketing.com", 
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
          dynamic_template_data:{
            name:`${message['name']}`,
            email:`${message['email']}`,
            phone:`${message['phone']}`,
            position:`${message['position']}`,
            portfolio:`${message['portfolio']}`,
            message:`${message['message']}`,
            subject: `Ridge Site Careers - ${message['name']}`,
          }
        },
      ],
      template_id:"d-9c1fe7ccd1b54e328ce62c4cffd77a62",

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
