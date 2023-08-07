import ToolboxIcon from './svg/toolbox.svg';
import './index.css';

/**
 * Personality Tool for the Editor.js
 */
export default class TitleWitchDescription {
  /**
   * @param data
   * @param config
   * @param api
   */
  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      title: null,
      description: null,
      nameTitleInput: null,
      nameDescriptionInput: null
    };

    this.config = {
      titlePlaceholder: config.titlePlaceholder || 'Title',
      descriptionPlaceholder: config.descriptionPlaceholder || 'Description',
      inputTitleName: config.inputTitleName || 'Title',
      inputDescriptionName: config.inputDescriptionName || 'Description'
    };

    /**
     * Set saved state
     */
    this.data = data;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Заголовок / Опис'
    };
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: [this.api.styles.block, 'cdx-score-t__base'],

      /**
       * Tool's classes
       */
      title: ['cdx-score-t__title', this.api.styles.input],
      description: ['cdx-score-t__description', this.api.styles.input],
      nameInput: [ 'cdx-score-t__input_name' ]
    };
  }

  /**
   * @param toolsContent
   * @returns {*}
   */
  save(toolsContent) {
    const title = toolsContent.querySelector(`.${this.CSS.title}`).textContent;
    const description = toolsContent.querySelector(`.${this.CSS.description}`).textContent;

    Object.assign(this.data, {
      title: title.trim() || '',
      description: description.trim() || ''
    });

    return this.data;
  }

  /**
   * Renders Block content
   * @return {HTMLDivElement}
   */
  render() {
    const { title, description } = this.data;

    this.nodes.wrapper = this.make('div', this.CSS.baseClass);

    this.nodes.title = this.make('div', this.CSS.title, {
      contentEditable: true
    });

    this.nodes.description = this.make('div', this.CSS.description, {
      contentEditable: true
    });

    if (title) {
      this.nodes.title.textContent = title;
    }

    if (description) {
      this.nodes.description.textContent = description;
    }

    this.nodes.title.dataset.placeholder = this.config.titlePlaceholder;
    this.nodes.description.dataset.placeholder = this.config.descriptionPlaceholder;

    this.nodes.nameTitleInput = this.make('div', this.CSS.nameInput, {
      contentEditable: false
    });

    this.nodes.nameTitleInput.textContent = this.config.inputTitleName;

    this.nodes.nameDescriptionInput = this.make('div', this.CSS.nameInput, {
      contentEditable: false
    });

    this.nodes.nameDescriptionInput.textContent = this.config.inputDescriptionName;

    this.nodes.wrapper.appendChild(this.nodes.nameTitleInput);
    this.nodes.wrapper.appendChild(this.nodes.title);
    this.nodes.wrapper.appendChild(this.nodes.nameDescriptionInput);
    this.nodes.wrapper.appendChild(this.nodes.description);

    return this.nodes.wrapper;
  }

  /**
   * @param savedData
   * @returns {string|string|(function(*, *, *): string)|*}
   */
  validate(savedData) {
    if (!savedData.title.trim() || !savedData.description.trim()) {
      return false;
    }

    /**
     * Return false if fields are empty
     */
    return true;
  }

  /**
   * Helper method for elements creation
   * @param tagName
   * @param classNames
   * @param attributes
   * @return {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
