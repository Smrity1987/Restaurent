import "./style.css"
import Menu from "./menuApi";
import { useState } from "react";
import MenuCart from "../MenuCart";


const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);

    const Item = (cate) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category===cate;
        });
        setMenuData(updatedList);
     };
   
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => Item("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => Item("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => Item("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => Item("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav>
            <MenuCart menuData={menuData}></MenuCart>
        </>
    )
};

export default Restaurent;