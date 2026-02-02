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
            company:`${message['company']}`,
            companySize:`${message['companySize']}`,
            timing:`${message['timing']}`,
            email:`${message['email']}`,
            phone:`${message['phone']}`,
            message:`${message['message']}`,
            subject: `Ridge Site Lead - ${message['name']}`,
          }
        },
      ],
      template_id:"d-4a059f93a50043a4af996a6a4628bd09",

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
