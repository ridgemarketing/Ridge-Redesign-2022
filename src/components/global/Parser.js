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
        tag: '[white]',
        replace: `<span class="text-white">`
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
        replace:`<img class="mt-10 w-full max-w-[850px] ml-auto mr-auto"`
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
    },
    {
        tag:`<h6>`, //intro text 
        replace:`<span class="font-basic-sans text-[1.625rem] leading-[1.875rem] font-bold">`,
    }, 
    {
        tag:`</h6>`,
        replace:`</span>`,
    },
    {   //wordpress editor 50/50 columns
        tag:`wp-block-columns`,
        replace:`block md:flex justify-between`,
    },
    {
        tag:`wp-block-column`,
        replace:`w-full md:w-[48%]`
    },
    {
        tag:`<blockquote class="wp-block-quote"><p`,
        replace:`<blockquote class="wp-block-quote"><p class=" text-rm-green text-[1.875rem] leading-[2rem] italic font-basic-sans font-normal mt-10"`
    },
    {
        tag:`<figcaption>`,
        replace:`<figcaption class="text-center">`
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
        output = output.replace(/(\[\/\w+\])/g, ''); // replaces any closing tag: `[/ + (any amount of letters) + ]` with </span>
        tagList.map(data => (
            output = output.replaceAll(data.tag, data.replace)
        ));
    }
    return output;
}

export default Parser;