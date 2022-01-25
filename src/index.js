/*import ToolboxIcon from './svg/toolbox.svg';
import './index.css';*/

/**
 * Personality Tool for the Editor.js
 */
/*export default */class TitleWitchDescription {
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
      nameDescriptionInput: null,
    };

    this.config = {
      titlePlaceholder: config.titlePlaceholder || 'Title',
      descriptionPlaceholder: config.descriptionPlaceholder || 'Description',
      inputTitleName: config.inputTitleName || 'Title',
      inputDescriptionName: config.inputDescriptionName || 'Description',
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
      icon: '<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg">\n' +
          '    <path d="M5.27 7.519a3.114 3.114 0 0 1-1.014-.44 3.354 3.354 0 0 1-.973-1.002C2.865 5.42 2.65 4.62 2.65 3.8c0-.82.215-1.62.633-2.277.251-.394.574-.737.973-1.002a3.094 3.094 0 0 1 3.438 0c.399.265.722.608.973 1.002.418.657.633 1.456.633 2.277 0 .82-.215 1.62-.633 2.277a3.353 3.353 0 0 1-.973 1.002c-.31.206-.655.357-1.023.442.93.054 1.826.212 2.591.45.503.155.95.345 1.324.576.27.167.511.358.725.6a2.441 2.441 0 0 1-.109 3.408c-.25.247-.525.424-.828.568-.38.181-.816.311-1.32.413-.853.172-1.937.264-3.079.264-1.142 0-2.226-.092-3.078-.264-.505-.102-.941-.232-1.321-.413a2.969 2.969 0 0 1-.828-.568 2.449 2.449 0 0 1-.13-3.384c.21-.246.45-.441.717-.61a5.63 5.63 0 0 1 1.316-.587c.77-.243 1.675-.403 2.618-.455zM5.974 5.5c.594 0 1.075-.761 1.075-1.7s-.481-1.7-1.075-1.7S4.9 2.861 4.9 3.8s.481 1.7 1.075 1.7zm0 6.05c2.057 0 3.725-.336 3.725-.75S8.007 9.75 5.95 9.75s-3.7.636-3.7 1.05c0 .414 1.668.75 3.725.75z" id="a"/>\n' +
          '</svg>',
      title: 'Score witch description'
    };
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: [this.api.styles.block, 'cdx-score__base'],

      /**
       * Tool's classes
       */
      title: ['cdx-score__title', this.api.styles.input],
      description: ['cdx-score__description', this.api.styles.input],
      nameInput: ['cdx-score__input_name']
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
      description: description.trim() || '',
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
    if (!savedData.title.trim() || !savedData.description.trim()){
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
