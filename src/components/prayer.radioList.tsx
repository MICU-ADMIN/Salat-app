// import React, { useState } from 'react';
// import { CheckCircleIcon } from '@heroicons/react/outline'; // Use the outline version for the check icon
// import {
// 	Card,
// 	Title,
// } from '@tremor/react';

// const mailingLists = [
// 	{
// 		id: 1,
// 		title: 'Fajir',
// 		description:
// 			'Prayer starts at 12:42',
// 		users: '621 users',
// 	},
// 	{
// 		id: 2,
// 		title: 'Duhur',
// 		description:
// 			'Prayer starts at 12:42',
// 		users: '1200 users',
// 	},
// 	{
// 		id: 3,
// 		title: 'Duhur',
// 		description:
// 			'Prayer starts at 12:42',
// 		users: '1200 users',
// 	},
// 	{
// 		id: 2,
// 		title: 'Duhur',
// 		description:
// 			'Prayer starts at 12:42',
// 		users: '1200 users',
// 	},
// 	{
// 		id: 2,
// 		title: 'Duhur',
// 		description:
// 			'Prayer starts at 12:42',
// 		users: '1200 users',
// 	},
// ];

// export default function PrayerRadio() {
// 	const [
// 		selectedMailingList,
// 		setSelectedMailingList,
// 	] = useState(null);

// 	const handleSelect = (id) => {
// 		setSelectedMailingList(id);
// 	};

// 	return (
// 		<div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
// 			{mailingLists.map(
// 				(mailingList) => (
// 					<Card
// 						key={mailingList.id}
// 						className={`relative flex cursor-pointer rounded-lg border ${
// 							selectedMailingList ===
// 							mailingList.id
// 								? 'border-blue-600 ring-2 ring-blue-600'
// 								: 'border-[#1f2937]'
// 						} bg-[#0f131e] p-4 shadow-sm focus:outline-none`}
// 						onClick={() =>
// 							handleSelect(
// 								mailingList.id
// 							)
// 						}
// 					>
// 						<div className='flex flex-1'>
// 							<div className='flex flex-col'>
// 								<span className='block text-sm font-medium text-gray-200'>
// 									{
// 										mailingList.title
// 									}
// 								</span>
// 								<span className='mt-1 flex items-center text-sm text-gray-500'>
// 									{
// 										mailingList.description
// 									}
// 								</span>
// 							</div>
// 						</div>
// 						{selectedMailingList ===
// 							mailingList.id && (
// 							<CheckCircleIcon
// 								className='h-5 w-5 text-blue-600'
// 								aria-hidden='true'
// 							/>
// 						)}
// 						<span
// 							className={`border ${
// 								selectedMailingList ===
// 								mailingList.id
// 									? 'border-blue-600'
// 									: 'border-2'
// 							} pointer-events-none absolute -inset-px rounded-lg`}
// 							aria-hidden='true'
// 						/>
// 					</Card>
// 				)
// 			)}
// 		</div>
// 	);
// }

import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import {
	Card,
	Title,
} from '@tremor/react';

const prayers = [
	{
		id: 1,
		title: 'Fajr',
		description:
			'Prayer starts at 5:30 AM',
	},
	{
		id: 2,
		title: 'Dhuhr',
		description:
			'Prayer starts at 12:30 PM',
	},
	{
		id: 3,
		title: 'Asr',
		description:
			'Prayer starts at 4:30 PM',
	},
	{
		id: 4,
		title: 'Maghrib',
		description:
			'Prayer starts at 6:30 PM',
	},
	{
		id: 5,
		title: 'Isha',
		description:
			'Prayer starts at 8:30 PM',
	},
];

export default function PrayerRadio() {
	const [
		selectedPrayers,
		setSelectedPrayers,
	] = useState([]);

	const handleSelect = (id) => {
		if (
			selectedPrayers.includes(id)
		) {
			setSelectedPrayers(
				selectedPrayers.filter(
					(prayerId) =>
						prayerId !== id
				)
			);
		} else {
			setSelectedPrayers([
				...selectedPrayers,
				id,
			]);
		}
	};

	return (
		<div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
			{prayers.map((prayer) => (
				<Card
					key={prayer.id}
					className={`relative flex cursor-pointer rounded-lg border-[#1f2937] ${
						selectedPrayers.includes(
							prayer.id
						)
							? 'border-blue-600 ring-2 ring-blue-600'
							: 'border-[#1f2937]'
					} bg-[#0f131e] p-4 shadow-sm focus:outline-none`}
					onClick={() =>
						handleSelect(
							prayer.id
						)
					}
				>
					<div className='flex flex-1'>
						<div className='flex flex-col'>
							<span className='block text-sm font-medium text-gray-200'>
								{prayer.title}
							</span>
							<span className='mt-1 flex items-center text-sm text-gray-500'>
								{
									prayer.description
								}
							</span>
						</div>
					</div>
					{selectedPrayers.includes(
						prayer.id
					) && (
						<CheckIcon
							className='h-5 w-5 text-blue-600'
							aria-hidden='true'
						/>
					)}
					<span
						className={`border ${
							selectedPrayers.includes(
								prayer.id
							)
								? 'border-blue-600'
								: 'border-2'
						} pointer-events-none absolute -inset-px rounded-lg`}
						aria-hidden='true'
					/>
				</Card>
			))}
		</div>
	);
}
