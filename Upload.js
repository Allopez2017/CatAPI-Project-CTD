require('dotenv').config();

const API_Key = process.env.API_KEY;

async function uploadCat(image) {
    const formData = new FormData();
    formData.append('file', image);

    const response = await fetch('https://api.thecatapi.com/v1/images/upload', {
      method: 'POST',
      headers: {
        'x-api-key': API_Key
      },
      body: formData
    });

    const json = await response.json();
    console.log(json);
  }

  async function uploadedCat(event) {
    const file = event.target.files[0];
    await uploadCat(file);
  }
