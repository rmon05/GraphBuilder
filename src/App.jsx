import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import EdgesList from './components/EdgesList'
import Graph from './components/Graph'
import '../public/output.css'



function App() {
    const [input, setInput] = useState(""); // string (user input)
    const [edges, setEdges] = useState([]); // array of object{id, title, completed} (edges stored in the string title)
    const [nodes, setNodes] = useState([]); // array of integers (node numbers stored in the integers)
    const [editEdge, setEditEdge] = useState(null); // object{id, title, completed} (the edge pending edits if exists, otherwise null)
    const [hover, setHover] = useState(false); // boolean (if mouse is hovering graph)
    
   
    console.log(edges);
    console.log(nodes);

    return (
        <div className='bg-slate-950 h-screen overflow-y-auto'>
            <Header/>
            
            <div className='flex items-center justify-center'>
                <Form
                    input={input}
                    setInput={setInput}
                    edges={edges}
                    setEdges={setEdges} 
                    nodes={nodes}
                    setNodes={setNodes}
                    editEdge={editEdge}
                    setEditEdge={setEditEdge}
                />
            </div>
            
            {/*MAKE SURE THIS CLASS HAS 0 HEIGHT OTHERWISE IT WILL DYNAMICALLY RESIZE TO FIT THE OVERFLOW?? maybe*/}
            {/* <div className='h-[100%] bg-slate-500 grid grid-cols-2'> */}
            <div className='h-[0] grid grid-cols-2'>

                <div className='overflow-y-auto border-2 border-solid border-white m-2 h-[700px] rounded-md'>
                    <EdgesList
                        edges={edges}
                        setEdges={setEdges}
                        nodes={nodes}
                        setNodes={setNodes}
                        editEdge={editEdge}
                        setEditEdge={setEditEdge}
                    />
                </div>

                <Graph
                    edges={edges}
                    nodes={nodes}
                    hover={hover}
                    setHover={setHover}
                />
                

            </div>
          


        </div>
    )
}

export default App
