import { google } from "googleapis";

async function sendToSheet(req, res) {
    console.log("1. Function called");
    console.log("2. Request method:", req.method);

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        console.log("3. GOOGLE_PRIVATE_KEY_64 exists:", !!process.env.GOOGLE_PRIVATE_KEY_64);
        console.log("4. GOOGLE_PRIVATE_KEY_64 length:", process.env.GOOGLE_PRIVATE_KEY_64?.length || 0);

        const privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_64, 'base64').toString('utf-8');
        console.log("5. Decoded private key length:", privateKey.length);
        console.log("6. Key starts with BEGIN:", privateKey.startsWith('-----BEGIN'));
        console.log("7. Key ends with KEY-----:", privateKey.trim().endsWith('KEY-----'));

        console.log("8. GOOGLE_CLIENT_EMAIL exists:", !!process.env.GOOGLE_CLIENT_EMAIL);
        console.log("9. SHEET_ID exists:", !!process.env.SHEET_ID);
        console.log("10. SHEET_NAME exists:", !!process.env.SHEET_NAME);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: privateKey,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        console.log("11. Auth object created");

        const sheets = google.sheets({ version: "v4", auth });
        console.log("12. Sheets client created");

        const spreadsheetId = process.env.SHEET_ID;
        const range = process.env.SHEET_NAME;

        console.log("13. Parsing request body");
        const message = JSON.parse(req.body.message);
        console.log("14. Message parsed:", Object.keys(message));

        console.log("15. Appending to sheet...");
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
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
        console.log("16. Sheet append successful");

        return res.status(200).json({ data: response.data });
    } catch (error) {
        console.error("ERROR - Google Sheets error:", error.message);
        console.error("ERROR stack:", error.stack);
        return res.status(500).json({ message: error.message });
    }
}

export default sendToSheet
