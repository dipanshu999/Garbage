 import {React,useState} from 'react';
 export default function Todo(){

    const [data,setData]=useState([
        {name:"Dipanshu", job:"React developer" },
        {name:"Arjun", job:"Mobile App developer" },
        {name:"Alex", job:"Footballer" },
        {name:"Morgan", job:"Java developer"}
    ])

    function deletes(indexToDelete){
        let newData=data.filter((item,index)=>(
            indexToDelete!==index
        ))
            setData(newData);
    }

    return(
        <>

<div style={  {minHeight:"70vh", border:"solid 2px red" } }>
       { data.map( (item,index)=>(

        <div key={index} onClick={() => deletes(index)}>
           <h1>{item.name} </h1>
           <p>  <b> <u>Profession: </u> </b>{item.job}</p>
        </div>   

       )  ) }
</div> 
<button onClick={()=>setData(   data.filter((item,index)=>index!=data.length-1 )  )  } >Delete</button> <br /> <br />
<button onClick={()=>setData(   [...data, {name:"Shivani", job:"Dancer"}] )  } >ADD</button> <br /> <br />
<button onClick={ ()=>setData( data.map(item=> item.name==="Arjun"? ({name:"Arjun",job:"Jobless"}):  item ) ) } >Fire</button> <br /> <br />
        </>
    )
 }