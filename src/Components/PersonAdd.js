import React from 'react'

const PersonAdd = ({addPerson})=>{
    const onSubmit = (e) => {
        e.preventDefault()
        addPerson({firstName: e.target.first.value, lastName: e.target.last.value})
    }
    return (
        <div>
            <form className="newPersonForm" onSubmit = {onSubmit}>
                <div class="form-group">
                    <label for="first" class="col-sm-2 control-label">First Name</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="first" placeholder="First name" name="first"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="last" class="col-sm-2 control-label">Last Name</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="last" placeholder="Last name" name="last"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8 col-sm-offset-2">
                        <input className="btnAdd" type="submit" value="Add Person" class="btn btn-primary"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonAdd