import {IGood} from "../models";

interface GoodElementProps {
    good: IGood
}

export function GoodElement({good}: GoodElementProps) {
    return (
        <div className="rounded-lg p-2 shadow-lg m-3 w-80">
            <img src={good.image} alt="" className=""
                 width="100%" height="100%"/>
            <div className="space-y-2 flex flex-col">
                <p className="font-semibold">{good.name}</p>
                <p className="">{good.price} руб.</p>
                <button
                    className="rounded-lg text-sm left-0 w-40 font-semibold py-1 px-2 bg-slate-900 text-white hover:bg-slate-700 add-to-cart-btn"
                    value={good.id}>
                    Добавить в корзину
                </button>
            </div>
        </div>
    )
}