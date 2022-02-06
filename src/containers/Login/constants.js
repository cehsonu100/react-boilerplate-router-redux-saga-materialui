/*
 * LoginContainerConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const { LOGIN_REQUIRED } = process.env;
export const SET_USER_NAME = 'BOILERPLATE/HOME/SET_USER_NAME';
export const GET_USER_NAME = 'BOILERPLATE/HOME/GET_USER_NAME';
