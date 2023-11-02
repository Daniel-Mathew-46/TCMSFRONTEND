import { Navigate } from "react-router-dom";
import { userAuthContext } from "../../context/AuthContext";

function Home() {
  const { currentUserDetails, userToken } = userAuthContext();
  if (!userToken) {
    return <Navigate to="/login" />;
  }
  return <div><div className="text-center">
  <div className="pt-6 px-4">
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800 dark:text-white">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">20</span>
            <h3 className="text-base font-normal text-gray-500 dark:text-white">New Utility Providers</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            14.6%
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800 dark:text-white">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">5,355</span>
            <h3 className="text-base font-normal text-gray-500 dark:text-white">New Customers</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            32.9%
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" 
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800 dark:text-white">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">385</span>
            <h3 className="text-base font-normal text-gray-500 dark:text-white">New Provider Categories</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
            -2.7%
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" 
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" 
              clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
      
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 my-4 ">
      {/* Top sales card */}
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2 dark:text-white">
            View all
          </a>
        </div>
        <div className="flow-root ">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  $320
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-white">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  $3467
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  $67
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  $2367
                </div>
              </div>
            </li>
            <li className="pt-3 sm:pt-4 pb-0">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  $367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Acquisition */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800">
        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10 dark:text-white">Latest utility providers</h3>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap dark:text-white dark:bg-gray-500">Top Channels</th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap dark:text-white dark:bg-gray-500">Users</th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px dark:text-white dark:bg-gray-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left dark:text-white">Organic Search</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 dark:text-white ">5,649</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">30%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-cyan-600 h-2 rounded-sm" style={{width: '30%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left dark:text-white">Referral</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 dark:text-white">4,025</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">24%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-orange-300 h-2 rounded-sm" style={{width: '24%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left dark:text-white">Direct</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 dark:text-white">3,105</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">18%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-teal-400 h-2 rounded-sm" style={{width: '18%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left dark:text-white">Social</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 dark:text-white">1251</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">12%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-pink-600 h-2 rounded-sm" style={{width: '12%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left dark:text-white">Other</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 dark:text-white">734</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">9%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-indigo-600 h-2 rounded-sm" style={{width: '9%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-500">
                <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left dark:text-white">Email</th>
                <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0 dark:text-white">456</td>
                <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium dark:text-white">7%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div className="bg-purple-500 h-2 rounded-sm" style={{width: '7%'}}></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div></div>;
}

export default Home;
