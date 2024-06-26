import { z } from 'zod';

/**
 * Defines a Zod object schema for validating user data with the following shape:
 * - name: Required string with minimum length of 1 character
 * - email: Valid email format string
 * - voterCardNumber: String with exactly 8 characters
 * - nationalID: String with exactly 8 characters
 * - constituencyName: Required string with minimum length of 1 character
 * - ward: Required string with minimum length of 1 character
 * - pollingStation: Required string with minimum length of 1 character
 * - pollingStationNo: Required string with minimum length of 1 character
 * - password: String with minimum length of 6 characters
 */
export const userRegistrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  voterCardNumber: z.string().length(8, 'Voter Card Number must be 8 characters'),
  nationalID: z.string().length(8, 'National ID must be 8 characters'),
  constituencyName: z.string().min(1, 'Constituency Name is required'),
  ward: z.string().min(1, 'Ward is required'),
  pollingStation: z.string().min(1, 'Polling Station is required'),
  pollingStationNo: z.string().min(1, 'Polling Station Number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});