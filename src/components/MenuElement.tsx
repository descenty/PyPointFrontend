import React from 'react';
import {IMenuElement} from "../models";

interface MenuElementProps {
    menu_element: IMenuElement
}

const MenuElement = ({menu_element}: MenuElementProps) => {
    return (
        <a className="p-3 items-center" href={menu_element.url_name}>
            <i className={menu_element.icon_class}></i>&nbsp;
            {menu_element.title}
        </a>
    );
};

export default MenuElement;
