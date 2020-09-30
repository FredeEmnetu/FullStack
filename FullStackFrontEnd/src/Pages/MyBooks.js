import React, {Component} from 'react'
import MyList from './MyList.js'

class MyBooks extends Component {
    render(){
        console.log("helloworld!"+ this.props.info)
        return (
            <>
                <div className="MyBooks">
                    <h1>The Following are your books</h1>
                    <div className="BooksOrResult">
                        <div className="Results">
                            <textarea id="BooksFoundId" name="BooksFound" rows="4" cols="60"/>
                         
                            {this.props.info.map((element, key) => (<p key={key}>{element}</p>))}

                        </div>
                        <MyList />
                    </div>
                </div>     
            </>
        );
    }
}

export default MyBooks;