const tagList = [
    {
        tag: `[b]`,
        replace: `<span class="font-bold">`
    },
    {
        tag: `[/b]`,
        replace: `</span>`
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
        output = output.replace(data.tag, data.replace);
    });
    return output;
}

export default Parser;