import { WhiteCard } from '../../components'
import { useBearStore, type bearKey, type increaseBearKey } from '../../stores'

interface Props {
    title: string;
    bearKey: bearKey;
    increaseBearKey: increaseBearKey
}


export const BearsCounter: React.FC<Props> = ({ title, bearKey, increaseBearKey }) => {

    const bears = useBearStore( state => state[bearKey])
    const increase = useBearStore( state => state[increaseBearKey])
    
    return (
        <WhiteCard centered>
            <h2>{ title }</h2>

            <div className="flex flex-col md:flex-row">
            <button onClick={()=> increase(1)} > +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {bears} </span>
            <button onClick={()=> increase(-1)}>-1</button>
            </div>
        </WhiteCard>
  )
}
