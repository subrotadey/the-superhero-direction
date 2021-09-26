import React, { useEffect, useState } from 'react';
import Add from '../Add/Add';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees,setEmployees] = useState([]);

    const [hire, setHire] = useState([]);


    useEffect(() =>{
        fetch('./employee.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    const handleAddToCart = (employee) => {
        const newHire = [...hire,employee]
        setHire(newHire);
    }

    return (
        <div className="employees-container">
            <div className="employee-container">
                {
                    employees.map(employee => <Employee 
                        key = {employee.id}
                        employee = {employee}
                        handleAddToCart = {handleAddToCart}
                        ></Employee>)
                }
            </div>
            <div className="cart-container">
                <Add hire={hire}></Add>
            </div>
        </div>
    );
};

export default Employees;