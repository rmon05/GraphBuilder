import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import EdgesList from './components/EdgesList'
import Graph from './components/Graph'
import '../public/output.css'



function App() {
    const [input, setInput] = useState("");
    const [edges, setEdges] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [editEdge, setEditEdge] = useState(null);
    const [hover, setHover] = useState(false);

    return (
        <div className='bg-slate-950 h-screen overflow-y-hidden'>
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
            
            {/*MAKE SURE THIS CLASS HAS 0 HEIGHT OTHERWISE IT WILL DYNAMICALLY RESIZE TO FIT THE OVERFLOW!!!*/}
            <div className='h-0 grid grid-cols-2'>

                <div className='overflow-y-scroll border-2 border-solid border-white m-2 h-[700px] rounded-md'>
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
