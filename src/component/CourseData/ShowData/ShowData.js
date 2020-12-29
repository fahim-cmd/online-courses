import './showData.css';

const ShowData = (props) => {
 
    const {name,price} = props.course;    

    const handleEnroll = props.handleEnroll;    

    return (
        
        <div className="showData">           
            
            <div>                
                <h5> {name}</h5>
                <p> Price:$ {price}</p>
                <button className="btn btn-secondary" onClick={() => handleEnroll(props.course)} >Enroll Now</button>
            </div>            
        </div>
    );
};

export default ShowData;