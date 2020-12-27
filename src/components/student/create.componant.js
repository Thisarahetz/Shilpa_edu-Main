import React, {Component} from 'react'
import { FaPlus } from 'react-icons/fa'
// import ScrollArea from 'react-scrollbar'

export default class Create extends Component {
    render() {
        return(
            <div className="row m-0">
                <div className="col-5 full-screen-fluid overflow-auto py-2" >
                    <h5>Student Registration</h5>
                    <form>
                        <div className="form-group">
                            <label>Student Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <lable>Phone</lable>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <lable>Email</lable>
                            <input type="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <lable>Address</lable>
                            <input type="text" className="form-control" placeholder="Post Box"/>
                            <input type="text" className="form-control mt-1" placeholder="Street"/>
                            <input type="text" className="form-control mt-1" placeholder=""/>
                            <input type="text" className="form-control mt-1" placeholder="City"/>
                        </div>

                        <div className="form-group">
                            <lable>Date of Birth</lable>
                            <input type="date" className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <lable>Grade</lable>
                            <select className="form-control">
                                <option>12</option>
                                <option>13</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <lable>Profile Picture</lable>
                            <input type="file" className="form-control-file"/>
                        </div>

                        <button type="submit" className="btn btn-success"><FaPlus/> Register</button>
                    </form>
                </div>
                <div className="col-5">

                </div>
            </div>
        );
    }
}