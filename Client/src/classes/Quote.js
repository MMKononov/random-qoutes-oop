class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
    // this.isFavorite = false;
  }
  formatText() {
    return `"${this.text}"`;
  }
  formatAuthor() {
    return `© ${this.author}`;
  }
}

export default Quote;
