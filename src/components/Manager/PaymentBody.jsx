export const PaymentBody = (props) => {
  const data = props.data || [];
  return (
    <div className="w-[99%]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-28">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Date
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Status
              </th> */}
              {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={i.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i.name}
                  </th>
                  <td className="px-6 py-4">{i.paid_date}</td>
                  <td className="px-6 py-4">{i.amount}</td>
                  {/* <td className="px-6 py-4">{i.status}</td> */}
                  {/* <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 "
                    >
                      View
                    </a>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
