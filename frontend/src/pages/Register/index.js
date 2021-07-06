import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import useForm from '../../Hooks/useForm';

import './styles.css';

export default function Register() {
  const [form, setForm] = useForm({name: '', email: '', whatsapp: '', city: '', uf: ''})
  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const {data} = await api.post('ongs', form);
      alert(`Seu E-mail de acesso: ${data.email}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a ecnontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            name="name"
            placeholder="Nome da ONG"
            value={form.name}
            onChange={setForm}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={setForm}
          />
          <input
            name="whatsapp"
            placeholder="Whatsapp"
            value={form.whatsapp}
            onChange={setForm}
          />

          <div className="input-group">
            <input
              name="city"
              placeholder="Cidade"
              value={form.city}
              onChange={setForm}
            />
            <input
              name="uf"
              placeholder="UF"
              style={{ width: 80 }}
              value={form.uf}
              onChange={setForm}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}