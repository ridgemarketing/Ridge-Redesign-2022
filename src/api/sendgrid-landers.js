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
          subject: `Ridge PPC Lead - ${message['name']}`,
          dynamic_template_data:{
            name:`${message['name']}`,
            company:`${message['company']}`,
            email:`${message['email']}`,
            phone:`${message['phone']}`,
            companySize:`${message['companySize']}`,
            companyRevenue:`${message['companyRevenue']}`,
            serviceArea:`${message['serviceArea']}`,
            message:`${message['message']}`,
            subject: `Ridge PPC Lead - ${message['name']}`,
          }
        },
      ],
      template_id:"d-1c2baa9d7c274ccdb0a12f3cc7ba3155",

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
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
