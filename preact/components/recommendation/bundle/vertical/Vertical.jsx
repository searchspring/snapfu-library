import { h, Fragment } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react';
import { RecommendationBundle, Result as _Result, Checkbox, Icon } from '@searchspring/snap-preact-components';

{{ snapfu.variables.addToCart }}

import './{{ snapfu.variables.component }}.scss';

const Result = observer((props) => {
	const { result, selected, seed, onProductSelect } = props;
	
	const resultProps = {
		result: result,
		layout: 'list',
	};

	return (
		<>
			<div class="ss-bundled-result">
				<Checkbox
					className={selected ? 'bundle-checked' : 'bundle-add'}
					icon={selected ? 'check' : 'plus-thin'}
					checked={true}
					size={'20px'}
					onClick={() => onProductSelect(result)}
				/>

				<_Result {...resultProps} />
			</div>

			{seed ? (
				<div className="seperator-wrapper">
					<div className="iconWrapper">
						<Icon icon={'plus-thin'} />
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
});

export const {{ snapfu.variables.component }} = observer((props) => {
	const { controller } = props;
	const store = controller.store;
	const parameters = store?.profile?.display?.templateParameters;

	useEffect(() => {
		// useEffect here is used to load recommendations on no results
		if (!controller.store.loaded) {
			controller.search();
		}
	}, []);

	const bundleRecsProps = {
		controller: controller,
		hideCheckboxes: true,
		title: parameters?.title,
		seedText: 'This Item',
		resultComponent: <Result />,
		onAddToCart: (e, data) => addToCart(data),
		ctaInline: false,
		limit: 3,
		carousel: {
			enabled: false,
		},
		vertical: true,
		separatorIcon: false,
	};

	return (
		<div className={'ss__vertical-bundle'}>
			<RecommendationBundle {...bundleRecsProps} />
		</div>
	);
});