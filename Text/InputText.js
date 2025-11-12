// Inside your TranslateApp class

handleInputTextChange(event) {
    // This assumes the Keto framework passes a standard event object
    this.setState({ inputText: event.target.value });
}
