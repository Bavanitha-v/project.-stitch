const fs = require('fs');
const https = require('https');

const urls = {
  "Hospital_Intake_Dashboard.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VhMTMwM2I3ODY1ZTQxODNhOTRhMzg2NjgxOWEzMGJmEgsSBxCV962mmR8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNjE0OTQyNjM4MzY2MjExOTU4MQ&filename=&opi=89354086",
  "Hospital_Handover.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzk2ZmE4YjhiNmU2ODQyYTE4ZThkMjU0NDU1NzkwOTEwEgsSBxCV962mmR8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNjE0OTQyNjM4MzY2MjExOTU4MQ&filename=&opi=89354086",
  "Ambulance_Tracking.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2U0OGU2ZTI4NDI4YzRjZTE4YmQzYmM3YjZmZmFiOTk1EgsSBxCV962mmR8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNjE0OTQyNjM4MzY2MjExOTU4MQ&filename=&opi=89354086",
  "Patient_Details.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdhZDI4MGFkNzFhZjQ0NGNhNzE0Y2UxYmY4MGE5MTMxEgsSBxCV962mmR8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNjE0OTQyNjM4MzY2MjExOTU4MQ&filename=&opi=89354086",
  "Emergency_Report.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzlkMzBhM2E5NjRlMzQ5ZjE4YmRmYTU4MzA0OGY5NWQ5EgsSBxCV962mmR8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNjE0OTQyNjM4MzY2MjExOTU4MQ&filename=&opi=89354086"
};

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const [name, url] of Object.entries(urls)) {
    console.log(`Downloading ${name}...`);
    try {
      await downloadFile(url, name);
      console.log(`Successfully downloaded ${name}`);
    } catch (e) {
      console.error(`Failed to download ${name}:`, e);
    }
  }
}

main();
