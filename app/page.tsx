// 'use client'
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import RuleIcon from '@mui/icons-material/Rule';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Container = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Vertical Navbar */}
      <div className="bg-gray-800 text-white p-4">
        {navigation.map((item) => (
          <div
            key={item.name}
            className={clsx(
              'mb-2',
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="flex flex-wrap p-4 w-full">
        {/* First row */}
        <div className="flex w-full">
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-1/3">
            {/* Content of the div 1 with an icon */}
            <div className="flex items-center mb-4">
              <BuildRoundedIcon className="text-black-500 mr-2" />
              <h2 className="text-gray-800">Rental Tool</h2>
            </div>
            {/* Table */}
            <table className="">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Work Order</th>
                  <th className="py-2 text-left">Tool ref.</th>
                  <th className="py-2 text-left">Team Member</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Duration</th>
                  <th className="py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2">01</td>
                  <td className="py-2">6465</td>
                  <td className="py-2">Alex Noman</td>
                  <td className="py-2">Completed</td>
                  <td className="py-2">15.00</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b">
                  <td className="py-2">02</td>
                  <td className="py-2">5665</td>
                  <td className="py-2">Razib Rahman</td>
                  <td className="py-2">In Progress</td>
                  <td className="py-2">05.00</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b">
                  <td className="py-2">03</td>
                  <td className="py-2">1755</td>
                  <td className="py-2">Luke Norton</td>
                  <td className="py-2">Not Started</td>
                  <td className="py-2">00.00</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>
              </tbody>
            </table>
            {/* Add more content as needed */}
          </div>

          <div className="bg-white rounded-lg p-8 m-2 flex-grow">
            {/* Content of the div 2 */}
            <h2 className="text-gray-800">Work Order Status</h2>
            {/* Add more content as needed */}
          </div>
        </div>

        {/* Second row */}
        <div className="flex w-full">
          <div className="bg-white rounded-lg p-8 m-2 flex-grow">
            {/* Content of the div 3 */}
            <RuleIcon className="text-yellow-500 mr-2" />
            <h2 className="text-gray-800">Missing Items</h2>
            {/* Add more content as needed */}
          </div>
          
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-1/3">
            {/* Content of the div 4 */}
            <h2 className="text-gray-800">Tools and Equipments Availability</h2>
            {/* Add more content as needed */}
          </div>
        </div>

        {/* Third row */}
        <div className="flex width=90%">
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-1/3">
            {/* Content of the div 5 */}
            <h2 className="text-gray-800">Restock Items</h2>
            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Tool ref.</th>
                  <th className="py-2 text-left">Tool/Equipment</th>
                  <th className="py-2 text-left">Stock Status</th>
                  <th className="py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2">6465</td>
                  <td className="py-2">Screws</td>
                  <td className="py-2">Low</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b">
                  <td className="py-2">6466</td>
                  <td className="py-2">Wires (electrical)</td>
                  <td className="py-2">None</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b">
                  <td className="py-2">6467</td>
                  <td className="py-2">Bolts</td>
                  <td className="py-2">None</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>
              </tbody>
            </table>
            {/* Add more content as needed */}
          </div>
            {/* Add more content as needed */}
          </div>
          
          <div className="bg-white rounded-lg p-8 m-2 flex-grow">
            {/* Content of the div 6 */}
            <h2 className="text-gray-800">Reception Summary</h2>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
  );
};

export default function Home() {
  return (
    <div>
      <Container />
    </div>
  );
}
