import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';
import styled from 'styled-components';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: '@collboard/module-sample-basic',
            title: { en: 'Sample button' },
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: '/assets/logo.svg',
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx() {
            return (
                <ButtonElement
                    onClick={async () => {
                        alert(`Hello from Collboard modules!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    <img src="/assets/logo" />
                    <span>Hello World! </span>
                </ButtonElement>
            );
        },
    }),
);

const ButtonElement = styled.button`
    background-color: #906090;

    img {
        width: 20px;
        height: 20px;
    }
`;
