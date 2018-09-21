import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/css/App.css';

class FinishedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, chosenBase, chosenSauce, chosenToppings } = this.props;
    const inputStyling = {
      marginTop: 20,
    }

    return (
      <main className="container text-light">
        <h1 className="pizzagram-header-text">
          Your Pizza
        </h1>
        <small className="text-primary">We're not judging...</small>
        <section>
          <h2 className="pizzagram-header-text">Base</h2>
          { Object.keys(chosenBase).length ?
            <ul className="list-group list-group-flush">
              { chosenBase.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "base-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen a pizza base.</p>
          }
        </section>
        <section>
          <h2 className="pizzagram-header-text">Sauce</h2>
          { Object.keys(chosenSauce).length !== 0 ?
            <ul className="list-group list-group-flush">
              { chosenSauce.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "sauce-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen a sauce for your pizza.</p>
          }
        </section>
        <section>
          <h2 className="pizzagram-header-text">Toppings</h2>
          { Object.keys(chosenToppings).length !== 0 ?
            <ul className="list-group list-group-flush">
              { chosenToppings.map((item, index) => {
                return (
                  <li className="list-group-item" key={ "topping-" + index }>{ data.filter(ingredient => ingredient.id === +item).map(object => object.ingredient) }</li>
                )
              }) }
            </ul> : <p className="text-primary">You haven't chosen any toppings for your pizza.</p>
          }
        </section>
        <section>
          <Link to="/options" className="btn btn-primary">&lt; Back</Link>
        </section>
        <section style={inputStyling}>
          <input name="email" type="email" />
          <input name="submit" type="submit" />
        </section>
      </main>
    );
  }
}

export default FinishedPage;
  