import React from 'react';
import {
	Card,
	ScatterChart,
} from '@tremor/react';

interface ScatterProps {
	data: {
		location: string;
		x: number;
		y: number;
		z: number;
	}[];
	customTooltip: (params: {
		payload: any;
		active: boolean;
		label: string;
	}) => JSX.Element | null;
}

const customTooltip = ({
	payload,
	active,
	label,
}: {
	payload: any;
	active: boolean;
	label: string;
}) => {
	if (!active || !payload) return null;
	return (
		<div className='w-48 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border'>
			<div className='flex flex-1 space-x-2.5'>
				<div
					className={`w-1.5 flex flex-col bg-${payload[0]?.color}-500 rounded`}
				/>
				<div className='w-full'>
					<p className='mb-2 font-medium text-tremor-content-emphasis'>
						{label}
					</p>
					{payload.map(
						(
							payloadItem: any,
							index: any
						) => (
							<div
								key={index}
								className='flex items-center justify-between space-x-6'
							>
								<span className='text-tremor-content'>
									{
										payloadItem.name
									}
								</span>
								<span className='font-medium tabular-nums text-tremor-content-emphasis'>
									{
										payloadItem.value
									}
								</span>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default function Scatter() {
	const chartdata2 = [
		{
			location: 'Location A',
			x: 100,
			y: 200,
			z: 200,
		},
		// ...
		{
			location: 'Location D',
			x: 70,
			y: 0,
			z: 950,
		},
	];

	return (
		<>
			<Card>
				<ScatterChart
					className='h-80 mt-6 -ml-2'
					yAxisWidth={50}
					data={chartdata2}
					category='location'
					x='x'
					y='y'
					size='z'
					showLegend={false}
					customTooltip={
						customTooltip
					}
				/>
			</Card>
		</>
	);
}
