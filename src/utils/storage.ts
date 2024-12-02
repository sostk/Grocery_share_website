import fs from 'node:fs/promises';
import path from 'node:path';

const STORAGE_FILE = path.join(process.cwd(), 'data', 'beta-signups.json');

interface SignupEntry {
  email: string;
  timestamp: string;
  status: 'Pending';
}

export async function addEmail(email: string): Promise<void> {
  try {
    // Ensure data directory exists
    await fs.mkdir(path.dirname(STORAGE_FILE), { recursive: true });

    // Read existing data
    let signups: SignupEntry[] = [];
    try {
      const data = await fs.readFile(STORAGE_FILE, 'utf-8');
      signups = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    // Add new signup
    signups.push({
      email,
      timestamp: new Date().toISOString(),
      status: 'Pending'
    });

    // Write back to file
    await fs.writeFile(STORAGE_FILE, JSON.stringify(signups, null, 2));
  } catch (error) {
    console.error('Error storing email:', error);
    throw error;
  }
}