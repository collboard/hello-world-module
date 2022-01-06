import { declareModule, ExtraJsxPlace, makeExtrajsxModule, randomEmoji } from '@collboard/modules-sdk';
import * as React from 'react';
import styled from 'styled-components';
import helloWorldButton from '../assets/hello-world-button.png';
import helloWorldIcon from '../assets/hello-world-icon.png';
import { contributors, description, license, repository, version } from '../package.json';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: '@collboard/module-sample-basic',
            version,
            description,
            contributors,
            license,
            repository,
            title: { en: 'Sample button' },
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: helloWorldIcon,
            flags: {
                isTemplate: true,
            },
        },
        place: ExtraJsxPlace.EdgeRight,
        async createExtraJsx(systems) {
            const { notificationSystem } = await systems.request('notificationSystem');
            return (
                <ButtonElement
                    onClick={async () => {
                        notificationSystem.publish({
                            type: 'info',
                            tag: `hello-world-${Date.now()}`,
                            title: 'Hello world!',
                            subtitle: `Hello from Collboard modules!`,
                            body: `Sending the ${randomEmoji()} from a module!`,
                            canBeClosed: true,
                        });
                    }}
                    className="button button-primary button-vertical"
                >
                    <img alt="Hello World!" src={helloWorldButton} />
                </ButtonElement>
            );
        },
    }),
);

const ButtonElement = styled.button`
    background-color: #906090;

    img {
        display: block;
        width: 50px;
    }
`;
