import { BearDisplay } from './BearDisplay';
import { BearsCounter } from './BearsCounter';


export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BearsCounter title='Osos Negros' bearKey='blackBears' increaseBearKey='increaseBlackBears' />
        <BearsCounter title='Osos Polares' bearKey='polarBears' increaseBearKey='increasePolarBears' />
        <BearsCounter title='Osos Pandas' bearKey='pandaBears' increaseBearKey='increasePandaBears' />
        <BearDisplay />
      </div>

    </>
  );
};