import React from 'react'

function Add_transaction() {

    return (

        <div className="trans">
            <h3> Add New Transaction </h3>
            <hr />

            <form>
          
                <label>
                    Enter Description <br/>
                    <input type = "text" aria-required/> <br/>
                </label>

                <label>
                    Enter Amount <br />
                    <input type = "number" aria-required/> <br/>
                </label>

                <input type="submit" value = "Add Transaction" />
          
            </form>

        </div>
    );
}

export default Add_transaction;