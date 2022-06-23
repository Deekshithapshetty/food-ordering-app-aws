import React, {useState, useEffect} from 'react';
import MealService from '../../services/MealService';
import {Form} from 'react-bootstrap'

const CreateMealComponent = (props) => {
  const meal = props.meal // u props se nalazi i user i metoda handle submit
  // const {user} = props !!!!
  // className = 'form-control', bootstrapov input forme, da lepse izgleda
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    getAllMealTypes();
  }, [])
  

  const getAllMealTypes = () =>{
    MealService.getAllMealTypes().then((response) =>{
        setMealTypes(response.data);
    }).catch(error =>{
            console.log(error);
        })
  }


  
  return (
    <div>
      
        <div className='container-add-meal'>
          
            
              
                
              
              
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Name: </label>
                    <input  
                        type="text"
                        placeholder="Insert name" 
                        name = "name" 
                        className="form-control" 
                        
                        value={meal.name}
                        onChange = {(e) => meal.setName(e.target.value)}
                        
                        >
                        
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Price: </label>
                    <input  
                        type="text"
                        placeholder="Insert price" 
                        name = "price" 
                        className="form-control" 
                        
                        value={meal.price}
                        onChange = {(e) => meal.setPrice(e.target.value)}
                        
                        >
                        
                    </input>
                  </div>

                 
                 { 
                 
                 <div className='form-group mb-2'>
                    <label className='form-label'>Type: </label>
                    <Form.Select onChange={(e)=>meal.setMealType(JSON.parse(e.target.value))}>
                    {mealTypes.map((mealTypeItem)=> {
                      return (
                        <option key={mealTypeItem.id} value={JSON.stringify(mealTypeItem)} >{mealTypeItem.typeName}</option>
                      )
                    })}
                    
                    </Form.Select>
                  </div>
                  
                  }
                {/*
                  <div className='form-group mb-2'>
                    <label className='form-label'>Upload picture: </label>
                    <input  
                        type="text"
                        placeholder="Insert phone number" 
                        name = "phoneNumber" 
                        className="form-control" 
                        
                        value={user.phoneNumberEdit}
                        onChange = {(e) => user.setPhoneNumberEdit(e.target.value)}
                        
                        >
                        
                    </input>
                  </div>
                  */
                }
                  


                  

                  
                </form>
              
            </div>
          
        
        
    </div>
  )
}

export default CreateMealComponent