import React, {useContext, useEffect, useState} from 'react';
import {menu_elements} from "../data/menu_elements";
import MenuElement from "../components/MenuElement";
import {IGood} from "../models";
import {GoodElement} from "../components/GoodElement";
import axios from "axios";
import LoadingElement from "../components/LoadingElement";
import ErrorContext from "../context";

const GoodsPage = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const url = 'http://localhost:8000/api/goods/'
    const [goods, setGoods] = useState<IGood[]>([])
    const {setError} = useContext(ErrorContext)

    async function fetchGoods() {
        setLoading(true)
        try {
            const response = await axios.get<IGood[]>(url)
            setGoods(response.data)
        } catch (e: unknown) {
            setError(`не удалось загрузить товары.`)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchGoods()
    }, [])

    return (
        <>
            {loading && <LoadingElement/>}
            {goods.map(good => <GoodElement good={good} key={good.id}/>)}
        </>
    );
};

export default GoodsPage;
