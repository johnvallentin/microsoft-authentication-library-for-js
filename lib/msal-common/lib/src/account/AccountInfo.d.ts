/**
 * Account object with the following signature:
 * - homeAccountId          - Home account identifier for this account object
 * - environment            - Entity which issued the token represented as a full host of it (e.g. http://login.microsoftonline.com)
 * - tenantId               - Full tenant or organizational id that this account belongs to
 * - username               - preferred_username claim of the id_token that represents this account
 */
export declare type AccountInfo = {
    homeAccountId: string;
    environment: string;
    tenantId: string;
    username: string;
};