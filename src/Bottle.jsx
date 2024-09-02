import './assets/bottle.css'

const Bottle = ({bottle}) => {
    
    const {name,img,id} = bottle;
    return (
        <div className="bottle-container">
            <h2>Name: {name} </h2>
            <img src={img} alt="" />
            <h4>id: {id}</h4>
        </div>
    );
};

export default Bottle;