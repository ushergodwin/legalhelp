import React, {Fragment, Component} from 'react';
class Impact extends Component
{
    constructor(props){
        super(props);
        this.state = {currentCount: 10, approximate: 10, cases: 10, year: this.year()}
      }
      year()
      {
          let dd = new Date();
          return dd.getFullYear() - 1;
      }
      timer() {
        this.setState({
          currentCount: this.totalNumberOfPeople(),
          approximate: this.totalNumberOfPeople(),
          cases: this.totalNumberOfPeople()
        })
        if(this.state.currentCount > 200000) { 
          clearInterval(this.intervalId);
        }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 10);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }

      totalNumberOfPeople()
      {
          return Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
      }

    render(){
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Our Impact</h3>
                            <h5 className="text-muted">
                                We provide access to legal services for a hundred thousands of persons, families, and businesses both large and small, who would otherwise remain underserved.
                            </h5>
                        </div>
                        <div className="col-lg-8">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                    <h3 className="card-title" id="total-number"> { this.state.currentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }</h3>
                                    <h4 className="card-text"> Total Number of People Served</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title" id="approximate-num">{ this.state.approximate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }</h3>
                                        <h4 className="card-text">Approximate number of female users served in {this.state.year}</h4>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title" id="num-of-cases"> { this.state.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }</h3>
                                        <h4 className="card-text">Number of legal cases resolved</h4>

                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Impact;