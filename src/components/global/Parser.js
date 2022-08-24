import { theme } from "../../static/theme";

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
        replace: `<span class="accent-text">`
    },
    {
        tag: `[/accent]`,
        replace: `</span>`
    }
];

const tagListBlog = [
    {
        tag: `<p>`,
        replace: `<p class="${theme.text.P_STD} mt-10">`
    },
    {
        tag:`<h2>`,
        replace:`<h2 class="${theme.text.H5} mt-10">`
    },
    {
        tag:`<img`,
        replace:`<img class="mt-10 w-full"`
    },
    {
        tag:`<hr class="`,
        replace:`<hr class="mt-10 `
    }, 
    {
        tag:`<ul>`,
        replace:`<ul> <style>main li{margin-top:1.25rem;}</style>`,
    },
    {
        tag:`<a`,
        replace:`<a class="underline"`
    }, 
    {
        tag:`<br>`,
        replace:` `,
    }, 
    {
        tag:`<h3>`,
        replace:`<h3 class="${theme.text.H4} mt-10">`
    }
];

const Parser = (string, type) => {
    let output = string;
    output = output.replace(/\s*<script>.*?<\/script>\s*/g, ' ');
    if(type === 'blog'){
        output =  output.split('\n').filter(n => n);
        output = output.join("");
        tagListBlog.map(data =>(
            output = output.replaceAll(data.tag, data.replace)
        ))
    }else{        
        tagList.map(data => (
            output = output.replaceAll(data.tag, data.replace)
        ));
    }
    return output;
}

export default Parser;