import React from "react";
import { DatepickerMobile } from '../Datepicker/Datepicker@mobile';
import { DatepickerDesktop } from '../Datepicker/Datepicker@desktop';

class Container extends React.PureComponent<{}> {
    render() {
        return process.env.PLATFORM === 'mobile'?
            <DatepickerMobile /> :
            <DatepickerDesktop />
    }
}

export { Container };
