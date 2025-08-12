import * as guards from './guards';
import * as interceptors from './interceptors';
import * as services from './services';
import * as utils from './utils';

export const coreProviders = [
  ...Object.values(guards),
  ...Object.values(interceptors),
  ...Object.values(services),
  ...Object.values(utils),
];