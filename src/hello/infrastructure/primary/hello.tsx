import { useContext } from 'react';
import AppContext from '../../../config/AppContext';
import One from '../../domain/One';

const Hello = () => {
  const { one } = useContext(AppContext)
  const oneService: One = one;
  
  return <div> { oneService.hello() } </div>;
};

export default Hello;