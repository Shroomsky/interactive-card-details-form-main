export function input_formater(
	val,
	maxLength,
	setter,
	errorObj,
	setError,
	error
) {
	if (val.length < maxLength || isNaN(val)) {
		setter({ ...errorObj, status: true });
		return val;
	} else {
		setter({ ...errorObj, status: false });
		setError({ ...error, status: false });
		return val;
	}
}
