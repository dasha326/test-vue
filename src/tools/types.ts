export type InputValidLabelsType = 'name' | 'tel' | 'email' | null;

export interface IDoc {
    id: number,
    name: string,
    description: string,
    image?: string
}
export type DocsListType = null | Array<IDoc>;

export type DocType = null | IDoc;