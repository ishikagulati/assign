import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Search } from "lucide-react";

const Header = () => (
  <div className="bg-white px-6 py-4 border-b text-2xl font-bold flex items-center">
    <img src="image1.png" alt="logo" className="h-12 w-12 mr-2" />
    <span>TODO</span>
  </div>
);

const Sidebar = ({ todos, onDelete, search, setSearch, onAddTodoClick }) => {
  return (
    <div className="w-full md:w-1/3 max-w-full md:max-w-sm bg-white border-r overflow-y-auto p-4">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between mb-4 gap-2">
        <button
          onClick={onAddTodoClick}
          className="bg-black text-white px-4 py-2 rounded text-sm font-semibold"
        >
          TODO
        </button>
        <div className="relative w-full md:w-2/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-2 py-2 border rounded text-sm"
          />
        </div>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-500">No todos found.</p>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="mb-4 p-3 border rounded bg-gray-50 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-black-600">{todo.title}</h2>
              <button
                className="text-black-500 hover:text-black-700 text-sm"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: todo.content }}
            />
            <div className="text-xs text-gray-500 mt-1">{todo.date}</div>
          </div>
        ))
      )}
    </div>
  );
};

const Editor = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
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

  const toolbarOptions = [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['clean']
  ];

  return (
    <div className="w-full md:flex-1 p-4 md:p-6 overflow-y-auto">
      <input
        type="text"
        placeholder="New Additions"
        className="text-2xl md:text-3xl font-bold w-full border-b pb-2 mb-4 bg-transparent outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{ toolbar: toolbarOptions }}
        className="mb-4 h-[250px] md:h-[300px]"
      />

      <button
        className="mt-8 bg-black text-white px-6 py-2 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col md:flex-row h-[calc(100vh-72px)]">
        <Sidebar
          todos={todos}
          onDelete={deleteTodo}
          search={search}
          setSearch={setSearch}
          onAddTodoClick={() => {}}
        />
        <Editor addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
