import React from 'react'
import Draggable from 'react-draggable';

const GraphNode = ({node}) => {

    // let a = document.getElementsByClassName(`node${node}`);
    // a.onClick = () => {
    //     console.log(node + " was clicked!");
    // }

    const w = document.getElementById("graph").offsetWidth;
    const h = document.getElementById("graph").offsetWidth;

    return (
        <>
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: w*Math.random(), y: h*Math.random()}}
            position={null}
            scale={1}
            bounds="#graph"
            >
            <div className={
                `handle bg-transparent text-white text-xs rounded-full 
                w-8 h-8 m-1 p-1 absolute
                flex items-center justify-center
                border-2 border-white border-solid
                hover:cursor-pointer
                `}
                id={`node${node}`}
            >
                {node}
            </div>
        </Draggable>
        </>
        
    )
}

export default GraphNode