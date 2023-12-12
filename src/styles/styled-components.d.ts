// Arquivo para fazer a tipagem do nosso 'theme'

import { theme } from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
