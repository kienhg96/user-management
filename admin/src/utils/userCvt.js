const convert = ({_id, ...rest}) => ({
	id: _id,
	...rest
});

export default data => {
	if (!data) {
		return null;
	}
	if (Array.isArray(data)) {
		return data.map(convert);
	}
	return convert(data);
}
