export const ON_INIT = 'lunatic-suggester/on-init';
export const onInit = (id) => ({ type: ON_INIT, payload: { id } });

export const ON_CHANGE_SEARCH = 'lunatic-suggester/on-change-search';
export const onChangeSearch = (search) => ({
	type: ON_CHANGE_SEARCH,
	payload: { search },
});

export const ON_UPDATE_OPTIONS = 'lunatic-suggester/on-update-options';
export const onUpdateOptions = (options, search) => ({
	type: ON_UPDATE_OPTIONS,
	payload: { options, search },
});

export const ON_FOCUS = 'lunatic-suggester/on-focus';
export const onFocus = () => ({ type: ON_FOCUS });

export const ON_BLUR = 'lunatic-suggester/on-blur';
export const onBlur = () => ({ type: ON_BLUR });

export const ON_CLICK_OPTION = 'lunatic-suggester/on-click-option';
export const onClickOption = (index) => ({
	type: ON_CLICK_OPTION,
	payload: { index },
});

export const ON_KEY_DOWN = 'lunatic-suggester/on-key-down';
export const onKeyDown = (key) => ({ type: ON_KEY_DOWN, payload: { key } });
