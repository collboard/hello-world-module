import { declareModule } from '@collboard/modules-sdk';

declareModule(() => {
    console.log(`Declare of external module`);
    return {
        manifest: {
            version: 'TODO: !!!',
            name: 'aaa',
        },
        setup: ({ shortcutsSystem }) => {
            // TODO: !!! Importing here Registration and other tools/utils
            // TODO: !!! Using here React

            console.log(`Setup of external module`);

            console.log(shortcutsSystem.registerShortcut);

            return shortcutsSystem.registerShortcut({
                shortcut: [/*'Control', */ 'q'],
                executor: () => {
                    alert(`Hello Collboard modules SDK`);
                },
            });
        },
    };
});
