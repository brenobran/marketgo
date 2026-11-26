import { z } from 'zod';
export const checkoutSchema=z.object({
 street:z.string().trim().min(2,'Informe a rua'),number:z.string().trim().min(1,'Informe o número'),
 neighborhood:z.string().trim().min(2,'Informe o bairro'),complement:z.string().optional(),
 payment:z.enum(['pix','card','cash']),changeFor:z.string().optional()
});
export type CheckoutData=z.infer<typeof checkoutSchema>;
