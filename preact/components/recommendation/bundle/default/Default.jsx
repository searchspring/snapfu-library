import { h } from 'preact';
import { observer } from 'mobx-react';
import { addToCart } from '@searchspring/snap-platforms/shopify';
import { RecommendationBundle } from '@searchspring/snap-preact-components';

import './{{ snapfu.variables.component }}.scss';

export const {{ snapfu.variables.component }} = observer((props) => {
	const controller = props.controller;
	const store = controller?.store;

	if (!controller.store.loaded && !controller.store.loading) {
		controller.search();
	}

	const parameters = store?.profile?.display?.templateParameters;

	return store.results.length > 0 && <RecommendationBundle controller={controller} onAddToCart={(e, data) => addToCart(data)} title={parameters?.title} />;
});