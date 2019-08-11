import { Registry } from '@bem-react/di';

import { DatepickerDesktop } from "./blocks/Datepicker/Datepicker@desktop";

const registry = new Registry({ id: 'app' });

registry.set('Datepicker', DatepickerDesktop);

export { registry };