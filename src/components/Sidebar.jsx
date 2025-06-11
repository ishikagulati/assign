const Sidebar = ({ todos }) => (
  <div className="w-1/3 max-w-sm bg-white p-4 overflow-y-auto border-r">
    <div className="flex justify-between items-center mb-4">
      <button className="bg-black text-white px-4 py-2 rounded-full text-sm">TODO</button>
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 p-2 border rounded w-full"
      />
    </div>

    {todos.map((todo, index) => (
      <div key={index} className="mb-3 p-3 border rounded bg-gray-100">
        <h3 className="font-semibold text-md">{todo.title}</h3>
        <p className="text-sm text-gray-600">{todo.date}</p>
      </div>
    ))}
  </div>
);
export default Sidebar;