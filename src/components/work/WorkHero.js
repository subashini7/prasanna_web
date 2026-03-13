import React from 'react';
import styled from '@emotion/styled';

const Hero = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding-bottom: 40px;
  margin-bottom: 16px;
`;

const TitleBlock = styled('div')`
  h2 {
    margin: 0 0 10px;
    font-size: 32px;
    line-height: 1.5;
    font-weight: 500;
    border-left: 2px solid #22d398;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.heading};
  }

  p {
    margin: 16px 0px 0px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.625;
    word-spacing: 0.2rem;
    text-align: justify;
  }
`;

const ImageFrame = styled('div')`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0;
    object-fit: contain;
  }
`;

export default function WorkHero({ title = 'Work', subtitle, imageUrl, imageAlt = '' }) {
  return (
    <Hero>
      <TitleBlock>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </TitleBlock>
      {imageUrl ? (
        <ImageFrame>
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </ImageFrame>
      ) : null}
    </Hero>
  );
}

