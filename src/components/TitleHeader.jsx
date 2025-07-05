import React from "react";

const TitleHeader=({
    title,text
})=>{
    return(
<div className="flex justify-between item-center">
    <div>
        <h1 className="gradient-title font-semibold md:text-6xl text-4xl uppercase">{title}</h1>
        <p className="md:text-3xl md:mt-5">{text}</p>
    </div>
</div>

    )
}
export default TitleHeader