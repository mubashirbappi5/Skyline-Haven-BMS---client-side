import React from 'react';

const NoticeCard = ({announce,idx}) => {
    const{title,notice}=announce
    return (
        <div>
            <div className='p-4 border-2 border-accent'>
               <div>
               <h1>{idx+1}</h1>
               </div>
                <div>
                <h1>{title}</h1>
                <p>{notice}</p>

                </div>
            </div>
            
        </div>
    );
};

export default NoticeCard;