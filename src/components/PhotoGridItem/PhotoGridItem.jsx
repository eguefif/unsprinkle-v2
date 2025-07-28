import React from 'react';
import styled from 'styled-components';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrc = src.replace('.jpg', '.avif');
  const avifX2 = avifSrc.replace('.avif', '@2x.avif');
  const avifX3 = avifSrc.replace('.avif', '@3x.avif');
  const jpgSrc = src
  const jpgX2 = jpgSrc.replace('.jpg', '@2x.jpg');
  const jpgX3 = jpgSrc.replace('.jpg', '@3x.jpg');
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
                    ${jpgSrc} 1x,
                    ${jpgX2} 2x,
                    ${jpgX3} 3x,
                    `
                    }
            />
          <source
            type="image/jpg"
            srcSet={`
                    ${avifSrc} 1x,
                    ${avifX2} 2x,
                    ${avifX3} 3x,
                    `
            }
            />
            <Image
            alt={alt}
            src={jpgSrc}
            />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: inline;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipis;
  max-width: 250px;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin-left:not(:first-of-type): 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
