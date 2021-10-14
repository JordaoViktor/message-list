import React, {memo} from 'react';

import { formattedDate } from '@utils/Time';
import { MessageDTO } from '@services/types/dtos';

import { 
  SwiperCard,
  DateWrapper,
  DateText,
  SubjectText
} from './styles';

export const MainCard = (data: MessageDTO) => (
    <SwiperCard bgColor={data.item.read}>
      <DateWrapper>
        <DateText>{formattedDate(data?.item.timestamp)}</DateText>
      </DateWrapper>

      <SubjectText>{data?.item.subject}</SubjectText>
    </SwiperCard>
)


export const Card = memo(MainCard, (prevState, nextState) => {
  return Object.is(prevState, nextState);
});