import React from 'react';

const EmployeeConfirmation = (props) => {
  return (
    <div class="card card-scroll">
        <div class="card-body">
            <h4 class="card-title">{props.currentEmployee.firstname + ' ' + props.currentEmployee.lastname}</h4>
            <h6 class="card-subtitle mb-2">Employee's Tasks Queue</h6>
            {
                props.jobs.map(job => {
                    return (
                        <div>
                            <p className="card-text closer-p">
                              <i className="el-icon-delete" data-toggle="modal" data-target="#deleteJobCenterModal"/>
                                {job.jobTitle}
                            </p>

                            <div class="modal fade" id="deleteJobCenterModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content modal-content-confirm">

                                  <div class="modal-header modal-header-confirm">
                                    <h4 class="modal-title" id="ModalCenterTitle">This will delete this job from this employee. Continue?</h4>
                                  </div>

                                  <div class="modal-footer modal-footer-confirm">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-confirmation" data-dismiss="modal" onClick={() => props.delete(job.id, props.currentEmployee.id)}>OK</button>
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
};


export default EmployeeConfirmation;