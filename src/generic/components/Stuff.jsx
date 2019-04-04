import React from 'react';
import Button from '@material-ui/core/Button';

const Stuff = () => {
    return (<div className='flex-container-2'>
        <div className='flex-container-2-3'>
            <div id='welcome-box'>
                <h3>Welcome to NC Knews</h3>
                <p>Create an account to save your recommendations and further customize your home feed.</p>
                {/* <button>CREATE AN ACCOUNT</button> */}
                <Button variant="outlined" >
                    CREATE AN ACCOUNT
                </Button>
            </div>
        </div>
    </div>)

}
export default Stuff;