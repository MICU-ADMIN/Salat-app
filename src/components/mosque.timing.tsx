import {
	Callout,
	Card,
	Text,
	Flex,
	CategoryBar,
	Grid,
	Icon,
	Title,
	Bold,
	ProgressBar,
	List,
	ListItem,
} from '@tremor/react';

import {
	ChevronDoubleRightIcon,
	ExclamationIcon,
	MoonIcon,
	UserIcon,
	UserGroupIcon,
} from '@heroicons/react/solid';

export default function Timing() {
	return (
		<>
			<Flex
				className='truncate'
				justifyContent='between'
			>
				<Flex
					className='truncate'
					justifyContent='start'
				>
					<Text>
						<Bold>{`Jumu'ah`}</Bold>
					</Text>
					<Icon
						variant='simple'
						icon={
							ChevronDoubleRightIcon
						}
						size='xs'
						color='slate'
					/>
					<Text className='truncate'>
						<Bold>
							Al Iman center
						</Bold>
					</Text>
				</Flex>
				<Text color='rose'>
					<Bold>Delayed</Bold>
				</Text>
			</Flex>
			<ProgressBar
				value={65}
				showAnimation={true}
				color='rose'
				className='mt-3'
			/>
			<Flex
				justifyContent='between'
				className='mt-3'
			>
				<div>
					<Title>13:30</Title>
					<Text>Sched. 13:30</Text>
				</div>
				<div className='text-right'>
					<Title>19:40</Title>
					<Text className='text-right'>
						Sched. 18:55
					</Text>
				</div>
			</Flex>
			<Callout
				title='+45 minutes behind plan'
				icon={ExclamationIcon}
				color='rose'
				className='mt-6'
			>
				Due to maintenance work, we
				have a minor delay. If you
				need assistance with your
				travels today please contact
				the info hotline.
			</Callout>
		</>
	);
}
