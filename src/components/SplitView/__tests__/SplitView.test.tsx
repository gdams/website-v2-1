import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import { SplitView, SplitViewLeft, SplitViewRight } from '../index';

describe('SplitView component', () => {
    it('should render correctly', () => {
        const { container } = render(
            <SplitView>
                <SplitViewLeft>
                    <div>Left</div>
                </SplitViewLeft>
                <SplitViewRight>
                    <div>Right</div>
                </SplitViewRight>
            </SplitView>
        );

        expect(container).toMatchSnapshot();
    });
});
