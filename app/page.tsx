'use client'
import React from 'react';
import clsx from 'clsx';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import { PieChart } from '@mui/x-charts/PieChart';
import RuleIcon from '@mui/icons-material/Rule';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

const data = [
  { id: 0, value: 10, label: '' },
  { id: 1, value: 15, label: '' },
];


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Containers = () => {
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
            <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
            {/* Add more content as needed */}
          </div>
        </div>

        {/* Second row */}
        <div className="flex w-full">
          <div className="bg-white rounded-lg p-8 m-2 flex-grow">
            {/* Content of the div 3 */}
            
            <h2 className="text-gray-800"><RuleIcon className="text-yellow-500 mr-2" />Missing Items</h2>
            {/* Table */}
          <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Tool ref.</th>
                  <th className="py-2 text-left">Team Member</th>
                  <th className="py-2 text-left"></th>
                  
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2">6465</td>
                  <td className="py-2">Alex Noman</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b">
                  <td className="py-2">6466</td>
                  <td className="py-2">Alex Noman</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b">
                  <td className="py-2">6467</td>
                  <td className="py-2">Alex Noman</td>
                  <td className="py-2"><button>Detail</button></td>
                </tr>
              </tbody>
            </table>
            {/* Add more content as needed */}
            {/* Add more content as needed */}
          </div>
          
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-1/3">
            {/* Content of the div 4 */}
            <h2 className="text-gray-800">Tools and Equipments Availability</h2>
            <div><BuildRoundedIcon className="text-black-500 mr-2" />Rental Items<PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={65}
    /></div>
            <div><HandymanOutlinedIcon className="text-black-500 mr-2" />Spare Parts<PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={65}
    /></div>
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
      <Containers/>
     
    </div>
  );
}
