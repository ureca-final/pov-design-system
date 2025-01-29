import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

export default {
  title: 'Design Token/Grid',
  parameters: {
    docs: {
      description: {
        component: '모바일 및 PC 뷰의 페이지 사이즈 및 간격을 정의합니다.',
      },
    },
  },
} as Meta;

const gridContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  color: 'black',
});

const gridBox = (width: string) =>
  css({
    width,
    height: '100px',
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontWeight: 'bold',
  });

export const GridDocumentation = () => (
  <div css={gridContainer}>
    <h1 css={css({ fontSize: '20px' })}>Grid</h1>
    <p>모바일, PC view 페이지 사이즈 및 간격을 정의했습니다.</p>

    <section>
      <h2 css={css({ fontSize: '15px', marginBottom: '10px' })}>Mobile</h2>
      <p css={css({ fontWeight: 'bold' })}>
        min-width <span css={css({ color: 'red' })}>360px</span>
      </p>
      <div css={gridBox('360px')}>360px</div>
      <p>
        max <span css={css({ color: 'red' })}>600px</span>
      </p>
      <div css={gridBox('600px')}>600px</div>
    </section>

    <section>
      <h2 css={css({ fontSize: '15px', marginBottom: '10px' })}>PC</h2>
      <p css={css({ fontWeight: 'bold' })}>
        min-width <span css={css({ color: 'red' })}>1200px</span>
      </p>
      <div css={gridBox('1200px')}>1200px</div>
    </section>
  </div>
);
