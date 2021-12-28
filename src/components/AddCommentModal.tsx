import React from "react";
import './AddCommentModal.css';
import { Button, Modal, Form } from 'react-bootstrap';


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
            <Modal show={this.props.show} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Přidej komentář</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Reagujete na komentář</Form.Label>
                            <p>{this.props.commentToReact}</p>
                            <Form.Label>Autor komentáře</Form.Label>
                            <Form.Control placeholder="Jméno" onChange={this.updateCommentAuthor}/>
                            <Form.Label>komentář</Form.Label>
                            <Form.Control as="textarea" placeholder="Komentář" onChange={this.updateCommentContent}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.confirm}>
                        Přidat
                    </Button>
                    <Button variant="secondary" onClick={this.close}>
                        Zavřít
                    </Button>
                </Modal.Footer>
            </Modal>
        );
        {/* non bootstrap modal
            <div className="commentModal">
                <div className="commentModal-content">
                    <div className="commentModal-header">
                        <h4 className="commentModal-title">Přidej komentář</h4>
                    </div>
                    <div className="commentModal-body">
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
                    <div className="commentModal-footer">
                        <Button onClick={this.confirm}>Přidat</Button>   
                        <Button onClick={this.close}>Zavřít</Button>       
                    </div>
                </div>
        </div>*/}
    }
};

export default AddCommentModal