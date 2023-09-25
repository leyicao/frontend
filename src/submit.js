// submit.js
import axios from'axios';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { selector } from './ui';


export const SubmitButton = () => {

    const {
        nodes,
        edges,
    } = useStore(selector, shallow);

    const submitFunc = async () => {
        var bodyFormData = new FormData();
        bodyFormData.append('nodes', JSON.stringify(nodes));
        bodyFormData.append('edges', JSON.stringify(edges));

        axios({
            method: "post",
            url: "http://localhost:8000/pipelines/parse",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(({data}) =>{
              //handle success
              alert(Object.entries(data).map(([key, value]) => key + ': ' + value + '\n').join(''))
            }
              
            )
            .catch(function (response) {
              //handle error
              console.log(response);
            });
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={submitFunc}>Submit</button>
        </div>
    );
}
