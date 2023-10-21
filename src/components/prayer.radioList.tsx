import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/outline'; // Use the outline version for the check icon

const mailingLists = [
	{
		id: 1,
		title: 'Fajir',
		description:
			'Prayer starts at 12:42',
		users: '621 users',
	},
	{
		id: 2,
		title: 'Duhur',
		description:
			'Prayer starts at 12:42',
		users: '1200 users',
	},
	{
		id: 3,
		title: 'Asr',
		description:
			'Prayer starts at 12:42',
		users: '2740 users',
	},
	{
		id: 4,
		title: 'Mahgrib',
		description:
			'Prayer starts at 12:42',
		users: '2740 users',
	},
	{
		id: 5,
		title: 'Isha',
		description:
			'Prayer starts at 12:42',
		users: '2740 users',
	},
];

function classNames(...classes: any) {
	return classes
		.filter(Boolean)
		.join(' ');
}

export default function PrayerRadio() {
	const [
		selectedMailingLists,
		setSelectedMailingLists,
	] = useState([]);

	return (
		<RadioGroup
			value={selectedMailingLists}
			onChange={
				setSelectedMailingLists
			}
		>
			{/* <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'> */}
			<div className='mt-4 grid grid-cols-1 gap-y-6  sm:gap-x-4'>
				{mailingLists.map(
					(mailingList) => (
						<RadioGroup.Option
							key={
								mailingList.id
							}
							value={mailingList}
							className={({
								active,
							}) =>
								classNames(
									active
										? 'border-blue-600 ring-2 ring-blue-600'
										: 'border-[#1f2937]',
									'relative flex cursor-pointer rounded-lg border bg-[#0f131e] p-4 shadow-sm focus:outline-none'
								)
							}
						>
							{({
								checked,
								active,
							}) => (
								<>
									<span className='flex flex-1'>
										<span className='flex flex-col'>
											<RadioGroup.Label
												as='span'
												className='block text-sm font-medium text-gray-200'
											>
												{
													mailingList.title
												}
											</RadioGroup.Label>
											<RadioGroup.Description
												as='span'
												className='mt-1 flex items-cenechecktered text-sm text-gray-500'
											>
												{
													mailingList.description
												}
											</RadioGroup.Description>
										</span>
									</span>
									<CheckCircleIcon
										className={classNames(
											!checked
												? 'invisible'
												: '',
											'h-5 w-5 text-blue-600'
										)}
										aria-hidden='true'
									/>
									<span
										className={classNames(
											active
												? 'border'
												: 'border-2',
											checked
												? 'border-blue-600'
												: 'border-transparent',
											'pointer-events-none absolute -inset-px rounded-lg'
										)}
										aria-hidden='true'
									/>
								</>
							)}
						</RadioGroup.Option>
					)
				)}
			</div>
		</RadioGroup>
	);
}
