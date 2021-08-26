import { SAME_SITE_STRICT } from './constants';

const FOURTEEN_DAYS_MAGIC_NUMBER = 12096e5;

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: SAME_SITE_STRICT,
  expires: new Date(Date.now() + FOURTEEN_DAYS_MAGIC_NUMBER)
};
