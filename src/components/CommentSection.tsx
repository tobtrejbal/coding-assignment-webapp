import React from "react";
import AddCommentModal from "./AddCommentModal";
import './CommentSection.css';

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
            <div>
                <h2 className="header-title">Komentáře</h2>
                <button onClick={this.showModal}>Vložit komentář</button>
                <AddCommentModal show={this.state.show}
                                 commentToReact={this.state.commentToReact}
                                 onClose = {this.hideModal}
                                 onConfirm = {this.addComment}
                                 />
                {this.props.comments.filter(commentTofilter => commentTofilter.parentId == null).map((comment) => {
                    return (
                        <Comment key={comment.id} comments={this.props.comments} comment={comment} showModal={this.showModal} type="parent"/>
                    )
                })}
                {/* Two level solution
                    this.props.comments.filter(commentTofilter => commentTofilter.parentId == null).map((comment) => (
                    <div className="commentSection-commentBlock">
                        <div className="card-body">
                            <h5 className="card-title">{comment.authorName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{comment.dateGmt}</h6>
                            <p className="card-text">{comment.content}</p>
                            {this.props.comments.filter(commentTofilter => commentTofilter.parentId == comment.id).map((comment2) => (
                                <div className="commentSection-commentBlock">
                                    <div className="card-body">
                                        <h5 className="card-title">{comment2.authorName}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{comment2.dateGmt}</h6>
                                        <p className="card-text">{comment2.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                            ))*/}
            </div>

        );
    }

    showModal = (e: React.MouseEvent<HTMLElement>) => { 
        this.setState({ show: true,
                        commentToReact: "", 
                        commentToReactID: null});
        this.findCommentByID(this.props.comments, e.currentTarget.id);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    addComment = (commentAuthor: string, commentContent: string) => {
        this.hideModal();
        this.props.callbackAddComment(this.state.commentToReactID, commentAuthor, commentContent);
    } 

    findCommentByID = (comments: Array<Comment>, id: string) => {
        comments.map((comment) => {
            if(("btn_comment_" + comment.id) == id) {
                this.setState({commentToReact: comment.content, commentToReactID: comment.id});
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
                    <button id={"btn_comment_" + comment.id} onClick={showModal}>Odpovědět</button>
                </div>
            </div>
            {nestedComments}
        </div>
    )
}



export default CommentSection