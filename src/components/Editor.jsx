import {useState} from 'react'
const Editor = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim()) return;
    addTodo({
      title,
      content,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex-1 p-6">
      <input
        type="text"
        placeholder="New Additions"
        className="text-3xl font-bold w-full border-b pb-2 mb-4 bg-transparent outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex gap-4 text-lg mb-4 border-b pb-2">
        <button className="font-bold italic">B</button>
        <button className="italic">I</button>
        <button className="underline">U</button>
        <button>\u2261</button>
        <button>Aa</button>
      </div>

      <textarea
        placeholder="Write your todo here..."
        className="w-full h-[300px] p-4 border rounded resize-none outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="mt-4 bg-black text-white px-6 py-2 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
