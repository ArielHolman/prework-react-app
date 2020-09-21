import React from 'react';

function FirstComponent(props) {
    console.log("this is first component props", props.items)
    return (
        <div>
        <h1>{props.poop}</h1>
        <ul>{props.items.map((item, index) =>{
          return <li key={index}>{props.items[index]}</li>
        })}
        </ul>
        </div>
    )
}

export default FirstComponent;