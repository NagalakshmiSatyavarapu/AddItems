import React,{useState} from 'react';

function AddItem(){

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
    function handleAddFood(){
      const newfood = document.getElementById("foodInput").value;
      setFoods(f=> [...f,newfood]);
      document.getElementById("foodInput").value="";
       
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i!==index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={()=>{handleRemoveFood(index)}} >{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='enter food name' />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}
export default AddItem