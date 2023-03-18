import React from 'react'
import AvatarElm from './AvatarElm';

const PersonDisplay = (props) => {
    const data = props.data;
    const showIcon = props["show-icon"];
    
    let userIcon = null;
    let dateIcon = null;
    
    if (showIcon === true) {
      userIcon = (<i className="far fa-user"></i>);
      dateIcon = (<i className="far fa-clock"></i>);
    }
    
    return [(
      <AvatarElm  />
    ), (
      <div className="post-identifier">
        <p>
          {userIcon}
          <a href="#" className="post-author-link margin-left-half">
            {data.Name}
          </a>
        </p>
        <p>
          <small>
            {dateIcon}
            <time className="margin-left-half" datetime={data.DateTime}>
              {data.DateTimeFormat}
            </time>
          </small>
        </p>
      </div>
    )];
}

export default PersonDisplay