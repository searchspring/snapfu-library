import { h } from 'preact';
import { observer } from 'mobx-react';

import { RecommendationBundle } from '@searchspring/snap-preact-components';

import './{{ snapfu.variables.name }}.scss';

export const {{ snapfu.variables.name }} = observer((props) => {
	const controller = props.controller;
	const store = controller?.store;

	if (!controller.store.loaded && !controller.store.loading) {
		controller.search();
	}

	const parameters = store?.profile?.display?.templateParameters;

	return store.results.length > 0 && <RecommendationBundle controller={controller} onAddToCart={(items)=> controller.log.debug("need to add these to the platform cart", items)}  title={parameters?.title} />;
});