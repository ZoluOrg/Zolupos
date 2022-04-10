import { FormikErrors } from "formik";
import { ILoginForm } from "../../interfaces/FormValues";

export const validate = (values:ILoginForm) => {
	const errors: FormikErrors<ILoginForm> = {};
	if (!values.name) {
		errors.name = "Name is required!";
	}
	if (!values.pin) {
		errors.pin = "Pin is required!";
	}
	return errors;
};