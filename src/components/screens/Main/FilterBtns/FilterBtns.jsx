import { useState } from "react";
import FilterBtn from "../../../shared/FilterBtn/FilterBtn";
import style from "./style.module.css";

const FilterBtns = () => {
    const [activeBtn, setActiveBtn] = useState('watch guide');

    const handleBtnClick = (btnName) => {
        setActiveBtn(btnName)
    }

    return (
        <div className={style.wrapper}>
            <FilterBtn children={"watch guide"} active={activeBtn === 'watch guide'} onClick={() => handleBtnClick('watch guide')} />
            <FilterBtn children={"fan favorites"} active={activeBtn === 'fan favorites'} onClick={() => handleBtnClick('fan favorites')} />
            <FilterBtn children={"top picks"} active={activeBtn === 'top picks'} onClick={() => handleBtnClick('top picks')} />
            <FilterBtn children={"from your watchlist"} active={activeBtn === 'from your watchlist'} onClick={() => handleBtnClick('from your watchlist')} />
            <FilterBtn children={"most popular"} active={activeBtn === 'most popular'} onClick={() => handleBtnClick('most popular')} />
        </div>
    )
}
 
export default FilterBtns;