import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { IDatepickerProps } from './Datepicker';

class DatepickerDesktop extends React.PureComponent<IDatepickerProps> {
    render() {
        return <DayPicker selectedDays={new Date()} />;
    }
}

export { DatepickerDesktop };
