import React from 'react';

function HoverButton() {
  return (
    <button
      className="px-4 py-2 text-sm text-white font-semibold rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
    >
      Save Changes
    </button>
  );
}

function DifferentiatePeers() {
  return (
    <fieldset>
      <legend>Published status</legend>
      
      <input id="draft" className="peer/draft" type="radio" name="status" checked />
      <label aria-label="draft" className="peer-checked/draft:text-sky-500">Draft</label>
      
      <input id="published" className="peer/published" type="radio" name="status" />
      <label aria-label="published" className="peer-checked/published:text-sky-500">Published</label>
      
      <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
      <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site</div>
    </fieldset>
  );
}

function App() {
  return (
    <DifferentiatePeers />
  );
}

export default App;
