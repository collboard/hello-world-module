import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';
import { StyledIcon } from './StyledIcon';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: '@collboard/module-sample-basic',
            title: { en: 'Sample button' },
            categories: ['Productivity', 'Buttons', 'Template'],
            // TODO: !! Publishing assets: icon: '/assets/icons/copy-material.svg',
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx() {
            return (
                <button
                    onClick={async () => {
                        alert(`Hello from Collboard modules!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    <span>Hello World! </span>
                    <StyledIcon />
                </button>
            );
        },
    }),
);
