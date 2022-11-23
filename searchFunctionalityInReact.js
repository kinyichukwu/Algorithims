
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      word: ''
    };
  }

  componentDidMount() {
//     data being feched from an api and storing it in a state
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }
  render() {
//     we use the filter method to filter off the array to only include items with the searched word
    const filteredMonster = this.state.monsters.filter(
      (monster) => {
        
        return monster.name.toLocaleLowerCase().includes(this.state.word)
      }
    );
    return (
      <div>
        <input
          placeholder="search monster"
          type="search"
          onChange={(event) => {
            let word = event.target.value.toLocaleLowerCase();

            


            

            this.setState( () => {
              return { word}
            })
          }}
        />

        {filteredMonster.map((x) => {
          return <h1 key={x.id}>{x.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;

