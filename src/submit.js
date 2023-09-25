// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { selector } from './ui';

export const SubmitButton = () => {

    const {
        nodes,
        edges,
    } = useStore(selector, shallow);

    const submitFunc = () => {
        console.log('api', nodes, edges)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={submitFunc}>Submit</button>
        </div>
    );
}
