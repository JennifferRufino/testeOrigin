export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/dados');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao obter os dados da API!');
    }
  };
  