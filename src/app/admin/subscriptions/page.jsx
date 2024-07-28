import TableBody from "./TableBodyEmail";

const page = () => {
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl">All Subscriptions</h1>
      <div className="relative max-w-[800px] h-[80vh] overflow-x-hidden mt-4 border border-gray-400 scrollhide">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 bg-gray-100 text-left uppercase ">
            <tr>
              <th scope="col" className="sm:block px-6 py-3">
                
              </th>
              <th scope="col" className="px-6 py-3">
                Email sub
              </th>

              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
