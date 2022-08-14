interface IMenuElement {
    title: string
    url_name: string
    icon_class: string
    needs_auth?: boolean
}

export const menu_elements: IMenuElement[] = [
    {
        title: 'Главная',
        url_name: '/',
        icon_class: 'fi fi-rr-home'
    },
    {
        title: 'Мои заказы',
        url_name: 'orders',
        icon_class: 'fi fi-rr-document',
        needs_auth: true
    },
    {
        title: 'Продавцы',
        url_name: 'sellers',
        icon_class: 'fi fi-rr-users'
    },
    {
        title: 'Пункты выдачи',
        url_name: 'pick_point_map',
        icon_class: 'fi fi-rr-marker'
    },
    {
        title: 'Корзина',
        url_name: 'cart',
        icon_class: 'fi fi-rr-shopping-cart',
        needs_auth: true
    }
]