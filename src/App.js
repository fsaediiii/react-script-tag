import { useEffect, useState } from "react";
import ScriptTag from "react-script-tag";

function App() {
  const [code, setCode] = useState({});

  const getCode = async () => {
    await fetch("http://localhost:7501/GetJsData")
      .then((response) => response.json())
      .then((data) => setCode(data));
  };

  useEffect(() => {
    getCode();
  }, []);

  return (
    <>
      {code && 
      <ScriptTag type="text/javascript">
        {
        `$( document ).ready(function() {
        ${code.jqueryCode}
        });
        function runJSCode(){${code.jsCode}}`
        }
        </ScriptTag>}
      <h1>Test for running js and jquery in React</h1>
      <p>This is only a sample code !!!!!!!</p>
      <hr/>
      <button onClick={()=>window.runJSCode()}>Get and run js code!</button>
      <button>change route!</button>
    </>
  );
}

export default App;
