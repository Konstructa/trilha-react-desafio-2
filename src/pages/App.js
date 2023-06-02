
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const data  = 
    await api.get(`repos/${currentRepo}`)
    .catch(e => console.log('Erro na api', e.message))

    if(data?.data.id){

      const isExist = repos?.find(repo => repo.id === data.data.id);

      if(!isExist){
        setRepos(prev => [...prev, data.data]);
        setCurrentRepo('')
        return
      }
    }  else {
      console.log('Não encontrado')
      console.log('Repetido')
    }

  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    const isExist = repos?.find(repo => repo.id === id);

    if(isExist){
      setRepos((prev) => {
        const result = [...prev];
        result.splice(prev.indexOf(id), 1
        )
        return result
      });
      return
    }
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos?.length ? repos.map(repo => 
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={repo.id}
      />) : <h3>Nenhum repositório encontrado</h3>}
    </Container>
  );
}

export default App;
