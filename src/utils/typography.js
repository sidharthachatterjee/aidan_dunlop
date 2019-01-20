import Typography from 'typography';

import sternGrove from 'typography-theme-stern-grove';

const headerFont = 'Cutive Mono';
const bodyFont = 'Roboto Slab';

const typography = new Typography({
  ...sternGrove,
  ...{
    baseFontSize: '18px',
    blockquote: {},
    googleFonts: [{
      name: headerFont,
      styles: [
        '300',
        '400',
        '500',
        '600',
        '700',
      ],
    },
    {
      name: bodyFont,
      styles: [
        '300',
        '400',
        '500',
        '600',
        '700',
      ],
    }],
    headerFontFamily: [headerFont, 'sans-serif'],
    bodyFontFamily: [bodyFont, 'serif'],
    scaleRatio: 1.5,
  },
});

export default typography;
