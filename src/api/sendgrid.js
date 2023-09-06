import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);

    const message = JSON.parse(req.body.message)
    let html = ``
    
    for (const [key, value] of Object.entries(message)) {
      html = html.concat(
        `<p><strong>${key}:</strong> ${value}</p>`
      )
    }

    console.log(html)

    const stringHTML = JSON.stringify(html);

    const sendGridRequest = {
      to: [{email: "aquincy@ridgemarketing.com", name: "Andrea Quincy"}], // Your email where you'll receive emails
      replyTo: req.body.email,
      cc: [{email:"rquincy@ridgemarketing.com", name:"Rob Quincy"}, {email:"dev@ridgemarketing.com", name:"Ridge Marketing"}],
      from: "noreply@ridgemarketing.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>${stringHTML}</div>`
    }

    await sendgrid.send(sendGridRequest);

  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: `${error.field}: ${error.message}` });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
