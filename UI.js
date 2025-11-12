// Inside your render() method in TranslateApp.js

// Function to handle changes in either selector
handleLanguageChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
}

// ... in the return() body of render() ...

<div class="language-selectors">
    <label>
        Source Language:
        <select 
            name="sourceLang" 
            value={this.state.sourceLang} 
            onchange={this.handleLanguageChange.bind(this)}
        >
            {this.state.languages.map(lang => (
                <option key={lang.language} value={lang.language}>
                    {lang.name}
                </option>
            ))}
        </select>
    </label>

    <label>
        Target Language:
        <select 
            name="targetLang" 
            value={this.state.targetLang} 
            onchange={this.handleLanguageChange.bind(this)}
        >
            {this.state.languages.map(lang => (
                <option key={lang.language} value={lang.language}>
                    {lang.name}
                </option>
            ))}
        </select>
    </label>
</div>
