import React,{useState} from 'react'
import getSession from './getSession'
import AvatarElm from './AvatarElm';
import PersonDisplay from './PersonDisplay';
import getComments from './getComments';

const CommentsSection = (props) => {
    const THROTTLE_TIME = 1500;
    const [commentList, setCommentList] = useState([]);
    if (props["show-comments"] === false) {
      return null;
    }
    
    
    
    let commentsElm = (
      <div className="spinner-container">
        <span className="spinner"></span>
      </div>
    );
    
    if (commentList.length > 0) {
      commentsElm = [];
      
      let session = getSession;
      
      commentsElm = [...commentsElm, (
        <div className="comment-input">
          <AvatarElm link={session.Avatar} />
          <textarea
            className="text-comment"
            placeholder="Write your comment here..."></textarea>
          <button
            className="send-button"
            onClick={() => {
              console.error(
                "This thing will not work even if you click this: " +
                "Please try to 'mouseover' or 'hover' on the button " +
                "to see the purpose of this pen."
              );
            }}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      )];
      
      for (const comment of commentList) {
        commentsElm = [...commentsElm, (
          <div className="comment-container">
            <div className="comment-top">
              <PersonDisplay data={comment} show-icon={false} />
            </div>
            <div className="comment-content">
              {comment.Comment}
            </div>
          </div>
        )];
      }
    }
    
    // Simulate the fetching of data
    setTimeout(() => {
      setCommentList(getComments());
    }, THROTTLE_TIME);
    
    return (<section className="post-comments">{commentsElm}</section>);
}

export default CommentsSection