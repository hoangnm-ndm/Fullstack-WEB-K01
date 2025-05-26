import { z } from "zod";

export const productSchema = z.object({
	title: z.string().min(6, "Ten san pham phai co toi thieu 6 ky tu"),
	price: z.number().min(0),
	description: z.string().optional(),
});
