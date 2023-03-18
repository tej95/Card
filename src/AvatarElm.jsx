import React from 'react'
// import '/Users/tejashagrawal/adg-cards/node_modules/@types/react/index.d.ts';
import Avatar from 'react-avatar';

const AvatarElm = () => {
    
  
    return (
      <div className="post-avatar ">
        
        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Wim Mostmans" />
        
      </div>
    );}

export default AvatarElm