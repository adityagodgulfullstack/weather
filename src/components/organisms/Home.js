import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../atoms';
import { Search, ForeCast } from '../molecules';
import { getCityFromStates } from "../../utils/baseUtil";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: null
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(value) {
        const { States } = this.props;
        let city = getCityFromStates(States, value);
        this.setState({
            city
        })
    }

    render() {
        const { btn, input, moreInfoBtn } = this.props;
        const { city } = this.state;
        let forecast = city && city.forecast || null;
        return (
            <div>
                <div>
                    <Search {...input} btn={btn} onAction={this.onSearch} />
                </div>
                {forecast && <ForeCast {...forecast[0]} />}
                {city && <Button {...moreInfoBtn} href={{ pathname: `/weather`, city: city }} />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { weather } = state;
    return {
        ...weather
    }
}
export default connect(mapStateToProps)(Home);