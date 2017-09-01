var React = require('react');
var DefaultLayout = require('./layouts/default');

class Error extends React.Component {
  render() {
    <DefaultLayout title={this.props.title}>
        <div>Error {this.props.error.message}</div>
    </DefaultLayout>
  }
}

module.exports = Error;