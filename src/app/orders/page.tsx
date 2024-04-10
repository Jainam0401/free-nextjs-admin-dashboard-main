import React from 'react'

import { AiOutlineCalendar } from "react-icons/ai";
import { GrFilter } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";
import { IoIosSync } from "react-icons/io";
import Table from "./Table";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  return (
    <DefaultLayout>
        {/* <ECommerce /> */}
        <div className="flex">
      
      <div className="bg-gray-200 h-full md:h-screen w-full">
        <div className="flex justify-between mt-0 w-full">

          <div className="ml-2 flex gap-x-5">
            <h1 className="text-xl font-bold">Orders</h1>
              <div className="group inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-1.5 px-2 rounded inline-flex items-center">
                <span className="mr-1">All</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block md:w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for AWB, Order ID, Buyer Mobile  Number, Email, SKU, Pickup ID" required />
              </div>
            </form>
          </div>

          <div className="w-[300px] flex gap-x-3">
            <button type="submit" className="flex flex-start space-x-2 py-2 px-4 border border-transparent text-sm font-medium rounded text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <div>Add Order</div>
              
            </button>
            <button className="flex text-center  space-x-2 py-2 px-4 border border-transparent text-sm font-medium rounded text-gray-900 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors">
            <span className="text-[20px]">
            <IoIosSync />
            </span>
              <div>Sync Orders</div>
            </button>

          </div>
        </div>

        <div className="ml-2 mt-4 border-b-2 border-gray-400">
          <ul className="flex justify-start flex-col md:flex-row gap-x-10 text-center border-b border-gray-200 text-gray-500">
            <li>
              <a href="#page1" className="flex justify-center after:border-b-2 after:absolute after:bottom-[3px] border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">New</a>
            </li>
            <li>
              <a href="#page2" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Ready To Ship</a>
            </li>
            <li>
              <a href="#page3" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Pickups & Menifests</a>
            </li>
            <li>
              <a href="#page4" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">In Transit</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Delivered</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">RTO</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">All</a>
            </li>
          </ul>
        </div>

        <div className="flex m-5 gap-x-3 justify-between items-center overflow-auto">
          <div className="flex gap-x-2">
            <div className="group ">
              <button className="bg-gray-100 text-gray-700 font-semibold py-1.5 px-2 rounded inline-flex items-center">
                <AiOutlineCalendar />
                <span className="ml-3 mr-8">Last 30 Days</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a>
                </li>
              </ul>
            </div>


            <div className="group ">
              <button className="bg-gray-100 text-gray-700 font-semibold py-1.5 px-2 rounded inline-flex items-center">
                <span className="ml-3 mr-5">Date Type: Order Created</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a>
                </li>
              </ul>
            </div>

            <div className="group ">
              <button className="bg-gray-100 text-gray-700 font-semibold py-1.5 px-2 rounded inline-flex items-center">
                <span className="ml-3 mr-8">All Orders</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a>
                </li>
              </ul>
            </div>

            <div className="group ">
              <button className="bg-gray-100 text-gray-700 font-semibold py-1.5 px-2 rounded inline-flex items-center">
                <span className="ml-3 mr-8">Select Statuses</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a>
                </li>
              </ul>
            </div>

            <button className="flex text-center  space-x-2 py-2 px-4 border border-transparent text-sm font-medium rounded text-gray-900 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-[20px]">
                <GrFilter />
              </span>
              <div>More Filters</div>
            </button>
          </div>

          <button className="text-center bg-white block text-[20px]">
            <FiDownload />
          </button>
        </div>

        <div className="ml-2 mb-3">
          4 orders for Last 30 days
        </div>
        <Table/>

      </div>
    </div>
      </DefaultLayout>
  
  )
}

export default Page;
