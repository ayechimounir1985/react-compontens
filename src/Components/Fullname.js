import propTypes from 'prop-types'
function Fullname ({name}){
    return(
        <div>
            <h1>My Name is :{name} </h1>
        </div>
    )
}
Fullname.propTypes={
    name: propTypes.string
}
export default Fullname;