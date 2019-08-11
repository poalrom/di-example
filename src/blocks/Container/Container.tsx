import React from "react";
import { registryContext } from "@bem-react/di";
import { IDatepickerProps } from '../Datepicker/Datepicker';

class Container extends React.PureComponent<{}> {
    render() {
        return (
            <registryContext.Consumer>
                {({ app }) => {
                    const Datepicker = app.get<IDatepickerProps>('Datepicker');

                    return <Datepicker />;
                }}
            </registryContext.Consumer>
        )
    }
}

export { Container };
