import logo from './logo.svg';
import './App.css';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        
        <input placeholder="Имя" type="text" name="firstName" />

        <input placeholder="Фамилия" type="text" name="lastName" />

        <input placeholder="Возраст" type="text" name="age" />

        <input placeholder="Пол" type="text" name="gender" />
       
        <input className="submit" type="submit" value="Войти" />
      </form>
    </div>
  );
}

export default App;
