


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
    <div>
      <h2 className='checkLogin'>{registration ? 'Регестрация' : 'Вход в аккаунт'}</h2>
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Логин'
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Введите пароль'
        />
      </div>
      {registration && (
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Подтвердите пароль'
          />
        </div>
      )}
      <button onClick={registration ? handleRegistration : handleLogin}>
        {registration ? 'Зарегистрироваться' : 'Войти'}
      </button>
      <div>
        <span>
          {registration ? 'Имеете аккаунт?' : 'Не имеете аккаунт?'}{' '}
          <button onClick={toggleRegistration}>
            {registration ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </span>
      </div>
      {logged && (
        <div>
          <h2 style={{ color: 'green' }}>
            Вы успешно {registration ? 'зарегистрировались' : 'авторизовались'}.
          </h2>
          <a><Link to={'/search'} >Перейти к просмотру</Link> Перейти на YouTube</a>
          
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
