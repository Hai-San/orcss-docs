module.exports = {
    base: '/',
    lang: 'pt-BR',
    title: 'ORCSS - O guia de CSS',
    description: 'ORCSS é um guia para deixar o CSS simples e escalável',
    themeConfig: {
        nav: [
            { text: 'Guia', link: '/guide/', activeMatch: '^/guide/' },
            {
                text: 'GitHub',
                link: 'https://github.com/Hai-San/orcss'
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar()
        }
    }
};

function getGuideSidebar() {
    return [
        {
            text: 'Introdução',
            children: [
                { text: 'Sobre o ORCSS', link: '/guide/' },
                {
                    text: 'Iniciando',
                    link: '/guide/starting/'
                }
            ]
        },
        {
            text: 'Categorização',
            children: [
                { text: 'Categorização', link: '/guide/categorization/' }
            ]
        },
        {
            text: 'Estruturação',
            children: [
                { text: 'Introdução', link: '/guide/structuring/' },
                { text: 'Tokens', link: '/guide/structuring/tokens' },
                { text: 'Tools', link: '/guide/structuring/tools' },
                { text: 'Utils', link: '/guide/structuring/utils' }
            ]
        },
        {
            text: 'Escrita',
            children: [
                { text: 'Escrita', link: '/guide/writing/' }
            ]
        },
        {
            text: 'Configurações',
            link: '/guide/settings/',
            children: [
                { text: 'Stylelint', link: '/guide/settings/stylelint' },
                { text: 'Stylelint Vue.js', link: '/guide/settings/stylelint-vue' }
            ]
        }
    ];
}