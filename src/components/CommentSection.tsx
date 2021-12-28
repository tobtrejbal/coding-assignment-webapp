import React from "react";
import './CommentSection.css';

interface CommentSectionProps {
    comments: Array<Comment>
}

interface CommentSectionState {

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

    render() {
        return (
            <div>
                <h2 className="header-title">Komentáře</h2>
                {this.props.comments.filter(commentTofilter => commentTofilter.parentId == null).map((comment) => {
                    return (
                        <Comment key={comment.id} comments={this.props.comments} comment={comment} type="parent"/>
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
}

interface CommentProps {
    comments: Array<Comment>
    comment: Comment,
    type: string
}

function Comment({ comments, comment }: CommentProps) {
    const nestedComments = (comments.filter(commentTofilter => commentTofilter.parentId == comment.id) || []).map(comment => {
        return <Comment key={comment.id} comments={comments} comment={comment} type="child" />
    })

    return (
        <div className="commentSection-commentBlock">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{comment.authorName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{comment.dateGmt}</h6>
                    <p className="card-text">{comment.content}</p>
                </div>
            </div>
            {nestedComments}
        </div>
    )
}



export default CommentSection