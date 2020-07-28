import React from 'react'


const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center " style={{ height: '100vh'}}>
            <div className="spinner-border" role="status" style={{width: '6rem', height: '6rem'}}>
                <span className="sr-only">Loading...</span>
            </div>
      </div>
    )
}

export default Spinner
