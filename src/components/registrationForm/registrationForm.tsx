


import React, { useState } from 'react';
import './registrationForm.css';
import { Link } from 'react-router-dom';


const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [registration, setRegistration] = useState(true);
  const [error, setError] = useState('');

  const handleRegistration = () => {
    if (!/^[a-zA-Z0-9]+$/.test(username) || !/^[a-zA-Z0-9]+$/.test(password)) {
      setError('Use english letter.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password not same.');
      return;
    }

    const hashedPassword = hashPassword(password);
    const user = { username, password: hashedPassword };
    sessionStorage.setItem('user', JSON.stringify(user));
    setLogged(true);
    setError('');
  };

  const handleLogin = () => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === hashPassword(password)) {
        setLogged(true);
        setError('');
      } else {
        setError('Wrong login');
      }
    } else {
      setError('Login not found');
    }
  };

  const toggleRegistration = () => {
    setRegistration(!registration);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const hashPassword = (password: string) => {
    return password;
  };

  return (
    <div className='mainDiv'>
      <h2 className='checkLogin'>{registration ? 'Регестрация' : 'Вход в аккаунт'}</h2>
      {error && <p className="errorStyle">{error}</p>}
      <div>
        <input className='inputStyle'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Логин'
        />
      </div>
      <div>
        <input className='inputStyle'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Введите пароль'
        />
      </div>
      {registration && (
        <div>
          <input className='inputStyle'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Подтвердите пароль'
          />
        </div>
      )}
      <button className='buttonRegistrationStyle' onClick={registration ? handleRegistration : handleLogin}>
        {registration ? 'Зарегистрироваться' : 'Войти'}
      </button>
      <div className='divOfFinish'>
        <span className='haveLogin'>
          {registration ? 'Имеете аккаунт?' : 'Не имеете аккаунт?'}{' '}
          <button className='buttonEnter' onClick={toggleRegistration} >
            {registration ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </span>
      </div>
      {logged && (
        <div >
          <h2 className='loggedStyle'>
            Вы успешно {registration ? 'зарегистрировались' : 'авторизовались'}.
          </h2>
          <button className='buttonEnter'><Link to={'/search'} >Перейти к просмотру</Link></button>
          
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
