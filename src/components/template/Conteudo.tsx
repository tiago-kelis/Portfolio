/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ConteudoProps {
    texto?: string
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className=" flex-1 flex flex-col border border-orange-600 w-screen">
             <main className="">
                <nav className="flex-1 flex p-4 overflow-auto">
                    Content
                    {props.texto}
                    {props.children}
                      
                </nav>
            </main>
        </div>
    )
}