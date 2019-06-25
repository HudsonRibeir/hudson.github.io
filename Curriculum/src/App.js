import React, { Component } from 'react';
import './css/App.css';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import Export from './components/export';
import 'bootstrap/dist/css/bootstrap.css';
import content from './content/title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'BR',
      data: content
    };
  }

  componentDidMount() {
    this.state.data.filter((e) => e.key == this.state.language)
      .map(e => e.value)
      .map((item, i) => {
        document.title = item.name;
      });
  }

  setLanguage(language) {
    this.setState({
      language: language
    });
  }

  render() {
    return (
      <div className="App">
        <div id="overallPage" className="Page">
          <header className="App-header">
            <Content language={this.state.language} />
            <Sidebar language={this.state.language} />
          </header>
        </div>
        <div className="optionButtons">
          <button className="btn btn-info" onClick={() => this.setLanguage('BR')}>PT-BR</button>
          <button className="btn btn-info" onClick={() => this.setLanguage('EN')}>ENG</button>
          <Export>
          </Export>
        </div>
      </div>
    );
  }
}

export default App;
