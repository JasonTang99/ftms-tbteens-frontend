import React from 'react';
// import {MessageBox, Message} from 'element-react'

// const onClick = () => {
//     MessageBox.confirm('This will delete this employee from this job. Continue?', 'Confirmation', {
//       confirmButtonText: 'OK',
//       cancelButtonText: 'Cancel',
//       type: 'warning'
//     }).then(() => {
//       Message({
//         type: 'success',
//         message: 'Deletion completed!'
//       });
//     }).catch(() => {
//       Message({
//         type: 'info',
//         message: 'Deletion cancelled'
//       });
//     });
//   }

const tempEmployees = ["Bob", "Judy", "Monica", "Ross", "Treeger"]

const TaskConfirmation = (props) => {   
    return (
        <div class="card card-scroll">
            <div class="card-body">
                <h5 class="card-title">{props.currentJob.jobTitle}</h5>
                <h6 class="card-subtitle mb-2">Employees on Task</h6>
                {
                    tempEmployees.map(employee => {
                        return (
                            <div>
                                <p className="card-text closer-p">
                                    <i className="el-icon-delete el-icon-left" data-toggle="modal" data-target="#deleteJobCenterModal"></i>
                                    {"                 " + employee}
                                </p>

                                <div class="modal fade" id="deleteJobCenterModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                                  <div class="modal-dialog modal-dialog-centered" role="document">
                                    
                                    <div class="modal-content modal-content-confirm">
                                      
                                      <div class="modal-header modal-header-confirm">
                                        <h4 class="modal-title" id="ModalCenterTitle">This will delete this employee from this job. Continue?</h4>
                                      </div>

                                      <div class="modal-footer modal-footer-confirm">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                                      </div>

                                    </div>

                                  </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskConfirmation;