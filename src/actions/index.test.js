// import nock from 'nock';
// import jest from 'jest';
// import * as actions from './index';

// const expect = require('chai').expect;

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './App';

// // it('renders without crashing', () => {
// //   const div = document.createElement('div');
// //   ReactDOM.render(<App />, div);
// // });

// describe('actions', () => {
//   // afterEach(() => {
//   //   nock.cleanAll()
//   // })

//   beforeEach(() => {
//     global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, Id: '123' }));
//   });

//   it('that should fetch presidents', () => {
//     nock('http://127.0.1:3000/')
//       .get('/api/presidents')
//       .reply(200);

//     const dispatchEntries = [];
//     const dispatch = entry => dispatchEntries.push(entry);

//     const cb = actions.fetchPresidents();
//     cb(dispatch);
//     console.log(dispatchEntries);

//     // const expectedActions = [
//     //   { type: types.FETCH_TODOS_REQUEST },
//     //   { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     // ]
//     // const store = mockStore({ todos: [] })

//     // return store.dispatch(actions.fetchTodos()).then(() => {
//     //   // return of async actions
//     //   expect(store.getActions()).toEqual(expectedActions)
//     // })
//   });
// });
