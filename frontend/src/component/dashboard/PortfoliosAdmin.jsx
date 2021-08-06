import React, { useEffect, useState } from 'react'
import { get, post } from '../../services/HttpClient'
import PortfolioBody from './PortfolioBody'
import PortfolioHeader from './PortfolioHeader'

export default function PortfoliosAdmin() {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
       get('getportfolios').then(res => setPortfolios(res));
    }, [])

    const handleCallback = async (portfolio) =>{
        await post(`deleteportfolio/${portfolio.id}`).then(res => console.log(res))              
        setPortfolios(portfolios.filter((item) => item.id !== portfolio.id));
        console.log(portfolios);
    }
    

    const getPortfolios = portfolios.map((portfolio , index) => <PortfolioBody portfolio={portfolio} handleCallback={handleCallback}/>)
    
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header"><i className="fa fa-align-justify" /> PORTFOLIOS</div>
                        <div className="card-body">
                            <table className="table table-responsive-sm table-bordered table-striped table-sm">
                                <PortfolioHeader/>
                                {getPortfolios}
                            </table>
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
