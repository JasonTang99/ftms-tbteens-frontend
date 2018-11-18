import React, { Component } from 'react';
import * as apiCalls from './api';
import CompanyForm from './CompanyForm';
import CompanyList from './CompanyList';
import Loading from '../components/Loading';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            loading: true
        }
        this.addCompany= this.addCompany.bind(this);
    }
    componentWillMount() {
        this.loadCompanies();
    }

    async loadCompanies() {
        let companies= await apiCalls.getCompanies();
        this.setState({companies : companies, loading : false});
    }

    async addCompany(company) {
        let newCompany= await apiCalls.createCompany(company);
        this.setState({companies : [...this.state.companies, newCompany]});
    }

    render() {
        let content;
        if (this.state.loading) {
            content = <Loading/>;
        } else {
            content = <CompanyList companies = {this.state.companies} />;
        }
        return (
            <div className="container">
                <header className="jumbotron bg-purple">
                            <div className="container">
                                <h1 className="display-4">Companies</h1>
                                <hr className="my-4"/>
                                <p>
                                    <button type="button" className="btn btn-submit" data-toggle="modal" data-target="#companyForm">
                                        Add Company
                                    </button> 
                                </p>
                            </div>
                </header>
                
                {content}

                <div className="modal fade" id="companyForm" tabindex="-1" role="dialog" aria-labelledby="createNewCompany" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Adding New Company</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <CompanyForm
                        addCompany = {this.addCompany}
                    />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Companies;