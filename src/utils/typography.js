import Typography from 'typography';

import stAnneTheme from 'typography-theme-st-annes';

const typography = new Typography({ ...stAnneTheme, ...{ baseFontSize: '18px', blockquote: {} } });

export default typography;
