import { google } from "googleapis";

async function handler(req, res) {

    // Decode base64 private key if it doesn't start with the PEM header
    // let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
    // if (!privateKey.includes('-----BEGIN')) {
    //     // Assume base64 encoded
    //     privateKey = Buffer.from(privateKey, 'base64').toString('utf-8');
    // }
    // // Also handle literal \n just in case
    // privateKey = privateKey.split("\\n").join("\n");

    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email    : process.env.GOOGLE_CLIENT_EMAIL,
        private_key     : privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets        = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_ID
    const range         = process.env.SHEET_NAME

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const message = JSON.parse(req.body.message);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption  : "USER_ENTERED",
      requestBody       : {
        values: [[
          message.name,
          message.company,
          message.email,
          message.phone,
          message.companySize,
          message.companyRevenue,
          Array.isArray(message.interests) ? message.interests.join(", ") : message.interests,
          message.message,
          message.urlSource,
          new Date().toISOString(),
        ]],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (error) {
    console.error("Google Sheets error:", error);
    return res.status(500).json({ message: error.message });
  }
}

export default handler