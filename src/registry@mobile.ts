import { Registry } from '@bem-react/di';

import { DatepickerMobile } from "./blocks/Datepicker/Datepicker@mobile";

const registry = new Registry({ id: 'app' });

registry.set('Datepicker', DatepickerMobile);

export { registry };