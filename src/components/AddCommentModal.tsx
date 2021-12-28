import React from "react";
import './AddCommentModal.css';

interface AddCommentModalProps {
    show: boolean,
    commentToReact: string, 
    onConfirm(commentAuthor: string, commentContent: string): void,
    onClose(): void
}

interface AddCommentModalState {
    commentAuthor: string,
    commentContent: string
}

// Potřebuji zpět poslat data, jinak const
class AddCommentModal extends React.Component<AddCommentModalProps, AddCommentModalState> {
    state = {
        commentAuthor: "",
        commentContent: ""
    }

    confirm = () => {
        this.props.onConfirm(this.state.commentAuthor, this.state.commentContent);
    }

    close = () => {
        this.props.onClose();    
    }

    updateCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            commentContent: e.target.value
        });
    }

    updateCommentAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            commentAuthor: e.target.value
        });
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Přidej komentář</h4>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.commentToReact}</p>
                        <form>
                            <label>
                                Author:
                                <input type="text" name="text" value={this.state.commentAuthor} onChange={this.updateCommentAuthor}/>
                            </label>
                            <label>
                                Text:
                                <input type="text" name="text" value={this.state.commentContent} onChange={this.updateCommentContent}/>
                            </label>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.confirm}>Přidat</button>   
                        <button onClick={this.close}>Zavřít</button>       
                    </div>
                </div>
            </div>
        );
    }
  };
  
  export default AddCommentModal