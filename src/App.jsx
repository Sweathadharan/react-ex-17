const useStorage = (key) => {
  const setValue = (newValue) => {
    localStorage.setItem(key, newValue);
    sessionStorage.setItem(key, newValue);
  };

  return setValue;
};

const StorageComponent = () => {
  const setInputValue = useStorage('storedValue');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

const App = () => <StorageComponent />;

export default App;