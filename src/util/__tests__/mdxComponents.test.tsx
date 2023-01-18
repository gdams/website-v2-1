import { mdxComponents } from '../mdxComponents';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('mdxComponents', () => {
    it('small renders correctly', () => {
        const { container } = render(mdxComponents.Small({ children: 'test' }));
        expect(container).toMatchSnapshot();
    });

    it('tick renders correctly', () => {
        const { container } = render(mdxComponents.Tick());
        expect(container).toMatchSnapshot();
    });

    it('cross renders correctly', () => {
        const { container } = render(mdxComponents.Cross());
        expect(container).toMatchSnapshot();
    });

    it('collapsible renders correctly', () => {
        const { container } = render(mdxComponents.Collapsible({ children: 'test' }));
        expect(container).toMatchSnapshot();
    });

    it('collapsible renders correctly - with title', () => {
        const { container } = render(mdxComponents.Collapsible({ title: 'test', children: 'test' }));
        expect(container).toMatchSnapshot();
    });

    it('class renders correctly', () => {
        const { container } = render(mdxComponents.Class({ name: 'test', children: 'test' }));
        expect(container).toMatchSnapshot();
    });
});
