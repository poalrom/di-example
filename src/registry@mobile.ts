import { Registry } from '@bem-react/di';

import { DatepickerType, DatepickerMobile } from "./blocks/Datepicker/Datepicker@mobile";

const registry = new Registry({ id: 'app' });

registry.set(DatepickerType, DatepickerMobile);

export { registry };