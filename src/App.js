import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import url from 'url';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const parsedUrl = url.parse(currentUrl, true);
    const { access_token } = parsedUrl.hash
      ? url.parse(`?${parsedUrl.hash.substr(1)}`, true).query
      : parsedUrl.query;

    if (access_token) {
      setAccessToken(access_token);
    }
  }, []);

  const handleCopyString = () => {
    navigator.clipboard.writeText(accessToken)
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#61dafb',
    color: '#282c34',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (

    <div className="App">
      <header className="App-header">

        <div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Access Token:</h1>
            {accessToken && <button style={buttonStyle} onClick={handleCopyString}>Copiar</button>}
          </div>

          {accessToken ? (
            <div>
              
              <p style={{ width: "95vw", padding: "1rem", wordWrap: "break-word" }}>{accessToken}</p>

            </div>
          ) : (
            <p>Aguardando o access token...</p>
          )}
        </div>

      </header>

    </div>
  );
}

export default App;
