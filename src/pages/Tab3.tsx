import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {
	useRive,
	Layout,
	Fit,
	Alignment,
} from '@rive-app/react-canvas';

const Simple = () => {
	const { RiveComponent } = useRive({
		// Load a local riv `clean_the_car.riv` or upload your own!
		src: 'compass.riv',
		// Be sure to specify the correct state machine (or animation) name
		stateMachines: 'Motion',
		// This is optional.Provides additional layout control.
		layout: new Layout({
			fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
			alignment: Alignment.Center,
		}),
		autoplay: true,
	});

	return <RiveComponent />;
};

const Tab3: React.FC = () => {
	return (
		<IonPage>
			<Simple />
		</IonPage>
	);
};

export default Tab3;
