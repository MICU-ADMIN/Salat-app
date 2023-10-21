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
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

const Tab1: React.FC = () => {
	return (
		<main className='overscroll-behavior-y: none; h-full overflow-y-auto'>
			<div className='p-10 '>
				<div
					style={{
						position: 'sticky',
						top: '20px',
						zIndex: 20506,
					}}
				>
					<div
						style={{
							background:
								'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)',
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							height: '200px',
							pointerEvents:
								'none',
							zIndex: 20505,
						}}
					>
						<div className='space-y-4'>
							<Badge
								style={{
									position:
										'fixed',
									top: 40,
									left: 40,
									right: 0,
									pointerEvents:
										'none',
									zIndex: 20505,
								}}
								size='xl'
							>
								<p className='font-semibold'>
									5hrs 20 mins
									until Fajir
								</p>
							</Badge>
						</div>
					</div>
				</div>

				<Grid
					numItemsLg={6}
					className='gap-6 mt-10'
				>
					{/* Main section */}
					<Col numColSpanLg={4}>
						<PrayerRadio />
					</Col>

					{/* KPI sidebar */}
					<Col numColSpanLg={2}>
						<div className='space-y-6'>
							<Card>
								<PrayerStreak />
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

export default Tab1;
