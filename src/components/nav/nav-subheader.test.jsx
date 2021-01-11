import { React } from 'react';
import { render } from '@testing-library/react';
import { findByText } from '@testing-library/dom';
import NavSubheader from './nav-subheader';

describe('describe NavSubheader', () => {
  it('renders children', async () => {
    const setStickySpy = jest.fn();
    const { container } = render(
      <NavSubheader setSticky={setStickySpy} isSticky>
        <div>MOCK_CHILD</div>
      </NavSubheader>
    );
    expect(await findByText(container, 'MOCK_CHILD')).toBeVisible();
  });
});
