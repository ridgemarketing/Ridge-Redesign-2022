import sendgrid from "@sendgrid/mail";

// export const config = {
//   bodyParser: {
//     json: {
//       limit: "10mb",
//     },
//   },
// }

// export const config = {
//   bodyParser: {
//     raw: {
//       type: `-`,
//       limit: "10mb",
//     },
//     text: {
//       type: `-`,
//       limit: "10mb",
//     },
//     urlencoded: {
//       type: `-`,
//       extended: true,
//       limit: "10mb",
//     },
//     json: {
//       type: `*/*`,
//       limit: "10mb",
//     },
//   },
// }

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const message     = JSON.parse(req.body.message)
  const attachments = req.body.attachments || []
  
  if (message['email'] === `robert.87@outlook.com` || message['message'].includes('bankllist.us')) {
    return res.status(200).json({ error: "" });
  }

  if (attachments && attachments.length > 0) {
    const allowedTypes  = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
    const maxFileSize   = 10 * 1024 * 1024;

    for (const attachment of attachments) {
      if (!allowedTypes.includes(attachment.type)) {
        return res.status(400).json({ error: `Invalid file type: ${attachment.type}. Only PDF, DOC, and DOCX files are allowed.` });
      }

      const fileSizeBytes = (attachment.content.length * 3) / 4;
      if (fileSizeBytes > maxFileSize) {
        return res.status(400).json({ error: `File ${attachment.filename} is too large. Maximum size is 10MB.` });
      }

      if (!attachment.filename || attachment.filename.length > 255) {
        return res.status(400).json({ error: `Invalid filename: ${attachment.filename}` });
      }

      if (!attachment.content || typeof attachment.content !== 'string') {
        return res.status(400).json({ error: `Invalid file content for ${attachment.filename}` });
      }
    }
  }

  try {
    
    const sendGridRequest = {
      personalizations: [
        {
          to: [
              {
                // email: "harrison@ridgemarketing.com", 
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
            name      :`${message['name']}`,
            email     :`${message['email']}`,
            phone     :`${message['phone']}`,
            position  :`${message['position']}`,
            portfolio :`${message['portfolio']}`,
            message   :`${message['message']}`,
            subject   : `Ridge Site Careers - ${message['name']}`,
          }
        },
      ],
      template_id:"d-9c1fe7ccd1b54e328ce62c4cffd77a62",

      from: {
        email: "noreply@ridgemarketing.com", // your website email address here  
        name: "No Reply"
      },
      replyTo: {  
        email: `${message['email']}`,
      },
    }

    if (attachments && attachments.length > 0) {
      sendGridRequest.attachments = attachments;
    }

    await sendgrid.send(sendGridRequest);

  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
