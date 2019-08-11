import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { DatepickerType, IDatepicker } from './Datepicker';

class DatepickerDesktop extends React.PureComponent<{}> implements IDatepicker {
    render() {
        return <DayPicker selectedDays={new Date()} />;
    }
}

export { DatepickerType, DatepickerDesktop };
