import { useShallow } from 'zustand/react/shallow'
import { WhiteCard } from '../../components'
import { useBearStore } from '../../stores'

export const BearDisplay = () => {

    const bears = useBearStore(useShallow(state => state.bears))
    const doNothing = useBearStore(state => state.doNothing)
    const addBear = useBearStore(state => state.addBear)
    const clearBears = useBearStore(state => state.clearBears)

    return (
        <WhiteCard>
            <h2>Osos</h2>
            <button className='mt-2' onClick={doNothing}>Hacer nada</button>
            <button className='mt-2' onClick={addBear}>Agregar oso</button>
            <button className='mt-2' onClick={clearBears}>Borrar osos</button>

            <pre>
                {JSON.stringify(bears, null, 2)}
            </pre>
        </WhiteCard>
    )
}
