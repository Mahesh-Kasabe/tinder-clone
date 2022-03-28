import React, { useEffect, useState } from 'react'
import { getDocs,collection, FieldValue } from "firebase/firestore"
import { db } from "../../firebase-config"
import TinderCard from "react-tinder-card";
import "./tinder.css"


const Tinder = () => {
    const [people, setPeople] = useState([]);
    const dbcollection = collection(db, "Users");
    useEffect(() => {
        const getproducts = async () => {
            const data = await getDocs(dbcollection);
            setPeople(data.docs.map((doc) => ({
              ...doc.data() 
            })));
          }
          getproducts();
          console.log(people);    
    
    }, []);

    return (
    <div className='main'>
        {
        people.map((user,key) => {
        return(
            <div className='maincard'>

                    <TinderCard preventSwipe={["up", "down"]} className="card">
                    
                    <img src={user.image} />

                    <div className='card1'>
                    <h3 id='name'> {user.name}</h3>,
                    </div>
                    <p id='age'>{user.age}</p>
                    <h4 id='desc'> {user.hobbies} </h4>
                    </TinderCard>      
            </div>
                )
            })
        }
    </div>
  )
}

export default Tinder