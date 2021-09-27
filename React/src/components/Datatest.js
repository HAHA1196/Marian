import React from 'react'
import Axios from "axios";
import { useAxios } from "use-axios-client";

export default function Datatest() {
    const { data, error, loading } = useAxios({
        url: "http://localhost:8000/api/products"
      });
      console.log(data)
    
      if (loading || !data) return "Loading...";
      if (error) return "Error!";
    
      return (
        <div>
            {
                data.map((val)=>{
                    return(
                        <>
                        <h1>{val.productId}</h1>
                        <p>{val.productName}</p>
                        </>
                    )
                })
            }
          
        </div>
      ) 
}
