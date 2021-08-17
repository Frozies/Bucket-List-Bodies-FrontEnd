import React from "react";

const cartShape = (currentAmount = 5, totalAmount = 8, color) => {
    return (
        <div>
            <p style={{
                position: "relative",
                bottom: "-69px",
                left: "11.5px",
                color: color,
            }}>{currentAmount}</p>

            <p style={{
                position: "relative",
                bottom: "-31.5px",
                left: "32px",
                color: color,
            }}>{totalAmount}</p>

            <svg width={31} height={25} viewBox={"0 0 31 25"} xmlns={"http://www.w3.org/2000/svg"}>
                <circle cx={20.5} cy={22.5} r={2} stroke={"#333"}/>
                <circle cx={10.5} cy={22.5} r={2} stroke={"#333"}/>
                <path fill={"#333"} d={"M3.333 5.5c.56 0 1.068.31 1.326.798l.059.125 4.23 10.154c.216.516.698.866 1.247.917l.138.006h10.293a1.5 1.5 0 0 0 1.343-.831l.057-.13.976-2.539h1.071l-1.113 2.897a2.498 2.498 0 0 1-2.152 1.596l-.182.007H10.333c-.95 0-1.812-.538-2.234-1.377l-.073-.161L3.795 6.808a.498.498 0 0 0-.377-.3L3.333 6.5H0v-1h3.333zM29.458 0l-4.615 12h-1.072l4.616-12h1.071z"} />
            </svg>
        </div>
    )
};
/*positining for single digits left: 11.5px, left: 32px*/
/*positioning for double digits left: 7.5px, left: 28px*/

export default cartShape