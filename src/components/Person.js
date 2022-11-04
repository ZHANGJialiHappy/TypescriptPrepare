import PropTypes from "prop-types";
export const Person = ({name, email, age, ismarried, friends}) => {
    return(
        <div>
        <h1>Name: {name}</h1>
        <h1>Name: {email}</h1>
        <h1>Name: {age}</h1>
        <h1>This person {ismarried? "is" : "is not"} married</h1>
        <h1>This person's friends:</h1>
        {friends.map((friend, key)=>(
            <h1>{friend}</h1>
        ))}
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
};