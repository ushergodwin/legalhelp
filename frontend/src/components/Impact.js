import React, {Fragment, Component} from 'react';
class Impact extends Component
{
    constructor(props){
        super(props);
        this.state = {currentCount: 10, approximate: 10, cases: 10}
      }
      timer() {
        let result = this.totalNumberOfPeople()
        this.setState({
          currentCount: result.currentCount,
          approximate: result.approximate,
          cases: result.cases
        })
        if(this.state.currentCount < 200) { 
          clearInterval(this.intervalId);
        }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }

      totalNumberOfPeople()
      {
          return {
              currentCount: 1200,
              approximate: 700,
              cases: 1200
          }
      }

    render(){
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Our Impact</h3>
                            <h5 className="text-muted">
                                We are committed to providing access to Justice to all people and ensuring that every
                                person has equal access to Justice.
                            </h5>
                        </div>
                        <div className="col-lg-8">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                    <h3 className="card-title" id="total-number"> { this.state.currentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } + </h3>
                                    <h4 className="card-text"> Approximate number of users served</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title" id="approximate-num">{ this.state.approximate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } +</h3>
                                        <h4 className="card-text">Approximate propotion of female users served </h4>

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