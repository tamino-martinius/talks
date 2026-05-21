export default {
  theme: {
    colorTheme: 'rgb(152,101,246)',
    colorForeground: '#000',
    colorBackground: '#fff',
    colorVignette: '#765',
    colorSectionForeground: '#fff',
  },
  templates: {
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
    'seven-column'(slots) {
      const header = slots.header || '';
      const col1 = slots.col1 || slots.default || '';
      const col2 = slots.col2 || '';
      const col3 = slots.col3 || '';
      const col4 = slots.col4 || '';
      const col5 = slots.col5 || '';
      const col6 = slots.col6 || '';
      const col7 = slots.col7 || '';
      return `<div class="template-seven-column">
        <div class="template-seven-column-header">${header}</div>
        <div class="template-seven-column-cols">
          <div class="template-col">${col1}</div>
          <div class="template-col">${col2}</div>
          <div class="template-col">${col3}</div>
          <div class="template-col">${col4}</div>
          <div class="template-col">${col5}</div>
          <div class="template-col">${col6}</div>
          <div class="template-col">${col7}</div>
        </div>
      </div>`;
    },
  },
  styles: './styles.css',
};
