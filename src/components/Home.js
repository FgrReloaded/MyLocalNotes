import React from 'react'

export const Home = (props) => {

    return (
        <>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-12 my-4">
                        <h3 className="text-center add-your-text">
                            Add Your Notes Here
                        </h3>
                    </div>
                </div>
                <div className="row" id="scale-2" style={{display: `${props.boxStyle}`}}>
                    <div className="col-8 m-auto">
                        <div className="box text-center">
                            <div className="btn btn-outline-primary m-auto " id="addNotes" onClick={props.hover} >Add Notes</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 m-auto">
                        <form action="#" id="form" style={{display: `${props.formStyle}`}} >
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="validationTextarea">Your Notes</label>
                                <textarea className="form-control" id="validationTextarea" placeholder="Enter Your Notes Here"
                                    rows="8" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tags</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-outline-info">Add Note</button>
                            <button type="reset" className="btn btn-outline-success mx-2">Reset</button>
                            <button className="btn btn-outline-danger float-right" id="cancelNotes" onClick={props.cancelNote}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
