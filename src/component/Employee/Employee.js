import React from 'react';
import './Employee.css';

const Employee = (props) => {
    // console.log(props);
    const {salary,img,age,name,gender,phone,email} = props.employee;
    return (
        <div className="employee">
            <img className="cart-img" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Gender: {gender} <br /> <br />
            Age: {age}<br /> <br />
            Salary: {salary} <br /> <br />
            Phone: {phone} <br /> <br />
            <small>E-mail: {email}</small>
            </h4>
            
            <button 
            onClick={() => props.handleAddToCart(props.employee)}
            className="hire-btn">Hire</button>
        </div>
    );
};

export default Employee;