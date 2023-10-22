import {
	Fragment,
	useState,
} from 'react';
import {
	Dialog,
	Switch,
	Transition,
} from '@headlessui/react';
import { IonButton } from '@ionic/react';
import { Divider } from '@tremor/react';

function classNames(...classes: any) {
	return classes
		.filter(Boolean)
		.join(' ');
}

const Tab4: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] =
		useState(false);
	const [
		automaticTimezoneEnabled,
		setAutomaticTimezoneEnabled,
	] = useState(true);
	const [
		autoUpdateApplicantDataEnabled,
		setAutoUpdateApplicantDataEnabled,
	] = useState(false);

	return (
		<>
			<main
				className='h-full overflow-y-auto'
				style={{
					overscrollBehaviorY:
						'none',
					scrollSnapType: 'none',
				}}
			>
				{/* Static sidebar for desktop */}

				{/* Content area */}
				<div>
					<div className='lg:px-8'>
						<div className='mx-auto flex flex-col lg:max-w-4xl'>
							<main className='flex-1'>
								<div className='relative mx-auto max-w-4xl'>
									<div className='pb-16 pt-10'>
										<div className='px-4 sm:px-6 lg:px-0'>
											<h1 className='text-3xl font-bold tracking-tight text-white'>
												Settings
											</h1>
										</div>
										<div className='px-4 sm:px-6 lg:px-0'>
											<div className='py-6'>
												{/* Description list with inline editing */}
												<Divider />
												<div className='mt-10 '>
													<div className='space-y-1'>
														<h3 className='text-lg font-medium leading-6 text-white'>
															Profile
														</h3>
														<p className='max-w-2xl text-sm text-gray-500'>
															This
															information
															will
															be
															displayed
															publicly
															so
															be
															careful
															what
															you
															share.
														</p>
													</div>
													<div className='mt-6'>
														<Divider />
														<dl>
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Name
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		Chelsea
																		Hagon
																	</span>
																	<span className='ml-4 flex-shrink-0'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																	</span>
																</dd>
															</div>
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Photo
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		<img
																			className='h-8 w-8 rounded-full'
																			src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
																			alt=''
																		/>
																	</span>
																	<span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																		<span
																			className='text-gray-300'
																			aria-hidden='true'
																		>
																			|
																		</span>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Remove
																		</IonButton>
																	</span>
																</dd>
															</div>
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Email
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		chelsea.hagon@example.com
																	</span>
																	<span className='ml-4 flex-shrink-0'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																	</span>
																</dd>
															</div>
															<Divider />
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4  sm:py-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Job
																	title
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		Human
																		Resources
																		Manager
																	</span>
																	<span className='ml-4 flex-shrink-0'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																	</span>
																</dd>
															</div>
														</dl>
													</div>
												</div>
												<Divider />
												<div className='mt-10'>
													<div className='space-y-1'>
														<h3 className='text-lg font-medium leading-6 text-white'>
															Account
														</h3>
														<p className='max-w-2xl text-sm text-gray-500'>
															Manage
															how
															information
															is
															displayed
															on
															your
															account.
														</p>
													</div>
													<div className='mt-6'>
														<Divider />
														<dl className=''>
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Language
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		English
																	</span>
																	<span className='ml-4 flex-shrink-0'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																	</span>
																</dd>
															</div>
															<div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
																<dt className='text-sm font-medium text-gray-500'>
																	Date
																	format
																</dt>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<span className='flex-grow'>
																		DD-MM-YYYY
																	</span>
																	<span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Update
																		</IonButton>
																		<span
																			className='text-gray-300'
																			aria-hidden='true'
																		>
																			|
																		</span>
																		<IonButton
																			type='button'
																			className='rounded-md bg-white font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
																		>
																			Remove
																		</IonButton>
																	</span>
																</dd>
															</div>
															<Switch.Group
																as='div'
																className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'
															>
																<Switch.Label
																	as='dt'
																	className='text-sm font-medium text-gray-500'
																	passive
																>
																	Automatic
																	timezone
																</Switch.Label>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<Switch
																		checked={
																			automaticTimezoneEnabled
																		}
																		onChange={
																			setAutomaticTimezoneEnabled
																		}
																		className={classNames(
																			automaticTimezoneEnabled
																				? 'bg-blue-600'
																				: 'bg-gray-200',
																			'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 sm:ml-auto'
																		)}
																	>
																		<span
																			aria-hidden='true'
																			className={classNames(
																				automaticTimezoneEnabled
																					? 'translate-x-5'
																					: 'translate-x-0',
																				'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
																			)}
																		/>
																	</Switch>
																</dd>
															</Switch.Group>
															<Switch.Group
																as='div'
																className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'
															>
																<Switch.Label
																	as='dt'
																	className='text-sm font-medium text-gray-500'
																	passive
																>
																	Auto-update
																	applicant
																	data
																</Switch.Label>
																<dd className='mt-1 flex text-sm text-white sm:col-span-2 sm:mt-0'>
																	<Switch
																		checked={
																			autoUpdateApplicantDataEnabled
																		}
																		onChange={
																			setAutoUpdateApplicantDataEnabled
																		}
																		className={classNames(
																			autoUpdateApplicantDataEnabled
																				? 'bg-blue-600'
																				: 'bg-gray-200',
																			'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 sm:ml-auto'
																		)}
																	>
																		<span
																			aria-hidden='true'
																			className={classNames(
																				autoUpdateApplicantDataEnabled
																					? 'translate-x-5'
																					: 'translate-x-0',
																				'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
																			)}
																		/>
																	</Switch>
																</dd>
															</Switch.Group>
															<Divider />
														</dl>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Tab4;
