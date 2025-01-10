import React from 'react';

function Notification() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
      <div className="shrink-0">
        <img src="./logo.svg" className="size-12" alt="logo" />
      </div>
      <div className="text-xl font-medium text-black">
        ChitChat
      </div>
      <p className="text-slate-500">
        You have a new message!
      </p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://tailwindcss.com/img/erin-lindford.jpg"
        alt="Erin Lindford" />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p className="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:online-none focus:ring-purple-600 focus:ring-offset-2"
        >
          Message
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <ProfileCard />
  );
}

export default App;
