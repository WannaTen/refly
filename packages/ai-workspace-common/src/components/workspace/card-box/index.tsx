import { ReactNode } from "react";

import { Resource, Note, Collection } from '@refly/openapi-schema';
import './index.scss';


interface CardBoxBaseProps {
  type: string;
  cardData: Resource | Note | Collection;
  cardIcon?: ReactNode;
  children?: ReactNode;
  onClick: () => void;
};

const contentKey = {
  resource: 'contentPreview',
  note: 'content',
  knowledge: 'description'
}

export const CardBox = (props: CardBoxBaseProps) => {
  const handleClickLink = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const { cardData, children, onClick } = props;
  return (
    <div
      className="p-4 m-3 border rounded-lg card-box border-black/8 hover:bg-gray-500/10"
      onClick={() => onClick()}  
    >
      {
        (props.type === 'resource') && <div className="card-img rounded-lg bg-emerald-200"></div>
      }

      <div className="h-40 overflow-hidden">
        <div className="flex mt-3 mb-1 resource-url">
          <div className="flex items-center justify-center border rounded-lg card-icon-box shrink-0 border-black/8">
            {props.cardIcon}
          </div>
          {
            props.type === 'resource' ? (
              <a
                className="ml-2 resource-url-text hover:text-blue-600"
                href="#"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickLink(cardData?.data?.url);
                }}
              >
                {cardData?.data?.url}
              </a>
            ) : (
              <div className="note-title flex items-center text-sm text-black/80 font-medium h-10">{cardData?.title}</div>
            )
          }
        </div>
        {
          (props.type === 'resource') &&
          <div className="text-sm text-black/80 font-medium mb-1.5">
            {cardData?.title}
          </div>
        }
        <div className="text-xs text-black/50">{cardData?.[contentKey[props.type]]}</div>
      </div>

      {children}
    </div>
  );
};
