import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';


interface AddCommentModalProps {
    show: boolean,
    commentToReact: string,
    onConfirm(commentAuthor: string, commentContent: string): void,
    onClose(): void
}

interface AddCommentModalState {
    commentAuthor: string,
    commentContent: string,
    nameIsInvalid: boolean,
    commentIsInvalid: boolean,
    validationError: string
}

/**
 * Dialog component and managing it's state.
 */
class AddCommentModal extends React.Component<AddCommentModalProps, AddCommentModalState> {
    state = {
        commentAuthor: "",
        commentContent: "",
        nameIsInvalid: false,
        commentIsInvalid: false,
        validationError: ""
    }

    confirm = (e: React.MouseEvent) => {
        if (this.validateValues()) {
            this.props.onConfirm(this.state.commentAuthor, this.state.commentContent);
        }
    }

    close = () => {
        this.setState({
            nameIsInvalid: false,
            commentIsInvalid: false
        });
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

    validateValues = (): boolean => {
        var formIsValid: boolean;
        var nameIsInvalid: boolean;
        var commentIsInvalid: boolean;

        formIsValid = true;

        if (this.state.commentAuthor === "") {
            formIsValid = false;
            nameIsInvalid = true;
        } else {
            nameIsInvalid = false;
        }

        if (this.state.commentContent === "") {
            formIsValid = false;
            commentIsInvalid = true;
        } else {
            commentIsInvalid = false;
        }

        this.setState({
            nameIsInvalid: nameIsInvalid,
            commentIsInvalid: commentIsInvalid
        });

        return formIsValid;
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Modal show={this.props.show} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {(this.props.commentToReact != "") && <Form.Label>Comment to react</Form.Label>}
                            <p>{this.props.commentToReact}</p>
                            <Form.Label>Your name</Form.Label>
                            <Form.Control isInvalid={this.state.nameIsInvalid} placeholder="Your name" onChange={this.updateCommentAuthor} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid name.
                            </Form.Control.Feedback>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control isInvalid={this.state.commentIsInvalid} as="textarea" placeholder="Comment" onChange={this.updateCommentContent} />
                            <Form.Control.Feedback type="invalid">
                                Comment field cannot be empty.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.confirm}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={this.close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default AddCommentModal