import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Email khong hop le").min(6, "Email phai co toi thieu 6 ky tu"),
	password: z.string().min(6, "Mat khau phai co toi thieu 6 ky tu").max(20, "Mat khau khong duoc qua dai"),
});

export const registerSchema = z
	.object({
		username: z.string().min(3, "Ten phai co toi thieu 3 ky tu"),
		email: z.string().email("Email khong hop le").min(6, "Email phai co toi thieu 6 ky tu"),
		password: z.string().min(6, "Mat khau phai co toi thieu 6 ky tu").max(20, "Mat khau khong duoc qua dai"),
		confirmPassword: z
			.string()
			.min(6, "Mat khau xac nhan phai co toi thieu 6 ky tu")
			.max(20, "Mat khau xac nhan khong duoc qua dai"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Mat khau khong khop",
		path: ["confirmPassword"],
	});
