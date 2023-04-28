import React from "react";

type TopCarsType = {
    cartype: CarsInfo[]
}
type CarsInfo = {
    manufacturer: string
    model: string
}


export const Comp1 = (props: TopCarsType) => {
    return (
        <>
            {props.cartype.map((el, index) => {
                return (
                    <table>
                        <tbody>
                        <tr>
                            <td key={index}>{el.manufacturer}</td>
                            <td key={index}>{el.model}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
        </>
    )
}
