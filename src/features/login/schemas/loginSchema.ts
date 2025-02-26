import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(12)
    .regex(new RegExp('.*[A-Z].*'))
    .regex(new RegExp('.*[a-z].*'))
    .regex(new RegExp('.*[0-9].*'))
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*')),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
