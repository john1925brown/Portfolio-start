import { Icon } from '../icon/Icon';

import React from 'react';
import { S } from './AccountsGroup_Styles';

type TypeImage = {
  iconId: string;
  width: number;
  height: number;
  path?: string | '#';
};

export const AccountsGroup: React.FC<{ svgGroup: Array<TypeImage> }> = (props: {
  svgGroup: Array<TypeImage>;
}) => {
  return (
    <S.AccountsGroup>
      {props.svgGroup.map((image, index) => {
        return (
          <a href={image.path} target="__blank" key={index}>
            <Icon
              iconId={image.iconId}
              width={image.width}
              height={image.height}
            />
          </a>
        );
      })}
    </S.AccountsGroup>
  );
};
