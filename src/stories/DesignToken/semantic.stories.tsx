import React from 'react';
import { Meta } from '@storybook/react';

export default {
  title: 'Design Token/Semantic Colors',
  parameters: {
    docs: {
      description: {
        component: '라이트모드 및 다크모드에서 사용하는 시맨틱 컬러를 정의했습니다. Colors 스케일에 포함된 색상을 참조했습니다.',
      },
    },
  },
} as Meta;

const SemanticColorBlock = ({ label, color }: { label: string; color: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <div style={{ width: '80px', height: '40px', backgroundColor: color, borderRadius: '4px', marginBottom: '8px' }}></div>
    <p style={{ fontSize: '14px', fontWeight: '500' }}>{label}</p>
    <p style={{ fontSize: '12px', color: '#666' }}>{color}</p>
  </div>
);

export const SemanticColors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginBottom: '10px' }}>Background</h2>

      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>light</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'black',
          marginTop: '10px',
        }}
      >
        <SemanticColorBlock label="background gray-01" color="#F5F5F5" />
        <SemanticColorBlock label="background-elevated white" color="#FFFFFF" />
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>dark</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'black',
          marginTop: '10px',
        }}
      >
        <SemanticColorBlock label="background gray-07" color="#28262B" />
        <SemanticColorBlock label="background-elevated gray-06" color="#5C595E" />
      </div>
    </section>

    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginBottom: '10px' }}>Base</h2>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>light</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', color: 'black' }}>
        <SemanticColorBlock label="primary gray-08" color="#333036" />
        <SemanticColorBlock label="secondary gray-06" color="#5C595E" />
        <SemanticColorBlock label="tertiary gray-04" color="#ADACAF" />
        <SemanticColorBlock label="muted gray-03" color="#D6D6D7" />
        <SemanticColorBlock label="faint gray-02" color="#EBEAEB" />
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>dark</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', color: 'black' }}>
        <SemanticColorBlock label="primary white" color="#FFFFFF" />
        <SemanticColorBlock label="secondary gray-02" color="#EBEAEB" />
        <SemanticColorBlock label="tertiary gray-04" color="#ADACAF" />
        <SemanticColorBlock label="muted gray-05" color="#858386" />
        <SemanticColorBlock label="faint gray-06" color="#5C595E" />
      </div>
    </section>

    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginBottom: '10px' }}>Accent</h2>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>light</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', color: 'black' }}>
        <SemanticColorBlock label="primary purple-04" color="#8D76FF" />
        <SemanticColorBlock label="primary-hover purple-05" color="#7C62FF" />
        <SemanticColorBlock label="secondary green-04" color="#4ADB8D" />
        <SemanticColorBlock label="secondary-light green-02" color="#8CE7B6" />
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>dark</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', color: 'black' }}>
        <SemanticColorBlock label="primary purple-04" color="#8D76FF" />
        <SemanticColorBlock label="primary-hover purple-05" color="#7C62FF" />
        <SemanticColorBlock label="secondary green-04" color="#4ADB8D" />
        <SemanticColorBlock label="secondary-light green-02" color="#8CE7B6" />
      </div>
    </section>

    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'black', marginBottom: '10px' }}>System</h2>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'black' }}>light / dark</div>
      <div>
        <SemanticColorBlock label="error red-01" color="#FF4D4F" />
      </div>
    </section>
  </div>
);
