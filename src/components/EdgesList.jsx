import React from 'react'

const EdgesList = ({edges, setEdges, nodes, setNodes, editEdge, setEditEdge}) => {
    // When user tries to type in the input box, changed is called
    const changed = (event) => {
        event.preventDefault();
    };

    // Edits edge with {id}
    // uses .find() to match the corresponding object id
    // uses state hook to flag that edge as awaiting edits
    const handleEdit = ({id}) => {
        const findEdge = edges.find((edge) => edge.id === id);
        setEditEdge(findEdge);
    }

    // Deleted edge with {id} from edges by filtering it from edges
    // parameter id is in braces because it destructures the id paramter from edge
    const handleDelete = ({id}) => {
        const nodeSet = new Set();
        const newEdges = edges.filter((edge) => {
            if(edge.id === id){
                let found0 = 0;
                let found1 = 0;
                edges.forEach((e) => {
                    if(e.id !== id && !found0 && e.title.split(" ")[0]===edge.title.split(" ")[0]){
                        nodeSet.add(edge.title.split(" ")[0]);
                        found0 = 1;
                    }
                    if(e.id !== id && !found0 && e.title.split(" ")[1]===edge.title.split(" ")[0]){
                        nodeSet.add(edge.title.split(" ")[0]);
                        found0 = 1;
                    }
                    //
                    if(e.id !== id && !found1 && e.title.split(" ")[0]===edge.title.split(" ")[1]){
                        nodeSet.add(edge.title.split(" ")[1]);
                        found1 = 1;
                    }
                    if(e.id !== id && !found1 && e.title.split(" ")[1]===edge.title.split(" ")[1]){
                        nodeSet.add(edge.title.split(" ")[1]);
                        found1 = 1;
                    }
                })
                return false;
            } else {
                nodeSet.add(edge.title.split(" ")[0]);
                nodeSet.add(edge.title.split(" ")[1]);
                return true;
            }
        });
        // const newEdges = edges.filter((edge) => (edge.id !== id));
        setEdges(newEdges);


        const checkNodes = Array.from(nodeSet);
        let newNodes = nodes.filter((node) => checkNodes.includes(node));
        setNodes(newNodes);
    };

    
    return (
        <>
            {edges.map((edge) => (
                <li key={edge.id} className='list-none m-1 flex items-center justify-center'>
                    <input 
                        type='text' 
                        value={edge.title} 
                        onChange={changed} 
                        className={editEdge===edge ? 'bg-slate-300 m-1 p-1 rounded' : 'bg-gray-50 m-1 p-1 rounded'}
                    />
                    <button className='bg-gray-50 m-1 p-1 rounded' onClick={() => handleEdit(edge)}>
                        <i>Edit</i>
                    </button>
                    <button className='bg-gray-50 m-1 p-1 rounded' onClick={() => handleDelete(edge)}>
                        <i>Delete</i>
                    </button>
                </li>
            ))}
        </>
    )
}

export default EdgesList