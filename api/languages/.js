// This runs on your server (Node.js/Serverless function)

async function getSupportedLanguages(req, res) {
    // API_KEY is loaded securely from environment variables
    const googleLangUrl = `https://translation.googleapis.com/language/translate/v2/languages?key=${API_KEY}`; 
    
    try {
        const response = await fetch(googleLangUrl);
        const data = await response.json();
        
        if (response.ok && data.data && data.data.languages) {
            // The response typically contains a list of objects like: 
            // [{ language: 'en', name: 'English' }, { language: 'es', name: 'Spanish' }]
            const languages = data.data.languages;
            res.json({ languages: languages });
        } else {
            res.status(response.status).json({ message: 'Failed to fetch languages.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while fetching languages.' });
    }
}
// Attach this function to your server's /api/languages route
