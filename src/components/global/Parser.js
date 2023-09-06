import { theme } from "../../static/theme";

const tagList = [
    {
        tag: `[b]`,
        replace: '<span style="font-weight: 700;">'
    },
    {
        tag: `[temp]`,
        replace: '<span style="font-weight: 600; font-size: 26px;">'
    },
    {
        tag: `[extra-slim]`,
        replace: '<span style="max-width: 976px; display:block;">'
    },
    {
        tag: `[green]`,
        replace: `<span class="text-rm-green font-semibold">`
    },
    {
        tag: `[accent]`,
        replace: `<span class="accent-text">`
    },
    {
        tag: `[secondary]`,
        replace: `<span class="secondary-text">`
    },
    {
        tag: `[white]`,
        replace: `<span class="text-white">`
    }, 
    {
        tag: `[br]`,
        replace:`<br>`
    }, 
    {
        tag: `[i]`,
        replace: `<span style="font-style:italic;">`
    }, 
    {
        tag:`[h2]`,
        replace:`<span style="display:block;" class="${theme.text.H2}">`
    },
    {
        tag:`[h4]`,
        replace:`<span style="display:block;" class="${theme.text.H4} mb-6 !normal-case">`
    },
    {
        tag:`[h5]`,
        replace:`<span style="display:block;" class="${theme.text.H5}">`
    }
];

const tagListBlog = [
    {
        tag:`<hr class="`,
        replace:`<hr class="mt-10 `
    }, 
    {
        tag:`<br>`,
        replace:` `,
    },
    {
        tag:`[sup]`,
        replace:`<sup>`
    }
    ,
    {
        tag:`[/sup]`,
        replace:`</sup>`
    }
];

const Parser = (string, type = null) => {
    let output = string || "";
    output = output.replace(/\s*<script>.*?<\/script>\s*/g, ' ');
    if(type === 'blog'){
        output =  output.split('\n').filter(n => n);
        output = output.join("");
        tagListBlog.map(data =>(
            output = output.replaceAll(data.tag, data.replace)
        ))
    }else{      
        output = output.replace(/(\[\/\w+-*\w*\])/g, '</span>'); // replaces any closing tag: `[/ + (any amount of letters) + ]` with </span>
        tagList.map(data => (
            output = output.replaceAll(data.tag, data.replace)
        ));
    }
    return output;
}

export default Parser;