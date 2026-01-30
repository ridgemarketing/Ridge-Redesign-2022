import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const message = JSON.parse(req.body.message)
  
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
              email: "rquincy@ridgemarketing.com",
              name: "Rob Quincy",
            },
            {
              email: "dev@ridgemarketing.com",
              name: "Development",
            },
          ],
          dynamic_template_data: {
            firstName: `${message['firstName']}`,
            lastName: `${message['lastName']}`,
            email: `${message['email']}`,
            website: `${message['website']}`,
            subject: `New SEO/AEO Audit Request`,
          }
        },
      ],
      template_id: "d-e5dd251d496f41929ece5dcc67af8132",

      from: {
        email: "noreply@ridgemarketing.com",
        name: "No Reply"
      },
      replyTo: {  
        email: `${message['email']}`,
      },
    }

    await sendgrid.send(sendGridRequest);

  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;