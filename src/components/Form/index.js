import React from 'react';
import { useForm } from 'react-hook-form';
import { FormTag } from './styles';

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
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('birthDate', document.getElementById('birthDate').value);
    localStorage.setItem('cpf', document.getElementById('cpf').value);
    localStorage.setItem('cep', document.getElementById('cep').value);
    localStorage.setItem('address', document.getElementById('address').value);
    localStorage.setItem('addressNumber', document.getElementById('numero').value);
    localStorage.setItem('neightborhoood', document.getElementById('neightborhoood').value);
    localStorage.setItem('city', document.getElementById('city').value);
    localStorage.setItem('estado', document.getElementById('estado').value);

    document.cookie = `name=${document.getElementById('name').value}`;
    document.cookie = `birthDate=${document.getElementById('birthDate').value}}`;
    document.cookie = `cpf=${document.getElementById('cpf').value}}`;
    document.cookie = `cep=${document.getElementById('cep').value}}`;
    document.cookie = `address=${document.getElementById('address').value}}`;
    document.cookie = `numero=${document.getElementById('numero').value}}`;
    document.cookie = `neightborhoood=${document.getElementById('neightborhoood').value}}`;
    document.cookie = `city=${document.getElementById('city').value}}`;
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
    <FormTag>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input id="name" type="text" placeholder="First and last name" required="required"/> 
      </label>
      <label>
        Birth Date:
        <input id="birthDate" type="date" required="required"/>
      </label>
      <label>
        CPF:
        <input id="cpf" type="number" placeholder="12345678901" required="required"/>
      </label>
      <label>
        CEP:
        <input id="cep" type="number" placeholder="76543210" required="required" {...register("cep")} onBlur={checkCEP} />
      </label>
      <label>
        Address:
        <input id="address" className="Auth" type="text" {...register("address" )}/>
      </label>
      <label>
        Address Number:
        <input id="addressNumber" type="number" placeholder="000" required="required" {...register("addressNumber" )}/>
      </label>        
      <label>
        Neighborhood:
        <input id="neighborhood" className="Auth" type="text" {...register("neighborhood")}/>
      </label>
      <label>
        City:
        <input id="city" className="Auth" type="text" {...register("city" )}/>
      </label>
      <label>
        State:
        <input id="state" className="Auth" type="text" {...register("uf" )}/>
      </label>
      <button type="submit" onClick={storageData}>Submit</button>
    </form>
    </FormTag>
  );
};

