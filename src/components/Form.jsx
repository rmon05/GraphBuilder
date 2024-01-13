import React, { useEffect } from 'react'
import  {v4 as uuidv4} from 'uuid';


const Form = ({input, setInput, edges, setEdges, nodes, setNodes, editEdge, setEditEdge}) => {

    // Updates text in the input whenever new text is entered
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    // Updates an edge
    // NOTE: no curly braces for the arrow function since otherwise an explicit return function needed
    const updateEdge = (id, title, completed) => {
        const newEdges = edges.map((edge) => edge.id === id ? {id, title, completed} : edge)
        setEdges(newEdges);
        setEditEdge("");

        const nodeSet = new Set();
        newEdges.forEach((edge) => {
            nodeSet.add(edge.title.split(" ")[0]);
            nodeSet.add(edge.title.split(" ")[1]);
        });
        const checkNodes = Array.from(nodeSet);
        let newNodes = nodes.filter((node) => checkNodes.includes(node));
        if(!nodes.includes(title.split(" ")[0])){
            newNodes.push(title.split(" ")[0])
        }
        if(!nodes.includes(title.split(" ")[1])){
            newNodes.push(title.split(" ")[1])
        }
        setNodes(newNodes);
    }

    
    // Runs on first render, or when dependencies in the [] second parameter changes
    useEffect(() => {
        if(editEdge){
            setInput(editEdge.title);
        } else {
            setInput("");
        }
    }, [setInput, editEdge]);


    // Updates edges, resets input whenever the form is submitted (submit button clicked)
    // Note the spread operator ... to duplicate the existing portion of edges
    // Note the {id: uuidv4(), title: input, completed: false} are parameters of edge
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(input.split(" ")[0]==="" || input.split(" ")[1]==="" || input.split(" ")[0]===input){
            setInput("");
            document.getElementById('edgeAddButton').placeholder="Invalid Input!";
            

            // // // ALLOW BLANK EDGES FOR TESTING PURPOSES
            // const newEdges = [...edges, {id: uuidv4(), title: input, completed: false}];
            // setEdges(newEdges);
            // setInput("");

            // const nodeSet = new Set();
            // newEdges.forEach((edge) => {
            //     nodeSet.add(edge.title.split(" ")[0]);
            //     nodeSet.add(edge.title.split(" ")[1]);
            // });
            // setNodes(Array.from(nodeSet));
            // //
            // document.getElementById('edgeAddButton').placeholder="Enter Edge";

        } else if(!editEdge){
            const newEdges = [...edges, {id: uuidv4(), title: input, completed: false}];
            setEdges(newEdges);
            

            const nodeSet = new Set();
            newEdges.forEach((edge) => {
                nodeSet.add(edge.title.split(" ")[0]);
                nodeSet.add(edge.title.split(" ")[1]);
            });
            const checkNodes = Array.from(nodeSet);
            let newNodes = nodes.filter((node) => checkNodes.includes(node));
            if(!nodes.includes(input.split(" ")[0])){
                newNodes.push(input.split(" ")[0])
            }
            if(!nodes.includes(input.split(" ")[1])){
                newNodes.push(input.split(" ")[1])
            }
            setNodes(newNodes);

            setInput("");
            //
            document.getElementById('edgeAddButton').placeholder="Enter Edge";
        } else {
            // there are edit to edge
            updateEdge(editEdge.id, input, editEdge.completed)
            //
            document.getElementById('edgeAddButton').placeholder="Enter Edge";
        }

        
    };

    return (
        <form onSubmit={onFormSubmit} className=' m-1'>
            <input 
                type='text' 
                placeholder='Enter Edge' 
                className='bg-gray-50 m-1 p-1 rounded'
                id='edgeAddButton'
                value={input}
                onChange={onInputChange}></input>
            <button type='submit' className='bg-gray-50 m-1 p-1 rounded'>
                <i>
                    {editEdge ? "Save" : "Add"}
                </i>
            </button>
        </form>
    )
}

export default Form