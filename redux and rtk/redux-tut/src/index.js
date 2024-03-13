import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./app/Store";
import { Provider } from "react-redux"
import Counter from './components/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Counter/>
        {/* <App /> */}
    </Provider>
);


