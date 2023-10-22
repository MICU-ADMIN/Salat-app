// // import React from 'react';
// // import { ProgressCircle } from '@tremor/react';

// // const data = [
// // 	{
// // 		date: 'Jan 23',
// // 		bpm: 167,
// // 		effort: 23,
// // 		recovery: 40,
// // 		strain: 1.1,
// // 		sleep: 89,
// // 	},
// // 	{
// // 		date: 'Feb 23',
// // 		bpm: 121,
// // 		effort: 78,
// // 		recovery: 45,
// // 		strain: 4.1,
// // 		sleep: 79,
// // 	},
// // 	// ... other data entries
// // ];

// // const RingChart = () => {
// // 	const selectedItem = data[0]; // Display data for the first day by default

// // 	if (!selectedItem) return null;

// // 	return (
// // 		<div className='flex flex-wrap items-center space-x-6'>
// // 			<div className='flex-1 text-center w-full xs:w-full sm:w-1/2 md:w-1/3'>
// // 				<ProgressCircle
// // 					value={
// // 						selectedItem.effort
// // 					}
// // 					radius={45}
// // 					color='violet'
// // 				>
// // 					<ProgressCircle
// // 						value={
// // 							selectedItem.recovery
// // 						}
// // 						radius={36}
// // 						color='fuchsia'
// // 					/>
// // 				</ProgressCircle>
// // 			</div>
// // 			<div className='flex-1 sm:pl-4 w-full sm:w-full '>
// // 				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 py-1 m-4 text-center justify-center'>
// // 					<div className='flex-1'>
// // 						<h4 className='text-sm text-gray-500'>
// // 							Sunnah
// // 						</h4>
// // 						<p className='font-medium text-gray-700'>
// // 							{
// // 								selectedItem.strain
// // 							}
// // 						</p>
// // 					</div>
// // 					<div className='flex-1'>
// // 						<h4 className='text-sm text-gray-500'>
// // 							Punctuality
// // 						</h4>
// // 						<p className='font-medium text-violet-600'>
// // 							{
// // 								selectedItem.effort
// // 							}
// // 							%
// // 						</p>
// // 					</div>
// // 					<div className='flex-1'>
// // 						<h4 className='text-sm text-gray-500'>
// // 							Attendance
// // 						</h4>
// // 						<p className='font-medium text-fuchsia-700'>
// // 							{
// // 								selectedItem.recovery
// // 							}
// // 							%
// // 						</p>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default RingChart;

// import React from 'react';
// import { ProgressCircle } from '@tremor/react';

// const data = [
// 	{
// 		date: 'Jan 23',
// 		bpm: 167,
// 		effort: 23,
// 		recovery: 40,
// 		strain: 1.1,
// 		sleep: 89,
// 	},
// 	{
// 		date: 'Feb 23',
// 		bpm: 121,
// 		effort: 78,
// 		recovery: 45,
// 		strain: 4.1,
// 		sleep: 79,
// 	},
// 	// ... other data entries
// ];

// const RingChart = () => {
// 	const selectedItem = data[0]; // Display data for the first day by default

// 	if (!selectedItem) return null;

// 	return (
// 		<div className='flex flex-wrap items-center space-x-6'>
// 			<div className='flex-1 text-center w-full xs:w-full sm:w-1/2 md:w-1/3'>
// 				<ProgressCircle
// 					value={
// 						selectedItem.effort
// 					}
// 					radius={45}
// 					color='violet'
// 				>
// 					<ProgressCircle
// 						value={
// 							selectedItem.recovery
// 						}
// 						radius={36}
// 						color='fuchsia'
// 					/>
// 				</ProgressCircle>
// 			</div>
// 			<div className='flex-1  w-full sm:w-full '>
// 				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 py-1 m-4 text-center justify-center items-center'>
// 					<div
// 						style={{
// 							margin: 10,
// 							width: 100,
// 						}}
// 					>
// 						<h4 className='text-sm text-gray-500'>
// 							Sunnah
// 						</h4>
// 						<p className='font-medium text-gray-700'>
// 							{
// 								selectedItem.strain
// 							}
// 						</p>
// 					</div>
// 					<div
// 						style={{
// 							margin: 10,
// 							width: 100,
// 						}}
// 					>
// 						<h4 className='text-sm text-gray-500'>
// 							Punctuality
// 						</h4>
// 						<p className='font-medium text-violet-600'>
// 							{
// 								selectedItem.effort
// 							}
// 							%
// 						</p>
// 					</div>
// 					<div
// 						style={{
// 							margin: 10,
// 							width: 100,
// 						}}
// 					>
// 						<h4 className='text-sm text-gray-500'>
// 							Attendance
// 						</h4>
// 						<p className='font-medium text-fuchsia-700'>
// 							{
// 								selectedItem.recovery
// 							}
// 							%
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default RingChart;

import {
	AreaChart,
	Card,
	Metric,
	TabList,
	Tab,
	TabGroup,
	TabPanels,
	TabPanel,
} from '@tremor/react';

const data = [
	{
		Month: 'Jan 22',
		Visitors: 289,
		'Page Views': 1012,
		'Bounce Rate': 0.5,
	},
	//...
	{
		Month: 'Jan 23',
		Visitors: 389,
		'Page Views': 1232,
		'Bounce Rate': 0.51,
	},
];

const numberFormatter = (value) =>
	Intl.NumberFormat('us')
		.format(value)
		.toString();

const percentageFormatter = (value) =>
	`${Intl.NumberFormat('us')
		.format(value * 100)
		.toString()}%`;

function sumArray(array, metric) {
	return array.reduce(
		(accumulator, currentValue) =>
			accumulator +
			currentValue[metric],
		0
	);
}

export default function Example() {
	return (
		<>
			<TabGroup>
				<TabList>
					<Tab className='p-4 sm:p-6 text-left'>
						<p className='text-sm sm:text-base'>
							Visitors
						</p>
						<Metric className='mt-2 text-inherit'>
							{numberFormatter(
								sumArray(
									data,
									'Visitors'
								)
							)}
						</Metric>
					</Tab>
					<Tab className='p-4 sm:p-6 text-left'>
						<p className='text-sm sm:text-base'>
							Page views
						</p>
						<Metric className='mt-2 text-inherit'>
							{numberFormatter(
								sumArray(
									data,
									'Page Views'
								)
							)}
						</Metric>
					</Tab>
					<Tab className='p-4 sm:p-6 text-left'>
						<p className='text-sm sm:text-base'>
							Bounce rate
						</p>
						<Metric className='mt-2 text-inherit'>
							{percentageFormatter(
								sumArray(
									data,
									'Bounce Rate'
								) / data.length
							)}
						</Metric>
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel className='p-6'>
						<AreaChart
							className='h-80 mt-10'
							data={data}
							index='Month'
							categories={[
								'Visitors',
							]}
							colors={['blue']}
							valueFormatter={
								numberFormatter
							}
							showLegend={false}
							yAxisWidth={50}
						/>
					</TabPanel>
					<TabPanel className='p-6'>
						<AreaChart
							className='h-80 mt-10'
							data={data}
							index='Month'
							categories={[
								'Page Views',
							]}
							colors={['blue']}
							valueFormatter={
								numberFormatter
							}
							showLegend={false}
							yAxisWidth={50}
						/>
					</TabPanel>
					<TabPanel className='p-6'>
						<AreaChart
							className='h-80 mt-10'
							data={data}
							index='Month'
							categories={[
								'Bounce Rate',
							]}
							colors={['blue']}
							valueFormatter={
								percentageFormatter
							}
							showLegend={false}
							yAxisWidth={40}
						/>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</>
	);
}
