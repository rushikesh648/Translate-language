// This runs in the user's browser (Keto framework)

async handleTranslate() {
    // ... (Error checks and setState({ isLoading: true }) as before)

    try {
        // Call your *internal* proxy endpoint!
        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: this.state.inputText,
                source: this.state.sourceLang,
                target: this.state.targetLang,
            })
        });

        const data = await response.json();
        
        if (response.ok) {
            // Data contains only the translated text, making it easy to update state
            this.setState({ 
                translatedText: data.translation,
                isLoading: false
            });
        } else {
            // Handle errors reported by your proxy server
            this.setState({ 
                error: data.message || 'Translation failed on the server.',
                isLoading: false
            });
        }

    } catch (e) {
        this.setState({ 
            error: 'Could not connect to the translation server.',
            isLoading: false 
        });
    }
}
