import fetchMock from 'fetch-mock';
import * as actions from './index';

const buildDispatch = entries => item => entries.push(item);

describe('actions', () => {
  beforeEach(() => {
    fetchMock.reset().restore();
  });

  it('that should fetch presidents', (done) => {
    // mock out the call to global.fetch
    const presidents = [{ number: 1, president: 'George Washington' }, { number: 2, president: 'John Adams' }, { number: 3, president: 'Thomas Jefferson' }];
    fetchMock.getOnce('/api/presidents', presidents);

    // capture the dispaches that get called
    const dispatchEntries = [];
    const dispatch = buildDispatch(dispatchEntries);

    // call the action and check that actions were created correctly
    return actions.fetchPresidents()(dispatch)
      .then(() => {
        expect(dispatchEntries.length).toEqual(3);

        expect(dispatchEntries[0].type).toBe('FETCHED_PRESIDENTS_STATUS');
        expect(dispatchEntries[0].payload).toBe('LOADING');

        expect(dispatchEntries[1].type).toBe('FETCHED_PRESIDENTS');
        expect(dispatchEntries[1].payload[0].number).toBe(1);
        expect(dispatchEntries[1].payload[0].president).toEqual('George Washington');
        expect(dispatchEntries[1].payload[1].number).toBe(2);
        expect(dispatchEntries[1].payload[1].president).toEqual('John Adams');
        expect(dispatchEntries[1].payload[2].number).toBe(3);
        expect(dispatchEntries[1].payload[2].president).toEqual('Thomas Jefferson');

        expect(dispatchEntries[2].type).toBe('FETCHED_PRESIDENTS_STATUS');
        expect(dispatchEntries[2].payload).toBe('DONE');
        done();
      })
      .catch((err) => {
        console.error(err);
        done(err);
      });
  });

  it('that should fetch a presidents', (done) => {
    const president = {
      number: 15,
      president: 'James Buchanan',
      birth_year: 1791,
      death_year: 1868,
      took_office: '1857-03-04',
      left_office: '1861-03-04',
      party: 'Democratic',
      image: '/images/presidents/15.jpg',
    };
    fetchMock.getOnce('/api/presidents/15', president);

    // capture the dispaches that get called
    const dispatchEntries = [];
    const dispatch = buildDispatch(dispatchEntries);

    // call the action and check that actions were created correctly
    const presidentNumber = 15;
    return actions.fetchPresident(presidentNumber)(dispatch)
      .then(() => {
        expect(dispatchEntries.length).toEqual(1);

        expect(dispatchEntries[0].type).toBe('FETCHED_PRESIDENT');
        expect(dispatchEntries[0].payload.number).toBe(15);
        expect(dispatchEntries[0].payload.president).toBe('James Buchanan');
        expect(dispatchEntries[0].payload.birth_year).toBe(1791);
        expect(dispatchEntries[0].payload.death_year).toBe(1868);
        expect(dispatchEntries[0].payload.took_office).toBe('1857-03-04');
        expect(dispatchEntries[0].payload.left_office).toBe('1861-03-04');
        expect(dispatchEntries[0].payload.party).toBe('Democratic');
        expect(dispatchEntries[0].payload.image).toBe('/images/presidents/15.jpg');
        done();
      })
      .catch((err) => {
        console.error(err);
        done(err);
      });
  });
});
