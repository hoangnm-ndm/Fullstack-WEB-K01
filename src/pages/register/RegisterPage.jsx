import React from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
	return (
		<>
			<h1>Register Form</h1>
			<form className={styles.form} action="">
				<div className={styles.formGroup}>
					<label htmlFor="">Email</label>
					<input type="text" />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="">Password</label>
					<input type="password" />
				</div>
			</form>
		</>
	);
};

export default RegisterPage;
