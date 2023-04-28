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
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
        </>
    )
}
