export default {
  theme: {
    colorTheme: '#6c6',
    colorForeground: '#000',
    colorBackground: '#fff',
    colorVignette: '#765',
    colorSectionForeground: '#fff',
  },
  templates: {
    'three-column'(slots) {
      const header = slots.header || '';
      const left = slots.left || slots.default || '';
      const center = slots.center || '';
      const right = slots.right || '';
      return `<div class="template-three-column">
        <div class="template-three-column-header">${header}</div>
        <div class="template-three-column-cols">
          <div class="template-col">${left}</div>
          <div class="template-col">${center}</div>
          <div class="template-col">${right}</div>
        </div>
      </div>`;
    },
    'five-column'(slots) {
      const header = slots.header || '';
      const col1 = slots.col1 || slots.default || '';
      const col2 = slots.col2 || '';
      const col3 = slots.col3 || '';
      const col4 = slots.col4 || '';
      const col5 = slots.col5 || '';
      return `<div class="template-five-column">
        <div class="template-five-column-header">${header}</div>
        <div class="template-five-column-cols">
          <div class="template-col">${col1}</div>
          <div class="template-col">${col2}</div>
          <div class="template-col">${col3}</div>
          <div class="template-col">${col4}</div>
          <div class="template-col">${col5}</div>
        </div>
      </div>`;
    },
  },
  styles: './styles.css',
};
