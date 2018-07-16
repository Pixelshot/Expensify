import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is the Edit expense page. Editing from {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;