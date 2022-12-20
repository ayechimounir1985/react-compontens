import propTypes from 'prop-types'


function Adresse ({Adress}){

    return(
        <div>
            <h2>adresse : {Adress}</h2>
        </div>
    )
}
Adresse.propTypes={
    Adress: propTypes.string
}
export default Adresse;