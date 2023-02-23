const tabs = document.querySelector('.tabs');

document.addEventListener( "DOMContentLoaded" , function() {
  if (tabs) {
    tabs.querySelectorAll("[disabled]").forEach(elem => elem.removeAttribute("disabled"));
  }
});


class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__button');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__button--active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane--show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__button--active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane--show') : null;
    elLinkTarget.classList.add('tabs__button--active');
    elPaneTarget.classList.add('tabs__pane--show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__button');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

if (tabs) {
new ItcTabs('.tabs');
}
