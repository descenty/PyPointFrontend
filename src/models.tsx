export interface IMenuElement {
    title: string
    url_name: string
    icon_class: string
    needs_auth?: boolean
}

export interface IGood {
    id: number
    name: string
    description: string
    image: string
    price: string
    rating: number
    seller: number
}