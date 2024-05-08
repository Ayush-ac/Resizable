import React, { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

const Formm = () => {
    const [txt, setTxt] = useState([]);
	  const [input, setInput] = useState('');
    const [countedit, setCountedit] = useState(0)
    const [countdel, setCountdel] = useState(0)
    
    useEffect(() => {
        // Fetch data from backend when component mounts
        fetchData();
      }, []); // Empty dependency array means this effect runs only once, when component mounts
    
      const fetchData = async () => {
        try {
            const response = await axios.get('/users');
            if (Array.isArray(response.data)) {
                setTxt(response.data);
            } else {
                console.error('Invalid data format from server:', response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    

    const submitHandler = () => {
		if (input.trim() !== '')
		setTxt([...txt,input]);
		setInput('');

    //   const response = fetch()
    };

	
    const editHandler = (index) => {
      setCountedit((countedit)=>countedit+1)
        const newText = prompt('Enter new text:', txt[index]);
        if (newText !== null) {
            const updatedTxt = [...txt];
            updatedTxt[index] = newText;
            setTxt(updatedTxt);
        }
    };
	

	const delHandler = (index) =>{
    setCountdel((countdel)=>countdel+1)
	const filterArray =	txt.filter((_,i)=> i!==index);
		setTxt(filterArray);
	}

    return (
        <>
            <div className="input-group mb-3 mt-4">
                <input
                    type="txt"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control"
                    placeholder="Enter something"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={submitHandler}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div  >
				<ul>
					{txt.map((data,index)=>(
							<li key={index} className="d-flex justify-content-between">
							<div>{data}</div>
							<div className="d-flex">
								<button type="button" onClick={()=>editHandler(index)} className="btn btn-primary mr-2">Edit: {countedit}</button>
								<button type="button" onClick={()=>delHandler(index)} className="btn btn-danger">Delete: {countdel} </button>
                
							</div>
						</li>
						
					))}
				</ul>
            </div>
        </>
    );
};

export default Formm;
