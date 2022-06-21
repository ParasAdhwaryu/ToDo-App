import React from "react";
import { useState } from "react";
function Items() {
  const [val, Setval] = useState('');
  const [list,Additem]=useState([]);
  const handleValue = (event) => {
    Setval(event.target.value);
  };
  const finalizeVal = () => {
    if(val!==''){
        Additem([...list,val]);
        //setCnt(cnt+1);
        //console.log(cnt);
        }
      Setval('');
  };
  const resetList=()=>{
    //setCnt(0);
    Additem([]);
    //console.log(cnt);
  }
  const deleteItemk=(id)=>{
  console.log(id);
   const newList= list.filter((ele,ind)=>{
        return ind!==id;
    })
    Additem(newList);
  }
  const updateItem=(id)=>{
    const newList=list.filter((ele,ind)=>{
        return ind===id;
    })
    Setval(newList[0]);
    const newList1=list.filter((ele,ind)=>{
        return ind!==id;
    })
    Additem(newList1);
  }
  return (
    <>
      <div
        className="container justify-content-center"
        style={{
          border: "2px solid black",
          marginTop: "250px",
          maxWidth: "350px",
          fontSize:'20px',
        }}
      >
        {/* <div>{cnt}</div> */}
        <form className="row g-3" style={{marginTop:'5px'}}>
          <div className="col-auto">
            <input 
            className="form-control"
             style={{maxWidth:'250px'}}
              onChange={handleValue}
              value={val}
              type="text"
              placeholder="Enter The Name Of Item"
            />
          </div>
          <div className="col-auto">
            <button type="button" onClick={finalizeVal} className="btn btn-primary">
              Add
            </button>
          </div>
        </form>

        <div className="d-flex felx-wrap flex-column mb-3">
         { list.map((element,id)=>{
            return (
            <>
            <div className="p-2" style={{marginTop:'10px'}} key={id}>
                {element} <button type="button" style={{marginLeft:'20px'}} onClick={()=>{deleteItemk(id)}} className="btn btn-primary">
                 Delete
                 </button>
                 <button type="button" style={{marginLeft:'20px'}} onClick={()=>{updateItem(id)}} className="btn btn-primary">
                 Update
                 </button>
                </div>
                 </>) 
         })         
         }<div className="p-2">
          <button type="button" onClick={resetList} className="btn btn-danger justify-content-center" style={{maxWidth:"120px",marginTop:'10px',marginLeft:'-10px'}}>
              Remove All
            </button>
            </div>
        </div>
        
      </div>
    </>
  );
}

export default Items;
