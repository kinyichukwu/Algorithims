const App = () => {
  const [word, setValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const onSearchChange = (event) => {
    let word = event.target.value.toLocaleLowerCase();

    setValue(word);
  };

  

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(word);
  });

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((users) => setMonsters(users)
          );
  }, [filteredMonster]);
  
  return (
    <div className="App">
      <h1 className="App-title">Monster Roledex</h1>
      <SearchBox
        searchProp={onSearchChange}
        placeholder="search monster..."
        className="monster-search-box"
      />

      <CardList monster={filteredMonster} />
    </div>
  );
};
