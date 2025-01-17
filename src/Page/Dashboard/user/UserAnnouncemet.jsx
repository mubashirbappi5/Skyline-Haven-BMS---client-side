import React from 'react';
import useAnnouncement from '../../../Hooks/useAnnouncement';
import NoticeCard from '../../../Shared/NoticeCard';

const UserAnnouncemet = () => {
    const [notice]=useAnnouncement()
    return (
        <div className='h-screen'>
             <h1 className='text-3xl font-bold text-center my-10'>this is announcement</h1>

             <section>
                {
                    notice.map((announce,idx)=><NoticeCard announce={announce} idx={idx}></NoticeCard>)
                }
             </section>
        </div>



    );
};

export default UserAnnouncemet;