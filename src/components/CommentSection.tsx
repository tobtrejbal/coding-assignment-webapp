import React from "react";
import AddCommentModal from "./AddCommentModal";
import './CommentSection.css';
import { Button } from 'react-bootstrap';
import { Comment } from '../model/ObjectTypes'

interface CommentSectionProps {
    comments: Array<Comment>,
    callbackAddComment(commentToReactID: null | number, commentAuthor: string, commentContent: string): void,
}

/**
 * Header component. Contains product image and title.
 */
 export const CommentSection = ({ comments, callbackAddComment }: CommentSectionProps) => {
    const [showModal, setShowModal] = React.useState(false);
    const [commentToReact, setCommentToReact] = React.useState("");
    const [commentToReactID, setCommentToReactID] = React.useState(0);
    
    const handleShowModal = (e: React.MouseEvent<HTMLElement>) => {
        setShowModal(true);
        setCommentToReact("");
        setCommentToReactID(0);

        findCommentByID(comments, e.currentTarget.id);
    }

    const handleHideModal = () => {
        setShowModal(false);
    }

    const findCommentByID = (comments: Array<Comment>, id: string) => {
        const selectedComment: Comment | undefined = comments.find(comment => `btn_comment_${comment.id}` == id);
        setCommentToReact(selectedComment!.content);
        setCommentToReactID(selectedComment!.id);
    }

    const addComment = (commentAuthor: string, commentContent: string) => {
        handleHideModal();
        callbackAddComment(commentToReactID, commentAuthor, commentContent);
    }
    
    return (
            <div className="mt-5">
                <h2 className="sectionHeadline">Comments</h2>
                <Button onClick={handleShowModal}>Add comment</Button>
                <AddCommentModal showModal={showModal}
                    commentToReact={commentToReact}
                    onClose={handleHideModal}
                    onConfirm={addComment}
                />
                {comments.filter(commentTofilter => commentTofilter.parentId == null).map((comment) => {
                    return (
                        <RenderComment key={comment.id} comments={comments} comment={comment} showModal={handleShowModal} type="parent" />
                    )
                })}
            </div>

        );
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
function RenderComment({ comments, comment, showModal }: CommentProps) {
    const nestedComments = (comments.filter(commentTofilter => commentTofilter.parentId == comment.id) || []).map(comment => {
        return <RenderComment key={comment.id} comments={comments} comment={comment} showModal={showModal} type="child" />
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