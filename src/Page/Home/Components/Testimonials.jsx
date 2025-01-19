import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      What our <span className="text-primary">Member</span> say
    </h1>

    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
    Hear from Our Happy Residents
    </p>

    <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
      <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
        <p className="leading-loose text-gray-500 dark:text-gray-300">
          “Living at Skyline Haven has truly been a game-changer for me. The view from the top floors is simply breathtaking, and the amenities are world-class. It's the perfect blend of comfort and luxury.”
        </p>

        <div className="flex items-center mt-6">
          <img
            className="object-cover rounded-full w-14 h-14"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Robbert"
          />

          <div className="mx-4">
            <h1 className="font-semibold text-primary">Bappi Hassan</h1>
            <span className="text-sm text-gray-500 dark:text-gray-300">Member of Skyline Haven</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
        <p className="leading-loose text-gray-500 dark:text-gray-300">
          “I love the convenience of having everything I need right here—ample parking, high-speed WiFi, and the gym. The 24/7 security gives me peace of mind, and the community vibe is fantastic.”
        </p>

        <div className="flex items-center mt-6">
          <img
            className="object-cover rounded-full w-14 h-14"
            src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Mia Brown"
          />

          <div className="mx-4">
            <h1 className="font-semibold text-primary">Faiza Hassan</h1>
            <span className="text-sm text-gray-500 dark:text-gray-300">Member at Skyline Haven</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            
        </div>
    );
};

export default Testimonials;