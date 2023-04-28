import React from "react";

export const NewButton =()=>{

    const myfirstSibscriber = () =>{
        console.log('Hello Im vasya')
    }

    const mySescondSibscriber = () => {
        return(
            console.log('Hello Im Ivan')
        )
    }

    return(
        <div className={'Button'}>
            {/*<button onClick={(event)=> {console.log('hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={myfirstSibscriber}>MyYouTubeChanel-1</button>
            <button onClick={mySescondSibscriber}>MyYouTubeChanel-2</button>
        </div>
    )
}