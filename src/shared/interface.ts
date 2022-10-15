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
    content: string,
    date: string,
}
