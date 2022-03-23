import React from 'react';
import classnames from 'classnames';
import DefaultLabelRenderer from './default-label-renderer';

function Label({
	labelRenderer: Renderer = DefaultLabelRenderer,
	placeholder,
	selectedIndex,
	options,
	search,
	disabled,
	labelledBy,
}) {
	const option =
		selectedIndex !== undefined ? options[selectedIndex] : undefined;

	return (
		<div
			className={classnames('lunatic-combo-box-selected', {
				disabled,
			})}
			tabIndex="-1"
			aria-labelledby={labelledBy}
		>
			<Renderer option={option} placeholder={placeholder} search={search} />
		</div>
	);
}

export default Label;
