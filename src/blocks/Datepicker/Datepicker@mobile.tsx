import React from "react";

import { IDatepickerProps } from './Datepicker';

class DatepickerMobile extends React.PureComponent<IDatepickerProps> {
    render() {
        return <input type="date" />;
    }
}

export { DatepickerMobile };
