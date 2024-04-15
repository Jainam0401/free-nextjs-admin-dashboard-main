import React from 'react'
import Card from './Card';
import Maincard from './Maincard';
import { LuClipboardList } from "react-icons/lu";
import { RiHandCoinLine } from "react-icons/ri";
import { TfiDropbox } from "react-icons/tfi";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { FaCircleDot } from "react-icons/fa6";

const data = [
  {
    id: 1,
    icon: LuClipboardList,
    title: "Today's Orders",
    today_order: "0",
    yesterday_order: "Yesterday 0",
    bgcolor: "bg-purple-200",
  },
  {
    id: 2,
    icon: RiHandCoinLine,
    title: "Today's Revenue",
    today_order: "₹ 0",
    yesterday_order: "Yesterday ₹ 0",
    bgcolor: "bg-green-200",
  },
  {
    id: 3,
    icon: TfiDropbox,
    title: "Average Shipping",
    today_order: "₹ 0",
    bgcolor: "bg-purple-200",
  }
]

const page = () => {

  return ( 
      <div className='p-5'>
        <div className='flex gap-x-5 p-5'>
          <p className='font-extrabold text-black text-2xl'>Dashboard</p>
          <div className="group">
            <button className="bg-white text-gray-700 font-medium py-1.5 px-5 rounded inline-flex items-center">
              <span className="">Domastic</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li className="">
                <a className="rounded-t bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Domastic</a>
              </li>
              <li className="">
                <a className="bg-gray-200 bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">International</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2">
          <ul className="flex justify-start flex-row gap-x-10 text-center text-black overflow-auto max-w-fit font-bold">
            <li>
              <a href="#page1" className="flex justify-center after:border-b-2 after:absolute after:bottom-[2px] border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Overview</a>
            </li>
            <li>
              <a href="#page2" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Orders</a>
            </li>
            <li>
              <a href="#page3" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Shipments</a>
            </li>
            <li>
              <a href="#page4" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">NDR</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4 ">WhatsApp Comm</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">RTO</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Courier</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Delays</a>
            </li>
          </ul>
        </div>

        <div className="flex w-full mt-2 bg-[#ff0000b2]  px-2 py-2 shadow-md  md:p-5 rounded-2xl ">
          <div className="w-full">
            <h5 className=" font-semibold text-white text-center">
              Click here to complete your KYC and get non-disrupted shipping and COD remittances
            </h5>
          </div>
        </div>

        <div className='flex md:gap-x-5 gap-4 flex-col md:flex-row mt-4'>
          <Card data={data[0]} />
          <Maincard />
        </div>

        <div className='flex md:gap-x-5 gap-4 flex-col md:flex-row mt-4'>
          <Card data={data[1]} />
          <Maincard />
        </div>

        <div className='flex md:gap-x-5 gap-4 flex-col md:flex-row mt-4'>
          <Card data={data[2]} />
          <Maincard />
        </div>

        <div className='flex sm:gap-4 flex-col md:flex-row'>
          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 w-full">
            <div className='flex justify-between p-5'>
              <div className='flex gap-3'>
                <h2 className="text-xl text-black font-bold">Couriers Split</h2>
                <BiSolidMessageRoundedError />
              </div>
              <p>Last 30 Days</p>
            </div>
            <div className="flex justify-center ">
              <img src="./CouriersImg.png" alt="Couriers" />
            </div>
            <div className="pb-3 text-violet-500 text-md text-center font-semibold">
              <p>Data not found for the selected filter.</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 w-full">
            <div className='flex justify-between p-5'>
              <div className='flex gap-3'>
                <h2 className="text-xl text-black font-bold">Overall Shipment Status</h2>
                <BiSolidMessageRoundedError />
              </div>
              <p>Last 30 Days</p>
            </div>
            <div className="flex justify-center ">
              <img src="./CouriersImg.png" alt="Couriers" />
            </div>
            <div className="text-violet-500 text-md text-center font-semibold">
              <p>No Shipment in last 30 days.</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 w-full">
            <div className='flex justify-between p-5'>
              <div className='flex gap-3'>
                <h2 className="text-xl text-black font-bold">Delivery Performance</h2>
                <BiSolidMessageRoundedError />
              </div>
              <p>Last 30 Days</p>
            </div>
            <div className="flex justify-center ">
              <img src="./CouriersImg.png" alt="Couriers" />
            </div>
            <div className="text-violet-500 text-md text-center font-semibold">
              <p>No Shipment Delivered in last 30 days.</p>
            </div>
          </section>
        </div>

        <div className='flex md:flex-row flex-col gap-4'>
          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 w-full">
            <div className='flex justify-between p-3'>
              <div className='flex gap-3'>
                <div className="group">
                  <button className="bg-white text-gray-700 font-medium py-1.5 px-5 rounded inline-flex items-center border border-teal-500 gap-4">
                    <span className="">RTO</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                    <li className="">
                      <a className="rounded-t bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">RTO</a>
                    </li>
                    <li className="">
                      <a className="bg-gray-200 bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Orders</a>
                    </li>
                  </ul>
                </div>
                <BiSolidMessageRoundedError />
              </div>
              <p>Last 30 Days</p>
            </div>

            <div className='flex justify-center'>
              <img src='./map.png' alt='India Map' />
            </div>
          </section>



          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 w-full">
            <div className='flex justify-between p-5'>
              <div className='flex gap-3'>
                <h2 className="text-xl text-black font-bold">Shipments - Zone Distribution</h2>
                <BiSolidMessageRoundedError />
              </div>
              <p>Last 30 Days</p>
            </div>
            <div className=''>
              <div className="flex justify-between p-3 m-3">
                <div className='flex gap-3 items-center '>
                  <FaCircleDot />
                  <p>Zone A</p>
                </div>
                <p>0</p>
              </div>
              <hr className="mx-3 bg-slate-200 border-b-1"></hr>
              <div className="flex justify-between p-3 m-3">
                <div className='flex gap-3 items-center '>
                  <FaCircleDot className='text-green-500' />
                  <p>Zone B</p>
                </div>
                <p>0</p>
              </div>
              <hr className="mx-3 bg-slate-200 border-b-1"></hr>
              <div className="flex justify-between p-3 m-3">
                <div className='flex gap-3 items-center '>
                  <FaCircleDot className='text-red' />
                  <p>Zone C</p>
                </div>
                <p>0</p>
              </div>
              <hr className="mx-3 bg-slate-200 border-b-1"></hr>
              <div className="flex justify-between p-3 m-3">
                <div className='flex gap-3 items-center '>
                  <FaCircleDot className='text-slate-600' />
                  <p>Zone D</p>
                </div>
                <p>0</p>
              </div>
              <hr className="mx-3 bg-slate-200 border-b-1"></hr>
              <div className="flex justify-between p-3 m-3">
                <div className='flex gap-3 items-center '>
                  <FaCircleDot className='text-yellow-400' />
                  <p>Zone E</p>
                </div>
                <p>0</p>
              </div>
            </div>
          </section>



          <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3  w-full ">
            <div className='flex gap-3 mx-2 items-center p-5'>
              <h2 className="text-xl text-black font-bold">Revenue</h2>
              <BiSolidMessageRoundedError />
            </div>
            <div className="flex justify-between p-3 m-3">
              <p>This Last 90 Days</p>
              <p>₹0</p>
            </div>
            <hr className="mx-3 bg-slate-200 border-b-1"></hr>
            <div className="flex justify-between p-3 m-3">
              <p>This Week</p>
              <p>₹0</p>
            </div>
            <hr className="mx-3 bg-slate-200 border-b-1"></hr>
            <div className="flex justify-between p-3 m-3">
              <p>This Month</p>
              <p>₹0</p>
            </div>
            <hr className="mx-3 bg-slate-200 border-b-1"></hr>
            <div className="flex justify-between p-3 m-3">
              <p>This Quarter</p>
              <p>₹0</p>
            </div>
          </section>

        </div>
        <section className="bg-white rounded-lg shadow-md shadow-slate-400 mt-3 p-2 w-full ">
          <div className='flex justify-between m-2'>
            <h2 className="text-black font-bold">Shipment Overview by Courier</h2>
            <p>Last 30 Days</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-black ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Courier Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pickup Unscheduled
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pickup Scheduled
                  </th>
                  <th scope="col" className="px-6 py-3">
                    In-Transit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delivered
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NDR Raised
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NDR Delivered
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NDR Pending
                  </th>
                  <th scope="col" className="px-6 py-3">
                    RTO
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lost/Damaged
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Shipment
                  </th>
                </tr>
              </thead>

            </table>
            <hr className="mx-3 bg-slate-200 border-b-1"></hr>
            <div className="flex justify-center">
              <img src="./CouriersImg.png" alt="Couriers" />
            </div>
            <div className="text-violet-500 text-md text-center font-semibold">
              <p>Couriers' data not found this filter.</p>
            </div>
          </div>

        </section>


      </div>
 
  )
}

export default page