// Inside the return() body of render()

<div class="translation-container">
    {/* --- INPUT AREA (Source Text) --- */}
    <div class="input-panel">
        <h3>Source Text ({this.state.sourceLang})</h3>
        <textarea
            value={this.state.inputText}
            onchange={this.handleInputTextChange.bind(this)}
            placeholder="Type or paste text here to translate..."
            rows="8"
            cols="50"
        />
    </div>

    {/* --- TRANSLATE BUTTON --- */}
    <div class="action-panel">
        <button 
            onclick={this.handleTranslate.bind(this)} 
            disabled={this.state.isLoading || !this.state.inputText}
        >
            {this.state.isLoading ? 'Translating...' : '➡️ Translate'}
        </button>
        {this.state.error && <p style="color: red;">{this.state.error}</p>}
    </div>

    {/* --- OUTPUT AREA (Translated Text) --- */}
    <div class="output-panel">
        <h3>Translated Text ({this.state.targetLang})</h3>
        <textarea
            value={this.state.translatedText}
            readonly
            placeholder="Translation will appear here..."
            rows="8"
            cols="50"
        />
    </div>
</div>
