
import Dashnav from "../../components/Charity/Dashnav";
import Sidebar from "../../components/Charity/Sidebar";  // Import the Sidebar
import world from "../../assets/world2.jpg";

const Dashboard = () => {
  function handleLogout(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="relative min-h-screen w-5/6 ml-56 flex">
      {/* Background Image */}
      <img
        src={world}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Sidebar */}
      <div className="relative z-10">
      <Sidebar onLogout={handleLogout} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <Dashnav title="Dashboard" />
        <main className="">
          <div className="grid mb-4 mt-6 pb-10 px-8 mx-4 rounded-3xl bg-secondary border border-stone-400">
            <div className="grid grid-cols-12 gap-6">
              <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div className="col-span-12 mt-8">
                  <div className="flex items-center h-10 intro-y">
                    <h2 className="mr-5 text-2xl font-medium truncate">Dashboard</h2>
                  </div>
                  <div className="grid grid-cols-12 gap-6 mt-5">
                    <a
                      className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-stone-700 border border-white"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <h1 className="text-lg text-white font-bold">Total Donations</h1>
                          <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">6.9%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-xl text-gray-300 font-bold leading-8">
                              $125,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-stone-700"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <h1 className="text-lg text-white font-bold">This month</h1>
                          <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-xl text-gray-300 font-bold leading-8">
                              $15,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-stone-700"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <h1 className="text-lg text-white font-bold">This year</h1>
                          <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-xl text-gray-300 font-bold leading-8">
                              $95,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-span-12 mt-5">
                  <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                    <div className="bg-secondary p-4 shadow-lg rounded-lg">
                      <h1 className="font-bold text-base">Recent Activities</h1>
                      <div className="mt-4">
                        <div className="flex flex-col">
                          <div className="-my-2 overflow-x-auto">
                            <div className="py-2 align-middle inline-block min-w-full">
                              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-secondary">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="px-6 py-3 bg-stone-800 text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Name</span>
                                        </div>
                                      </th>
                                      <th className="px-6 py-3 bg-stone-800 text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Donation</span>
                                        </div>
                                      </th>
                                      <th className="px-6 py-3 bg-stone-800 text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Status</span>
                                        </div>
                                      </th>
                                      <th className="px-6 py-3 bg-stone-800 text-xs leading-4 font-medium text-gray-300 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Date</span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-stone-700 divide-y divide-gray-400">
                                    <tr>
                                      <td className="pr-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>John Doe</p>
                                        <p className="text-xs text-gray-400">
                                          Donor
                                        </p>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>$250</p>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div className="flex text-green-500">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                          <p>Active</p>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div className="flex space-x-4">
                                          <p>2023-12-23</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
