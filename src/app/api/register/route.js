// import { NextRequest, NextResponse } from 'next/server';
// import { Pool } from 'pg';

// console.log('DATABASE_URL:', process.env.DATABASE_URL);

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

// export async function POST(request: NextRequest) {
//   try {
//     const {
//       registrationType,
//       name,
//       email,
//       phoneNumber,
//       state,
//       city,
//       occupation,
//       otherOccupation,
//       interest,
//       accompaniedBy,
//     } = await request.json();

//     console.log('Received form data:', {
//       registrationType,
//       name,
//       email,
//       phoneNumber,
//       state,
//       city,
//       occupation,
//       otherOccupation,
//       interest,
//       accompaniedBy,
//     });

//     const testConnection = await pool.query('SELECT NOW()');
//     console.log('Database connection test:', testConnection.rows[0]);

//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS registrations (
//         id SERIAL PRIMARY KEY,
//         registration_type VARCHAR(50) NOT NULL,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         phone_number VARCHAR(20),
//         state VARCHAR(100),
//         city VARCHAR(100) NOT NULL,
//         occupation VARCHAR(100),
//         other_occupation VARCHAR(100),
//         interest VARCHAR(100),
//         accompanied_by VARCHAR(10),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `);

//     const query = `
//       INSERT INTO registrations (registration_type, name, email, phone_number, state, city, occupation, other_occupation, interest, accompanied_by)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//       RETURNING *
//     `;
//     const values = [
//       registrationType,
//       name,
//       email,
//       phoneNumber,
//       state,
//       city,
//       occupation === 'Your Occupation' ? null : occupation,
//       otherOccupation,
//       interest === 'Select Your Interest' ? null : interest,
//       accompaniedBy === 'Accompanied By (Including you)' ? null : accompaniedBy,
//     ];

//     const result = await pool.query(query, values);
//     return NextResponse.json({ success: true, data: result.rows[0] }, { status: 200 });
//   } catch (error) {
//     console.error('Detailed error:', error);
//     return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
//   }
// }

// export async function GET() {
//   try {
//     const result = await pool.query('SELECT * FROM registrations');
//     return new Response(JSON.stringify(result.rows), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

import { GoogleSpreadsheet } from "google-spreadsheet";
import { GoogleAuth } from "google-auth-library";
import { NextResponse } from "next/server";

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

// Load environment variables
const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

const PRIVATE_KEY = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n");

export async function POST(req) {
  try {
    const body = await req.json(); // Parse form data

    // Authenticate using GoogleAuth
    const auth = new GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Connect to Google Sheet
    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo(); // Load spreadsheet info
    const sheet = doc.sheetsByIndex[0]; 

    const rows = await sheet.getRows();

const incomingEmail = normalize(body.email);
const incomingPhone = String(body.phoneNumber || "").trim();

const duplicate = rows.some((row) => {
  const existingEmail = normalize(row.get("Email"));
  const existingPhone = String(row.get("Phone") || "").trim();

  return (
    (incomingEmail && incomingEmail === existingEmail) ||
    (incomingPhone && incomingPhone === existingPhone)
  );
});

if (duplicate) {
  return NextResponse.json(
    { error: "You have already registered." },
    { status: 409 }
  );
}
    // const sheet = doc.sheetsByTitle["coh2026"];

    // Append data to Google Sheet
    await sheet.addRow({
      Name: body.name,
      Email: body.email,
      Age: body.age,
      Gender: body.gender,
      OtherGender: body.otherGender,
      Phone: body.phoneNumber,
      State: body.state,
      City: body.city,
      Country: body.country,
      Interest: body.interest,
      Occupation: body.occupation,
      Referral: body.referredBy,
      OtherOccupation: body.otherOccupation,
      Institution: body.institution,
    });

    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });

  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data." }, { status: 500 });
  }
}