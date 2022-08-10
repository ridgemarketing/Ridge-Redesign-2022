const tagList = [
    {
        tag: `[b]`,
        replace: '<span style="font-weight: 700;">'
    },
    {
        tag: `[/b]`,
        replace: `</span>`
    },
    {
        tag: `[temp]`,
        replace: '<span style="font-weight: 600; font-size: 26px;">'
    },
    {
        tag: `[/temp]`,
        replace: '</span>'
    },
    {
        tag: `[extra-slim]`,
        replace: '<span style="max-width: 976px; display:block;">'
    },
    {
        tag: `[/extra-slim]`,
        replace: '</span>'
    },
    {
        tag: `[green]`,
        replace: `<span class="text-rm-green font-semibold">`
    },
    {
        tag: `[/green]`,
        replace: `</span>`
    },
    {
        tag: `[accent]`,
        replace: `<span>`
    },
    {
        tag: `[/accent]`,
        replace: `</span>`
    }
];

const Parser = string => {
    let output = string;
    output = output.replace(/\s*<script>.*?<\/script>\s*/g, ' ');
    tagList.map(data => {
        output = output.replaceAll(data.tag, data.replace);
    });
    return output;
}

export default Parser;