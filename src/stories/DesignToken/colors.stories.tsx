import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

export default {
  title: 'Design Token/Colors',
  parameters: {
    docs: {
      description: {
        component: '디자인에 사용된 컬러를 스케일로 표시했습니다. 각 컬러는 Color Token에 참조됩니다.',
      },
    },
  },
} as Meta;

const colorBlockStyle = (color: string) => css`
  width: 4rem;
  height: 4rem;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  background-color: ${color};
`;

const ColorBlock = ({ color, label }: { color: string; label: string }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}
  >
    <div css={colorBlockStyle(color)} style={{ width: '80px', height: '60px' }}></div>
    <p
      css={css`
        font-size: 0.875rem;
        font-weight: 500;
      `}
    >
      {label}
    </p>
    <p
      css={css`
        font-size: 0.75rem;
        color: #6b7280;
      `}
    >
      {color}
    </p>
  </div>
);

export const Colors = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `}
  >
    <section>
      <h2
        css={css`
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: black;
        `}
      >
        Tint
      </h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          color: black;
        `}
      >
        {[
          { label: 'purple-06', color: '#7E16FD' },
          { label: 'purple-05', color: '#9549FF' },
          { label: 'purple-04', color: '#AA6FFF' },
          { label: 'purple-03', color: '#C49BFF' },
          { label: 'purple-02', color: '#DCC4FE' },
          { label: 'purple-01', color: '#F2E7FF' },
          { label: 'green-06', color: '#1BD27D' },
          { label: 'green-05', color: '#0DE781' },
          { label: 'green-04', color: '#25F281' },
          { label: 'green-03', color: '#85F6A9' },
          { label: 'green-02', color: '#BAF9CB' },
          { label: 'green-01', color: '#E2FDEA' },
          { label: 'red-01', color: '#F74F3B' },
          { label: 'blue-01', color: '#00C3FF' },
          { label: 'yellow-01', color: '#FFEB00' },
        ].map((item) => (
          <ColorBlock key={item.label} color={item.color} label={item.label} />
        ))}
      </div>
    </section>

    <section>
      <h2
        css={css`
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: black;
        `}
      >
        Gray
      </h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          color: black;
          margin-bottom: 1rem;
        `}
      >
        {[
          { label: 'black', color: '#000000' },
          { label: 'white', color: '#FFFFFF' },
        ].map((item) => (
          <ColorBlock key={item.label} color={item.color} label={item.label} />
        ))}
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          color: black;
        `}
      >
        {[
          { label: 'gray-08', color: '#333036' },
          { label: 'gray-07', color: '#28262B' },
          { label: 'gray-06', color: '#5C595E' },
          { label: 'gray-05', color: '#858386' },
          { label: 'gray-04', color: '#ADACAF' },
          { label: 'gray-03', color: '#D6D6D7' },
          { label: 'gray-02', color: '#EBEAEB' },
          { label: 'gray-01', color: '#F5F5F5' },
        ].map((item) => (
          <ColorBlock key={item.label} color={item.color} label={item.label} />
        ))}
      </div>
    </section>
  </div>
);
