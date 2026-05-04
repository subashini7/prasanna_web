import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('section')`
  --timeline-gap: 28px;
  /* Dot center Y: padding-top (2) + dot top (6) + half height (5) */
  --timeline-dot-center: 13px;

  position: relative;
  display: grid;
  gap: var(--timeline-gap);
  padding-left: 18px;
`;

const Item = styled('article')`
  position: relative;
  padding-left: 18px;
  padding-top: 2px;

  /* Segment from this dot’s center to the next dot’s center (no stub above first or below last). */
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: -12px;
    top: var(--timeline-dot-center);
    bottom: calc(-1 * var(--timeline-gap) - var(--timeline-dot-center));
    width: 1px;
    background: rgba(230, 236, 241, 1);
  }
`;

const Dot = styled('span')`
  position: absolute;
  left: -16px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid #22d398;

  ${({ $current }) =>
    $current
      ? `
    background: #22d398;
    border-color: #22d398;
  `
      : ''}
`;

const HeaderRow = styled('header')`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;

const Role = styled('div')`
  display: flex;
  gap: 10px;
  align-items: baseline;
  flex-wrap: wrap;
  min-width: 0;

  a {
    color: ${({ theme }) => theme.colors.link};
    font-weight: 600;
  }

  a:hover {
    opacity: 0.85;
  }

  strong {
    color: ${({ theme }) => theme.colors.link};
    font-weight: 600;
  }
`;

const Divider = styled('span')`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.45;
  transform: translateY(-1px);
`;

const Title = styled('span')`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  font-weight: 500;
`;

const Meta = styled('div')`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  font-size: 13px;
  line-height: 1.4;
  white-space: nowrap;
`;

const Mentors = styled('div')`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-size: 14px;
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.colors.link};
  }
`;

const Summary = styled('p')`
  margin: 16px 0px 0px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.625;
  word-spacing: 0.2rem;
  text-align: justify;
`;

export default function WorkTimeline({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <Wrapper>
      {items.map((item, idx) => {
        const company = item.company ?? '';
        const companyUrl = item.companyUrl ?? '';
        const title = item.title ?? '';
        const summary = item.summary ?? '';
        const timeframe = item.timeframe ?? '';
        const location = item.location ?? '';
        const professors = item.professors ?? [];

        const isCurrent = item.current !== undefined ? item.current : idx === 0;

        return (
          <Item key={`${company}-${title}-${idx}`} aria-current={isCurrent ? 'true' : undefined}>
            <Dot aria-hidden="true" $current={isCurrent} />
            <HeaderRow>
              <Role>
                {companyUrl ? (
                  <a href={companyUrl} target="_blank" rel="noreferrer">
                    {company}
                  </a>
                ) : (
                  <strong>{company}</strong>
                )}
                {title ? (
                  <>
                    <Divider aria-hidden="true">{'/'}</Divider>
                    <Title>{title}</Title>
                  </>
                ) : null}
              </Role>
              {timeframe || location ? (
                <Meta>
                  {timeframe ? <span>{timeframe}</span> : null}
                  {timeframe && location ? <span>{' · '}</span> : null}
                  {location ? <span>{location}</span> : null}
                </Meta>
              ) : null}
            </HeaderRow>
            {Array.isArray(professors) && professors.length > 0 ? (
              <Mentors>
                {professors.map((p, pIdx) => (
                  <React.Fragment key={`${p.name ?? 'prof'}-${pIdx}`}>
                    {pIdx > 0 ? <span>{' & '}</span> : null}
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer">
                        {p.name}
                      </a>
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </React.Fragment>
                ))}
              </Mentors>
            ) : null}
            {summary ? <Summary>{summary}</Summary> : null}
          </Item>
        );
      })}
    </Wrapper>
  );
}

