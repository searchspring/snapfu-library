/** @jsx jsx */
import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import { CacheProvider } from '@searchspring/snap-preact-components';
import { observer } from 'mobx-react';

const CSS = {
	{{ snapfu.variables.name }}: () => {
		return css({
		});
	},
};

export const {{ snapfu.variables.name }} = observer((props) => {
	
	const { tag, value, parameters } = props;
	const {} = parameters;

	return (
		<CacheProvider>
			<div css={CSS.{{ snapfu.variables.name }}()} className={`ss__badge-custom ss__badge-custom--${tag}`}>{ value }</div>
		</CacheProvider>
	)
});