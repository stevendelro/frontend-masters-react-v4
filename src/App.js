import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert('You clicked the title.');
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Kygo" animal="dog" breed="Labrador" />
        <Pet name="Rio" animal="dog" breed="Australian Shepherd" />
        <Pet name="George" animal="tortoise" breed="Pinta Island" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
