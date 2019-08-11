import React from "react";

import { DatepickerType, IDatepicker } from './Datepicker';

class DatepickerMobile extends React.PureComponent<{}> implements IDatepicker {
    render() {
        return <input type="date" />;
    }
}

export { DatepickerType, DatepickerMobile };
