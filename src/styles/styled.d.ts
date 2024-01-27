import 'styled-components';

import THEME from './Theme';

export type ITheme = typeof THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
