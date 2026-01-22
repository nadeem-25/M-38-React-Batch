
import List from './List';

const User = () => {

    const persons = ["Tinku", "chombu", "chombi"]

    return <ul id="user-component">
     
            <List  username={persons[0]} />
            <List  username={persons[1]} />
            <List  username={persons[2]} />

            {
                persons.map((element,index) =>{
                    <List username={element} index={index} />
                })
            }
        
    </ul> 
}

export default User;


/**
 * <ul id="user-component">
        {
            persons.map((element,index)=> <li key={index} >Username: {element}</li> )           
        }
    </ul> 
 */