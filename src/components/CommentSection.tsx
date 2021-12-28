import React from "react";

class CommentSection extends React.Component {
    state = {
        show: false,
        commentText: "",
        commentToReact: "",
        commentToReactID: "",
    }

    render() {
        return (
            <div>
                <h2 className="header-title">Komentáře</h2>                
            </div>
        );
    }
}


export default CommentSection