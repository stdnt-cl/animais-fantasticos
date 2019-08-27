export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    this.options = options || {// native animation function
      block: 'start',
      behavior: 'smooth',
    };
    this.scrollToSection = this.scrollToSection.bind(this); // binding callback function
  }

  scrollToSection(event) {
    event.preventDefault();
    // getting clicked target's href
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.optiasticos/commit/37409d28509d3433239a7f1aec8c7a0557020133ons);
  }

  addEvents() {
    // Verifying
    if (this.internalLinks.length) {
      // Adding event's to each internal link
      this.internalLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          this.scrollToSection(event);
        });
      /* this.scrollToSection has, internally, this === link.
      So, the way it is now is correcting the "this" mistarget, is within arrow function,
      but, in this case, you loose the original this reference. So is better to bind it in
      its constructor */
      });
    }
  }

  init() {
    if (this.internalLinks.length) this.addEvents();
    return this;
  }
}
