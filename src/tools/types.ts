export type InputValidLabelsType = 'name' | 'tel' | 'email' | null;

/*Alert Types*/
export type RequiredType = 'success' | 'isOrder' | 'error';
export interface IRequiredAlertSuccess {
    alertType: 'success',
    title: string,
    text: string
}
export interface IRequiredAlertError {
    alertType: 'error',
    title: string,
    text: string
}
export type requiredAlertType = IRequiredAlertSuccess|IRequiredAlertError|null


export type CheckGamesType = Record<number, string>