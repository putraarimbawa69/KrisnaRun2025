import { render } from 'preact';
import App from './App';
import '@picocss/pico/css/pico.min.css';
import './style.css'; // (jika kamu punya style khusus tambahan)


render(<App />, document.getElementById('app'));

