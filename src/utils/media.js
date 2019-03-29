// Media queries helper for mobile first
import { breakpoints as bp } from '../../config/theme';

const mq = bp.map(breakpoint => `@media (min-width: ${breakpoint}px)`);

const mqDown = bp.map(breakpoint => `@media (max-width: ${breakpoint}px)`);

export default {
  sm: mq[0],
  md: mq[1],
  lg: mq[2],
  xl: mq[3],
  smDown: mqDown[0],
  mdDown: mqDown[1],
  lgDown: mqDown[2],
  xlDown: mqDown[3],
  tabletOnly: `@media (min-width: ${bp[1] + 1}px) and (max-width: ${bp[2]}px)`,
  desktopOnly: `@media (min-width: ${bp[2] + 1}px) and (max-width: ${bp[3]}px)`,
};
