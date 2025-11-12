// This runs on your server (Node.js/Serverless function), NOT in the user's browser

const fetch = require('node-fetch'); 
const API_KEY = process.env.TRANSLATION_API_KEY; // Securely loaded

async function translateText(req, res) {
    // 1. Get data from the Keto client request
    const { text, source, target } = req.body; 

    // 2. Prepare the request for the external API (e.g., Google)
    const googleApiUrl = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    
    const requestBody = {
        q: text,
        source: source,
        target: target,
        format: 'text',
    };

    try {
        // 3. Make the secure call to the external translation API
        const response = await fetch(googleApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (response.ok && data.data && data.data.translations && data.data.translations.length > 0) {
            // 4. Extract and send ONLY the translated text back to the Keto app
            const translation = data.data.translations[0].translatedText;
            res.json({ translation: translation });
        } else {
            // Handle errors from the external API
            res.status(response.status).json({ message: 'External translation error', details: data });
        }
    } catch (error) {
        // Handle network/server errors
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

// Attach this function to your server's /api/translate route
