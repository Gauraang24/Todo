import React from 'react'

const List = (props) => {
    return (
        <>
            <div className='List'>
                <p>{props.name}</p>
                <button onClick={()=>{
                    props.delete(props.id)
                }}>-</button>
            </div>
        </>
    )
}

export default List
