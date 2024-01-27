const DEFAULT_FONT = '"League Spartan", sans-serif';
const THEME = {
  color: {
    white: '#FFFFFF',
    background: '#F8F8FB',
    text: {
      primary: '#0C0E16',
      secondary: '#888EB0',
      tertiary: '#7E88C3',
    },
    primary: {
      main: '#7C5DFA',
      hover: '#9277FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F9FAFE',
      hover: '#DFE3FA',
      contrastText: '#7E88C3',
    },
    tertiary: {
      main: '#373B53',
      hover: '#0C0E16',
      contrastText: '#888EB0',
    },
    error: {
      main: '#EC5757',
      hover: '#FF9797',
    },
    pending: {
      main: '#FF8F00',
    },
    success: {
      main: '#33D69F',
      hover: '#6EE7B7',
    },
  },

  border: {
    radius: '24px',
    style: '1px solid #DFE3FA',
    focus: '1px solid #7C5DFA',
  },

  font: {
    large: `bold 36px/33px ${DEFAULT_FONT}`,
    medium: `bold 24px/22px ${DEFAULT_FONT}`,
    small: `bold 15px/24px ${DEFAULT_FONT}`,
    body: `medium 13px/18px ${DEFAULT_FONT}`,
  },
};

export default THEME;
