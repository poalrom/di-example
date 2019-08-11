import React from "react";
import { registryContext } from "@bem-react/di";

class Container extends React.PureComponent<{}> {
    render() {
        return (
            <registryContext.Consumer>
                {({ app }) => {
                    const Datepicker = app.get('Datepicker');

                    return <Datepicker />
                }}
            </registryContext.Consumer>
        )
    }
}

export { Container };
