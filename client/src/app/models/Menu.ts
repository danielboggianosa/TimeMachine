export interface Menu{
    id:number
    titulo:string
    menus:Array<{
        id:number
        titulo:string
        icono:string
        link:string
        subtitle:string
        submenus:Array<{
            id:number
            titulo:string
            link:string
        }>
    }>
}