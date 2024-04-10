import React from 'react';
import { BsCart4 } from "react-icons/bs";

const object = [
  {
    id: "1196067716",
    dateTimes: "03 Apr 2024 | 11.06 am",
    icon: <BsCart4 />,
    cart: "custom",
    pd: "package details",
    cname: "manu gopinath",
    email: "manu@gmail.com",
    no: "1234567890",
    cod:"cod",
    rs:"Rs.23",
    status:"AAROGYA",
    ship:"Delhivery Air",
    awb:"AWB#",
    awbno:"658705789",
    cancel:"cancelled",
    canceldate:" On 03 Apr 2024",
    button:"clone order"
  },
  // Adding another row with the same elements
  {
    id: "1196067717",
    dateTimes: "04 Apr 2024 | 12.06 pm",
    icon: <BsCart4 />,
    cart: "custom",
    pd: "package details",
    cname: "John Doe",
    email: "john@example.com",
    no: "9876543210",
    cod:"cod",
    rs:"Rs.30",
    status:"AAROGYA",
    ship:"Ecom Express",
    awb:"AWB#",
    awbno:"658705790",
    cancel:"not cancelled",
    
    button:"clone order"
  }
];

const TableThree = () => {
  return (
    <div className="flex ">
      <div className="p-6 overflow-auto w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className='drop-shadow-xl rounded-lg bg-white'>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Order Details</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Customer Details</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Payment</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Pickup/RTO Address</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Shipping Details</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Status</p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Action</p>
              </th>
            </tr>
          </thead>
          <tbody>

            {object.map((item, index) => (
                 
              <tr key={index} className='shadow border-2 hover:border-indigo-600 bg-white mt-1'>
                 
                <td className=" p-4">
                    <div className='m-y-5px'>
                  <p className="block antialiased font-sans text-sm leading-normal text-indigo-600 hover:underline">{item.id}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-slate-900">{item.dateTimes}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-slate-900">
                    <span className="flex items-center">
                      {item.icon} <span>{item.cart}</span>
                    </span>
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-indigo-600 hover:underline">{item.pd}</p>
                    </div>
                </td>
                <td className=" p-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.cname}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.email}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.no}</p>
                </td>
                <td className="p-8  flex flex-col items-center ">
                  <p>{item.rs}</p>
                  <div className="relative inline-block px-3 py-1 font-semibold text-rose-500 leading-tight">
                    <span className="rounded bg-rose-400 py-1 px-3  text-xs font-bold text-white">{item.cod}</span>
                  </div>
                </td>
                <td className='p-8 '>
                  <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal hover:underline '>{item.status}</p>
                </td>
                <td className="p-4 ">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.ship}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.awb}</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-indigo-600 hover:underline font-normal">{item.awbno}</p>
                </td>
                <td className="p-4 ">
                  
                  <div className="relative inline-block px-3 py-1 font-semibold text-rose-500 leading-tight">
                    <span className="rounded bg-rose-400 py-1 px-3 text-xs font-bold text-white">{item.cancel}</span>
                  </div>
                  <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal'>{item.canceldate}</p>
                </td>
                <td>
                  <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded mb-4">
                    {item.button}
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;