// Assuming Keto has a lifecycle method for when the component is ready
componentDidMount() {
    this.fetchLanguages();
}

async fetchLanguages() {
    try {
        const response = await fetch('/api/languages'); // Call your internal proxy
        const data = await response.json();

        if (response.ok) {
            this.setState({ languages: data.languages });
        } else {
            this.setState({ error: 'Could not load language list.' });
        }
    } catch (e) {
        this.setState({ error: 'Network error fetching languages.' });
    }
}
