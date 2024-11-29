/* eslint-disable @typescript-eslint/no-explicit-any */

export interface PaginaProps{
    texto?: string
    children?: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="">
            {props.texto}
            {props.children}          
        </div>
    )
}