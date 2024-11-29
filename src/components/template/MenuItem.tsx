/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export interface MenuItemProps {
    nome: string
    url: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
       <Link href="/">
          {props.nome}
          {props.url}
          {props.icon}
       </Link>
    )
}