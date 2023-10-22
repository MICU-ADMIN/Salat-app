import {
	Card,
	Metric,
	Text,
	Flex,
	CategoryBar,
	Grid,
} from '@tremor/react';

const categories = [
	{
		title: 'Prayers – accuracy',
		metric: '9.5',
		value: 95,
	},
];

const values = [10, 25, 45, 20];

export default function Timing() {
	return (
		<div className='p-2'>
			{categories.map((item) => (
				<>
					<Text>{item.title}</Text>
					<Flex
						justifyContent='start'
						alignItems='baseline'
						className='space-x-1'
					>
						<Metric>
							{item.metric}
						</Metric>
						<Text>/ 10</Text>
					</Flex>
					<CategoryBar
						values={values}
						colors={[
							'rose',
							'orange',
							'yellow',
							'emerald',
						]}
						markerValue={
							item.value
						}
						tooltip={item.metric}
						showLabels={false}
						className='mt-5'
					/>
				</>
			))}
		</div>
	);
}
