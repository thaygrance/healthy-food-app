import React from 'react';
import { useForm } from 'react-hook-form';
import { FormTag, MainTag } from './styles';

export function Form() {

  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  function storageData (e){
    localStorage.setItem('nome', document.getElementById('nome').value);
    localStorage.setItem('dataNascimento', document.getElementById('dataNascimento').value);
    localStorage.setItem('cpf', document.getElementById('cpf').value);
    localStorage.setItem('cep', document.getElementById('cep').value);
    localStorage.setItem('rua', document.getElementById('rua').value);
    localStorage.setItem('numero', document.getElementById('numero').value);
    localStorage.setItem('bairro', document.getElementById('bairro').value);
    localStorage.setItem('cidade', document.getElementById('cidade').value);
    localStorage.setItem('estado', document.getElementById('estado').value);

    document.cookie = `nome=${document.getElementById('nome').value}`;
    document.cookie = `dataNascimento=${document.getElementById('dataNascimento').value}}`;
    document.cookie = `cpf=${document.getElementById('cpf').value}}`;
    document.cookie = `cep=${document.getElementById('cep').value}}`;
    document.cookie = `rua=${document.getElementById('rua').value}}`;
    document.cookie = `numero=${document.getElementById('numero').value}}`;
    document.cookie = `bairro=${document.getElementById('bairro').value}}`;
    document.cookie = `cidade=${document.getElementById('cidade').value}}`;
    document.cookie = `estado=${document.getElementById('estado').value}}`;
  } 

  function checkCookie(){
    console.log(document.cookie)
  }
  checkCookie()

  function checkStorage(){
    console.log(localStorage.getItem('cpf'))
  }
  checkStorage()

  return (
    <MainTag>
    <FormTag>
    <h4>REGISTRE-SE</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input id="nome" type="text" placeholder="Nome completo" required="required"/> <br/>
      </label>
      <label>
        Data de Nascimento:
        <input id="dataNascimento" type="date" required="required"/><br/>
      </label>
      <label>
        CPF:
        <input id="cpf" type="number" placeholder="12345678901" required="required"/><br/>
      </label>
      <label>
        CEP:
        <input id="cep" type="number" placeholder="76543210" required="required" {...register("cep")} onBlur={checkCEP} /><br/>
      </label>
      <label>
        Rua:
        <input id="rua" className="Auth" type="text" {...register("address" )}/><br/>
      </label>
      <label>
        Número:
        <input id="numero" type="number" placeholder="000" required="required" {...register("addressNumber" )}/><br/>
      </label>
      <label>
        Bairro:
        <input id="bairro" className="Auth" type="text" {...register("neighborhood" )}/><br/>
      </label>
      <label>
        Cidade:
        <input id="cidade" className="Auth" type="text" {...register("city" )}/><br/>
      </label>
      <label>
        Estado:
        <input id="estado" className="Auth" type="text" {...register("uf" )}/><br/>
      </label>
      <button type="submit" onClick={storageData}>Enviar</button>
    </form>
    </FormTag>
    </MainTag>
  );
};

