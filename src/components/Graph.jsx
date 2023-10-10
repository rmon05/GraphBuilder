import React from 'react'
import GraphNode from './GraphNode'
import LineTo from 'react-lineto'
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";


const Graph = ({edges, nodes, hover, setHover}) => {


    return (
        <>
            <div className='relative border-2 border-solid border-white m-2 h-[700px] text-white rounded-md' 
            id='graph' onMouseMove={() => {setHover(!hover)}} onMouseLeave={() => {setHover(!hover)}}>
                {nodes.map((node) => (
                    <>
                        <GraphNode node = {node}/>
                    </>
                ))}

                {/* {edges.map((edge) => (
                    <LineTo delay={0} zIndex={0} from={"node"+edge.title.split(" ")[0]} to={"node"+edge.title.split(" ")[1]}/>                    
                ))} */}


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