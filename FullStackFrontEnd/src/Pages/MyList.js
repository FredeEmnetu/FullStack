import React, {Component} from 'react'

class MyList extends Component{
    render(){
        return(
            <>  
                <div>
                     <textarea name="list" rows="4" cols="50">
                         Your Wishlist
                     </textarea>

                </div>
               
            </>
        );
    }
}
export default MyList;