# Redux Lesson 1
*  npm install @reduxjs/toolkit react-redux
*  import {configureStore}
*  declear store as a exported variable and set it or call configureStore() in it.
*  inside configureStore() call a object called reducer 

# Example :

```
 export const store = configureStore({
    reducer : {

    }
  });
```
*  now on index.js import {store} and {Provider}.

# Example :

```
 import store from './app/store';
 import { Provider } from 'react-redux';

```




