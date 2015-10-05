var React = require('react');
require('../scss/main.scss');

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hihi">
                <h3>I am h3</h3>
            </div>
        );
    }
}

React.render(<Test />, document.getElementById('root'));

var $ = require('jquery');
console.log($("#root"));
