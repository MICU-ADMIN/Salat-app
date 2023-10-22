import {
	Card,
	Title,
	Tracker,
	Flex,
	Text,
	Color,
} from '@tremor/react';

interface Tracker {
	color: Color;
	tooltip: string;
}

const data: Tracker[] = [
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'rose',
	// 	tooltip: 'Missed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	{
		color: 'gray',
		tooltip: 'Unknown',
	},
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
	// {
	// 	color: 'yellow',
	// 	tooltip: 'Late',
	// },
	// {
	// 	color: 'emerald',
	// 	tooltip: 'Prayed',
	// },
];

export const PrayerStreak = () => (
	// <Card className='max-w-sm mx-auto'>
	<>
		<Title>Streak</Title>
		<Text>
			{`Your prayer stats ● October
			2023`}
		</Text>
		<Flex
			justifyContent='end'
			className='mt-4'
		>
			<Text>Uptime 92%</Text>
		</Flex>
		<Tracker
			data={data}
			className='mt-2'
		/>
	</>
	// </Card>
);
