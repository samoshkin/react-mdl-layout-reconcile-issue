import React from 'react';
import { render } from 'react-dom';
import { Layout, Header, HeaderRow, Button } from 'react-mdl';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFooterVisible: true,
      isHeaderRowVisible: true
    };
  }

  toggleFooter = () => {
    this.setState({
      isFooterVisible: false
    })
  }

  toggleHeaderRow = () => {
    this.setState({
      isHeaderRowVisible: false
    })
  }

  renderHeader(){
    const headerRow = (
      <HeaderRow>
        <div>Header Row</div>
      </HeaderRow>
    );

    return (
      <Header title="Header">
        {this.state.isHeaderRowVisible && headerRow}
      </Header>
    );
  }

  renderFooter(){
    if (!this.state.isFooterVisible) return null;

    return (
      <div className="Layout-footer">
        <Button onClick={this.toggleFooter}>Hide Footer</Button>
        <Button onClick={this.toggleHeaderRow}>Hide Header Row</Button>
      </div>
    );
  }

  render(){
    return (
      <Layout fixedHeader>
        {this.renderHeader()}
        {this.renderFooter()}
      </Layout>
    );
  }
}

render(<App />, document.getElementById('root'));
