import React, {useState} from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [data, setData] = useState([]);

    const addItem = ()=>{
        if(!inputData){
            
        }else{
            setData([ ...data, inputData]);
            setInputData('');
        }
    }

   const deleteItem = (id)=>{
    const updatedItem = data.filter((ele, index)=>{
        return index != id;
    });
    setData(updatedItem);
   }

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <i class="fa-solid fa-file">Todo App</i>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder='✍ Add tasks...' value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
                    <i class="fa-solid fa-plus" title="Add Items" onClick={addItem}></i>
                </div>
                <div className="showItems">
                    {
                        data.map((ele, index)=>{
                            return(
                                <div className="eachItem" key={index}>
                                    <h3>{ele}</h3>
                                    <i class="fa-solid fa-trash-can" title='Delete item' onClick={()=>{deleteItem(index)}}></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo
