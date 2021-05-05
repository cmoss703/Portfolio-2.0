import React from 'react';

function Form() {
    return (
        <>
            <h1 className="cool-font text-center">Contact Me</h1>

            <form>

                <div className="mb-3">
                    <label for="fullName" className="form-label">Name</label>
                    <input className="form-control" type="name" id="fullName" placeholder='e.g. "Will Smith"'/>
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input className="form-control" type="email" id="email" placeholder="email@example.com" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Add a message, don't be shy!"></textarea>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>

            </form>
        </>

    )
}



export default Form;