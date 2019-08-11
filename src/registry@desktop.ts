import { Registry } from '@bem-react/di';

import { DatepickerType, DatepickerDesktop } from "./blocks/Datepicker/Datepicker@desktop";

const registry = new Registry({ id: 'app' });

registry.set(DatepickerType, DatepickerDesktop);

export { registry };