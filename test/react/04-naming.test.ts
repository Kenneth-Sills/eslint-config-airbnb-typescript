import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#naming
 */
runTests(
  'naming',
  ['react'],
  [
    {
      code: 'const reservationItem = <ReservationCard />;',
      ruleName: 'react/jsx-filename-extension',
      expectPass: true,
    },
    {
      code: 'const reservationItem = <Reservation_Card />;',
      ruleName: 'react/jsx-pascal-case',
    },
  ],
);
