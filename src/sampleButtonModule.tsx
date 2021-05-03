import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'SampleButton',
            title: { en: 'Button "Create your own copy"', cs: 'Tlačítko „Vytvořit vlastní kopii“' },
            description: {
                en: '', // TODO:
                cs:
                    'Můžete tabuli sdílet bezpečně pomocí odkazu pro zobrazení a ostatní si mohou vytvořit její kopii a tu editovat.', // TODO: Better text
            },
            keywords: [],
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: '/assets/icons/copy-material.svg',
            screenshots: [
                /*TODO:*/
            ],
            //author: 'Test !!!',
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
                        alert(`TODO:!!!!!!!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    Test
                </button>
            );
        },
    }),
);
