import React from 'react';
import { BoxMedia, DiskCover, TypeTitle } from '../style';
import { Typography } from '../../ui';
import spotifyEmpty from '../../../assets/spotify_empty.jpg';

const Media = ({ data, title, type, onSelectMedia }) => (
  <>
    {data && (
      <>
        <TypeTitle>
          <Typography margin="20px 0" size={16} weight="600" lineheight="20" color="greyLight">
            {title}
          </Typography>
        </TypeTitle>
        {data.items.map(item => {
          const image = type === 'track' ? item.album.images : item.images;
          const srcImage = (image.length && image[0].url) || spotifyEmpty;
          return (
            <BoxMedia key={item.id}>
              <DiskCover onClick={() => onSelectMedia({ data: item, type, image: srcImage })}>
                <img src={srcImage} alt="img" />
              </DiskCover>
              <Typography
                margin="5px 0"
                size={13}
                weight="600"
                lineheight="16"
                color="white"
                textalign="center"
              >
                {item.name}
              </Typography>
              {item.artists && (
                <Typography
                  size={12}
                  weight="600"
                  lineheight="16"
                  color="greyMedium"
                  textalign="center"
                >
                  {item.artists[0].name}
                </Typography>
              )}
            </BoxMedia>
          );
        })}
      </>
    )}
  </>
);

export default Media;
