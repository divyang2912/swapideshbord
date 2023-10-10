import React from 'react';
import "./styles.css"
// todo - add prop types
export const When = (props) => {
    const { isLoading,  errMsg, retry, children } = props;
    if (isLoading) {
        return <div className='prLoader'><div class="loader--ripple">
        <div></div>
        <div></div>
      </div></div>;
    }

    if (errMsg) {
        return (
            <div>
                <div className='errMsg'>
                    {errMsg}.
                    {retry ? 'Please click following button to retry' : ''}
                </div>
                {retry ? <div className='btn_div'><button
                className='button'
                    disabled={isLoading}
                    onClick={retry}
                >
                    Fetch Data
                </button></div> : ''
                }
        </div>
        )
    }
    return children;
}