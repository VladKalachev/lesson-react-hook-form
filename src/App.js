import { useForm } from 'react-hook-form'
import './App.css';

function App() {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Регистрация</h1>
        
        <input 
          ref={register} 
          placeholder="Имя" 
          type="text" 
          name="firstName"
          />

        <input 
          ref={register} 
          placeholder="Фамилия" 
          type="text" 
          name="lastName"
          />

        <input 
          ref={register} 
          placeholder="Возраст" 
          type="text" 
          name="age"
          />

        <select name="gender" ref={register} placeholder="Пол">
          <option value="female">Женский</option>
          <option value="male">Мужской</option>
        </select>

        <input className="submit" type="submit" value="Войти" />
      </form>
    </div>
  );
}

export default App;
