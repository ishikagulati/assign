// const Header = () => (
//   <div className="bg-white px-6 py-4 border-b text-2xl font-bold flex items-center space-x-4">
//     {/* Logo image */}
//     <img
//       src="image1.png" // Replace with your own logo if needed
//       alt="Logo"
//       className="w-8 h-8"
//     />

//     {/* TODO text with extra left margin */}
//     <span className="ml-4">TODO</span>
//   </div>
// );

// export default Header;
const Header = () => (
  <div className="bg-white px-6 py-4 border-b text-2xl font-bold flex items-center">
    <img src="image1.png" alt="logo" className="h-16 w-16 mr-2" />
    <span className="text-3xl"> Todo</span>
  </div>
);

export default Header;

