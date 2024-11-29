/* eslint-disable @typescript-eslint/no-explicit-any */

import Conteudo from "./Conteudo"
import Footer from "./Footer"
import Header from "./Header"
import Menu from "./Menu"

export interface PaginaProps{
    texto?: string
    children?: any
}

export default function Pagina(props: PaginaProps) {
    return (
       <div className="flex flex-col mx-auto p-3 ">
            <Header>

            </Header> 
           <div className="flex">
                <Menu />
                <Conteudo>
                                
                </Conteudo>
           </div>
           
            <Footer>

            </Footer>
            {props.texto}
            {props.children}
             
       </div>
    )
}