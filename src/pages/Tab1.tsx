import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<h1 className='text-6xl font-bold  underline'>
						Hello world!
					</h1>
					<IonTitle>
						Tab 1
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>
							Tab 1
						</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name='Tab 1 page' />
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
