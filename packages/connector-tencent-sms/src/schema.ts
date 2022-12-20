import { z } from 'zod';

export const SingleSmsConfig = z.object({
  usageType: z.string(),
  templateCode: z.string(),
});

export const SmsConfigGuard = z.object({
  accessKeyId: z.string(),
  accessKeySecret: z.string(),
  signName: z.string(),
  sdkAppId: z.string(),
  region: z.string(),
  templates: z.array(SingleSmsConfig),
});

export type TencentSmsConfig = z.infer<typeof SmsConfigGuard>;

export const tencentErrorResponse = z.object({
  Response: z.object({
    Error: z.object({
      Code: z.string(),
      Message: z.string(),
    }),
  }),
});

export declare type TencentErrorResponse = z.infer<typeof tencentErrorResponse>;

export const SendStatusSetItem = z.object({
  SerialNo: z.string(),
  PhoneNumber: z.string(),
  Fee: z.number(),
  SessionContext: z.string(),
  Code: z.string(),
  Message: z.string(),
  IsoCode: z.string(),
});

export const tencentSuccessResponse = z.object({
  Response: z.object({
    SendStatusSet: z.array(SendStatusSetItem),
    RequestId: z.string(),
  }),
});

export declare type TencentSuccessResponse = z.infer<typeof tencentSuccessResponse>;
