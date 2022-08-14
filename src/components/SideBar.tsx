import React from 'react';
import {menu_elements} from "../data/menu_elements";
import MenuElement from "./MenuElement";

const Sidebar = () => {
    return (
        <div className='flex flex-col space'>
            {menu_elements.map(menu_element => <MenuElement menu_element={menu_element} key={menu_element.url_name} />)}
        </div>
    );
};

export default Sidebar;
