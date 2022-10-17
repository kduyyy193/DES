import { MouseEventHandler } from "react"

export interface User {
    name?: string,
    email?: string,
    password?: string,
}

export interface Children {
    children: JSX.Element
}

export interface OnClick {
    onClick?: MouseEventHandler<HTMLDivElement>,
    OpenModal?: boolean
}

export interface Todos {
    id?: number,
    content: string,
    color?: string,
    status?: Status,
}

export interface Status {
    status: string;
    color: string;
}