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
import Example from '../components/analytics.lineGraph';
import Timing from '../components/mosque.timing';

const Tab1: React.FC = () => {
	return (
		<main>
			<div className='p-10 overflow-y-auto h-full'>
				<div className='space-y-4'>
					<Title className='font-bold text-4xl'>
						Fajir
					</Title>
					<Badge size='xl'>
						<p className='font-semibold'>
							5hrs 20 mins until
							Fajir
						</p>
					</Badge>
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
							<PrayerRadio />
							{/* </div> */}
						</Card>
					</Col>

					{/* KPI sidebar */}
					<Col numColSpanLg={2}>
						<div className='space-y-6'>
							<Card>
								{/* <div className='h-24'> */}
								<PrayerStreak />
								{/* </div> */}
							</Card>
							<Card>
								<Timing />
							</Card>
							<Card>
								<div className='h-24' />
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

export default Tab1;
