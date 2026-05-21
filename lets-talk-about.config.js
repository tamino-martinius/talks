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
      const left = slots.left || slots.default || '';
      const center = slots.center || '';
      const right = slots.right || '';
      return `<div class="template-three-column">
        <div class="template-col">${left}</div>
        <div class="template-col">${center}</div>
        <div class="template-col">${right}</div>
      </div>`;
    },
  },
  styles: './custom.css',
};
