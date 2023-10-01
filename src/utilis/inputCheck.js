export function inputCheck(field, con, setter, errorVar, nan = true) {
	let con2 = "";
	switch (nan) {
		case true:
			con2 = isNaN(field);
			break;
		case false:
			con2 = !isNaN(field);
			break;
		case "card number":
			con2 = isNaN(field.replaceAll(" ", ""));
			break;
	}
	if (field == "" || field == " " || field == con || con2) {
		setter({ ...errorVar, status: true });
		return true;
	} else {
		setter({ ...errorVar, status: false });
		return false;
	}
}
