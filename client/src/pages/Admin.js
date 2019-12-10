import React, { Component } from 'react';



class Admin extends Component {
    state = {
        current_upload: {},
        allLessons: [],
        user: "",

    };

    render() {
        return (
            <div className="text-center mt-5">
                <h2>Welcome Admin!</h2>
                <p>You can upload new trainer files here!</p>
                

                <form>
                    <div className="form-group">
                        <label for="nameInput">Lesson Name:</label>
                        <input type="text" id="inputText" placeholder="Wash Hands"></input>
                    </div>

                    <div className="form-group">
                        <label for="uploadLesson">Upload Lesson Image:  </label>
                        <input type="file" id="inputFile"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                
                

                
            </div>
        )
    }
}

export default Admin;