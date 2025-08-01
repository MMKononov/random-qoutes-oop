import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn");
    this.currentQuote = null;
    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async randomQuoteVieAPIHandler() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuoteAPIBtn.addEventListener("click", () =>
      this.randomQuoteVieAPIHandler()
    );
  }
}

export default RandomQuotesApp;
