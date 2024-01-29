'use client'
import React from 'react';
import clsx from 'clsx';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import { PieChart } from '@mui/x-charts/PieChart';
import RuleIcon from '@mui/icons-material/Rule';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import HistoryToggleOffSharpIcon from '@mui/icons-material/HistoryToggleOffSharp';

const data = [
  { id: 2, value: 100, label: 'Completed' },
  { id: 0, value: 50, label: 'Not Completed' },
];


const navigation = [
  { name: 'Logo', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Containers = () => {
  return (
    <div className="flex h-full bg-gray-100">
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
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-3/5">
            {/* Content of the div 1 with an icon */}
            <div className="flex items-center mb-4">
              <BuildRoundedIcon className="text-black-500 mr-2" />
              <h2 className="text-gray-800">Rental Tool</h2>
            </div>
            {/* Table */}
            <table className="w-full">
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
            { id: 0, value: 25, label: 'Completed' },
            { id: 1, value: 5, label: 'Due' },
            { id: 2, value: 15, label: 'Work In Progress' },
          ],
        },
      ]}
      width={300}
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
          
          <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-3/5">
            {/* Content of the div 4 */}
            <h2 className="text-gray-800">Tools and Equipments Availability</h2>
            <div className="flex items-center justify-center">
    <BuildRoundedIcon className="text-black-500 mr-2" />
    <span className="text-black-500">Rental Items</span>
    <PieChart
        series={[
            {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        height={75}
    />
</div>

<div className="flex items-center justify-center">
    <HandymanOutlinedIcon className="text-black-500 mr-2" />
    <span className="text-black-500">Spare Parts</span>
    <PieChart
        series={[
            {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        height={75}
    />
</div>

            {/* Add more content as needed */}
          </div>
        </div>

        {/* Third row */}
        <div className="bg-white rounded-lg p-8 m-2 flex-grow lg:w-3/5">
        <h2 className="text-black-800">Restock Items</h2>
        <div className="flex w-full">
            {/* Content of the div 5 */}
            
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
            <div className="flex justify-between items-center">
    <div className="flex items-center">
        <CheckCircleSharpIcon className="text-black-1000 mr-2" />
        <span className="text-black-500">Package Received</span>
    </div>

    <span className="text-black-500">10</span>
</div>
<div className="flex justify-between items-center">
    <div className="flex items-center">
        <HistoryToggleOffSharpIcon className="text-black-1000 mr-2" />
        <span className="text-black-500">Processed Packages</span>
    </div>

    <span className="text-black-500">5</span>
</div>

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
