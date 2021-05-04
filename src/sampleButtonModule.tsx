import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'SampleButton',
            title: { en: 'Hello World Button"', cs: 'Hello World Tlačítko' },
            description: {
                en: 'Button exported from the SampleButtonModule',
                cs: 'Tlačítko exportované ze SampleButtonModule',
            },
            keywords: [],
            categories: ['Buttons'],
            icon: '/assets/icons/copy-material.svg', // TODO: module scoped assets
            screenshots: [ ], // TODO: module scoped assets
            author: {
                name: 'Collboard Developers',
                email: 'dev@collboard.com',
                url: 'http://collboard.com/',
            },
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx({
            routingSystem,
            translationsSystem,
            apiClient,
            materialArtVersioningSystem: { cornerstoneArts },
        }) {
            return (
                <button
                    onClick={async () => {
                        alert(`Hello from Collboard modules!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    <span>Hello World!</span>
                </button>
            );
        },
    }),
);
