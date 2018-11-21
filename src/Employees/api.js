const EMPLOYEEAPI = "/api/employees/";
const EMPLOYEEJOBS = EMPLOYEEAPI + "jobs";

export async function deleteEmployee(input) {
    console.log(input);
    let address = EMPLOYEEAPI + input.toString();
    console.log(address)
    return fetch(address, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    })
    // .then(resp => {return ValidateHTTPStatus(resp)})
}

export async function getJobsFromEmployee(input) {
    return fetch(EMPLOYEEJOBS, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({...input})
    })
    .then(resp => {return ValidateHTTPStatus(resp)})
}

export async function getEmployees() {
    return fetch(EMPLOYEEAPI)
    .then(resp => {return ValidateHTTPStatus(resp)});
}

export async function createEmployee(input) {
    return fetch(EMPLOYEEAPI, {
        method: "POST",
        headers: new Headers({
            "Content-Type" : "application/json"
        }),
        body: JSON.stringify({...input})
    })
    .then(resp => {return ValidateHTTPStatus(resp)});
}

function ValidateHTTPStatus(resp) {
    if (!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
                let err = {errorMessage : data.message};
                throw err;
            });
        } else {
            let err = {errorMessage: "Server is not responding!"}
            throw err;
        }
    }
    return resp.json();
}