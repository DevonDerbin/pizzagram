import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import '../../styles/css/List.css';
import '../../styles/css/App.css';
// import axios from "../axios";
import LoadingSpinner  from './LoadingSpinner';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            choices : {
                [this.props.option]: [],
            }
        }
        this.relevantOptions = this.relevantOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount () {
        let { data } = this.props;
        data.length ? 
            this.setState({
                loading: false,
            }) : null;
    };

    handleChange(e) {
        if (e.target.checked) {
            this.setState({
                choices: {
                    ...this.state.choices,
                    [this.props.option]: [
                        ...this.state.choices[this.props.option],
                        e.target.id
                    ]
                }
            })
        } else {
            let newState = {...this.state}
            let changedChoices = newState.choices[this.props.option].filter(item => item !== e.target.id)
            this.setState({
                choices: {
                    ...this.state.choices,
                    [this.props.option]: changedChoices
                }
            })
        }
    }

    handleSave() {
        this.props.onSave(this.state.choices);
    }

    relevantOptions(item, option) {
        let isOption = null;
        if ((option === 'sauce') || (option === 'sauces')) {
            isOption = 'isSauce';
        } else if ((option === 'bases') || (option === 'bases')) {
            isOption = 'isBase';
        } else if ((option === 'toppings') || (option === 'topping')) {
            isOption = 'isTopping';
        } else {
            return false;
        }
        return item[isOption];
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { data, option } = this.props;
        const relevantOptions = data.filter(item => this.relevantOptions(item, option));

        let content;

        if (data) {
            content = <LoadingSpinner />;
          } else { content = 
            <ul className="list-group list-group-flush">
                <fieldset>
                { relevantOptions.length ? (
                    Object.values(relevantOptions).map(item => (
                        <li className="list-group-item" key={option + "-" + item.id}>
                            <input id={item.id} name="ingredients" type="checkbox" onChange={ (e) => this.handleChange(e) } />
                            <label htmlFor={item.id}>
                            {item.ingredient}
                            </label>
                        </li>
                    ))
                ) : <LoadingSpinner />
                }
                </fieldset>
                <Link className="btn btn-primary" to="/options">Back</Link>
                <Button onClick={ this.handleSave } buttonText="Save Choices" colourTheme="success"></Button>
            </ul>
          }

        return (
            <div>
                {content}
            </div>
        )
    }
};

export default List;