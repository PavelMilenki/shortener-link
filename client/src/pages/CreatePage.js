import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [link, setLink] = useState('');

  useEffect(() => {
    window.M.updateTextFields()
  }, []);

  const pressHandler = async () => {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        });
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
  };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            pressHandler();
        }
    };


  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Enter link"
            id="link"
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={onKeyPress}/>
          <label htmlFor="link">Enter link</label>
            <button
                className="btn yellow darken-4"
                style={{marginRight: 10}}
                onClick={()=>{pressHandler()}}>
                Create
            </button>
        </div>
      </div>
    </div>
  )
};
