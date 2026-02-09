import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";
import Card from "./Card"
import "./style.css"

const Container = () => {
    const [response,setResponse] = useState([]);  // response = [], [ {}, {} , {}......]

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async () => {
       try {
             const list = await fetch("https://api.theindianhome.in/api/product/list");
            
             // console.log("list:",list);  response object = { headers: {}, body: readableStream, status: 200, ok: true}
             if(!list.ok)
                 throw new Error("Something went wrong");

            const data = await list.json();  // {success: true, products: 18 []}
            
            setResponse(data.products)
       } catch (error) {
            console.log("Error:",error);
       }
    }

    
  return (response.length === 0)? <Shimmer/> :(
            <div className="card-container">
                {
                    response.map((element,index)=> <Card key={element._id} {...element}/>)            
                }
            </div>  )
}

export default Container


/**
 * element = {
 *  id:
 *  description:,
 *  price:
 *  ratings:
 *  category:
 *  image: []
 * 
 * }
 */