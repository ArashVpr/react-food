export default function Card({ children }) {
  return (
    <div className="flex justify-start items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg  transition-shadow duration-300 hover:text-green-500">
      {children}
    </div>
  );
}
