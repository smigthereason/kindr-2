import React, { useState } from 'react';
import worldImage from "../../assets/world2.jpg";

const Beneficiaries: React.FC = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStory(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Title:', title);
    console.log('Story:', story);
    if (image) {
      console.log('Image:', image.name);
    }
  };

  return (
    
    <div className="beneficiaries-page relative min-h-screen mt-8 w-4/6 ml-16 xl:ml-[350px] "
    style={{ backgroundImage: `url(${worldImage}` }}>
    
      <h2 className="text-4xl font-bold mb-4">Add Beneficiary Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold text-2xl">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter the title of the story"
            required
          />
        </div>
        <div>
          <label htmlFor="story" className="block font-semibold text-2xl">Story</label>
          <textarea
            id="story"
            value={story}
            onChange={handleStoryChange}
            className="w-full border p-2 rounded"
            placeholder="Describe how the donations helped your charity"
            rows={6}
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-semibold text-2xl">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-2"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default Beneficiaries;
