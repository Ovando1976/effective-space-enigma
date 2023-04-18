// Use the Google Docs API to create a new document
// You'll need to set up the Google API credentials first
// See https://developers.google.com/docs/api/quickstart/js

async function createDocument(title) {
  const accessToken = await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse().access_token;
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    title: title,
    mimeType: 'application/vnd.google-apps.document'
  });

  const response = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: headers,
    body: body
  });

  const data = await response.json();
  return data.documentId;
}
