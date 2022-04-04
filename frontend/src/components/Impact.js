import React, {Fragment, Component} from 'react';
class Impact extends Component
{
    constructor(props){
        super(props);
      }
      componentDidMount() {
        this.numberOfUsers()
        this.approximateNumberOfFemaleUsers()
      }
      componentWillUnmount(){
      
      }

      numberOfUsers() {
          const num_users = 1200
          let count = 0
          let num_users_interval = setInterval(() => {
            count += 50
            if (count === num_users) {
                clearInterval(num_users_interval)
            }
            document.getElementById('total-number').innerHTML = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }, 100)
      }

      approximateNumberOfFemaleUsers()
      {
          const female_users = 700
          let count = 0
          let num_users_interval = setInterval(() => {
            count += 20
            if (count === female_users) {
                clearInterval(num_users_interval)
            }
            document.getElementById('approximate-num').innerHTML = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
          }, 100)
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
                                    <h3 className="card-title"> 
                                    <span id="total-number"></span> + </h3>
                                    <h4 className="card-text"> Approximate number of users served</h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            <span id="approximate-num"></span> +</h3>
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