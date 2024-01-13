import React from 'react'
import GraphNode from './GraphNode'
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";


const Graph = ({edges, nodes, hover, setHover}) => {
    return (
        <>
            <div className='relative border-2 border-solid border-white m-2 
            h-[700px] text-white rounded-md' 
            id='graph' 
            onMouseMove={() => {setHover(!hover)}} onMouseLeave={() => {setHover(!hover)}}>
 

                {nodes.map((node) => {
                    return (
                        <>
                            <GraphNode node = {node}/>
                        </>
                    )
                })}


                {edges.map((edge) => (
                    <>

                    <Xwrapper>


                        <Xarrow
                            start={"node"+edge.title.split(" ")[0]}
                            end={"node"+edge.title.split(" ")[1]}
                            curveness={0}
                            color='white'
                            showHead={false}
                        />


                    </Xwrapper>

                    </>             
                ))}

            </div>            
        </>
        
    )
}

export default Graph