import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    const sendGridRequest = {
      to: req.body.emailTo, // Your email where you'll receive emails
      replyTo: req.body.email,
      from: "noreply@ridgemarketing.com", // your website email address here
      subject: req.body.subject,
      html: `${req.body.message}`
    }

    if (req.body.attachment) {
      sendGridRequest = {
        ...sendGridRequest,
        attachments:[{
          content: req.body.attachment,
          filename: req.body.attachmentName,
          type: "application/pdf",
          disposition: "attachment"
        }]
      }
    }
    await sendgrid.send(sendGridRequest);

  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
