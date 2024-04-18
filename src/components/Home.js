import React, { useState } from "react";
import Image from "./Image";

export default function Home(){
    const[images, setImages]= useState([]);
    async function searchImages(key) {
      let data = await fetch(`https://api.unsplash.com/search/photos/?query=${key}&client_id=hVqbao7D7S3LUROjlXBdOpEgmZCBKj8OjdKcmZ-AU1k`)
      console.log(data)
      let convertedData = await data.json()

      setImages(convertedData.results)
      console.log(convertedData.results)
  }
  function handleOnChange(event) {
    searchImages(event.target.value)

}
  return(
        <>
        <div className="container text-center">
  <div className="row">
    <div className="col"><div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note:</strong>Enter a Keyword and image will be shown
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div></div>
  </div>
  <div className="row my-3">
                    <div className="col-md-6 m-auto d-flex justify-content-between align-items-center">
                        <input className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='enter keyword' type="text" />
                    </div>
                </div>
      <div className="row">
          {images.map((element,index)=>{
            return(
              <Image image={element.urls.regular} key={index}/>
            )
          })}
      </div>

</div>

        </>
    )
}