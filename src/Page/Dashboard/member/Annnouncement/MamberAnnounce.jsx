import React from 'react';
import useAnnouncement from '../../../../Hooks/useAnnouncement';
import NoticeCard from '../../../../Shared/NoticeCard';

const MamberAnnounce = () => {
    const [notice]=useAnnouncement()
    return (
        <div className="min-h-screen bg-gray-100 py-12">
        <h1 className="text-4xl font-extrabold text-center text-secondary mb-12">
          📢 Announcements
        </h1>
        <div className="divider"></div>
      
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {
                    notice.map((announce,idx)=><NoticeCard announce={announce} idx={idx}></NoticeCard>)
                }
              </section>
              </div>


    );
};

export default MamberAnnounce;