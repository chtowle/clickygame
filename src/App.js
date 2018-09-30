import React, { Component } from "react";

const initialState = {
  tiles: [
    {
      color: '#0000cc',
      //img: 'src="/assets/dog1.jpg" alt="dog"',
      clicked: false,
      id: 0,
    },
    {
      color: '#663300',
      clicked: false,
      id: 1,
    },
    {
      color: '#009933',
      clicked: false,
      id: 2,
    },
    {
      color: '#ffff00',
      clicked: false,
      id: 3,
    },
    {
      color: '#cc3300',
      clicked: false,
      id: 4,
    },
    {
      color: '#ff0066',
      clicked: false,
      id: 5,
    },
    {
      color: '#660033',
      clicked: false,
      id: 6,
    },
    {
      color: '#ff00ff',
      clicked: false,
      id: 7,
    },
    {
      color: '#999966',
      clicked: false,
      id: 8,
    },
    {
      color: '#00ffff',
      clicked: false,
      id: 9,
    },
    {
      color: '#99ccff',
      clicked: false,
      id: 10,
    },
    {
      color: '#339966',
      clicked: false,
      id: 11,
    },
  ],
  score: 0,
  topScore: 0,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  resetGame = () => {
    const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false }))
    console.log('TILES', tiles)
    this.setState({ score: 0, tiles })
    console.log('NEW STATE', this.state)
  }

  handleClick = id => {
    let clickedTile = this.state.tiles.find(tile => tile.id === id)

    if (clickedTile.clicked) {
      this.resetGame()
    } else {
      clickedTile.clicked = true

    //Shuffle these around!

     let newTiles = this.state.tiles.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
     .map((a) => a.value)
    

    console.log('NEW TILES', newTiles)

    this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore,
        tiles: newTiles
      })
    }
  }

  render() {
    return (
      <div>
         <div>
           <h1>Pick a Color! But not the same one twice</h1>
     
           <h1>Score: { this.state.score }    Top Score: { this.state.topScore }</h1>
      
        </div>
        <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  }}></div>
          <div
             style={{
             display: 'flex',
             flexWrap: 'wrap',
             justifyContent: 'center',
             width: 1000,
             height: 800 }}>
           {
            this.state.tiles.map(tile => (
             <div
                key={ tile.id }
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'left',
                width: 200,
                height: 200,
                margin: '1em',
                backgroundColor: tile.color,
                color: tile.color,
               // img: 'src="./assets/dog1.jpg" alt="dog"'
              }}
              onClick={ () => this.handleClick(tile.id) }
            >
            </div>
          ))
        }
        </div>
        </div>
    );
  }
}

export default App;