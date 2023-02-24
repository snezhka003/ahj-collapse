import createElement from './CreateElement';

export default class Collapse {
  constructor() {
    this.container = document.querySelector('.collapse');
  }

  init() {
    const button = createElement('button', {
      className: 'collapse_btn',
      textContent: 'Collapse',
    });
    const text = createElement('p', {
      className: 'text_content',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
    const textWrapper = createElement('div', {
      className: 'collapse_text',
    }, text);

    this.container.appendChild(button);
    this.container.appendChild(textWrapper);

    this.collapseText = document.querySelector('.collapse_text');
    this.collapseBtn = document.querySelector('.collapse_btn');

    this.collapseBtn.addEventListener('click', () => {
      this.collapseText.classList.toggle('appear');
    });
  }
}
