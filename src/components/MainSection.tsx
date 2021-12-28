import React from "react"
import './MainSection.css';

interface MainSectionProps {

}

interface MainSectionState {

}

/**
 * Component with product description and other info.
 */
class MainSection extends React.Component<MainSectionProps, MainSectionState> {
    render() {
        return (
            <div>
                <h2>Popis produktu</h2>
            </div>
        );
    }
}

export default MainSection