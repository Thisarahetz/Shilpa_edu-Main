import React, {Component} from 'react'
import QR from '../QR.Scanner.comp'
import { FaSearch } from 'react-icons/fa'

export default class View extends Component {
    render() {
        return(
            <div>
                <div className="row mx-0 py-2">
                    <div className="col-7">
                        <h5>Search Student</h5>
                        <form>
                            <div className="form-group">
                                <label>Sudent ID</label>
                                <input type="text" className="form-control" placeholder="Ex: XXXX"/>
                            </div>
                            <button type="submit" className="btn btn-success"><FaSearch/> Find</button>
                        </form>

                        <div className="row mx-0 pt-3">
                            <h6>Student Details</h6>
                        </div>
                    </div>

                    <div className="col-3">
                        <QR/>
                    </div>
                </div>
                <div className="row mx-0 py-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">XXXX</th>
                                <td>Dineth Ekanayaka</td>
                                <td>0763137905</td>
                                <td>54/1, Maha Madagalla, Polpithigama</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}