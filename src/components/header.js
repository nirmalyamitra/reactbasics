import React from 'react';

const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear();
}
const user = () =>{
    firstname= 'Nirmalya',
    lastname= 'Mitra',
    age= '27'
}

const Header = () => {
    return(
        <div> 
            The Year is {getYear()}
        </div>
    )
}
export default Header;

