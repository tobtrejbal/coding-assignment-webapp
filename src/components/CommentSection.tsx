import React from "react";
import AddCommentModal from "./AddCommentModal";
import './CommentSection.css';
import { Button } from 'react-bootstrap';

interface CommentSectionProps {
    comments: Array<Comment>,
    callbackAddComment(commentToReactID: null | number, commentAuthor: string, commentContent: string): void,
}

interface CommentSectionState {
    commentToReact: string,
    commentToReactID: null | number,
    show: boolean
}

interface Comment {
    id: number,
    productId: number,
    parentId?: null | number,
    authorName: string,
    dateGmt: string,
    content: string
}

/**
 * Component with product discussion.
 */
class CommentSection extends React.Component<CommentSectionProps, CommentSectionState> {
    state = {
        show: false,
        commentText: "",
        commentToReact: "",
        commentToReactID: null
    }

    render() {
        return (
            <div className="mt-5">
                <h2 className="sectionHeadline">Comments</h2>
                <Button onClick={this.showModal}>Add comment</Button>
                <AddCommentModal show={this.state.show}
                    commentToReact={this.state.commentToReact}
                    onClose={this.hideModal}
                    onConfirm={this.addComment}
                />
                {this.props.comments.filter(commentTofilter => commentTofilter.parentId == null).map((comment) => {
                    return (
                        <Comment key={comment.id} comments={this.props.comments} comment={comment} showModal={this.showModal} type="parent" />
                    )
                })}
            </div>

        );
    }

    showModal = (e: React.MouseEvent<HTMLElement>) => {
        // Clear all variables before showing modal.
        this.setState({
            show: true,
            commentToReact: "",
            commentToReactID: null
        });
        this.findCommentByID(this.props.comments, e.currentTarget.id);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    /**
     * Callback function - passed to modal dialog.
     * @param commentAuthor Author of comment.
     * @param commentContent Content of comment.
     */
    addComment = (commentAuthor: string, commentContent: string) => {
        this.hideModal();
        this.props.callbackAddComment(this.state.commentToReactID, commentAuthor, commentContent);
    }

    /**
     * Finds and set variables for replied comment.
     * @param Array of all comments for product. 
     * @param id of comment to react. 
     */
    findCommentByID = (comments: Array<Comment>, id: string) => {
        comments.map((comment) => {
            if (("btn_comment_" + comment.id) == id) {
                this.setState({ commentToReact: comment.content, commentToReactID: comment.id });
            };
        })
    };
}

interface CommentProps {
    comments: Array<Comment>
    comment: Comment,
    type: string,
    showModal(e: React.MouseEvent): void;
}

/**
 * Function to display comment. Recursive approach was necessary because of possible infinite nesting. 
 * @param comments Array of all comments for product.
 * @param comment Current comment to display.
 * @param showmodal Function to display modal dialog to respond.
 * @returns Div element with current comment.
 */
function Comment({ comments, comment, showModal }: CommentProps) {
    const nestedComments = (comments.filter(commentTofilter => commentTofilter.parentId == comment.id) || []).map(comment => {
        return <Comment key={comment.id} comments={comments} comment={comment} showModal={showModal} type="child" />
    })

    return (
        <div className="commentSection-commentBlock">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{comment.authorName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{comment.dateGmt}</h6>
                    <p className="card-text">{comment.content}</p>
                    <Button id={"btn_comment_" + comment.id} onClick={showModal}>Reply</Button>
                </div>
            </div>
            {nestedComments}
        </div>
    )
}



export default CommentSection