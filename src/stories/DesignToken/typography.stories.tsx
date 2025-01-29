import { Meta } from '@storybook/react';
import { css } from '@emotion/react';
import { themes } from '../../styles/Theme';
const { typography } = themes.light;

export default {
  title: 'Design Token/Typography',
  parameters: {
    docs: {
      description: {
        component: 'heading 및 body는 특정 컴포넌트를 구분하지 않고 모든 UI에 사용되는 폰트입니다. 폰트 크기는 10px = 1rem으로 계산됩니다.',
      },
    },
  },
} as Meta;

const createTypographyStyle = (type: keyof typeof typography) =>
  css({
    fontSize: typography[type].fontSize,
    lineHeight: typography[type].lineHeight,
    fontWeight: typography[type].fontWeight,
  });

const TypographyBlock = ({ text, style }: { text: string; style: ReturnType<typeof css> }) => (
  <div css={css({ marginBottom: '16px' })}>
    <p css={style}>{text}</p>
  </div>
);

const heading01 = createTypographyStyle('heading01');
const heading02 = createTypographyStyle('heading02');
const heading03 = createTypographyStyle('heading03');
const heading04 = createTypographyStyle('heading04');
const heading05 = createTypographyStyle('heading05');

const body01 = createTypographyStyle('body01');
const body02 = createTypographyStyle('body02');
const body03 = createTypographyStyle('body03');
const body04 = createTypographyStyle('body04');

const paragraph = createTypographyStyle('paragraph');
const badge = createTypographyStyle('badge');

export const Typography = () => (
  <div css={css({ display: 'flex', flexDirection: 'column', gap: '24px', color: 'black' })}>
    <section>
      <h2 css={heading02}>Font Family</h2>
      <TypographyBlock text="Pretendard" style={heading03} />
      <TypographyBlock text="프리텐다드" style={heading03} />
    </section>

    <section>
      <h2 css={heading02}>Headings</h2>
      <TypographyBlock text="Heading 01 24px 2.4rem" style={heading01} />
      <TypographyBlock text="Heading 02 20px 2.0rem" style={heading02} />
      <TypographyBlock text="Heading 03 18px 1.8rem" style={heading03} />
      <TypographyBlock text="Heading 04 16px 1.6rem" style={heading04} />
      <TypographyBlock text="Heading 05 14px 1.4rem" style={heading05} />
    </section>

    <section>
      <h2 css={heading02}>Body Text</h2>
      <TypographyBlock text="Body 01 16px 1.6rem" style={body01} />
      <TypographyBlock text="Body 02 14px 1.4rem" style={body02} />
      <TypographyBlock text="Body 03 12px 1.2rem" style={body03} />
      <TypographyBlock text="Body 04 11px 1.1rem" style={body04} />
    </section>

    <section>
      <h2 css={heading02}>Paragraph</h2>
      <TypographyBlock text="Paragraph 16px 1.6rem (160% line height)" style={paragraph} />
    </section>

    <section>
      <h2 css={heading02}>Badges</h2>
      <TypographyBlock text="Badge 01 14px 1.4rem (120% line height)" style={badge} />
    </section>
  </div>
);
