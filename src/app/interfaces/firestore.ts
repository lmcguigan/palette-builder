import { colorMode } from "./colors";

export interface IFirestoreColor {
    color: string,
    hex: string,
    mode: colorMode,
    name: string
}

export interface IFirestorePalette {
    colors?: IFirestoreColors,
    ownerAuthId?: string,
    name?: string
    id: string
}

export type IFirestoreColors = IFirestoreColor[]