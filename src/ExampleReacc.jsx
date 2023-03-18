import React,{useState} from 'react'
import ReactFace from './ReactFace';
import getData from './getData';
import CommentsSection from './CommentsSection';
import PersonDisplay from './PersonDisplay';

const ExampleReacc = (props) => {
    const THROTTLE_TIME = 1500;
    const [data, setData] = useState([]);
    const [isShowComments, setIsShowComments] = useState(false);
    const [isShowReactPopup, setIsShowReactPopup] = useState(false);
    const [isReactHiding, setIsReactHiding] = useState(false);
    
    let reactPopup = null;
    
    if (isShowReactPopup === true) {
      let reactPopupClassName = "post-react-popup";
      
      if (isReactHiding === true) {
        reactPopupClassName += " hiding"
      }
      
      reactPopup = (
        <div
          className={reactPopupClassName}
          onMouseOver={() => {
            setIsShowReactPopup(true);
            setIsReactHiding(false);
          }}
          onMouseLeave={() => {
            setIsReactHiding(true);
          }}
          onAnimationEnd={evt => {
            if (evt.animationName === "hide") {
              setIsShowReactPopup(false);
            }
          }}>
          <ReactFace type="smile" />
          <ReactFace type="happy" />
          <ReactFace type="surprised" />
          <ReactFace type="sad" />
          <ReactFace type="angry" />
        </div>
      );
    }
    
    // Simulate the fetching of data
    setTimeout(() => {
      setData(getData);
    }, THROTTLE_TIME);
    
    return (
      <article className="post">
        <header className="post-header">
          <h2>{data.Title}</h2>
        </header>
        <section className="post-top">
          <PersonDisplay data={data} show-icon={true} />
        </section>
        <section className="post-content">
          <p>
            {data.Content}
          </p>
          <p className="content-reactions">
            <i className="far fa-thumbs-up"></i>
            <span className="margin-left-quarter">{data.ReactCount}</span>
            <span className="margin-left-quarter">reactions</span>
          </p>
          {reactPopup}
        </section>
        <section className="post-commands">
          <button
            className="post-button"
            onMouseOver={() => {
              setIsShowReactPopup(true);
              setIsReactHiding(false);
            }}
            onMouseLeave={() => {
              setIsReactHiding(true);
            }}>
            <i className="far fa-thumbs-up"></i>
            <span>Reaction</span>
          </button>
          <button
            className="post-button"
            onClick={evt => {
              setIsShowComments(true);
            }}>
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </button>
        </section>
        <CommentsSection show-comments={isShowComments} />
      </article>
    );
}

export default ExampleReacc