import React from 'react'
import Draggable from 'react-draggable';


const GraphNode = ({node}) => {
    const nodeRef = React.useRef(null);
    // FIX BUGS:
    // nodes are loading outside of graph on the side when zoomed in
    // create an edge, then edit the edge such that one of the nodes no longer exists ??
    // make it so that the graph rerenders on ANY mouse movement, not just within the graph div
    // remove completed from form.jsx

    // error when deleting an edge, does not maintain the node order 




    // Generate the default position of the element
    const w = document.getElementById("graph").clientWidth;
    const h = document.getElementById("graph").clientWidth;
    // let defaultX = 0.75*w*Math.random();
    // let defaultY = 0.75*h*Math.random();
    // defaultX = 0.75*w;
    // defaultY = 0.75*h;

    return (
        <>
        <Draggable
            nodeRef={nodeRef}
            axis="both"
            // handle=".handle"
            handle={`.handle${node}`}
            defaultPosition={{x: 0.75*w*Math.random(), y: 0.75*h*Math.random()}}
            // defaultPosition={{x: 0.75*w, y: 0.75*h}}
            // defaultPosition={{x: defaultX, y: defaultY}}
            position={null}
            scale={1}
            bounds="#graph"
            >
            <div 
            ref={nodeRef} 
            className={
                `handle${node} bg-transparent text-white text-xs rounded-full 
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