import {
	Card,
	Title,
	Text,
	Badge,
	Grid,
	Col,
} from '@tremor/react';
import PrayerRadio from '../components/prayer.radioList';
import { PrayerStreak } from '../components/prayer.streak';
import LineChart from '../components/analytics.lineGraph';
import DonutChart from '../components/analytics.donutChart';
import Timing from '../components/analytics.timing';

const Tab2: React.FC = () => {
	return (
		<main className='overflow-y-auto h-full'>
			<div className='px-10'>
				<div className='space-y-4'>
					{/* <Title className='font-bold text-4xl'>
						Fajir
					</Title>
					<Badge size='xl'>
						<p className='font-semibold'>
							5hrs 20 mins until
							Fajir
						</p>
					</Badge> */}
				</div>

				<Grid
					numItemsLg={6}
					className='gap-6 mt-10'
				>
					{/* Main section */}
					<Col numColSpanLg={4}>
						<Card className='h-full'>
							{/* <div className='h-60'> */}
							{/*  */}
							<LineChart />
							{/* </div> */}
						</Card>
					</Col>

					{/* KPI sidebar */}
					<Col numColSpanLg={2}>
						<div className='space-y-6'>
							<Card>
								{/* <div className='h-24'> */}
								<DonutChart />
								{/* </div> */}
							</Card>

							<Card>
								<Timing />
							</Card>
						</div>
					</Col>
				</Grid>
			</div>
			<div
				aria-hidden='true'
				className='relative'
			>
				<div className='h-20 w-full' />
				<div className='absolute inset-0 bg-gradient-to-t from-blue-950' />
			</div>
		</main>
	);
};

export default Tab2;
