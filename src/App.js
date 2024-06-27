import './App.css';
import { useEffect, useRef } from 'react';
import iframeResize from 'iframe-resizer/js/iframeResizer';

function App() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) {
      return;
    }
    const iframe = iframeRef.current;
    iframeResize({}, iframe);
    return () => {
      iframe.iFrameResizer.removeListeners();
    };
  }, [iframeRef]);

  return (
    <div className="App">
      <div className="iframe-container">
        <iframe ref={iframeRef} src="http://localhost:3001/4c3c8bd0-74a1-48ac-93d0-fa3ed2206680" sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-forms"></iframe>
      </div>
    </div>
  );
}

export default App;
